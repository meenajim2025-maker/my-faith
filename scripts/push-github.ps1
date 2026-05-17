# Create a public GitHub repo and push My Faith (run after: gh auth login)
$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "GitHub CLI is not signed in yet." -ForegroundColor Yellow
  Write-Host "Run:  gh auth login" -ForegroundColor Cyan
  Write-Host "Choose GitHub.com, HTTPS, then sign in with your browser." -ForegroundColor Gray
  exit 1
}

$repoName = "my-faith"
if (git remote get-url origin 2>$null) {
  Write-Host "Remote 'origin' already exists. Pushing..." -ForegroundColor Green
  git push -u origin master
  if ($LASTEXITCODE -ne 0) { git push -u origin main }
  gh repo view --web
  exit 0
}

Write-Host "Creating public repo: $repoName ..." -ForegroundColor Green
gh repo create $repoName --public --source=. --remote=origin --push --description "Gentle spirituality and wellbeing PWA — story paths, reflection, prayer."
if ($LASTEXITCODE -ne 0) {
  Write-Host "Trying my-faith-app (name may be taken)..." -ForegroundColor Yellow
  gh repo create my-faith-app --public --source=. --remote=origin --push --description "Gentle spirituality and wellbeing PWA — story paths, reflection, prayer."
}

if ($LASTEXITCODE -eq 0) {
  gh repo view --web
  Write-Host "Done. Your code is on GitHub (public)." -ForegroundColor Green
}
