const NAV_GROUPS = [
  {
    label: "Earning in Pakistan",
    links: [
      ["How to Earn Online in Pakistan", "earn-money-online-pakistan/earn-money-online-pakistan.html"],
      ["Free Ways Without Investment", "earn-money-online-free-no-investment/earn-money-online-free-no-investment.html"],
      ["Students Earning Guide", "online-earning-for-students-pakistan/online-earning-for-students-pakistan.html"],
      ["Affiliate Marketing Pakistan", "affiliate-marketing/affiliate-marketing.html"],
      ["Dropshipping Pakistan", "dropshipping-in-pakistan/dropshipping-in-pakistan.html"],
      ["Etsy from Pakistan", "etsy-seller-success-pakistan/etsy-seller-success-pakistan.html"],
      ["Earn Money Online Fast", "make-money-online-fast/make-money-online-fast.html"],
      ["Free Money Online - What's Fake", "free-money-online-instantly/free-money-online-instantly.html"],
      ["Free Money on JazzCash & PayPal", "free-money-cash-app-paypal-jazzcash/free-money-cash-app-paypal-jazzcash.html"]
    ]
  },
  {
    label: "Freelancing & Remote Work",
    links: [
      ["YouTube Monetization Guide", "youtube-monetization-guide-2026/youtube-monetization-guide-2026.html"],
      ["Freelancing First Client", "freelancing/freelancing.html"],
      ["Best Freelancing Skills 2026", "best-freelancing-skills-2026/best-freelancing-skills-2026.html"],
      ["Freelance Without Portfolio", "freelance-jobs-for-beginners-no-portfolio/freelance-jobs-for-beginners-no-portfolio.html"],
      ["Remote Jobs Hiring Now", "remote-jobs-hiring-immediately-no-experience/remote-jobs-hiring-immediately-no-experience.html"],
      ["Online Jobs for Teens", "online-jobs-for-teens/online-jobs-for-teens.html"],
      ["Typing Jobs from Home", "urgent-typing-jobs-from-home/urgent-typing-jobs-from-home.html"],
      ["Remote Sales Jobs", "remote-sales-jobs-from-home/remote-sales-jobs-from-home.html"],
      ["Virtual Assistant Guide", "virtual-assistant-jobs-for-beginners/virtual-assistant-jobs-for-beginners.html"],
      ["Graphic Design Jobs", "graphic-design-jobs-from-home/graphic-design-jobs-from-home.html"],
      ["Writing Jobs from Home", "writing-jobs-from-home/writing-jobs-from-home.html"],
      ["Data Entry Jobs", "data-entry-jobs-from-home-immediate-start/data-entry-jobs-from-home-immediate-start.html"],
      ["Translation Jobs", "translation-jobs-from-home/translation-jobs-from-home.html"],
      ["Proofreading Jobs", "proofreading-jobs-from-home/proofreading-jobs-from-home.html"],
      ["Voice Over Jobs", "voice-over-jobs-from-home/voice-over-jobs-from-home.html"],
      ["Online Tutoring Jobs", "online-tutoring-jobs/online-tutoring-jobs.html"],
      ["Customer Service Remote", "customer-service-jobs-from-home/customer-service-jobs-from-home.html"],
      ["Resume Writing Hustle", "resume-writing-side-hustle/resume-writing-side-hustle.html"]
    ]
  },
  {
    label: "AI Tools & Side Hustles",
    links: [
      ["Best Free AI Tools", "ai-tools/ai-tools.html"],
      ["Earn with ChatGPT", "chatgpt-earn/chatgpt-earn.html"],
      ["AI Video Tools", "free-ai-video-creation-tools/free-ai-video-creation-tools.html"],
      ["AI Side Hustles No Coding", "ai-side-hustles-without-coding/ai-side-hustles-without-coding.html"],
      ["Best Side Hustles 2026", "best-online-side-hustles-2026/best-online-side-hustles-2026.html"],
      ["Digital Marketing Jobs", "digital-marketing-jobs-from-home/digital-marketing-jobs-from-home.html"],
      ["Social Media Jobs", "social-media-jobs-from-home/social-media-jobs-from-home.html"],
      ["Sell Photos Online", "sell-photos-online/sell-photos-online.html"],
      ["Evening Part-Time Jobs", "part-time-evening-jobs-from-home/part-time-evening-jobs-from-home.html"],
      ["Weekend Side Jobs", "weekend-side-jobs-online/weekend-side-jobs-online.html"],
      ["Watch Ads for Money - Truth", "earn-money-by-watching-ads/earn-money-by-watching-ads.html"],
      ["Get Paid to Play Games", "get-paid-to-play-games/get-paid-to-play-games.html"]
    ]
  },
  {
    label: "Content Creation",
    links: [
      ["Grow YouTube from Zero", "grow-youtube-channel-from-zero/grow-youtube-channel-from-zero.html"],
      ["TikTok Growth 2026", "tiktok-growth-strategies-2026/tiktok-growth-strategies-2026.html"],
      ["Instagram Reels Viral", "instagram-reels-viral-strategy/instagram-reels-viral-strategy.html"],
      ["Faceless YouTube Niches", "best-faceless-youtube-channel-ideas/best-faceless-youtube-channel-ideas.html"],
      ["Google AdSense Secrets", "google-adsense-high-cpc-tips/google-adsense-high-cpc-tips.html"],
      ["Blogging to 6 Figures", "online-business/online-business.html"]
    ]
  },
  {
    label: "Crypto & Passive Income",
    links: [
      ["What is Crypto Staking", "crypto-earning/crypto-earning.html"],
      ["Binance Earn Explained", "survey-sites/survey-sites.html"],
      ["Passive Income in Crypto", "passive-income/passive-income.html"],
      ["Is Crypto Safe?", "is-cryptocurrency-safe-for-beginners/is-cryptocurrency-safe-for-beginners.html"]
    ]
  }
];

