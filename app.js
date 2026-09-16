/* ============================================================
   فرمون — Farmoon Car Market Dashboard
   Bilingual (FA/EN) · Object-Oriented · Multi-Theme
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// I18N — Translation Dictionary
// ─────────────────────────────────────────────────────────────
class I18n {
  constructor() {
    this.translations = {
      fa: {
        dir: "rtl",
        lang: "fa",
        font: "Vazirmatn",
        brandName: "فرمون",
        brandTagline: "نبض بازار خودرو",
        announcementSnapshot: "اسنپ‌شات بازار:",
        announcementPrices: "قیمت‌ها",
        announcementToman: "تومان هستند",
        announcementDataSource: "روش گردآوری داده",
        navPrices: "قیمت مدل‌ها",
        navInsights: "نبض بازار",
        navEstimator: "برآورد قیمت",
        navSources: "منابع",
        navProfile: "پروفایل",
        themeToggle: "تغییر حالت نمایش",
        ctaEstimate: "قیمت‌گذاری خودرو",
        menuOpen: "باز کردن منو",
        heroEyebrow: "داده‌های بازار، بدون پیچاندن",
        heroTitle1: "قیمت ماشین را",
        heroTitleEm: "روشن",
        heroTitle2: "ببین.",
        heroLede: "بازه قیمت مدل‌های پراید و پژو ۴۰۵ را یک‌جا ببین، جزئیات را مقایسه کن و برای خودروی خودت برآورد اولیه بگیر.",
        searchPlaceholder: "مثلاً پراید ۱۳۱ یا ۴۰۵ SLX",
        searchButton: "جست‌وجو",
        quickSearchLabel: "پرتکرار:",
        trustModels: "مدل و تیپ",
        trustModelsSuffix: "در این نسخه",
        trustNote: "قیمت‌ها با جزئیات مرجع ثبت شده‌اند.",
        liveMarket: "بازار خودرو",
        date15Sep: "۲۵ شهریور",
        activeRange: "بازه فعال بازار",
        to: "تا",
        lastChecks: "آخرین ۷ بررسی",
        weeklyTrend: "روند هفتگی",
        dataStatus: "وضعیت داده",
        traceable: "قابل پیگیری",
        popularToday: "پرطرفدار امروز",
        metricModelsCovered: "مدل و تیپ پوشش‌داده‌شده",
        pridePeugeot: "پراید و پژو ۴۰۵",
        metricLastSnapshot: "آخرین اسنپ‌شات داده",
        year1405: "سال ۱۴۰۵",
        metricPriceBasis: "مبنای بررسی قیمت",
        freeMarket: "بازار آزاد",
        adsExpert: "آگهی و برآورد کارشناسی",
        metricPriceDisplay: "نمایش قیمت",
        tomanNotRial: "نه ریال",
        catalogEyebrow: "کاتالوگ بازار",
        catalogTitle: "مدلی که دنبالش هستی، همین‌جاست.",
        catalogDesc: "هر کارت یک نمونه مرجع دارد؛ سال، کارکرد و وضعیت بدنه را قبل از مقایسه ببین.",
        clearFilters: "پاک‌کردن فیلترها",
        searchCatalogPlaceholder: "جست‌وجو بین مدل‌ها و تیپ‌ها...",
        clearSearch: "پاک کردن جست‌وجو",
        sort: "مرتب‌سازی",
        sortFeatured: "پیشنهادی",
        sortPriceDesc: "گران‌ترین",
        sortPriceAsc: "ارزان‌ترین",
        sortYearDesc: "مدل جدیدتر",
        sortChangeDesc: "بیشترین رشد",
        filterFamily: "خانواده",
        all: "همه",
        pride: "پراید",
        peugeot: "پژو ۴۰۵",
        filterType: "نوع",
        used: "کارکرده",
        zero: "صفر / کم‌کار",
        filterPrice: "بازه قیمت",
        under600: "زیر ۶۰۰ م",
        from600to1000: "۶۰۰ م تا ۱ م",
        over1000: "بالای ۱ م",
        modelsFound: "مدل پیدا شد",
        referenceSample: "نمونه مرجع",
        displayWithRef: "قیمت‌ها با نمونه مرجع نمایش داده می‌شوند.",
        loadMore: "نمایش مدل‌های بیشتر",
        noResults: "مدلی با این مشخصات پیدا نشد.",
        noResultsDesc: "فیلترها را تغییر بده یا نام ساده‌تری را جست‌وجو کن.",
        showAll: "نمایش همه مدل‌ها",
        insightsEyebrow: "نبض بازار",
        insightsTitle: "فقط عدد نیست؛ جهت بازار را هم ببین.",
        insightsDesc: "این نمودار، روند نمونه‌های مرجع همین صفحه را نشان می‌دهد؛ ابزار پیش‌بینی قیمت نیست.",
        chartCaption: "شاخص قیمت نمونه‌های مرجع",
        in7Checks: "در ۷ بررسی",
        checksAgo: "بررسی قبل",
        today: "امروز",
        average: "میانگین نمونه‌ها",
        detailsBasis: "جزئیات مبنا",
        highestPrice: "بیشترین قیمت کاتالوگ",
        mileage: "کارکرد",
        beforeDeal: "قبل از معامله",
        beforeDealDesc: "قیمت آگهی لزوماً قیمت نهایی معامله نیست؛ کارشناسی فنی و بدنه را جدی بگیر.",
        wantPersonalEstimate: "برآورد شخصی‌تر می‌خواهی؟",
        wantPersonalEstimateDesc: "سال، کارکرد و بدنه را وارد کن.",
        estimatorEyebrow: "ماشین‌حساب قیمت",
        estimatorTitle: "برای ماشین خودت یک برآورد اولیه بگیر.",
        estimatorDesc: "این محاسبه براساس یکی از نمونه‌های مرجع همین سایت انجام می‌شود؛ جایگزین بازدید و کارشناسی نیست.",
        selectRefModel: "مدل مرجع را انتخاب کن",
        carMileage: "کارکرد خودرو",
        km: "کیلومتر",
        quickAdjust: "تنظیم سریع",
        bodyCondition: "وضعیت بدنه",
        clean: "بدون رنگ",
        cleanDesc: "بدنه سالم",
        oneSpot: "یک لکه رنگ",
        oneSpotDesc: "اثر محدود",
        severalSpots: "چند لکه رنگ",
        severalSpotsDesc: "نیاز به دقت",
        repaintDamage: "دوررنگ / آسیب",
        repaintDamageDesc: "افت بیشتر",
        validInsurance: "بیمه معتبر دارد",
        healthyEngine: "موتور و گیربکس سالم است",
        calculate: "محاسبه برآورد",
        yourEstimate: "برآورد اولیه شما",
        approxRange: "بازه تقریبی:",
        refSample: "نمونه مرجع",
        mileageEffect: "تأثیر کارکرد",
        conditionEffect: "تأثیر شرایط",
        estimateDisclaimer: "این خروجی پیشنهاد خرید یا فروش نیست.",
        compare: "مقایسه خودروها",
        selectedOf2: "از ۲ انتخاب شده",
        selectModel: "یک مدل انتخاب کن",
        clear: "پاک کردن",
        compareNow: "مقایسه کن",
        compareEyebrow: "مقایسه کنار هم",
        compareTitle: "دو مدل، یک نگاه دقیق‌تر",
        spec: "مشخصه",
        observedRange: "بازه دیده‌شده",
        refYear: "سال نمونه",
        refMileage: "کارکرد مرجع",
        bodyStatus: "وضعیت بدنه",
        bodyClass: "کلاس بدنه",
        engine: "پیشرانه",
        fuel: "سوخت",
        gearbox: "گیربکس",
        lastTrend: "روند آخرین بررسی",
        compareNote: "مقایسه بر اساس دو نمونه مرجع ثبت‌شده انجام شده است. برای تصمیم نهایی، وضعیت واقعی هر خودرو را کارشناسی کن.",
        sourcesEyebrow: "شفافیت داده",
        sourcesTitle: "هر عدد، باید قابل پیگیری باشد.",
        sourcesDesc: "قیمت‌های این نسخه یک اسنپ‌شات از گزارش‌های بازار، صفحات قیمت و آگهی‌های عمومی هستند. هر خودرو، نمونه مرجع، تاریخ و لینک منبع خودش را دارد.",
        importantNote: "یادآوری مهم",
        importantNoteDesc: "قیمت بازار ممکن است با شهر، رنگ، کارکرد، وضعیت فنی، بیمه و شرایط معامله تغییر کند.",
        bama: "باما",
        bamaDesc: "قیمت و آگهی خودرو",
        hamrah: "همراه مکانیک",
        hamrahDesc: "قیمت کارشناسی و آگهی",
        divar: "دیوار",
        divarDesc: "نمونه آگهی‌های عمومی",
        reports: "گزارش‌های بازار",
        reportsDesc: "رصد و مقایسه روند",
        footerNote: "یک ابزار نمایشی برای مشاهده و مقایسه قیمت‌های بازار خودرو",
        goUp: "برو بالا",
        copyright: "فرمون. ساخته‌شده برای مشاهده آسان‌تر بازار.",
        dataVersion: "نسخه داده: ۲۵ شهریور ۱۴۰۵",
        closeModal: "بستن پنجره",
        refPrice: "قیمت نمونه مرجع",
        observedRangeMarket: "بازه دیده‌شده در بازار",
        recentTrend: "روند ۷ بررسی اخیر",
        estimateWithThis: "برآورد با این مدل",
        addToCompare: "افزودن به مقایسه",
        removeFromCompare: "حذف از مقایسه",
        sourceSample: "منبع نمونه:",
        registeredDate: "ثبت در نسخه ۲۵ شهریور ۱۴۰۵",
        sampleLabel: "نمونه:",
        model: "مدل",
        zeroKm: "صفر کیلومتر",
        backToTop: "بازگشت به بالای صفحه",
        noscriptMsg: "برای نمایش کاتالوگ و ابزار برآورد، جاوااسکریپت مرورگر را فعال کنید.",
        removedFromFav: "از علاقه‌مندی‌ها حذف شد.",
        addedToFav: "به علاقه‌مندی‌ها اضافه شد.",
        removedFromCompare: "از مقایسه حذف شد.",
        addedToCompare: "به مقایسه اضافه شد.",
        compareLimit: "برای مقایسه، ابتدا یکی از دو انتخاب فعلی را حذف کن.",
        refDataNote: "هر کارت سال، کارکرد، وضعیت بدنه و لینک منبع نمونه را دارد.",
        estimateUpdated: "برآورد اولیه با مشخصات واردشده به‌روزرسانی شد.",
        // Profile / User
        login: "ورود",
        signup: "ثبت‌نام",
        profile: "پروفایل",
        logout: "خروج",
        guest: "مهمان",
        testUser: "کاربر آزمایشی",
        profileTitle: "پروفایل کاربر",
        profileName: "نام و نام خانوادگی",
        profileEmail: "ایمیل",
        profilePhone: "شماره موبایل",
        profileMemberSince: "عضویت از",
        profileFavorites: "علاقه‌مندی‌ها",
        profileComparisons: "مقایسه‌های ذخیره‌شده",
        profileSettings: "تنظیمات",
        profileEdit: "ویرایش پروفایل",
        profileSave: "ذخیره تغییرات",
        profileLanguage: "زبان",
        profileTheme: "پوسته",
        noFavorites: "هنوز خودرویی به علاقه‌مندی‌ها اضافه نکرده‌اید.",
        loginTitle: "ورود به حساب",
        loginDesc: "برای تست، هر نام کاربری و رمز عبوری وارد کنید.",
        username: "نام کاربری",
        password: "رمز عبور",
        loginButton: "ورود",
        cancel: "انصراف",
        themeLight: "روشن",
        themeDark: "تیره",
        themeSunset: "غروب",
        themeOcean: "اقیانوس",
        themeHacker: "هکری",
        viewDetails: "مشاهده جزئیات",
        addFavorite: "افزودن به علاقه‌مندی‌ها",
        removeFavorite: "حذف از علاقه‌مندی‌ها",
        millionToman: "میلیون تومان",
        billionToman: "میلیارد تومان",
        notPrediction: "ابزار پیش‌بینی قیمت نیست",
        priceInToman: "قیمت‌ها تومان هستند",
        disableJS: "جاوااسکریپت را فعال کنید",
        fa: "فارسی",
        en: "English",
        userSection: "کاربری"
      },
      en: {
        dir: "ltr",
        lang: "en",
        font: "Vazirmatn",
        brandName: "Farmoon",
        brandTagline: "Car Market Pulse",
        announcementSnapshot: "Market Snapshot:",
        announcementPrices: "Prices are in",
        announcementToman: "Toman",
        announcementDataSource: "Data collection method",
        navPrices: "Car Prices",
        navInsights: "Market Pulse",
        navEstimator: "Price Estimator",
        navSources: "Sources",
        navProfile: "Profile",
        themeToggle: "Toggle theme",
        ctaEstimate: "Price Your Car",
        menuOpen: "Open menu",
        heroEyebrow: "Market data, straight up.",
        heroTitle1: "See car prices",
        heroTitleEm: "clearly",
        heroTitle2: ".",
        heroLede: "View price ranges for Pride and Peugeot 405 models all in one place, compare details, and get an initial estimate for your own car.",
        searchPlaceholder: "e.g. Pride 131 or 405 SLX",
        searchButton: "Search",
        quickSearchLabel: "Popular:",
        trustModels: "models & trims",
        trustModelsSuffix: "in this version",
        trustNote: "Prices are recorded with reference details.",
        liveMarket: "Car Market",
        date15Sep: "Sep 15",
        activeRange: "Active Market Range",
        to: "to",
        lastChecks: "Last 7 checks",
        weeklyTrend: "Weekly trend",
        dataStatus: "Data status",
        traceable: "Traceable",
        popularToday: "Popular today",
        metricModelsCovered: "Models & trims covered",
        pridePeugeot: "Pride & Peugeot 405",
        metricLastSnapshot: "Last data snapshot",
        year1405: "2026",
        metricPriceBasis: "Price review basis",
        freeMarket: "Free market",
        adsExpert: "Listings & expert appraisal",
        metricPriceDisplay: "Price display",
        tomanNotRial: "not Rial",
        catalogEyebrow: "Market Catalog",
        catalogTitle: "The model you're looking for is right here.",
        catalogDesc: "Each card has a reference sample; check year, mileage and body condition before comparing.",
        clearFilters: "Clear filters",
        searchCatalogPlaceholder: "Search models & trims...",
        clearSearch: "Clear search",
        sort: "Sort",
        sortFeatured: "Featured",
        sortPriceDesc: "Most expensive",
        sortPriceAsc: "Cheapest",
        sortYearDesc: "Newest",
        sortChangeDesc: "Biggest rise",
        filterFamily: "Family",
        all: "All",
        pride: "Pride",
        peugeot: "Peugeot 405",
        filterType: "Type",
        used: "Used",
        zero: "New / Low mileage",
        filterPrice: "Price range",
        under600: "Under 600M",
        from600to1000: "600M to 1B",
        over1000: "Over 1B",
        modelsFound: "models found",
        referenceSample: "Reference sample",
        displayWithRef: "Prices shown with reference sample.",
        loadMore: "Load more models",
        noResults: "No model found with these criteria.",
        noResultsDesc: "Change filters or try a simpler search term.",
        showAll: "Show all models",
        insightsEyebrow: "Market Pulse",
        insightsTitle: "It's not just numbers; see market direction too.",
        insightsDesc: "This chart shows trends for reference samples on this page; it is not a price prediction tool.",
        chartCaption: "Reference sample price index",
        in7Checks: "in 7 checks",
        checksAgo: "checks ago",
        today: "Today",
        average: "Sample average",
        detailsBasis: "Basis details",
        highestPrice: "Highest catalog price",
        mileage: "mileage",
        beforeDeal: "Before you deal",
        beforeDealDesc: "Listing price is not necessarily the final deal price; take technical and body inspection seriously.",
        wantPersonalEstimate: "Want a more personal estimate?",
        wantPersonalEstimateDesc: "Enter year, mileage and body condition.",
        estimatorEyebrow: "Price Calculator",
        estimatorTitle: "Get an initial estimate for your car.",
        estimatorDesc: "This calculation is based on one of the reference samples on this site; it does not replace inspection and appraisal.",
        selectRefModel: "Select reference model",
        carMileage: "Car mileage",
        km: "km",
        quickAdjust: "Quick adjust",
        bodyCondition: "Body condition",
        clean: "No paint",
        cleanDesc: "Clean body",
        oneSpot: "One paint spot",
        oneSpotDesc: "Limited effect",
        severalSpots: "Several paint spots",
        severalSpotsDesc: "Needs care",
        repaintDamage: "Repaint / damage",
        repaintDamageDesc: "Larger drop",
        validInsurance: "Has valid insurance",
        healthyEngine: "Engine & gearbox healthy",
        calculate: "Calculate estimate",
        yourEstimate: "Your initial estimate",
        approxRange: "Approx. range:",
        refSample: "Ref. sample",
        mileageEffect: "Mileage effect",
        conditionEffect: "Condition effect",
        estimateDisclaimer: "This output is not a buy or sell recommendation.",
        compare: "Compare cars",
        selectedOf2: "of 2 selected",
        selectModel: "Select a model",
        clear: "Clear",
        compareNow: "Compare",
        compareEyebrow: "Side-by-side comparison",
        compareTitle: "Two models, one closer look.",
        spec: "Specification",
        observedRange: "Observed range",
        refYear: "Sample year",
        refMileage: "Ref. mileage",
        bodyStatus: "Body condition",
        bodyClass: "Body class",
        engine: "Engine",
        fuel: "Fuel",
        gearbox: "Gearbox",
        lastTrend: "Latest trend",
        compareNote: "Comparison is based on two registered reference samples. For a final decision, have the actual condition of each car inspected.",
        sourcesEyebrow: "Data transparency",
        sourcesTitle: "Every number must be traceable.",
        sourcesDesc: "Prices in this version are a snapshot of market reports, price pages and public listings. Each car has its own reference sample, date and source link.",
        importantNote: "Important reminder",
        importantNoteDesc: "Market prices may vary by city, color, mileage, technical condition, insurance and deal terms.",
        bama: "Bama",
        bamaDesc: "Car prices & listings",
        hamrah: "Hamrah Mechanic",
        hamrahDesc: "Expert pricing & listings",
        divar: "Divar",
        divarDesc: "Public listing samples",
        reports: "Market Reports",
        reportsDesc: "Trend monitoring & comparison",
        footerNote: "A demo tool for viewing and comparing car market prices",
        goUp: "Go up",
        copyright: "Farmoon. Built for easier market viewing.",
        dataVersion: "Data version: Sep 15, 2026",
        closeModal: "Close dialog",
        refPrice: "Reference sample price",
        observedRangeMarket: "Observed market range",
        recentTrend: "Recent 7-check trend",
        estimateWithThis: "Estimate with this model",
        addToCompare: "Add to compare",
        removeFromCompare: "Remove from compare",
        sourceSample: "Sample source:",
        registeredDate: "Registered in Sep 15, 2026 version",
        sampleLabel: "Sample:",
        model: "Model",
        zeroKm: "Zero km",
        backToTop: "Back to top",
        noscriptMsg: "Please enable JavaScript to view the catalog and estimator tools.",
        removedFromFav: "removed from favorites.",
        addedToFav: "added to favorites.",
        removedFromCompare: "removed from comparison.",
        addedToCompare: "added to comparison.",
        compareLimit: "To compare, first remove one of the two current selections.",
        refDataNote: "Each card has year, mileage, body condition and sample source link.",
        estimateUpdated: "Initial estimate updated with the entered details.",
        // Profile / User
        login: "Login",
        signup: "Sign up",
        profile: "Profile",
        logout: "Logout",
        guest: "Guest",
        testUser: "Test User",
        profileTitle: "User Profile",
        profileName: "Full name",
        profileEmail: "Email",
        profilePhone: "Phone",
        profileMemberSince: "Member since",
        profileFavorites: "Favorites",
        profileComparisons: "Saved comparisons",
        profileSettings: "Settings",
        profileEdit: "Edit profile",
        profileSave: "Save changes",
        profileLanguage: "Language",
        profileTheme: "Theme",
        noFavorites: "You haven't added any cars to favorites yet.",
        loginTitle: "Sign in",
        loginDesc: "For testing, enter any username and password.",
        username: "Username",
        password: "Password",
        loginButton: "Sign in",
        cancel: "Cancel",
        themeLight: "Light",
        themeDark: "Dark",
        themeSunset: "Sunset",
        themeOcean: "Ocean",
        themeHacker: "Hacker",
        viewDetails: "View details",
        addFavorite: "Add to favorites",
        removeFavorite: "Remove from favorites",
        millionToman: "million Toman",
        billionToman: "billion Toman",
        notPrediction: "Not a price prediction tool",
        priceInToman: "Prices are in Toman",
        disableJS: "Enable JavaScript",
        fa: "فارسی",
        en: "English",
        userSection: "User"
      }
    };
    this.currentLang = this.loadLang();
    this.listeners = [];
  }

  loadLang() {
    try {
      return window.localStorage.getItem("farmoon-lang") || "fa";
    } catch {
      return "fa";
    }
  }

  setLang(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    try { window.localStorage.setItem("farmoon-lang", lang); } catch { /* ignore */ }
    this.listeners.forEach((fn) => fn(lang));
  }

  t(key) {
    return this.translations[this.currentLang][key] || key;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  get dir() { return this.translations[this.currentLang].dir; }
  get lang() { return this.translations[this.currentLang].lang; }
}

