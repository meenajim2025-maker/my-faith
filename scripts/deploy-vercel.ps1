# Deploy My Faith frontend to Vercel (non-interactive).
#
# Token (pick one):
#   A) Create my-faith\.env.vercel with a single line (file is gitignored):
#        VERCEL_TOKEN=your_token_here
#   B) Or in PowerShell: $env:VERCEL_TOKEN = "your_token_here"
#
# Token: https://vercel.com/account/tokens
# Then run: .\scripts\deploy-vercel.ps1

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$envFile = Join-Path $root ".env.vercel"
if (Test-Path $envFile) {
  foreach ($line in Get-Content $envFile) {
    if ($line -match '^\s*VERCEL_TOKEN\s*=\s*(.+)\s*$') {
      $val = $matches[1].Trim().Trim('"').Trim("'")
      if ($val.Length -gt 0) {
        $env:VERCEL_TOKEN = $val
      }
    }
  }
}

if (-not $env:VERCEL_TOKEN -or $env:VERCEL_TOKEN.Length -lt 10) {
  Write-Host "Missing VERCEL_TOKEN. Add my-faith\.env.vercel (see script header) or set `$env:VERCEL_TOKEN." -ForegroundColor Yellow
  exit 1
}

vercel deploy --prod --yes --token $env:VERCEL_TOKEN
