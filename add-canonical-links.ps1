# PowerShell script to add canonical links to HTML pages
# Each page should have a canonical link in the format: https://superearns.com/{directory}/{directory}.html

$rootPath = "d:\VS\Superearns"

$directories = @(
    "affiliate-marketing",
    "ai-side-hustles-without-coding",
    "ai-tools",
    "best-faceless-youtube-channel-ideas",
    "best-freelancing-skills-2026",
    "best-online-side-hustles-2026",
    "chatgpt-earn",
    "crypto-earning",
    "customer-service-jobs-from-home",
    "data-entry-jobs-from-home-immediate-start",
    "digital-marketing-jobs-from-home",
    "dropshipping-in-pakistan",
    "earn-money-by-watching-ads",
    "earn-money-online-free-no-investment",
    "earn-money-online-pakistan",
    "etsy-seller-success-pakistan",
    "free-ai-video-creation-tools",
    "freelance-jobs-for-beginners-no-portfolio",
    "free-money-cash-app-paypal-jazzcash",
    "free-money-online-instantly",
    "get-paid-to-play-games",
    "google-adsense-high-cpc-tips",
    "graphic-design-jobs-from-home",
    "grow-youtube-channel-from-zero",
    "instagram-reels-viral-strategy",
    "is-cryptocurrency-safe-for-beginners",
    "make-money-online-fast",
    "online-business",
    "online-earning-for-students-pakistan",
    "online-jobs-for-teens",
    "online-tutoring-jobs",
    "part-time-evening-jobs-from-home",
    "passive-income",
    "proofreading-jobs-from-home",
    "remote-jobs-hiring-immediately-no-experience",
    "remote-sales-jobs-from-home",
    "resume-writing-side-hustle",
    "sell-photos-online",
    "social-media-jobs-from-home",
    "survey-sites",
    "tiktok-growth-strategies-2026",
    "translation-jobs-from-home",
    "urgent-typing-jobs-from-home",
    "virtual-assistant-jobs-for-beginners",
    "voice-over-jobs-from-home",
    "weekend-side-jobs-online",
    "work-from-home-career-online",
    "writing-jobs-from-home",
    "youtube-monetization-guide-2026"
)

$summary = @{
    Updated = 0
    Skipped = 0
    AlreadyHasCanonical = 0
    FileNotFound = 0
}

$details = @()

foreach ($dir in $directories) {
    $dirPath = Join-Path -Path $rootPath -ChildPath $dir
    $htmlFile = Join-Path -Path $dirPath -ChildPath "$dir.html"
    
    if (-not (Test-Path -Path $htmlFile)) {
        $summary.FileNotFound++
        $details += "❌ NOT FOUND: $htmlFile"
        continue
    }
    
    # Read the file content
    $content = Get-Content -Path $htmlFile -Raw -Encoding UTF8
    
    # Check if canonical link already exists
    if ($content -match '<link\s+rel="canonical"') {
        $summary.AlreadyHasCanonical++
        $details += "⏭️  SKIP (canonical exists): $dir"
        continue
    }
    
    # Find the meta description line and insert canonical after it
    # Pattern: <meta name="description" content="...">
    $metaDescriptionPattern = '(<meta\s+name="description"\s+content="[^"]*"\s*>)'
    
    if ($content -match $metaDescriptionPattern) {
        $canonicalLink = "`n    <link rel=""canonical"" href=""https://superearns.com/$dir/$dir.html"">"
        $newContent = $content -replace $metaDescriptionPattern, "`$1$canonicalLink"
        
        # Write the updated content back
        Set-Content -Path $htmlFile -Value $newContent -Encoding UTF8
        $summary.Updated++
        $details += "✅ UPDATED: $dir"
    } else {
        $summary.Skipped++
        $details += "⚠️  SKIP (no meta description found): $dir"
    }
}

# Display results
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "CANONICAL LINK INSERTION SUMMARY" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Pages Updated:           $($summary.Updated)" -ForegroundColor Green
Write-Host "⏭️  Already Has Canonical:   $($summary.AlreadyHasCanonical)" -ForegroundColor Yellow
Write-Host "⚠️  Skipped (no meta desc):  $($summary.Skipped)" -ForegroundColor Yellow
Write-Host "❌ Files Not Found:         $($summary.FileNotFound)" -ForegroundColor Red
Write-Host ""
Write-Host "TOTAL DIRECTORIES PROCESSED: $($directories.Count)" -ForegroundColor Cyan
Write-Host ""

if ($details.Count -gt 0) {
    Write-Host "DETAILED RESULTS:" -ForegroundColor Cyan
    Write-Host "=================" -ForegroundColor Cyan
    foreach ($detail in $details) {
        Write-Host $detail
    }
}

Write-Host ""
Write-Host "Script completed!" -ForegroundColor Cyan
