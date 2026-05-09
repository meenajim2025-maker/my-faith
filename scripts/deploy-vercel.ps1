# Deploy My Faith frontend to Vercel (non-interactive).
# 1. Create a token: https://vercel.com/account/tokens
# 2. In PowerShell (this session only — safer than saving to disk):
#    $env:VERCEL_TOKEN = "your_token_here"
# 3. Run: .\scripts\deploy-vercel.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if (-not $env:VERCEL_TOKEN -or $env:VERCEL_TOKEN.Length -lt 10) {
  Write-Host "Set VERCEL_TOKEN first. Create one at https://vercel.com/account/tokens" -ForegroundColor Yellow
  exit 1
}

vercel deploy --prod --yes --token $env:VERCEL_TOKEN
