<#
.SYNOPSIS
Sanitize generated staging text files for tooling compatibility.

.DESCRIPTION
Cleans generated artifacts in `staging` that may still contain legacy
emoji/shortcode output, stale copied text, or placeholder property
descriptions after source fixes. This is useful when a rebuild has not yet
regenerated node HTML, `llms` files, or `search.json`.

.USAGE
Run from the repo root:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sanitize-staging-text.ps1

Notes:
  - Safe to rerun.
  - Intended as a post-build cleanup for generated node HTML, `llms*.txt`,
    markdown mirrors, and `search.json`.
#>

param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$stagingRoot = Join-Path $RepoRoot "staging"

if (-not (Test-Path $stagingRoot)) {
    throw "Staging folder not found: $stagingRoot"
}

function Clean-StagingText {
    param(
        [AllowNull()]
        [string]$Text
    )

    if ($null -eq $Text) {
        return $null
    }

    $Text = $Text.Replace(
        "Please make sure you have read the [.](./)page.",
        "Please make sure you have read the Install Gaea page."
    )
    $Text = $Text.Replace(
        "Download a fresh installer from the [QuadSpinner Website](https://quadspinner.com/download/) and [.](./).",
        "Download a fresh installer from the [QuadSpinner Website](https://quadspinner.com/download/) and reinstall Gaea."
    )
    $Text = $Text.Replace(
        'You can disable `_Out` suffix for the Primary Port in [.](./).',
        'You can disable `_Out` suffix for the Primary Port in the Build section.'
    )
    $Text = $Text.Replace(
        'Use SlopeBlur when you want an existing terrain to SlopeBlur is a versatile, low-level node that adds directional blurring based on the slopes of a Guide terrain or mask. It is one of our deceptively simple nodes that can create a wide array of shapes without rebuilding the larger form.',
        'Use SlopeBlur when you want to directionally soften, smear, or break up an existing terrain using the slope information from a guide terrain or mask.'
    )

    $Text = $Text.Replace("Lorem ipsum", "")
    $Text = $Text.Replace("<desc>", "")
    $Text = $Text.Replace(":shield:", "")
    $Text = [regex]::Replace($Text, '<span class="choice-description">\s*</span>', "")
    $Text = [regex]::Replace($Text, "[\uD800-\uDBFF][\uDC00-\uDFFF]\uFE0F?", "")
    $Text = [regex]::Replace($Text, "[\uD800-\uDFFF\uFE0F]", "")
    $Text = [regex]::Replace($Text, " {2,}", " ")

    return $Text
}

$targets = New-Object System.Collections.Generic.List[string]

function Add-Target {
    param(
        [string]$Path
    )

    if ([string]::IsNullOrWhiteSpace($Path)) {
        return
    }

    if ((Test-Path $Path) -and (-not $targets.Contains($Path))) {
        $targets.Add($Path)
    }
}

$searchIndex = Join-Path $stagingRoot "search.json"
Add-Target $searchIndex

$llmsFull = Join-Path $stagingRoot "llms-full.txt"
Add-Target $llmsFull

Get-ChildItem -Path $stagingRoot -Recurse -File -Filter "llms.txt" | ForEach-Object {
    Add-Target $_.FullName
}

$nodeReferenceRoot = Join-Path $stagingRoot "reference\nodes"
if (Test-Path $nodeReferenceRoot) {
    Get-ChildItem -Path $nodeReferenceRoot -Recurse -File -Filter "*.html" | ForEach-Object {
        Add-Target $_.FullName
    }

    Get-ChildItem -Path $nodeReferenceRoot -Recurse -File -Filter "*.md" | ForEach-Object {
        Add-Target $_.FullName
    }
}

$updated = 0

foreach ($path in $targets) {
    $original = [System.IO.File]::ReadAllText($path)
    $cleaned = Clean-StagingText $original

    if ($cleaned -ne $original) {
        [System.IO.File]::WriteAllText($path, $cleaned, $utf8NoBom)
        $updated++
        Write-Host "Sanitized: $path"
    }
}

Write-Host "Sanitized $updated file(s)."