function getRelativeRootPath() {
  const pathname = decodeURIComponent(window.location.pathname || "");
  const segments = pathname.split("/").filter(Boolean);
  const projectIndex = segments.findIndex((part) => part.toLowerCase() === "superearns");
  if (projectIndex >= 0) {
    const depth = Math.max(0, segments.length - projectIndex - 2);
    return depth === 0 ? "." : "../".repeat(depth).replace(/\/$/, "");
  }
  const fallbackDepth = Math.max(0, segments.length - 1);
  return fallbackDepth === 0 ? "." : "../".repeat(fallbackDepth).replace(/\/$/, "");
}

function navbarSkeleton() {
  return `
<header class="site-navbar" role="banner">
  <div class="site-navbar-inner container">
    <a class="brand" id="brandLink" href="#" aria-label="Go to homepage">
      <img src="" alt="Superearns" class="brand-logo" id="brandLogo">
    </a>

    <button id="nav-toggle" class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav-panel" aria-label="Open navigation menu">
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
    </button>

    <nav class="desktop-nav" id="desktopNav" aria-label="Primary navigation"></nav>
  </div>

  <div id="nav-overlay" class="nav-overlay" hidden></div>
  <aside id="mobile-nav-panel" class="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">
    <nav class="mobile-nav-links" id="mobileNav"></nav>
  </aside>
</header>`;
}

function renderNavMenus(rootPath) {
  const desktop = document.getElementById("desktopNav");
  const mobile = document.getElementById("mobileNav");
  if (!desktop || !mobile) return;

  desktop.innerHTML = NAV_GROUPS.map((group) => {
    const links = group.links
      .map((link) => `<a class="nav-sub-link" href="${rootPath}/${link[1]}">${link[0]}</a>`)
      .join("");
    return `<details class="nav-group"><summary>${group.label}</summary><div class="nav-mega">${links}</div></details>`;
  }).join("") + `<a class="nav-start-btn" href="${rootPath}/earn-money-online-pakistan/earn-money-online-pakistan.html">Start Earning</a>`;

  mobile.innerHTML = `<a class="mobile-nav-link" href="${rootPath}/index.html">Home</a>` + NAV_GROUPS.map((group) => {
    const links = group.links
      .map((link) => `<a class="mobile-nav-link" href="${rootPath}/${link[1]}">${link[0]}</a>`)
      .join("");
    return `<details class="mobile-group"><summary>${group.label}</summary>${links}</details>`;
  }).join("");
}

function finalizeNavbar(rootPath) {
  const brandLink = document.getElementById("brandLink");
  const brandLogo = document.getElementById("brandLogo");
  if (brandLink) brandLink.href = `${rootPath}/index.html`;
  if (brandLogo) brandLogo.src = `${rootPath}/assets/images/logo.png`;

  renderNavMenus(rootPath);
  if (typeof initNavbar === "function") initNavbar();
  if (typeof setActiveNavLink === "function") setActiveNavLink();
}

function loadNavbar() {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (!navbarPlaceholder) return;

  const rootPath = getRelativeRootPath();
  const navbarPath = `${rootPath}/components/navbar.html`;

  fetch(navbarPath)
    .then((response) => {
      if (!response.ok) throw new Error("Fetch failed");
      return response.text();
    })
    .then((html) => {
      navbarPlaceholder.innerHTML = html;
      if (!document.getElementById("desktopNav") || !document.getElementById("mobileNav")) {
        navbarPlaceholder.innerHTML = navbarSkeleton();
      }
      finalizeNavbar(rootPath);
    })
    .catch(() => {
      navbarPlaceholder.innerHTML = navbarSkeleton();
      finalizeNavbar(rootPath);
    });
}

function initArticleEnhancements() {
  const article = document.querySelector(".article-page");
  if (!article) return;

  const tocList = document.querySelector("#toc-list");
  if (tocList) {
    const headings = article.querySelectorAll("h2");
    tocList.innerHTML = "";
    headings.forEach((heading, idx) => {
      const id = heading.id || `section-${idx + 1}`;
      heading.id = id;
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = heading.textContent || `Section ${idx + 1}`;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        heading.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      item.appendChild(link);
      tocList.appendChild(item);
    });
  }

  const copyBtn = document.getElementById("share-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyBtn.textContent = "Copied";
        window.setTimeout(() => {
          copyBtn.textContent = "Copy Link";
        }, 1200);
      });
    });
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(document.title);

  const wa = document.getElementById("share-wa");
  const fb = document.getElementById("share-fb");
  const x = document.getElementById("share-x");
  if (wa) wa.href = `https://wa.me/?text=${shareText}%20${shareUrl}`;
  if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  if (x) x.href = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "inline-flex" : "none";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  initArticleEnhancements();
});
