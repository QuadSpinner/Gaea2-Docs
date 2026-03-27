<#
.SYNOPSIS
Sanitize generated staging text files for tooling compatibility.

.DESCRIPTION
Cleans generated text artifacts in `staging` that may still contain legacy
emoji/shortcode output or broken placeholder link text after source fixes.
This is useful when a rebuild has not yet regenerated `llms` files or
`search.json`, and downstream tools need plain text only.

.USAGE
Run from the repo root:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\sanitize-staging-text.ps1

Notes:
  - Safe to rerun.
  - Intended as a post-build cleanup for generated `llms*.txt` files and `search.json`.
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

    $Text = $Text.Replace(":shield:", "")
    $Text = [regex]::Replace($Text, "[\uD800-\uDBFF][\uDC00-\uDFFF]\uFE0F?", "")
    $Text = [regex]::Replace($Text, "[\uD800-\uDFFF\uFE0F]", "")
    $Text = [regex]::Replace($Text, " {2,}", " ")

    return $Text
}

$targets = New-Object System.Collections.Generic.List[string]

$searchIndex = Join-Path $stagingRoot "search.json"
if (Test-Path $searchIndex) {
    $targets.Add($searchIndex)
}

$llmsFull = Join-Path $stagingRoot "llms-full.txt"
if (Test-Path $llmsFull) {
    $targets.Add($llmsFull)
}

Get-ChildItem -Path $stagingRoot -Recurse -File -Filter "llms.txt" | ForEach-Object {
    $targets.Add($_.FullName)
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
