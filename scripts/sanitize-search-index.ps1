<#
.SYNOPSIS
Sanitize the generated staging search index.

.DESCRIPTION
Removes HTML comments and tags from searchable text fields in `staging/search.json`
so the docs search preview does not show raw markup such as `<!-- comments -->`
or `<iframe>` tags.

.USAGE
Run from the repo root:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sanitize-search-index.ps1

Notes:
  - Safe to rerun.
  - Intended as a post-build cleanup if `staging/search.json` is regenerated.
#>

param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

$searchIndexPath = Join-Path $RepoRoot "staging\search.json"

if (-not (Test-Path $searchIndexPath)) {
    throw "Search index not found: $searchIndexPath"
}

function Clean-SearchText {
    param(
        [AllowNull()]
        [object]$Value
    )

    if ($null -eq $Value) {
        return $null
    }

    $text = [string]$Value
    $text = [regex]::Replace($text, "<!--[\s\S]*?-->", " ")
    $text = [regex]::Replace($text, "<[^>]+>", " ")
    $text = [regex]::Replace($text, "[\uD800-\uDFFF\uFE0F]", " ")
    $text = [System.Net.WebUtility]::HtmlDecode($text)
    $text = [regex]::Replace($text, "\s+", " ").Trim()
    return $text
}

function Remove-LegacyUnsafeChars {
    param(
        [AllowNull()]
        [string]$Text
    )

    if ($null -eq $Text) {
        return $null
    }

    $Text = [regex]::Replace($Text, "[\uD800-\uDBFF][\uDC00-\uDFFF]\uFE0F?", " ")
    $Text = [regex]::Replace($Text, "[\uD800-\uDFFF\uFE0F]", " ")
    return [regex]::Replace($Text, "\s+", " ").Trim()
}

$raw = Get-Content -Raw -Path $searchIndexPath
$pages = $raw | ConvertFrom-Json

foreach ($page in $pages) {
    if ($null -ne $page.title) { $page.title = Clean-SearchText $page.title }
    if ($null -ne $page.hive) { $page.hive = Clean-SearchText $page.hive }
    if ($null -ne $page.text) { $page.text = Clean-SearchText $page.text }

    if ($page.headings) {
        foreach ($heading in $page.headings) {
            if ($null -ne $heading.text) { $heading.text = Clean-SearchText $heading.text }
            if ($null -ne $heading.ctx) { $heading.ctx = Clean-SearchText $heading.ctx }
        }
    }
}

$json = $pages | ConvertTo-Json -Depth 100 -Compress
$json = Remove-LegacyUnsafeChars $json
Set-Content -Path $searchIndexPath -Value $json -NoNewline

Write-Host "Sanitized search index: $searchIndexPath"