// ─────────────────────────────────────────────────────────────
// THEME MANAGER — Handles 5 themes: light, dark, sunset, ocean, hacker
// ─────────────────────────────────────────────────────────────
class ThemeManager {
  constructor(i18n) {
    this.i18n = i18n;
    this.themes = ["light", "dark", "sunset", "ocean", "hacker"];
    this.current = this.load();
  }

  load() {
    try {
      const saved = window.localStorage.getItem("farmoon-theme");
      if (saved && this.themes.includes(saved)) return saved;
    } catch { /* ignore */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  apply(theme) {
    if (!this.themes.includes(theme)) theme = "light";
    this.current = theme;
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem("farmoon-theme", theme); } catch { /* ignore */ }
  }

  cycle() {
    const idx = this.themes.indexOf(this.current);
    const next = this.themes[(idx + 1) % this.themes.length];
    this.apply(next);
    return next;
  }

  init() {
    this.apply(this.current);
  }
}

// ─────────────────────────────────────────────────────────────
// USER MANAGER — Test user system with profile
// ─────────────────────────────────────────────────────────────
class UserManager {
  constructor(i18n) {
    this.i18n = i18n;
    this.user = this.loadUser();
    this.listeners = [];
  }

  loadUser() {
    try {
      const saved = window.localStorage.getItem("farmoon-user");
      if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return null;
  }

  saveUser() {
    try {
      if (this.user) window.localStorage.setItem("farmoon-user", JSON.stringify(this.user));
      else window.localStorage.removeItem("farmoon-user");
    } catch { /* ignore */ }
  }

  login(username) {
    this.user = {
      name: username || this.i18n.t("testUser"),
      email: `${(username || "user").replace(/\s+/g, ".").toLowerCase()}@test.farmoon`,
      phone: "۰۹۱۲-xxx-xxxx",
      memberSince: "1405",
      favorites: [],
      savedComparisons: []
    };
    this.saveUser();
    this.notify();
  }

  logout() {
    this.user = null;
    this.saveUser();
    this.notify();
  }

  update(data) {
    if (!this.user) return;
    Object.assign(this.user, data);
    this.saveUser();
    this.notify();
  }

  isLoggedIn() {
    return this.user !== null;
  }

  onChange(fn) { this.listeners.push(fn); }
  notify() { this.listeners.forEach((fn) => fn(this.user)); }
}

// ─────────────────────────────────────────────────────────────
// DATA — Static car data & URLs
// ─────────────────────────────────────────────────────────────
const SOURCE_URLS = {
  bama151: "https://bama.ir/price/pride_151_gx",
  hamrahPride: "https://www.hamrah-mechanic.com/carprice/pride/",
  hamrah111: "https://www.hamrah-mechanic.com/carprice/saipa/pride111/1396/215/",
  hamrah131: "https://www.hamrah-mechanic.com/carprice/saipa/pride131/1396/220/",
  baravard111: "https://baravard.com/pricing/446/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-111-%D9%87%D8%A7%DA%86-%D8%A8%DA%A9-se?model=1396",
  baravard132: "https://baravard.com/pricing/310/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-se?model=1396",
  baravard132sl: "https://baravard.com/pricing/312/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-sl?model=1390",
  baravard132basic: "https://baravard.com/pricing/314/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-%D8%B3%D8%A7%D8%AF%D9%87?model=1389",
  faradeedPride: "https://faradeed.ir/",
  z4nasim: "https://z4car.com/",
  divar405: "https://divar.ir/s/tehran/car/peugeot/405",
  divar405cng: "https://divar.ir/s/tehran/car/peugeot/405/glx-bi-fuel(cng)",
  hamrah405glx: "https://www.hamrah-mechanic.com/carprice/irankhodro/peugeot405/type-177/",
  hamrah405cng: "https://www.hamrah-mechanic.com/carprice/irankhodro/peugeot405/type-1204/",
  hamrah405slx: "https://www.hamrah-mechanic.com/carprice/irankhodro/405slx/",
  vana405: "https://vananews.com/"
};

const palette = {
  pride: { start: "#d9efec", end: "#98d2ca", body: "#477879", roof: "#eef5f3", glass: "#245b66", line: "#167276" },
  prideWarm: { start: "#f5e8cf", end: "#e8be7e", body: "#8d654b", roof: "#f5eee0", glass: "#416474", line: "#b35f3d" },
  prideBlue: { start: "#dce9f5", end: "#9bb8d8", body: "#3d668c", roof: "#edf3f8", glass: "#1e4c72", line: "#3c78b1" },
  peugeot: { start: "#dae9ef", end: "#9ebdc8", body: "#4a6779", roof: "#e7f0f1", glass: "#234e63", line: "#1a6a78" },
  peugeotDark: { start: "#e0e6ed", end: "#9daab8", body: "#465766", roof: "#e7ecee", glass: "#314e65", line: "#3e6079" },
  peugeotGold: { start: "#f2e8bc", end: "#d6bd67", body: "#968044", roof: "#f5efd3", glass: "#496072", line: "#9a7621" }
};

const carsData = [
  { id:"pride-saba-1389", family:"pride", name:"پراید صبا", trim:"دنده‌ای", nameEn:"Pride Saba", trimEn:"Manual", year:1389, yearEn:2010, mileage:265000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:475, low:445, high:505, change:0.4, history:[448,451,456,462,459,473,475], description:"نمونه صندوقدار قدیمی؛ سلامت شاسی و وضعیت فنی در این مدل اثر زیادی دارد.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrahPride, visual:"prideWarm", carType:"sedan", order:15 },
  { id:"pride-nasim-1388", family:"pride", name:"پراید نسیم", trim:"هاچ‌بک دنده‌ای", nameEn:"Pride Nasim", trimEn:"Hatchback Manual", year:1388, yearEn:2009, mileage:320000, condition:"یک لکه رنگ", conditionEn:"One paint spot", status:"used", body:"هاچ‌بک", bodyEn:"Hatchback", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:440, low:398, high:482, change:-0.3, history:[421,430,433,442,447,441,440], description:"بازه بازار این مدل به کارکرد، سلامت اتاق و کیفیت نگهداری وابسته است.", sourceName:"Z4Car", sourceNameEn:"Z4Car", sourceUrl:SOURCE_URLS.z4nasim, visual:"prideBlue", carType:"hatch", order:17 },
  { id:"pride-111-se-1396", family:"pride", name:"پراید ۱۱۱", trim:"SE", nameEn:"Pride 111", trimEn:"SE", year:1396, yearEn:2017, mileage:180000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"هاچ‌بک", bodyEn:"Hatchback", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:755, low:740, high:770, change:-0.6, history:[705,722,739,752,770,760,755], description:"نمونه مرجع با کارکرد متعارف و بدنه سالم؛ هاچ‌بک‌های تمیز معمولاً تقاضای بیشتری دارند.", sourceName:"برآورد", sourceNameEn:"Baravard", sourceUrl:SOURCE_URLS.baravard111, visual:"pride", carType:"hatch", order:4 },
  { id:"pride-111-ex-1393", family:"pride", name:"پراید ۱۱۱", trim:"EX", nameEn:"Pride 111", trimEn:"EX", year:1393, yearEn:2014, mileage:250000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"هاچ‌بک", bodyEn:"Hatchback", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:605, low:581, high:629, change:0.2, history:[571,580,586,593,600,604,605], description:"یک نمونه EX با کارکرد مرجع؛ آپشن‌ها و سلامت کابین، اختلاف قیمت ایجاد می‌کنند.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrah111, visual:"prideBlue", carType:"hatch", order:10 },
  { id:"pride-111-sx-1395", family:"pride", name:"پراید ۱۱۱", trim:"SX", nameEn:"Pride 111", trimEn:"SX", year:1395, yearEn:2016, mileage:210000, condition:"یک لکه رنگ", conditionEn:"One paint spot", status:"used", body:"هاچ‌بک", bodyEn:"Hatchback", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:559, low:535, high:583, change:-0.2, history:[527,540,546,552,560,560,559], description:"نمونه SX در بازه میانی بازار؛ رنگ‌شدگی و سابقه سرویس را حتماً بررسی کن.", sourceName:"گزارش بازار", sourceNameEn:"Market Reports", sourceUrl:SOURCE_URLS.faradeedPride, visual:"prideWarm", carType:"hatch", order:13 },
  { id:"pride-131-se-1396", family:"pride", name:"پراید ۱۳۱", trim:"SE", nameEn:"Pride 131", trimEn:"SE", year:1396, yearEn:2017, mileage:158000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:635, low:610, high:660, change:0.5, history:[595,604,614,620,626,632,635], description:"نمونه صندوقدار با کارکرد مرجع؛ قیمت ارائه‌شده برای وضعیت سالم و متعارف است.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrah131, visual:"pride", carType:"sedan", order:7 },
  { id:"pride-131-bifuel-1395", family:"pride", name:"پراید ۱۳۱", trim:"دوگانه‌سوز", nameEn:"Pride 131", trimEn:"Bi-fuel", year:1395, yearEn:2016, mileage:205000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"CNG / بنزین", fuelEn:"CNG / Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:615, low:580, high:650, change:0.1, history:[579,588,595,602,609,614,615], description:"دوگانه‌سوز شرکتی؛ سلامت مخزن، مدار گاز و معاینه فنی را پیش از خرید چک کن.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrahPride, visual:"prideWarm", carType:"sedan", order:11 },
  { id:"pride-132-se-1396", family:"pride", name:"پراید ۱۳۲", trim:"SE", nameEn:"Pride 132", trimEn:"SE", year:1396, yearEn:2017, mileage:180000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:720, low:705, high:735, change:0, history:[681,689,700,715,723,720,720], description:"نمونه مرجع ۱۳۲ SE با کارکرد متعارف؛ موتور، جلوبندی و بدنه بر قیمت اثر مستقیم دارند.", sourceName:"برآورد", sourceNameEn:"Baravard", sourceUrl:SOURCE_URLS.baravard132, visual:"prideBlue", carType:"sedan", order:5 },
  { id:"pride-132-sl-1390", family:"pride", name:"پراید ۱۳۲", trim:"SL", nameEn:"Pride 132", trimEn:"SL", year:1390, yearEn:2011, mileage:280000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:533, low:522, high:544, change:0.7, history:[499,503,512,519,527,529,533], description:"نمونه SL با کارکرد مرجع؛ برای خودروهای این سال، بازدید شاسی مهم‌تر از ظاهر است.", sourceName:"برآورد", sourceNameEn:"Baravard", sourceUrl:SOURCE_URLS.baravard132sl, visual:"prideWarm", carType:"sedan", order:14 },
  { id:"pride-132-basic-1389", family:"pride", name:"پراید ۱۳۲", trim:"ساده", nameEn:"Pride 132", trimEn:"Basic", year:1389, yearEn:2010, mileage:320000, condition:"یک لکه رنگ", conditionEn:"One paint spot", status:"used", body:"صندوقدار", bodyEn:"Sedan", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:502, low:492, high:512, change:0.6, history:[469,478,482,488,492,499,502], description:"تیپ ساده با کارکرد مرجع؛ رنگ و کارکرد زیاد می‌تواند فاصله قیمت را بیشتر کند.", sourceName:"برآورد", sourceNameEn:"Baravard", sourceUrl:SOURCE_URLS.baravard132basic, visual:"prideBlue", carType:"sedan", order:16 },
  { id:"pride-141-se-1394", family:"pride", name:"پراید ۱۴۱", trim:"SE", nameEn:"Pride 141", trimEn:"SE", year:1394, yearEn:2015, mileage:220000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"لیفت‌بک", bodyEn:"Liftback", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:535, low:505, high:565, change:0.3, history:[502,511,515,522,530,533,535], description:"لیفت‌بک ۱۴۱؛ وضعیت درِ صندوق، اتاق و نشتی‌ها را هنگام کارشناسی بررسی کن.", sourceName:"گزارش بازار", sourceNameEn:"Market Reports", sourceUrl:SOURCE_URLS.faradeedPride, visual:"pride", carType:"liftback", order:12 },
  { id:"pride-151-se-1403", family:"pride", name:"پراید ۱۵۱", trim:"SE", nameEn:"Pride 151", trimEn:"SE", year:1403, yearEn:2024, mileage:46000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"وانت", bodyEn:"Pickup", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:918, low:880, high:960, change:0.6, history:[860,874,887,899,908,913,918], description:"وانت ۱۵۱ کم‌کار؛ اتاق بار، شاسی و میزان فشار کاری گذشته در قیمت مؤثر است.", sourceName:"گزارش بازار", sourceNameEn:"Market Reports", sourceUrl:SOURCE_URLS.faradeedPride, visual:"prideBlue", carType:"pickup", order:8 },
  { id:"pride-151-gx-1405", family:"pride", name:"پراید ۱۵۱", trim:"GX", nameEn:"Pride 151", trimEn:"GX", year:1405, yearEn:2026, mileage:0, condition:"صفر کیلومتر", conditionEn:"Zero km", status:"zero", body:"وانت", bodyEn:"Pickup", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:1030, low:1000, high:1060, change:0, history:[1010,1015,1022,1028,1030,1030,1030], description:"نمونه صفر کیلومتر؛ تفکیک قیمت بازار و کارخانه را هنگام خرید حتماً در نظر بگیر.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrahPride, visual:"pride", carType:"pickup", order:3 },
  { id:"pride-151-gx-liner-1405", family:"pride", name:"پراید ۱۵۱", trim:"GX لاینر", nameEn:"Pride 151", trimEn:"GX Liner", year:1405, yearEn:2026, mileage:0, condition:"صفر کیلومتر", conditionEn:"Zero km", status:"zero", body:"وانت", bodyEn:"Pickup", engine:"۱٫۳ لیتری", engineEn:"1.3L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:1160, low:1120, high:1200, change:-2.5, history:[1210,1202,1195,1187,1178,1165,1160], description:"نسخه لاینر با قیمت بازار؛ وضعیت عرضه و آپشن‌ها می‌تواند بازه را تغییر دهد.", sourceName:"باما", sourceNameEn:"Bama", sourceUrl:SOURCE_URLS.bama151, visual:"prideWarm", carType:"pickup", order:2 },
  { id:"peugeot-405-glx-petrol-1395", family:"peugeot", name:"پژو ۴۰۵", trim:"GLX بنزینی", nameEn:"Peugeot 405", trimEn:"GLX Gasoline", year:1395, yearEn:2016, mileage:180000, condition:"یک لکه رنگ", conditionEn:"One paint spot", status:"used", body:"سدان", bodyEn:"Sedan", engine:"۱٫۸ لیتری", engineEn:"1.8L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:900, low:850, high:950, change:1.1, history:[810,824,841,856,870,890,900], description:"نمونه GLX بنزینی با کارکرد مرجع؛ سلامت موتور XU7 و سیستم خنک‌کاری ارزش بررسی دارد.", sourceName:"گزارش بازار", sourceNameEn:"Market Reports", sourceUrl:SOURCE_URLS.vana405, visual:"peugeot", carType:"peugeot", order:9 },
  { id:"peugeot-405-glx-petrol-1399", family:"peugeot", name:"پژو ۴۰۵", trim:"GLX بنزینی", nameEn:"Peugeot 405", trimEn:"GLX Gasoline", year:1399, yearEn:2020, mileage:115000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"سدان", bodyEn:"Sedan", engine:"۱٫۸ لیتری", engineEn:"1.8L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:1200, low:1140, high:1260, change:1.6, history:[1085,1105,1120,1148,1166,1181,1200], description:"نمونه کم‌کارتر GLX؛ اختلاف کارکرد و کیفیت نگهداری می‌تواند قیمت را جابه‌جا کند.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrah405glx, visual:"peugeotDark", carType:"peugeot", order:1 },
  { id:"peugeot-405-glx-cng-1393", family:"peugeot", name:"پژو ۴۰۵", trim:"GLX دوگانه‌سوز", nameEn:"Peugeot 405", trimEn:"GLX Bi-fuel", year:1393, yearEn:2014, mileage:235000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"سدان", bodyEn:"Sedan", engine:"۱٫۸ لیتری", engineEn:"1.8L", fuel:"CNG / بنزین", fuelEn:"CNG / Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:850, low:816, high:884, change:0.5, history:[790,801,813,827,836,846,850], description:"دوگانه‌سوز شرکتی؛ تاریخ مخزن و سلامت کیت گاز بخشی از ارزش خودرو است.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrah405cng, visual:"peugeotGold", carType:"peugeot", order:18 },
  { id:"peugeot-405-glx-cng-1396", family:"peugeot", name:"پژو ۴۰۵", trim:"GLX دوگانه‌سوز", nameEn:"Peugeot 405", trimEn:"GLX Bi-fuel", year:1396, yearEn:2017, mileage:150000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"سدان", bodyEn:"Sedan", engine:"۱٫۸ لیتری", engineEn:"1.8L", fuel:"CNG / بنزین", fuelEn:"CNG / Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:1100, low:1045, high:1155, change:0.9, history:[1012,1021,1038,1056,1074,1090,1100], description:"نمونه مرجع بدون رنگ؛ قیمت این تیپ در آگهی‌ها با وضعیت مخزن و بدنه فاصله زیادی دارد.", sourceName:"گزارش بازار", sourceNameEn:"Market Reports", sourceUrl:SOURCE_URLS.vana405, visual:"peugeot", carType:"peugeot", order:6 },
  { id:"peugeot-405-slx-1399", family:"peugeot", name:"پژو ۴۰۵", trim:"SLX موتور TU5", nameEn:"Peugeot 405", trimEn:"SLX TU5", year:1399, yearEn:2020, mileage:150000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"سدان", bodyEn:"Sedan", engine:"TU5 · ۱٫۶", engineEn:"TU5 · 1.6L", fuel:"بنزین", fuelEn:"Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:1500, low:1440, high:1560, change:1.5, history:[1375,1394,1417,1442,1461,1478,1500], description:"نمونه مرجع SLX مدل بالاتر؛ بازه قیمت با رنگ، کارکرد و سابقه سرویس تغییر می‌کند.", sourceName:"همراه مکانیک", sourceNameEn:"Hamrah Mechanic", sourceUrl:SOURCE_URLS.hamrah405slx, visual:"peugeot", carType:"peugeot", order:1 },
  { id:"peugeot-405-taxi-cng-1400", family:"peugeot", name:"پژو ۴۰۵", trim:"تاکسی دوگانه‌سوز", nameEn:"Peugeot 405", trimEn:"Taxi Bi-fuel", year:1400, yearEn:2021, mileage:145000, condition:"بدون رنگ", conditionEn:"No paint", status:"used", body:"سدان تاکسی", bodyEn:"Taxi Sedan", engine:"۱٫۸ لیتری", engineEn:"1.8L", fuel:"CNG / بنزین", fuelEn:"CNG / Gasoline", gearbox:"دستی", gearboxEn:"Manual", price:650, low:600, high:720, change:0.8, history:[580,592,605,617,628,645,650], description:"نمونه تاکسی دوگانه‌سوز؛ نوع کاربری و سابقه سرویس‌های دوره‌ای باید جداگانه بررسی شود.", sourceName:"دیوار", sourceNameEn:"Divar", sourceUrl:SOURCE_URLS.divar405cng, visual:"peugeotGold", carType:"peugeot", order:22 }
];

// ─────────────────────────────────────────────────────────────
// FORMATTERS
// ─────────────────────────────────────────────────────────────
class Formatters {
  constructor(i18n) {
    this.i18n = i18n;
    this.faNum = new Intl.NumberFormat("fa-IR");
    this.enNum = new Intl.NumberFormat("en-US");
    this.faDec = new Intl.NumberFormat("fa-IR", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    this.enDec = new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  n(value) {
    const v = Math.round(value);
    return this.i18n.currentLang === "fa" ? this.faNum.format(v) : this.enNum.format(v);
  }

  compactPrice(million) {
    const t = this.i18n.t.bind(this.i18n);
    if (million >= 1000) {
      const formatted = this.i18n.currentLang === "fa" ? this.faDec.format(million / 1000) : this.enDec.format(million / 1000);
      return `${formatted} ${t("billionToman")}`;
    }
    return `${this.n(million)} ${t("millionToman")}`;
  }

  shortPrice(million) {
    if (million >= 1000) {
      const formatted = this.i18n.currentLang === "fa" ? this.faDec.format(million / 1000) : this.enDec.format(million / 1000);
      return `${formatted} ${this.i18n.currentLang === "fa" ? "میلیارد" : "B"}`;
    }
    return `${this.n(million)} ${this.i18n.currentLang === "fa" ? "م" : "M"}`;
  }

  range(low, high) {
    const t = this.i18n.t.bind(this.i18n);
    return `${this.shortPrice(low)} ${t("to")} ${this.shortPrice(high)}`;
  }

  km(value) {
    const unit = this.i18n.t("km");
    return `${this.n(value)} ${unit}`;
  }

  change(value) {
    const sign = value > 0 ? "+" : "";
    const formatted = this.i18n.currentLang === "fa" ? this.faDec.format(value) : this.enDec.format(value);
    return `${sign}${formatted}%`;
  }

  signedMillion(value) {
    if (Math.abs(value) < 0.5) return this.i18n.currentLang === "fa" ? "۰" : "0";
    const sign = value > 0 ? "+" : "−";
    return `${sign}${this.shortPrice(Math.abs(value))}`;
  }
}

// ─────────────────────────────────────────────────────────────
// CAR CATALOG — Renders car cards, handles filtering/sorting
// ─────────────────────────────────────────────────────────────
class CarCatalog {
  constructor(app) {
    this.app = app;
    this.i18n = app.i18n;
    this.fmt = app.fmt;
    this.cars = carsData;
    this.state = {
      family: "all", condition: "all", priceRange: "all",
      query: "", sort: "featured", visible: 6, insightFamily: "all"
    };
    this.favorites = this.loadSet("farmoon-favorites");
    this.compare = [];
  }

  loadSet(key) {
    try { return new Set(JSON.parse(window.localStorage.getItem(key) || "[]")); }
    catch { return new Set(); }
  }

  saveFavs() {
    try { window.localStorage.setItem("farmoon-favorites", JSON.stringify([...this.favorites])); } catch { /* ignore */ }
  }

  normalize(value) {
    const digitMap = { "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",
                       "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9" };
    return String(value || "").toLowerCase()
      .replace(/[۰-۹٠-٩]/g, (d) => digitMap[d])
      .replace(/ي/g, "ی").replace(/ك/g, "ک")
      .replace(/[\s\-_/]+/g, " ").trim();
  }

  carSearchText(car) {
    const isEn = this.i18n.currentLang === "en";
    return this.normalize([
      isEn ? car.nameEn : car.name,
      car.family === "peugeot" ? (isEn ? "Peugeot 405" : "پژو ۴۰۵") : (isEn ? "Pride Saipa" : "پراید سایپا"),
      isEn ? car.trimEn : car.trim,
      car.year, car.fuel, car.gearbox,
      car.status === "zero" ? (isEn ? "zero new" : "صفر کم کار") : (isEn ? "used" : "کارکرده"),
      car.id.replaceAll("-", " ")
    ].join(" "));
  }

  cssVars(car) {
    const c = palette[car.visual];
    return `--visual-bg-start:${c.start};--visual-bg-end:${c.end};--car-body:${c.body};--car-roof:${c.roof};--car-glass:${c.glass};--spark:${c.line};`;
  }

  carSvg(type, cls = "car-silhouette") {
    const cs = `<svg class="${cls}" viewBox="0 0 420 180" aria-hidden="true" focusable="false">`;
    const ce = `</svg>`;
    const w = `<circle class="wheel" cx="114" cy="133" r="27"/><circle class="rim" cx="114" cy="133" r="13"/><circle class="wheel" cx="313" cy="133" r="27"/><circle class="rim" cx="313" cy="133" r="13"/>`;

    if (type === "pickup") return `${cs}<ellipse cx="212" cy="154" rx="168" ry="12" fill="rgba(20,48,61,.20)"/><path class="body" d="M43 130c4-18 19-28 40-30h49l50-47c10-10 23-15 37-15h50c16 0 29 7 41 19l32 36h36c20 0 34 10 39 30v11H43v-4Z"/><path class="roof" d="m140 98 49-46c8-7 17-10 29-10h49c12 0 22 5 31 15l35 41H140Z"/><path class="glass" d="m158 94 35-35c7-7 15-10 27-10h43c9 0 17 4 24 12l27 33H158Z"/><path d="M260 50v47M208 51l2 46" stroke="rgba(235,249,248,.7)" stroke-width="3"/><path d="M41 128h337v13H43c-4-4-4-8-2-13Z" fill="rgba(23,47,58,.46)"/><path class="light" d="m49 106 27-4 4 11H44l5-7Z"/><path d="M331 101h25c8 0 15 4 19 11h-42l-2-11Z" fill="#ee8c62"/>${w}${ce}`;
    if (type === "hatch") return `${cs}<ellipse cx="210" cy="154" rx="165" ry="12" fill="rgba(20,48,61,.20)"/><path class="body" d="M42 131c5-19 17-29 41-34l49-13 45-37c11-9 25-14 40-14h64c17 0 32 7 43 20l35 40 23 7c18 5 28 16 30 32H42v-1Z"/><path class="roof" d="m135 84 47-35c10-7 21-11 36-11h61c13 0 23 5 32 15l27 32-203-1Z"/><path class="glass" d="m150 80 36-27c9-7 18-9 31-9h59c11 0 18 4 27 13l20 24-173-1Z"/><path d="m244 43 1 39M184 51l-1 32" stroke="rgba(235,249,248,.7)" stroke-width="3"/><path d="M42 130h358v12H43c-4-3-4-7-1-12Z" fill="rgba(23,47,58,.47)"/><path class="light" d="m48 107 31-8 5 13H43l5-5Z"/><path d="m366 103 22 7 7 10h-31l2-17Z" fill="#ef8b5a"/><path d="M92 102h31" stroke="rgba(255,255,255,.55)" stroke-width="2"/>${w}${ce}`;
    if (type === "liftback") return `${cs}<ellipse cx="210" cy="154" rx="165" ry="12" fill="rgba(20,48,61,.20)"/><path class="body" d="M42 131c5-19 18-31 42-35l45-10 57-43c10-8 23-12 37-12h72c18 0 31 9 41 23l34 43 23 6c18 5 27 15 29 29H42v-1Z"/><path class="roof" d="m137 87 53-41c9-7 20-10 33-10h66c13 0 22 6 30 17l26 35-208-1Z"/><path class="glass" d="m151 82 43-32c8-6 16-9 29-9h62c10 0 18 5 24 14l21 28-179-1Z"/><path d="m245 41 1 42M192 48l-1 36" stroke="rgba(235,249,248,.7)" stroke-width="3"/><path d="M42 130h358v12H43c-4-3-4-7-1-12Z" fill="rgba(23,47,58,.47)"/><path class="light" d="m48 107 31-8 5 13H43l5-5Z"/><path d="m364 106 25 6 6 9h-32l1-15Z" fill="#ef8b5a"/>${w}${ce}`;

    const isPeugeot = type === "peugeot";
    const sedanPath = isPeugeot
      ? "M35 130c6-18 18-28 40-32l50-10 65-49c12-9 25-13 41-13h71c18 0 34 8 46 24l33 43 22 6c17 5 25 16 27 31H35Z"
      : "M42 131c5-19 18-29 41-33l47-11 55-43c11-9 23-13 39-13h64c18 0 32 8 43 22l38 43 22 6c18 5 27 16 29 30H42Z";
    const roofPath = isPeugeot
      ? "m133 87 64-47c10-7 22-10 35-10h66c13 0 25 6 34 18l29 40-228-1Z"
      : "m135 87 56-42c10-8 21-11 34-11h60c14 0 25 7 34 19l29 35-213-1Z";
    const glassPath = isPeugeot
      ? "m149 82 51-37c8-6 18-9 31-9h63c10 0 19 5 26 15l23 31-194 0Z"
      : "m150 82 44-33c8-6 18-9 30-9h59c11 0 20 5 27 15l23 27H150Z";
    return `${cs}<ellipse cx="211" cy="154" rx="170" ry="12" fill="rgba(20,48,61,.20)"/><path class="body" d="${sedanPath}"/><path class="roof" d="${roofPath}"/><path class="glass" d="${glassPath}"/><path d="m249 37 1 48M198 44l-1 39" stroke="rgba(235,249,248,.7)" stroke-width="3"/><path d="M36 130h363v12H40c-4-3-5-7-4-12Z" fill="rgba(23,47,58,.47)"/><path class="light" d="m42 109 33-9 5 13H37l5-4Z"/><path d="m362 105 25 7 8 9h-34l1-16Z" fill="#ed8760"/><path d="M86 102h35" stroke="rgba(255,255,255,.55)" stroke-width="2"/>${w}${ce}`;
  }

  icon(name, cls = "") {
    return `<svg class="icon ${cls}"><use href="#icon-${name}"></use></svg>`;
  }

  buildPath(values, w, h, px = 0, py = 0) {
    const min = Math.min(...values), max = Math.max(...values);
    const pad = Math.max((max - min) * 0.12, 1);
    const lower = min - pad, upper = max + pad;
    const pw = w - px * 2, ph = h - py * 2;
    const points = values.map((v, i) => ({
      x: px + (pw * i) / Math.max(values.length - 1, 1),
      y: py + ph - ((v - lower) / Math.max(upper - lower, 1)) * ph,
      value: v
    }));
    const line = points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");
    const area = `${line} L${points.at(-1).x.toFixed(2)} ${(h - py).toFixed(2)} L${points[0].x.toFixed(2)} ${(h - py).toFixed(2)} Z`;
    return { line, area, points, lower, upper };
  }

  sparkline(values, color = "var(--spark)") {
    const { line, area, points } = this.buildPath(values, 80, 32, 3, 3);
    const last = points.at(-1);
    return `<svg viewBox="0 0 80 35" preserveAspectRatio="none" aria-hidden="true"><path d="${area}" fill="${color}" opacity=".11"/><path d="${line}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${last.x.toFixed(2)}" cy="${last.y.toFixed(2)}" r="2.7" fill="#fff" stroke="${color}" stroke-width="2"/></svg>`;
  }

  getFiltered() {
    const q = this.normalize(this.state.query);
    const result = this.cars.filter((car) => {
      const mf = this.state.family === "all" || car.family === this.state.family;
      const mc = this.state.condition === "all" || car.status === this.state.condition;
      const mp = this.state.priceRange === "all" ||
        (this.state.priceRange === "under600" && car.price < 600) ||
        (this.state.priceRange === "600to1000" && car.price >= 600 && car.price < 1000) ||
        (this.state.priceRange === "over1000" && car.price >= 1000);
      const mq = !q || this.carSearchText(car).includes(q);
      return mf && mc && mp && mq;
    });
    return result.sort((a, b) => {
      if (this.state.sort === "price-desc") return b.price - a.price;
      if (this.state.sort === "price-asc") return a.price - b.price;
      if (this.state.sort === "year-desc") return b.year - a.year;
      if (this.state.sort === "change-desc") return b.change - a.change;
      return a.order - b.order;
    });
  }

  carLabel(car) {
    const isEn = this.i18n.currentLang === "en";
    return {
      name: isEn ? car.nameEn : car.name,
      trim: isEn ? car.trimEn : car.trim,
      family: isEn ? (car.family === "pride" ? "Pride" : "Peugeot 405") : car.family,
      condition: isEn ? car.conditionEn : car.condition,
      body: isEn ? car.bodyEn : car.body,
      engine: isEn ? car.engineEn : car.engine,
      fuel: isEn ? car.fuelEn : car.fuel,
      gearbox: isEn ? car.gearboxEn : car.gearbox,
      sourceName: isEn ? car.sourceNameEn : car.sourceName,
      year: isEn ? car.yearEn : car.year
    };
  }

  cardTemplate(car) {
    const t = this.i18n.t.bind(this.i18n);
    const fav = this.favorites.has(car.id);
    const cmp = this.compare.includes(car.id);
    const tc = car.change < 0 ? "is-negative" : "";
    const ti = car.change < 0 ? "trend-down" : "spark";
    const cl = this.carLabel(car);
    const condLabel = car.condition === "صفر کیلومتر" ? t("zeroKm") : cl.condition;

    return `<article class="car-card" style="${this.cssVars(car)}" data-car-id="${car.id}">
      <div class="car-card__visual">
        <div class="car-card__topline">
          <span class="car-card__family">${cl.family}</span>
          <span class="car-card__trend ${tc}">${this.icon(ti, "icon--xs")} ${this.fmt.change(car.change)}</span>
        </div>${this.carSvg(car.carType)}
      </div>
      <div class="car-card__content">
        <div class="car-card__title-row">
          <div><h3>${cl.name}</h3><div class="car-card__trim">${cl.trim}</div></div>
          <button class="card-favorite ${fav ? "is-favorite" : ""}" type="button" data-favorite="${car.id}" aria-label="${fav ? t("removeFavorite") : t("addFavorite")}" aria-pressed="${fav}">${this.icon(fav ? "heart-fill" : "heart")}</button>
        </div>
        <p class="car-card__reference">${t("sampleLabel")} ${t("model")} ${this.fmt.n(cl.year)} · ${this.fmt.km(car.mileage)} · ${condLabel}</p>
        <div class="car-card__price-row">
          <div><span class="car-card__price-label">${t("refPrice")}</span><div class="car-card__price">${this.fmt.compactPrice(car.price).replace(" " + t("millionToman"), "").replace(" " + t("billionToman"), "")}<span>${car.price >= 1000 ? t("billionToman") : t("millionToman")}</span></div></div>
          <div class="mini-sparkline">${this.sparkline(car.history)}</div>
        </div>
        <div class="car-card__range"><span>${t("observedRange")}</span><b>${this.fmt.range(car.low, car.high)}</b></div>
        <ul class="car-card__specs">
          <li>${this.icon("calendar")}<b>${this.fmt.n(cl.year)}</b></li>
          <li>${this.icon("gauge")}<b>${this.fmt.km(car.mileage)}</b></li>
          <li>${this.icon("fuel")}<b>${cl.fuel}</b></li>
        </ul>
        <div class="car-card__actions">
          <button class="card-details" type="button" data-details="${car.id}">${t("viewDetails")} ${this.icon("arrow-left", "icon--xs")}</button>
          <button class="card-compare ${cmp ? "is-added" : ""}" type="button" data-compare="${car.id}" aria-label="${cmp ? t("removeFromCompare") : t("addToCompare")}" title="${cmp ? t("removeFromCompare") : t("addToCompare")}">${this.icon("compare")}</button>
        </div>
      </div>
    </article>`;
  }

  hasActiveFilters() {
    return this.state.family !== "all" || this.state.condition !== "all" || this.state.priceRange !== "all" ||
           Boolean(this.state.query) || this.state.sort !== "featured";
  }

  render(resetVisible = false) {
    if (resetVisible) this.state.visible = 6;
    const filtered = this.getFiltered();
    const shown = filtered.slice(0, this.state.visible);
    const dom = this.app.dom;

    dom.grid.innerHTML = shown.map((c) => this.cardTemplate(c)).join("");
    dom.resultCount.textContent = this.fmt.n(filtered.length);
    dom.empty.hidden = filtered.length !== 0;
    dom.catalogMore.hidden = filtered.length === 0 || shown.length >= filtered.length;

    const moreCount = Math.min(6, filtered.length - shown.length);
    dom.loadMore.innerHTML = `${this.i18n.t("loadMore")} ${this.icon("arrow-left", "icon--xs")}`;
    dom.searchClear.hidden = !this.state.query;
    dom.clearFilters.hidden = !this.hasActiveFilters();
  }

  resetFilters() {
    this.state.family = "all"; this.state.condition = "all"; this.state.priceRange = "all";
    this.state.query = ""; this.state.sort = "featured";
    this.app.dom.catalogSearch.value = "";
    this.app.dom.heroSearchInput.value = "";
    this.app.dom.sort.value = "featured";
    this.updateFilterButtons();
    this.render(true);
  }

  updateFilterButtons() {
    document.querySelectorAll("[data-filter-family]").forEach((b) =>
      b.classList.toggle("is-selected", b.dataset.filterFamily === this.state.family));
    document.querySelectorAll("[data-filter-condition]").forEach((b) =>
      b.classList.toggle("is-selected", b.dataset.filterCondition === this.state.condition));
    document.querySelectorAll("[data-filter-price]").forEach((b) =>
      b.classList.toggle("is-selected", b.dataset.filterPrice === this.state.priceRange));
  }

  updateCounts() {
    const dom = this.app.dom;
    const t = this.i18n.t.bind(this.i18n);
    const prideCount = this.cars.filter((c) => c.family === "pride").length;
    const peugeotCount = this.cars.filter((c) => c.family === "peugeot").length;
    dom.metricModelCount.textContent = this.fmt.n(this.cars.length);
    dom.allCount.textContent = this.fmt.n(this.cars.length);
    dom.prideCount.textContent = this.fmt.n(prideCount);
    dom.peugeotCount.textContent = this.fmt.n(peugeotCount);
    const min = Math.min(...this.cars.map((c) => c.low));
    const max = Math.max(...this.cars.map((c) => c.high));
    dom.heroMarketPrice.textContent = this.fmt.compactPrice(min).replace(" " + t("millionToman"), "").replace(" " + t("billionToman"), "");
    dom.heroMarketEnd.textContent = `${t("to")} ${this.fmt.compactPrice(max)}`;
  }

  toggleFavorite(id) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) return;
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
      this.app.toast(`${this.carLabel(car).name} ${this.i18n.t("removedFromFav")}`);
    } else {
      this.favorites.add(id);
      this.app.toast(`${this.carLabel(car).name} ${this.i18n.t("addedToFav")}`);
    }
    this.saveFavs();
    this.render();
  }

  toggleCompare(id) {
    const idx = this.compare.indexOf(id);
    const car = this.cars.find((c) => c.id === id);
    if (idx >= 0) {
      this.compare.splice(idx, 1);
      this.app.toast(`${this.carLabel(car).name} ${this.i18n.t("removedFromCompare")}`);
    } else if (this.compare.length >= 2) {
      this.app.toast(this.i18n.t("compareLimit"));
      return;
    } else {
      this.compare.push(id);
      this.app.toast(`${this.carLabel(car).name} ${this.i18n.t("addedToCompare")}`);
    }
    this.app.renderCompareBar();
    this.render();
  }
}

// ─────────────────────────────────────────────────────────────
// CHART — Market pulse chart renderer
// ─────────────────────────────────────────────────────────────
class ChartManager {
  constructor(app) {
    this.app = app;
    this.i18n = app.i18n;
    this.fmt = app.fmt;
  }

  update() {
    const { catalog } = this.app;
    const t = this.i18n.t.bind(this.i18n);
    const dom = this.app.dom;
    const sourceCars = catalog.state.insightFamily === "all" ? catalog.cars
      : catalog.cars.filter((c) => c.family === catalog.state.insightFamily);
    const length = 7;
    const series = Array.from({ length }, (_, i) => {
      const v = sourceCars.reduce((s, c) => s + c.history[i], 0) / sourceCars.length;
      return Number(v.toFixed(2));
    });
    const { line, area, points, lower, upper } = catalog.buildPath(series, 740, 265, 5, 10);
    dom.mainChartLine.setAttribute("d", line);
    dom.mainChartArea.setAttribute("d", area);
    dom.mainChartPoints.innerHTML = points.map((p, i) =>
      `<circle class="main-chart-circle" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="4.4"><title>${this.i18n.currentLang === "fa" ? "بررسی" : "Check"} ${this.fmt.n(7 - i)}: ${this.fmt.compactPrice(p.value)}</title></circle>`
    ).join("");
    const axisVals = [upper, upper - (upper - lower) / 3, upper - (upper - lower) * 2 / 3, lower];
    dom.chartYLabels.innerHTML = axisVals.map((v) => `<span>${this.fmt.shortPrice(v)}</span>`).join("");
    const latest = series.at(-1);
    const change = ((latest - series[0]) / series[0]) * 100;
    dom.chartMainPrice.textContent = this.fmt.compactPrice(latest);
    dom.chartChange.className = `chart-change ${change < 0 ? "negative" : "positive"}`;
    dom.chartChange.innerHTML = `${catalog.icon(change < 0 ? "trend-down" : "spark", "icon--xs")} ${this.fmt.change(change)} ${t("in7Checks")}`;
  }

  updateTop() {
    const { catalog } = this.app;
    const dom = this.app.dom;
    const car = [...catalog.cars].sort((a, b) => b.price - a.price)[0];
    const cl = catalog.carLabel(car);
    dom.topPriceModel.textContent = `${cl.name} ${cl.trim}`;
    dom.topPriceMeta.textContent = `${this.i18n.t("model")} ${this.fmt.n(cl.year)} · ${this.fmt.km(car.mileage)} ${this.i18n.t("mileage")}`;
    dom.topPriceValue.textContent = this.fmt.compactPrice(car.price).replace(" " + this.i18n.t("millionToman"), "").replace(" " + this.i18n.t("billionToman"), "");
  }
}

// ─────────────────────────────────────────────────────────────
// ESTIMATOR — Price calculator
// ─────────────────────────────────────────────────────────────
class Estimator {
  constructor(app) {
    this.app = app;
    this.i18n = app.i18n;
    this.fmt = app.fmt;
  }

  populate() {
    const { catalog } = this.app;
    const dom = this.app.dom;
    const sorted = [...catalog.cars].sort((a, b) => {
      if (a.family !== b.family) return a.family.localeCompare(b.family);
      return a.order - b.order;
    });
    dom.estimateCar.innerHTML = sorted.map((car) => {
      const cl = catalog.carLabel(car);
      return `<option value="${car.id}">${cl.family} — ${cl.name} ${cl.trim} | ${this.fmt.n(cl.year)}</option>`;
    }).join("");
    dom.estimateCar.value = "pride-111-se-1396";
    this.setRef(false);
  }

  currentCar() {
    return this.app.catalog.cars.find((c) => c.id === this.app.dom.estimateCar.value) || this.app.catalog.cars[0];
  }

  updateRangeBg() {
    const dom = this.app.dom;
    const v = Number(dom.estimateRange.value), min = Number(dom.estimateRange.min), max = Number(dom.estimateRange.max);
    const pct = Math.min(100, Math.max(0, ((v - min) / (max - min)) * 100));
    dom.estimateRange.style.setProperty("--range-progress", `${pct}%`);
  }

  setRef(animate = true) {
    const dom = this.app.dom;
    const car = this.currentCar();
    const safeMileage = Math.min(Number(dom.estimateRange.max), car.mileage);
    dom.estimateMileage.value = car.mileage;
    dom.estimateRange.value = safeMileage;
    this.updateRangeBg();
    this.render(animate);
  }

  getParams(car) {
    const dom = this.app.dom;
    const mileage = Math.max(0, Number(dom.estimateMileage.value) || 0);
    const bc = document.querySelector("input[name='body-condition']:checked")?.value || "clean";
    const per100k = car.family === "peugeot" ? 0.042 : 0.035;
    const mileageAdj = Math.max(-0.11, Math.min(0.16, ((car.mileage - mileage) / 100000) * per100k));
    const condFactors = { clean: 0, minor: -0.035, several: -0.085, heavy: -0.17 };
    const bodyAdj = condFactors[bc];
    const insAdj = dom.estimateInsurance.checked ? 0 : -0.015;
    const techAdj = dom.estimateTechnical.checked ? 0 : -0.08;
    return { mileage, mileageAdj, bodyAdj, insuranceAdj: insAdj, technicalAdj: techAdj,
             allAdj: mileageAdj + bodyAdj + insAdj + techAdj };
  }

  render(animate = false) {
    const t = this.i18n.t.bind(this.i18n);
    const dom = this.app.dom;
    const car = this.currentCar();
    const p = this.getParams(car);
    const result = Math.max(0, car.price * (1 + p.allAdj));
    const lower = result * 0.95, upper = result * 1.05;
    dom.estimateMileageLabel.textContent = this.fmt.km(p.mileage);
    dom.estimatePrice.textContent = this.fmt.compactPrice(result);
    dom.estimateResultRange.textContent = `${t("approxRange")} ${this.fmt.compactPrice(lower)} ${t("to")} ${this.fmt.compactPrice(upper)}`;
    dom.estimateBreakdown.innerHTML = `
      <span>${t("refSample")} <b>${this.fmt.shortPrice(car.price)}</b></span>
      <span>${t("mileageEffect")} <b>${this.fmt.signedMillion(car.price * p.mileageAdj)}</b></span>
      <span>${t("conditionEffect")} <b>${this.fmt.signedMillion(car.price * (p.bodyAdj + p.insuranceAdj + p.technicalAdj))}</b></span>`;
    if (animate) {
      dom.estimatePrice.animate([{ opacity: .45, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 260, easing: "ease-out" });
    }
  }
}

// ─────────────────────────────────────────────────────────────
// MODAL MANAGER
// ─────────────────────────────────────────────────────────────
class ModalManager {
  constructor(app) {
    this.app = app;
    this.i18n = app.i18n;
    this.active = null;
    this.lastFocused = null;
  }

  open(modal, type) {
    this.lastFocused = document.activeElement;
    this.active = modal;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => modal.querySelector(".modal__close")?.focus(), 40);
  }

  close(modal) {
    if (!modal || !modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (![...document.querySelectorAll(".modal.is-open")].length) {
      document.body.classList.remove("modal-open");
      this.active = null;
    }
    this.lastFocused?.focus?.();
  }

  trapFocus(e, modal) {
    const ctrls = [...modal.querySelectorAll("button, a[href], input, select, [tabindex]:not([tabindex='-1'])")]
      .filter((el) => !el.hasAttribute("disabled"));
    if (!ctrls.length) return;
    const first = ctrls[0], last = ctrls.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}

// ─────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────
class App {
  constructor() {
    this.i18n = new I18n();
    this.themeManager = new ThemeManager(this.i18n);
    this.userManager = new UserManager(this.i18n);
    this.fmt = new Formatters(this.i18n);
    this.catalog = new CarCatalog(this);
    this.chart = new ChartManager(this);
    this.estimator = new Estimator(this);
    this.modals = new ModalManager(this);
    this.dom = this.cacheDom();
    this.state = { lastFocused: null };
  }

  cacheDom() {
    const $ = (s) => document.querySelector(s);
    return {
      root: document.documentElement,
      header: $(".site-header"),
      navToggle: $("#nav-toggle"),
      mainNav: $("#main-nav"),
      themeToggle: $("#theme-toggle"),
      heroSearch: $("#hero-search"),
      heroSearchInput: $("#hero-search-input"),
      catalogSearch: $("#catalog-search-input"),
      searchClear: $("#search-clear"),
      sort: $("#sort-select"),
      grid: $("#catalog-grid"),
      empty: $("#empty-state"),
      clearFilters: $("#clear-filters"),
      emptyReset: $("#empty-reset"),
      resultCount: $("#results-count"),
      catalogMore: $("#catalog-more"),
      loadMore: $("#load-more"),
      metricModelCount: $("#metric-model-count"),
      allCount: $("#all-count"),
      prideCount: $("#pride-count"),
      peugeotCount: $("#peugeot-count"),
      heroMarketPrice: $("#hero-market-price"),
      heroMarketEnd: $("#hero-market-end"),
      insightTabs: $(".chart-tabs"),
      chartYLabels: $("#chart-y-labels"),
      mainChartLine: $("#main-chart-line"),
      mainChartArea: $("#main-chart-area"),
      mainChartPoints: $("#main-chart-points"),
      chartMainPrice: $("#chart-main-price"),
      chartChange: $("#chart-change"),
      chartDetails: $("#chart-details"),
      topPriceModel: $("#top-price-model"),
      topPriceMeta: $("#top-price-meta"),
      topPriceValue: $("#top-price-value"),
      sourceButton: $("#data-note-button"),
      estimateForm: $("#estimate-form"),
      estimateCar: $("#estimate-car"),
      estimateMileage: $("#estimate-mileage"),
      estimateRange: $("#estimate-mileage-range"),
      estimateMileageLabel: $("#estimate-mileage-label"),
      estimateInsurance: $("#estimate-insurance"),
      estimateTechnical: $("#estimate-technical"),
      estimatePrice: $("#estimate-price"),
      estimateResultRange: $("#estimate-range"),
      estimateBreakdown: $("#estimate-breakdown"),
      compareSection: $(".compare-section"),
      compareCount: $("#compare-count"),
      compareSlots: $("#compare-slots"),
      compareClear: $("#compare-clear"),
      compareOpen: $("#compare-open"),
      detailsModal: $("#details-modal"),
      modalContent: $("#modal-content"),
      compareModal: $("#compare-modal"),
      compareModalContent: $("#compare-modal-content"),
      toastRegion: $("#toast-region"),
      backToTop: $("#back-to-top"),
      yearNow: $("#year-now"),
      langToggle: $("#lang-toggle"),
      userBtn: $("#user-btn"),
      userDropdown: $("#user-dropdown"),
      loginBtn: $("#login-btn"),
      profileBtn: $("#profile-btn"),
      logoutBtn: $("#logout-btn"),
      profileModal: $("#profile-modal"),
      loginModal: $("#login-modal"),
      themeCycleBtn: $("#theme-cycle-btn"),
      profileModalContent: $("#profile-modal-content"),
      loginForm: $("#login-form"),
      profileForm: $("#profile-form")
    };
  }

  toast(message) {
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `${this.catalog.icon("check", "icon--xs")}<span>${message}</span>`;
    this.dom.toastRegion.append(t);
    setTimeout(() => {
      t.classList.add("is-leaving");
      t.addEventListener("animationend", () => t.remove(), { once: true });
    }, 3200);
  }

  applyLang(lang) {
    const dir = this.i18n.dir;
    this.dom.root.setAttribute("dir", dir);
    this.dom.root.setAttribute("lang", this.i18n.lang);
    // Re-render everything
    this.renderAll();
  }

  renderAll() {
    const t = this.i18n.t.bind(this.i18n);
    // Static translations via data-i18n (skip elements with child elements except <small>)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const attr = el.getAttribute("data-i18n-attr");
      if (attr) { el.setAttribute(attr, t(key)); return; }
      // If element has child elements other than small/svg, don't touch
      const hasComplexChildren = [...el.children].some((c) => c.tagName !== "SMALL" && c.tagName !== "SVG" && !c.classList.contains("icon"));
      if (hasComplexChildren) return;
      // Preserve <small> and SVG children
      const small = el.querySelector("small");
      const svg = el.querySelector("svg");
      if (small || svg) {
        const translated = t(key);
        // For brand with small tag, special handling
        const smallKey = small?.getAttribute("data-i18n");
        el.innerHTML = `${translated}${small && smallKey ? `<small data-i18n="${smallKey}">${t(smallKey)}</small>` : ''}${svg ? svg.outerHTML : ''}`;
      } else {
        el.textContent = t(key);
      }
    });
    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-ph"));
    });
    // Update document title
    document.title = this.i18n.currentLang === "fa"
      ? "فرمون | قیمت پراید و پژو ۴۰۵"
      : "Farmoon | Pride & Peugeot 405 Prices";

    this.catalog.updateCounts();
    this.catalog.updateFilterButtons();
    this.catalog.render();
    this.chart.update();
    this.chart.updateTop();
    this.estimator.populate();
    this.renderCompareBar();
    this.renderUserUI();
    this.updateFilterChips();
    this.updateSortOptions();
    this.dom.yearNow.textContent = this.i18n.currentLang === "fa" ? "۱۴۰۵" : "2026";
  }

  updateFilterChips() {
    const t = this.i18n.t.bind(this.i18n);
    const setLabel = (selector, key) => { const el = document.querySelector(selector); if (el) el.textContent = t(key); };
    // Re-render filter chips (they're hardcoded in HTML but we can update their text)
    const updateChip = (selector, label, countEl) => {
      const btn = document.querySelector(selector);
      if (btn) {
        const countSpan = btn.querySelector("span");
        btn.innerHTML = countSpan ? `${t(label)} <span ${countEl ? "id="+countEl : ""}>${countSpan.textContent}</span>` : t(label);
      }
    };
    // Update sort select options
    this.updateSortOptions();
  }

  updateSortOptions() {
    const t = this.i18n.t.bind(this.i18n);
    const select = this.dom.sort;
    if (!select) return;
    const options = [
      ["featured", t("sortFeatured")],
      ["price-desc", t("sortPriceDesc")],
      ["price-asc", t("sortPriceAsc")],
      ["year-desc", t("sortYearDesc")],
      ["change-desc", t("sortChangeDesc")]
    ];
    select.querySelectorAll("option").forEach((opt, i) => {
      if (options[i]) opt.textContent = options[i][1];
    });
  }

  renderCompareBar() {
    const t = this.i18n.t.bind(this.i18n);
    const dom = this.dom;
    const carsToCompare = this.catalog.compare.map((id) => this.catalog.cars.find((c) => c.id === id)).filter(Boolean);
    dom.compareSection.hidden = carsToCompare.length === 0;
    dom.compareCount.textContent = `${this.fmt.n(carsToCompare.length)} ${t("selectedOf2")}`;
    dom.compareSlots.innerHTML = [0, 1].map((slot) => {
      const car = carsToCompare[slot];
      if (!car) return `<div class="compare-slot">${this.catalog.icon("compare")}<span>${t("selectModel")}</span></div>`;
      const cl = this.catalog.carLabel(car);
      return `<div class="compare-slot is-filled"><div class="compare-slot__info"><strong>${cl.name} ${cl.trim}</strong><small>${this.fmt.compactPrice(car.price)}</small></div><button type="button" data-remove-compare="${car.id}" aria-label="${t("clear")}">${this.catalog.icon("close", "icon--xs")}</button></div>`;
    }).join("");
    dom.compareOpen.disabled = carsToCompare.length !== 2;
  }

  renderUserUI() {
    const t = this.i18n.t.bind(this.i18n);
    const { userBtn, userDropdown } = this.dom;
    const user = this.userManager.user;
    if (user) {
      userBtn.innerHTML = `<span class="user-avatar">${user.name.charAt(0)}</span> <span class="user-name">${user.name}</span>`;
      this.dom.loginBtn.style.display = "none";
      this.dom.profileBtn.style.display = "flex";
      this.dom.logoutBtn.style.display = "flex";
    } else {
      userBtn.innerHTML = `<svg class="icon"><use href="#icon-user"></use></svg> <span class="user-name">${t("login")}</span>`;
      this.dom.loginBtn.style.display = "flex";
      this.dom.profileBtn.style.display = "none";
      this.dom.logoutBtn.style.display = "none";
    }
  }

  showDetails(id) {
    const t = this.i18n.t.bind(this.i18n);
    const car = this.catalog.cars.find((c) => c.id === id);
    if (!car) return;
    const cl = this.catalog.carLabel(car);
    const tc = car.change < 0 ? "negative" : "positive";
    const ti = car.change < 0 ? "trend-down" : "spark";
    const cmp = this.catalog.compare.includes(car.id);
    const yearDisplay = cl.year;
    const condLabel = car.condition === "صفر کیلومتر" ? t("zeroKm") : cl.condition;

    this.dom.modalContent.innerHTML = `
      <div class="modal-car-visual" style="${this.catalog.cssVars(car)}">
        <span class="modal-family">${cl.family} · ${car.status === "zero" ? t("zero") : t("used")}</span>
        ${this.catalog.carSvg(car.carType)}
      </div>
      <div class="modal-body">
        <div class="modal-title-row">
          <div><h2 id="modal-title">${cl.name}</h2><p>${cl.trim}</p></div>
          <div class="modal-price"><span>${t("refPrice")}</span><strong>${this.fmt.compactPrice(car.price)}</strong></div>
        </div>
        <div class="modal-reference">
          <span>${this.catalog.icon("calendar", "icon--xs")} ${t("model")} ${this.fmt.n(yearDisplay)}</span>
          <span>${this.catalog.icon("gauge", "icon--xs")} ${this.fmt.km(car.mileage)}</span>
          <span>${this.catalog.icon("shield", "icon--xs")} ${condLabel}</span>
        </div>
        <div class="modal-range"><span>${t("observedRangeMarket")}</span><strong>${this.fmt.range(car.low, car.high)}</strong></div>
        <div class="modal-mini-chart">
          <div class="modal-mini-chart__top"><span>${t("recentTrend")}</span><b class="${tc}">${this.catalog.icon(ti, "icon--xs")} ${this.fmt.change(car.change)}</b></div>
          ${this.modalChart(car)}
        </div>
        <div class="modal-specs">
          <div class="modal-spec"><span>${t("bodyClass")}</span><strong>${cl.body}</strong></div>
          <div class="modal-spec"><span>${t("engine")}</span><strong>${cl.engine}</strong></div>
          <div class="modal-spec"><span>${t("fuel")} / ${t("gearbox")}</span><strong>${cl.fuel} · ${cl.gearbox}</strong></div>
        </div>
        <div class="modal-footer">
          <button class="button button--dark" type="button" data-estimate-car="${car.id}">${t("estimateWithThis")} ${this.catalog.icon("arrow-left", "icon--xs")}</button>
          <button class="button button--outline" type="button" data-compare="${car.id}">${cmp ? t("removeFromCompare") : t("addToCompare")} ${this.catalog.icon("compare", "icon--xs")}</button>
        </div>
        <div class="modal-source">${t("sourceSample")} <a href="${car.sourceUrl}" target="_blank" rel="noopener noreferrer">${cl.sourceName} ${this.catalog.icon("external", "icon--xs")}</a><span>·</span><span>${t("registeredDate")}</span></div>
      </div>`;
    this.modals.open(this.dom.detailsModal, "details");
  }

  modalChart(car) {
    const { line, area, points } = this.catalog.buildPath(car.history, 500, 80, 5, 4);
    const last = points.at(-1);
    return `<svg viewBox="0 0 500 80" preserveAspectRatio="none" aria-label="Price trend">
      <defs><linearGradient id="modal-gradient-${car.id}" x1="0" x2="0" y1="0" y2="1"><stop stop-color="var(--spark)" stop-opacity=".3"/><stop offset="1" stop-color="var(--spark)" stop-opacity="0"/></linearGradient></defs>
      <path d="M0 19H500M0 49H500" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 5"/>
      <path d="${area}" fill="url(#modal-gradient-${car.id})"/>
      <path d="${line}" fill="none" stroke="var(--spark)" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"/>
      ${points.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="2.4" fill="var(--card)" stroke="var(--spark)" stroke-width="2"/>`).join("")}
      <circle cx="${last.x}" cy="${last.y}" r="4.2" fill="var(--card)" stroke="var(--spark)" stroke-width="2.5"/>
    </svg>`;
  }

  openCompareModal() {
    if (this.catalog.compare.length !== 2) return;
    const t = this.i18n.t.bind(this.i18n);
    const [first, second] = this.catalog.compare.map((id) => this.catalog.cars.find((c) => c.id === id));
    const cl1 = this.catalog.carLabel(first), cl2 = this.catalog.carLabel(second);
    const row = (label, a, b, cls = "") => `<tr><th>${label}</th><td class="${cls}">${a}</td><td class="${cls}">${b}</td></tr>`;

    this.dom.compareModalContent.innerHTML = `
      <div class="compare-modal__head">
        <span class="eyebrow">${t("compareEyebrow")}</span>
        <h2 id="compare-modal-title">${t("compareTitle")}</h2>
      </div>
      <div class="compare-modal__table-wrap">
        <table class="compare-table">
          <thead><tr><th>${t("spec")}</th><th>${cl1.name} <small>${cl1.trim}</small></th><th>${cl2.name} <small>${cl2.trim}</small></th></tr></thead>
          <tbody>
            ${row(t("refPrice"), this.fmt.compactPrice(first.price), this.fmt.compactPrice(second.price), "compare-price-cell")}
            ${row(t("observedRange"), this.fmt.range(first.low, first.high), this.fmt.range(second.low, second.high))}
            ${row(t("refYear"), `${t("model")} ${this.fmt.n(cl1.year)}`, `${t("model")} ${this.fmt.n(cl2.year)}`)}
            ${row(t("refMileage"), this.fmt.km(first.mileage), this.fmt.km(second.mileage))}
            ${row(t("bodyStatus"), cl1.condition, cl2.condition)}
            ${row(t("bodyClass"), cl1.body, cl2.body)}
            ${row(t("engine"), cl1.engine, cl2.engine)}
            ${row(t("fuel"), cl1.fuel, cl2.fuel)}
            ${row(t("gearbox"), cl1.gearbox, cl2.gearbox)}
            ${row(t("lastTrend"), this.fmt.change(first.change), this.fmt.change(second.change))}
          </tbody>
        </table>
      </div>
      <p class="compare-modal__note">${t("compareNote")}</p>`;
    this.modals.open(this.dom.compareModal, "compare");
  }

  showProfileModal() {
    const t = this.i18n.t.bind(this.i18n);
    const user = this.userManager.user;
    if (!user) { this.showLoginModal(); return; }

    const favCount = this.catalog.favorites.size;
    this.dom.profileModalContent.innerHTML = `
      <div class="profile-header">
        <div class="profile-avatar-lg">${user.name.charAt(0)}</div>
        <div>
          <h2>${user.name}</h2>
          <p class="profile-email">${user.email}</p>
        </div>
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>${this.fmt.n(favCount)}</strong><span>${t("profileFavorites")}</span></div>
        <div class="profile-stat"><strong>${this.fmt.n(0)}</strong><span>${t("profileComparisons")}</span></div>
        <div class="profile-stat"><strong>${user.memberSince}</strong><span>${t("profileMemberSince")}</span></div>
      </div>
      <form id="profile-form" class="profile-form">
        <div class="field">
          <label>${t("profileName")}</label>
          <input type="text" name="name" value="${user.name}" class="text-input" />
        </div>
        <div class="field">
          <label>${t("profileEmail")}</label>
          <input type="email" name="email" value="${user.email}" class="text-input" />
        </div>
        <div class="field">
          <label>${t("profilePhone")}</label>
          <input type="tel" name="phone" value="${user.phone}" class="text-input" />
        </div>
        <div class="profile-form-actions">
          <button type="submit" class="button button--dark">${t("profileSave")}</button>
          <button type="button" class="button button--outline" data-close-profile>${t("cancel")}</button>
        </div>
      </form>`;
    this.modals.open(this.dom.profileModal, "profile");

    const form = this.dom.profileModal.querySelector("#profile-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      this.userManager.update({
        name: fd.get("name") || user.name,
        email: fd.get("email") || user.email,
        phone: fd.get("phone") || user.phone
      });
      this.modals.close(this.dom.profileModal);
      this.renderUserUI();
      this.toast(t("profileSave"));
    });
  }

  showLoginModal() {
    const t = this.i18n.t.bind(this.i18n);
    const content = this.dom.loginModal.querySelector(".login-modal-body");
    content.innerHTML = `
      <div class="login-header">
        <div class="login-icon">${this.catalog.icon("shield")}</div>
        <h2>${t("loginTitle")}</h2>
        <p>${t("loginDesc")}</p>
      </div>
      <form id="login-form" class="login-form">
        <div class="field">
          <label>${t("username")}</label>
          <input type="text" name="username" required class="text-input" placeholder="${t("username")}" />
        </div>
        <div class="field">
          <label>${t("password")}</label>
          <input type="password" name="password" required class="text-input" placeholder="${t("password")}" />
        </div>
        <div class="login-form-actions">
          <button type="submit" class="button button--dark">${t("loginButton")}</button>
          <button type="button" class="button button--outline" data-close-login>${t("cancel")}</button>
        </div>
      </form>`;
    this.modals.open(this.dom.loginModal, "login");

    const form = content.querySelector("#login-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      this.userManager.login(fd.get("username"));
      this.modals.close(this.dom.loginModal);
      this.renderUserUI();
      this.toast(this.i18n.t("loginButton"));
    });
  }

  selectEstimateCar(id) {
    const car = this.catalog.cars.find((c) => c.id === id);
    if (!car) return;
    this.dom.estimateCar.value = car.id;
    this.modals.close(this.dom.detailsModal);
    document.querySelector("#estimator").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      this.estimator.setRef();
      this.dom.estimateMileage.focus({ preventScroll: true });
    }, 450);
  }

  handleScroll() {
    const scrolled = window.scrollY > 10;
    this.dom.header.classList.toggle("is-scrolled", scrolled);
    this.dom.backToTop.classList.toggle("is-visible", window.scrollY > 680);
  }

  updateNavOnScroll() {
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...this.dom.mainNav.querySelectorAll("a")];
    const observer = new IntersectionObserver((entries) => {
      const entry = entries.filter((i) => i.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!entry) return;
      navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
    }, { rootMargin: "-28% 0px -62% 0px", threshold: [0.01, 0.2, 0.45] });
    sections.forEach((s) => observer.observe(s));
  }

  updateRangeBackgroundEstimator() {
    this.estimator.updateRangeBg();
  }

  bindEvents() {
    const t = this.i18n.t.bind(this.i18n);
    const dom = this.dom;

    // Language toggle
    dom.langToggle?.addEventListener("click", () => {
      const next = this.i18n.currentLang === "fa" ? "en" : "fa";
      this.i18n.setLang(next);
      this.applyLang(next);
    });

    // Theme cycle
    dom.themeCycleBtn?.addEventListener("click", () => {
      const prev = this.themeManager.current;
      const next = this.themeManager.cycle();
      const themeLabels = { light: t("themeLight"), dark: t("themeDark"), sunset: t("themeSunset"), ocean: t("themeOcean"), hacker: t("themeHacker") };
      this.toast(`${t("profileTheme")}: ${themeLabels[next] || next}`);
    });

    // Theme toggle (old light/dark)
    dom.themeToggle?.addEventListener("click", () => {
      const next = dom.root.dataset.theme === "dark" ? "light" : "dark";
      this.themeManager.apply(next);
    });

    // User dropdown
    dom.userBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      dom.userDropdown.classList.toggle("is-open");
    });
    document.addEventListener("click", () => dom.userDropdown?.classList.remove("is-open"));

    dom.loginBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      dom.userDropdown.classList.remove("is-open");
      this.showLoginModal();
    });
    dom.profileBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      dom.userDropdown.classList.remove("is-open");
      this.showProfileModal();
    });
    dom.logoutBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      dom.userDropdown.classList.remove("is-open");
      this.userManager.logout();
      this.renderUserUI();
    });

    this.userManager.onChange(() => this.renderUserUI());
    this.i18n.onChange((lang) => this.applyLang(lang));

    // Global click delegation
    document.addEventListener("click", (e) => {
      // Catalog clicks
      if (e.target.closest("#catalog") || e.target.closest("[data-details]") || e.target.closest("[data-favorite]") || e.target.closest("[data-compare]")) {
        const fam = e.target.closest("[data-filter-family]");
        const cond = e.target.closest("[data-filter-condition]");
        const prc = e.target.closest("[data-filter-price]");
        const det = e.target.closest("[data-details]");
        const fav = e.target.closest("[data-favorite]");
        const cmp = e.target.closest("[data-compare]");

        if (fam) { this.catalog.state.family = fam.dataset.filterFamily; this.catalog.updateFilterButtons(); this.catalog.render(true); return; }
        if (cond) { this.catalog.state.condition = cond.dataset.filterCondition; this.catalog.updateFilterButtons(); this.catalog.render(true); return; }
        if (prc) { this.catalog.state.priceRange = prc.dataset.filterPrice; this.catalog.updateFilterButtons(); this.catalog.render(true); return; }
        if (det) { this.showDetails(det.dataset.details); return; }
        if (fav) { this.catalog.toggleFavorite(fav.dataset.favorite); return; }
        if (cmp) { this.catalog.toggleCompare(cmp.dataset.compare); }
      }

      // Modal close buttons
      if (e.target.closest("[data-close-modal]")) this.modals.close(dom.detailsModal);
      if (e.target.closest("[data-close-compare]")) this.modals.close(dom.compareModal);
      if (e.target.closest("[data-close-profile]")) this.modals.close(dom.profileModal);
      if (e.target.closest("[data-close-login]")) this.modals.close(dom.loginModal);
    });

    // Details modal interactions
    dom.detailsModal.addEventListener("click", (e) => {
      const mc = e.target.closest("[data-compare]");
      const me = e.target.closest("[data-estimate-car]");
      if (mc) { this.catalog.toggleCompare(mc.dataset.compare); this.showDetails(mc.dataset.compare); return; }
      if (me) { this.selectEstimateCar(me.dataset.estimateCar); return; }
    });

    // Compare
    dom.compareClear.addEventListener("click", () => { this.catalog.compare = []; this.renderCompareBar(); this.catalog.render(); });
    dom.compareSlots.addEventListener("click", (e) => {
      const r = e.target.closest("[data-remove-compare]");
      if (r) this.catalog.toggleCompare(r.dataset.removeCompare);
    });
    dom.compareOpen.addEventListener("click", () => this.openCompareModal());

    // Search
    dom.catalogSearch.addEventListener("input", () => { this.catalog.state.query = dom.catalogSearch.value; this.catalog.render(true); });
    dom.searchClear.addEventListener("click", () => { dom.catalogSearch.value = ""; this.catalog.state.query = ""; this.catalog.render(true); dom.catalogSearch.focus(); });
    dom.sort.addEventListener("change", () => { this.catalog.state.sort = dom.sort.value; this.catalog.render(true); });
    dom.clearFilters.addEventListener("click", () => this.catalog.resetFilters());
    dom.emptyReset.addEventListener("click", () => this.catalog.resetFilters());
    dom.loadMore.addEventListener("click", () => { this.catalog.state.visible += 6; this.catalog.render(); });

    dom.heroSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      this.catalog.state.query = dom.heroSearchInput.value;
      dom.catalogSearch.value = this.catalog.state.query;
      this.catalog.render(true);
      document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.querySelectorAll("[data-quick-search]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.catalog.state.query = btn.dataset.quickSearch;
        dom.heroSearchInput.value = this.catalog.state.query;
        dom.catalogSearch.value = this.catalog.state.query;
        this.catalog.render(true);
        document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // Chart tabs
    dom.insightTabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-insight-family]");
      if (!btn) return;
      this.catalog.state.insightFamily = btn.dataset.insightFamily;
      dom.insightTabs.querySelectorAll("button").forEach((tab) => {
        const sel = tab === btn;
        tab.classList.toggle("is-active", sel);
        tab.setAttribute("aria-selected", String(sel));
      });
      this.chart.update();
    });
    dom.chartDetails.addEventListener("click", () => document.querySelector("#sources").scrollIntoView({ behavior: "smooth" }));
    dom.sourceButton.addEventListener("click", () => {
      this.toast(t("refDataNote"));
      document.querySelector("#sources").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Estimator
    dom.estimateCar.addEventListener("change", () => this.estimator.setRef());
    dom.estimateMileage.addEventListener("input", () => {
      const max = Number(dom.estimateRange.max);
      const v = Math.min(max, Math.max(0, Number(dom.estimateMileage.value) || 0));
      dom.estimateRange.value = v;
      this.estimator.updateRangeBg();
      this.estimator.render();
    });
    dom.estimateRange.addEventListener("input", () => {
      dom.estimateMileage.value = dom.estimateRange.value;
      this.estimator.updateRangeBg();
      this.estimator.render();
    });
    document.querySelectorAll("input[name='body-condition'], #estimate-insurance, #estimate-technical").forEach((inp) => {
      inp.addEventListener("change", () => this.estimator.render());
    });
    dom.estimateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.estimator.render(true);
      this.toast(t("estimateUpdated"));
    });

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (dom.compareModal.classList.contains("is-open")) this.modals.close(dom.compareModal);
        else if (dom.detailsModal.classList.contains("is-open")) this.modals.close(dom.detailsModal);
        else if (dom.profileModal.classList.contains("is-open")) this.modals.close(dom.profileModal);
        else if (dom.loginModal.classList.contains("is-open")) this.modals.close(dom.loginModal);
      }
      if (e.key === "Tab" && this.modals.active) this.modals.trapFocus(e, this.modals.active);
    });

    // Nav
    dom.navToggle.addEventListener("click", () => {
      const open = dom.mainNav.classList.toggle("is-open");
      dom.navToggle.setAttribute("aria-expanded", String(open));
    });
    dom.mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      dom.mainNav.classList.remove("is-open");
      dom.navToggle.setAttribute("aria-expanded", "false");
    }));

    dom.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => this.handleScroll(), { passive: true });
  }

  init() {
    this.themeManager.init();
    this.applyLang(this.i18n.currentLang);
    this.bindEvents();
    this.updateNavOnScroll();
    this.handleScroll();
    this.renderUserUI();
  }
}

// Bootstrap
const app = new App();
document.addEventListener("DOMContentLoaded", () => app.init());
