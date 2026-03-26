<#
.SYNOPSIS
Sync official node video links into matching node reference source pages.

.DESCRIPTION
Scans `source/videos/official/nodes/yt-*.md`, matches each file to
`source/reference/nodes/**/<slug>.md`, and inserts or updates a managed
`Official Video` section in the matching reference page.

.USAGE
Run from the repo root:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sync-node-video-links.ps1

What it does:
  - `yt-ao.md` links into `reference/nodes/**/ao.md`
  - `yt-erosion2.md` links into `reference/nodes/**/erosion2.md`
  - Safe to rerun; managed blocks are updated in place
#>


param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

$sourceRoot = Join-Path $RepoRoot "source"
$videoRoot = Join-Path $sourceRoot "videos\official\nodes"
$referenceRoot = Join-Path $sourceRoot "reference\nodes"

if (-not (Test-Path $videoRoot)) {
    throw "Video source folder not found: $videoRoot"
}

if (-not (Test-Path $referenceRoot)) {
    throw "Reference source folder not found: $referenceRoot"
}

$managedStart = "<!-- AUTO-VIDEO-LINK:START -->"
$managedEnd = "<!-- AUTO-VIDEO-LINK:END -->"

function Get-FrontMatterValue {
    param(
        [string]$Content,
        [string]$Key
    )

    $pattern = "(?ms)\A---\r?\n.*?^" + [regex]::Escape($Key) + ":\s*(.+?)\r?$"
    $match = [regex]::Match($Content, $pattern)
    if ($match.Success) {
        return $match.Groups[1].Value.Trim()
    }

    return $null
}

function New-ManagedBlock {
    param(
        [string]$Title,
        [string]$VideoUrl
    )

    return @(
        $managedStart,
        "## Official Video",
        "",
        "For a video breakdown of this node, see [the official $Title video]($VideoUrl).",
        $managedEnd
    ) -join "`r`n"
}

function Set-ManagedBlock {
    param(
        [string]$Content,
        [string]$Block
    )

    $existingPattern = "(?ms)\r?\n*" + [regex]::Escape($managedStart) + ".*?" + [regex]::Escape($managedEnd) + "\r?\n*"
    $contentWithoutBlock = [regex]::Replace($Content, $existingPattern, "`r`n`r`n", 1)

    $frontMatterMatch = [regex]::Match($contentWithoutBlock, "(?ms)\A(---\r?\n.*?\r?\n---)")
    if ($frontMatterMatch.Success) {
        $frontMatter = $frontMatterMatch.Groups[1].Value.TrimEnd()
        $body = $contentWithoutBlock.Substring($frontMatterMatch.Length).Trim()

        if ([string]::IsNullOrWhiteSpace($body)) {
            return "$frontMatter`r`n`r`n$Block`r`n"
        }

        return "$frontMatter`r`n`r`n$Block`r`n`r`n$body`r`n"
    }

    $trimmedContent = $contentWithoutBlock.Trim()
    if ([string]::IsNullOrWhiteSpace($trimmedContent)) {
        return "$Block`r`n"
    }

    return "$Block`r`n`r`n$trimmedContent`r`n"
}

$referenceBySlug = @{}
Get-ChildItem -Path $referenceRoot -Recurse -File -Filter "*.md" |
    Where-Object { $_.BaseName -ne "index" } |
    ForEach-Object {
        $slug = $_.BaseName.ToLowerInvariant()
        if ($referenceBySlug.ContainsKey($slug)) {
            throw "Duplicate reference node slug '$slug' found at '$($_.FullName)' and '$($referenceBySlug[$slug].FullName)'."
        }

        $referenceBySlug[$slug] = $_
    }

$updatedFiles = New-Object System.Collections.Generic.List[string]
$skippedFiles = New-Object System.Collections.Generic.List[string]

Get-ChildItem -Path $videoRoot -File -Filter "yt-*.md" | ForEach-Object {
    $videoFile = $_
    $slug = $videoFile.BaseName.Substring(3).ToLowerInvariant()

    if (-not $referenceBySlug.ContainsKey($slug)) {
        $skippedFiles.Add($videoFile.FullName)
        return
    }

    $referenceFile = $referenceBySlug[$slug]
    $videoContent = Get-Content -Raw -Path $videoFile.FullName
    $referenceContent = Get-Content -Raw -Path $referenceFile.FullName

    $title = Get-FrontMatterValue -Content $videoContent -Key "title"
    if ([string]::IsNullOrWhiteSpace($title)) {
        $title = $slug.ToUpperInvariant()
    }

    $relativeVideoPath = $videoFile.FullName.Substring($sourceRoot.Length).TrimStart('\') -replace '\\', '/'
    $videoUrl = "/" + [System.IO.Path]::ChangeExtension($relativeVideoPath, ".html")
    $block = New-ManagedBlock -Title $title -VideoUrl $videoUrl
    $updatedContent = Set-ManagedBlock -Content $referenceContent -Block $block

    if ($updatedContent -ne $referenceContent) {
        Set-Content -Path $referenceFile.FullName -Value $updatedContent -NoNewline
        $updatedFiles.Add($referenceFile.FullName)
    }
}

Write-Host "Updated $($updatedFiles.Count) reference file(s)."
foreach ($path in $updatedFiles) {
    Write-Host "  UPDATED $path"
}

if ($skippedFiles.Count -gt 0) {
    Write-Host "Skipped $($skippedFiles.Count) video file(s) with no matching reference node:"
    foreach ($path in $skippedFiles) {
        Write-Host "  SKIPPED $path"
    }
}
