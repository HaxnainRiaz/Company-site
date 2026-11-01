$urls = @(
    '/',
    '/about',
    '/services',
    '/services/ai-voice-chat-automation',
    '/services/websites-admin-dashboards',
    '/services/pos-retail-management',
    '/services/ecommerce-development',
    '/services/workflow-automation',
    '/services/mobile-app-development',
    '/services/seo-google-business-profile',
    '/services/social-media-marketing',
    '/solutions',
    '/solutions/clinics-appointments',
    '/solutions/ecommerce-brands',
    '/solutions/retail-pharmacy',
    '/solutions/service-businesses',
    '/demos',
    '/demos/admin-dashboard',
    '/demos/retail-pos',
    '/demos/ecommerce-store',
    '/demos/booking-flow',
    '/insights',
    '/insights/website-or-dashboard',
    '/insights/choosing-retail-pos',
    '/insights/first-workflow-to-automate',
    '/work',
    '/pricing',
    '/how-we-work',
    '/contact',
    '/book-a-call',
    '/privacy',
    '/terms',
    '/thank-you',
    '/robots.txt',
    '/sitemap.xml'
)

$pass = 0
$fail = 0

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri ("http://localhost:3000" + $url) -TimeoutSec 15 -UseBasicParsing -ErrorAction Stop
        $code = $response.StatusCode
        Write-Host "PASS $code $url"
        $pass++
    } catch {
        Write-Host "FAIL $url - $_"
        $fail++
    }
}

Write-Host ""
Write-Host "Results: $pass passed, $fail failed out of $($urls.Count) routes"
