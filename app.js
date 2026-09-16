/* فرمون — داده‌های نمونه بازار و رابط کاربری بدون وابستگی به فریم‌ورک */

const SOURCE_URLS = {
  bama151: "https://bama.ir/price/pride_151_gx",
  hamrahPride: "https://www.hamrah-mechanic.com/carprice/pride/",
  hamrah111: "https://www.hamrah-mechanic.com/carprice/saipa/pride111/1396/215/",
  hamrah131: "https://www.hamrah-mechanic.com/carprice/saipa/pride131/1396/220/",
  baravard111: "https://baravard.com/pricing/446/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-111-%D9%87%D8%A7%DA%86-%D8%A8%DA%A9-se?model=1396",
  baravard132: "https://baravard.com/pricing/310/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-se?model=1396",
  baravard132sl: "https://baravard.com/pricing/312/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-sl?model=1390",
  baravard132basic: "https://baravard.com/pricing/314/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-132-%D8%B3%D8%A7%D8%AF%D9%87?model=1389",
  faradeedPride: "https://faradeed.ir/%D8%A8%D8%AE%D8%B4-%D9%85%D8%AC%D9%84%D9%87-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-69/299190-%D9%82%DB%8C%D9%85%D8%AA-%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-%DA%A9%D8%A7%D8%B1%DA%A9%D8%B1%D8%AF%D9%87-%D8%A7%D9%85%D8%B1%D9%88%D8%B2-%DB%8C%DA%A9%D8%B4%D9%86%D8%A8%D9%87-%DB%B2%DB%B7-%D8%A7%D8%B1%D8%AF%DB%8C%D8%A8%D9%87%D8%B4%D8%AA",
  z4nasim: "https://z4car.com/price/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF/%D9%82%DB%8C%D9%85%D8%AA-%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF-%D9%87%D8%A7%DA%86%D8%A8%DA%A9-%D9%86%D8%B3%DB%8C%D9%85",
  divar405: "https://divar.ir/s/tehran/car/peugeot/405",
  divar405cng: "https://divar.ir/s/tehran/car/peugeot/405/glx-bi-fuel(cng)",
  hamrah405glx: "https://www.hamrah-mechanic.com/carprice/irankhodro/peugeot405/type-177/",
  hamrah405cng: "https://www.hamrah-mechanic.com/carprice/irankhodro/peugeot405/type-1204/",
  hamrah405slx: "https://www.hamrah-mechanic.com/carprice/irankhodro/405slx/",
  vana405: "https://vananews.com/fa/news/666074/%D9%82%DB%8C%D9%85%D8%AA-%D9%BE%DA%98%D9%88-405-%DA%A9%D8%A7%D8%B1%DA%A9%D8%B1%D8%AF%D9%87-%D8%AF%D8%B1-%D8%B4%D9%87%D8%B1%DB%8C%D9%88%D8%B1-1405-405-%DB%8C%DA%A9-%D9%85%DB%8C%D9%84%DB%8C%D8%A7%D8%B1%D8%AF%DB%8C-%D8%B4%D8%AF-%D9%BE%DA%98%D9%88-405-%D8%A8%D8%AE%D8%B1%DB%8C%D9%85-%DB%8C%D8%A7-%D8%B3%D9%85%D9%86%D8%AF-lx"
};

const palette = {
  pride: {
    start: "#d9efec",
    end: "#98d2ca",
    body: "#477879",
    roof: "#eef5f3",
    glass: "#245b66",
    line: "#167276"
  },
  prideWarm: {
    start: "#f5e8cf",
    end: "#e8be7e",
    body: "#8d654b",
    roof: "#f5eee0",
    glass: "#416474",
    line: "#b35f3d"
  },
  prideBlue: {
    start: "#dce9f5",
    end: "#9bb8d8",
    body: "#3d668c",
    roof: "#edf3f8",
    glass: "#1e4c72",
    line: "#3c78b1"
  },
  peugeot: {
    start: "#dae9ef",
    end: "#9ebdc8",
    body: "#4a6779",
    roof: "#e7f0f1",
    glass: "#234e63",
    line: "#1a6a78"
  },
  peugeotDark: {
    start: "#e0e6ed",
    end: "#9daab8",
    body: "#465766",
    roof: "#e7ecee",
    glass: "#314e65",
    line: "#3e6079"
  },
  peugeotGold: {
    start: "#f2e8bc",
    end: "#d6bd67",
    body: "#968044",
    roof: "#f5efd3",
    glass: "#496072",
    line: "#9a7621"
  }
};

// تمام قیمت‌ها برحسب «میلیون تومان» نگه‌داری می‌شوند.
// هر ردیف یک نمونه مرجع با سال، کارکرد و وضعیت بدنه مشخص است؛ نه قیمت قطعی تمام خودروهای آن مدل.
const cars = [
  {
    id: "pride-saba-1389", family: "pride", familyLabel: "پراید", name: "پراید صبا", trim: "دنده‌ای", year: 1389,
    mileage: 265000, condition: "بدون رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 475, low: 445, high: 505, change: 0.4, history: [448, 451, 456, 462, 459, 473, 475],
    description: "نمونه صندوقدار قدیمی؛ سلامت شاسی و وضعیت فنی در این مدل اثر زیادی دارد.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrahPride, visual: "prideWarm", carType: "sedan", order: 15
  },
  {
    id: "pride-nasim-1388", family: "pride", familyLabel: "پراید", name: "پراید نسیم", trim: "هاچ‌بک دنده‌ای", year: 1388,
    mileage: 320000, condition: "یک لکه رنگ", status: "used", body: "هاچ‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 440, low: 398, high: 482, change: -0.3, history: [421, 430, 433, 442, 447, 441, 440],
    description: "بازه بازار این مدل به کارکرد، سلامت اتاق و کیفیت نگهداری وابسته است.", sourceName: "Z4Car", sourceUrl: SOURCE_URLS.z4nasim, visual: "prideBlue", carType: "hatch", order: 17
  },
  {
    id: "pride-111-se-1396", family: "pride", familyLabel: "پراید", name: "پراید ۱۱۱", trim: "SE", year: 1396,
    mileage: 180000, condition: "بدون رنگ", status: "used", body: "هاچ‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 755, low: 740, high: 770, change: -0.6, history: [705, 722, 739, 752, 770, 760, 755],
    description: "نمونه مرجع با کارکرد متعارف و بدنه سالم؛ هاچ‌بک‌های تمیز معمولاً تقاضای بیشتری دارند.", sourceName: "برآورد", sourceUrl: SOURCE_URLS.baravard111, visual: "pride", carType: "hatch", order: 4
  },
  {
    id: "pride-111-ex-1393", family: "pride", familyLabel: "پراید", name: "پراید ۱۱۱", trim: "EX", year: 1393,
    mileage: 250000, condition: "بدون رنگ", status: "used", body: "هاچ‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 605, low: 581, high: 629, change: 0.2, history: [571, 580, 586, 593, 600, 604, 605],
    description: "یک نمونه EX با کارکرد مرجع؛ آپشن‌ها و سلامت کابین، اختلاف قیمت ایجاد می‌کنند.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah111, visual: "prideBlue", carType: "hatch", order: 10
  },
  {
    id: "pride-111-sx-1395", family: "pride", familyLabel: "پراید", name: "پراید ۱۱۱", trim: "SX", year: 1395,
    mileage: 210000, condition: "یک لکه رنگ", status: "used", body: "هاچ‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 559, low: 535, high: 583, change: -0.2, history: [527, 540, 546, 552, 560, 560, 559],
    description: "نمونه SX در بازه میانی بازار؛ رنگ‌شدگی و سابقه سرویس را حتماً بررسی کن.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.faradeedPride, visual: "prideWarm", carType: "hatch", order: 13
  },
  {
    id: "pride-131-se-1396", family: "pride", familyLabel: "پراید", name: "پراید ۱۳۱", trim: "SE", year: 1396,
    mileage: 158000, condition: "بدون رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 635, low: 610, high: 660, change: 0.5, history: [595, 604, 614, 620, 626, 632, 635],
    description: "نمونه صندوقدار با کارکرد مرجع؛ قیمت ارائه‌شده برای وضعیت سالم و متعارف است.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah131, visual: "pride", carType: "sedan", order: 7
  },
  {
    id: "pride-131-bifuel-1395", family: "pride", familyLabel: "پراید", name: "پراید ۱۳۱", trim: "دوگانه‌سوز", year: 1395,
    mileage: 205000, condition: "بدون رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "CNG / بنزین", gearbox: "دستی",
    price: 615, low: 580, high: 650, change: 0.1, history: [579, 588, 595, 602, 609, 614, 615],
    description: "دوگانه‌سوز شرکتی؛ سلامت مخزن، مدار گاز و معاینه فنی را پیش از خرید چک کن.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrahPride, visual: "prideWarm", carType: "sedan", order: 11
  },
  {
    id: "pride-132-se-1396", family: "pride", familyLabel: "پراید", name: "پراید ۱۳۲", trim: "SE", year: 1396,
    mileage: 180000, condition: "بدون رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 720, low: 705, high: 735, change: 0, history: [681, 689, 700, 715, 723, 720, 720],
    description: "نمونه مرجع ۱۳۲ SE با کارکرد متعارف؛ موتور، جلوبندی و بدنه بر قیمت اثر مستقیم دارند.", sourceName: "برآورد", sourceUrl: SOURCE_URLS.baravard132, visual: "prideBlue", carType: "sedan", order: 5
  },
  {
    id: "pride-132-sl-1390", family: "pride", familyLabel: "پراید", name: "پراید ۱۳۲", trim: "SL", year: 1390,
    mileage: 280000, condition: "بدون رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 533, low: 522, high: 544, change: 0.7, history: [499, 503, 512, 519, 527, 529, 533],
    description: "نمونه SL با کارکرد مرجع؛ برای خودروهای این سال، بازدید شاسی مهم‌تر از ظاهر است.", sourceName: "برآورد", sourceUrl: SOURCE_URLS.baravard132sl, visual: "prideWarm", carType: "sedan", order: 14
  },
  {
    id: "pride-132-basic-1389", family: "pride", familyLabel: "پراید", name: "پراید ۱۳۲", trim: "ساده", year: 1389,
    mileage: 320000, condition: "یک لکه رنگ", status: "used", body: "صندوقدار", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 502, low: 492, high: 512, change: 0.6, history: [469, 478, 482, 488, 492, 499, 502],
    description: "تیپ ساده با کارکرد مرجع؛ رنگ و کارکرد زیاد می‌تواند فاصله قیمت را بیشتر کند.", sourceName: "برآورد", sourceUrl: SOURCE_URLS.baravard132basic, visual: "prideBlue", carType: "sedan", order: 16
  },
  {
    id: "pride-141-se-1394", family: "pride", familyLabel: "پراید", name: "پراید ۱۴۱", trim: "SE", year: 1394,
    mileage: 220000, condition: "بدون رنگ", status: "used", body: "لیفت‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 535, low: 505, high: 565, change: 0.3, history: [502, 511, 515, 522, 530, 533, 535],
    description: "لیفت‌بک ۱۴۱؛ وضعیت درِ صندوق، اتاق و نشتی‌ها را هنگام کارشناسی بررسی کن.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.faradeedPride, visual: "pride", carType: "liftback", order: 12
  },
  {
    id: "pride-141-sx-1390", family: "pride", familyLabel: "پراید", name: "پراید ۱۴۱", trim: "SX", year: 1390,
    mileage: 280000, condition: "چند لکه رنگ", status: "used", body: "لیفت‌بک", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 420, low: 380, high: 460, change: -0.4, history: [408, 414, 428, 435, 426, 422, 420],
    description: "نمونه‌ای با بدنه دارای اثر رنگ؛ این مبلغ باید همراه با بازدید فنی تفسیر شود.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.faradeedPride, visual: "prideWarm", carType: "liftback", order: 19
  },
  {
    id: "pride-151-se-1403", family: "pride", familyLabel: "پراید", name: "پراید ۱۵۱", trim: "SE", year: 1403,
    mileage: 46000, condition: "بدون رنگ", status: "used", body: "وانت", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 918, low: 880, high: 960, change: 0.6, history: [860, 874, 887, 899, 908, 913, 918],
    description: "وانت ۱۵۱ کم‌کار؛ اتاق بار، شاسی و میزان فشار کاری گذشته در قیمت مؤثر است.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.faradeedPride, visual: "prideBlue", carType: "pickup", order: 8
  },
  {
    id: "pride-151-gx-1405", family: "pride", familyLabel: "پراید", name: "پراید ۱۵۱", trim: "GX", year: 1405,
    mileage: 0, condition: "صفر کیلومتر", status: "zero", body: "وانت", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 1030, low: 1000, high: 1060, change: 0, history: [1010, 1015, 1022, 1028, 1030, 1030, 1030],
    description: "نمونه صفر کیلومتر؛ تفکیک قیمت بازار و کارخانه را هنگام خرید حتماً در نظر بگیر.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrahPride, visual: "pride", carType: "pickup", order: 3
  },
  {
    id: "pride-151-gx-liner-1405", family: "pride", familyLabel: "پراید", name: "پراید ۱۵۱", trim: "GX لاینر", year: 1405,
    mileage: 0, condition: "صفر کیلومتر", status: "zero", body: "وانت", engine: "۱٫۳ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 1160, low: 1120, high: 1200, change: -2.5, history: [1210, 1202, 1195, 1187, 1178, 1165, 1160],
    description: "نسخه لاینر با قیمت بازار؛ وضعیت عرضه و آپشن‌ها می‌تواند بازه را تغییر دهد.", sourceName: "باما", sourceUrl: SOURCE_URLS.bama151, visual: "prideWarm", carType: "pickup", order: 2
  },
  {
    id: "peugeot-405-glx-petrol-1395", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "GLX بنزینی", year: 1395,
    mileage: 180000, condition: "یک لکه رنگ", status: "used", body: "سدان", engine: "۱٫۸ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 900, low: 850, high: 950, change: 1.1, history: [810, 824, 841, 856, 870, 890, 900],
    description: "نمونه GLX بنزینی با کارکرد مرجع؛ سلامت موتور XU7 و سیستم خنک‌کاری ارزش بررسی دارد.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.vana405, visual: "peugeot", carType: "peugeot", order: 9
  },
  {
    id: "peugeot-405-glx-petrol-1399", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "GLX بنزینی", year: 1399,
    mileage: 115000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "۱٫۸ لیتری", fuel: "بنزین", gearbox: "دستی",
    price: 1200, low: 1140, high: 1260, change: 1.6, history: [1085, 1105, 1120, 1148, 1166, 1181, 1200],
    description: "نمونه کم‌کارتر GLX؛ اختلاف کارکرد و کیفیت نگهداری می‌تواند قیمت را جابه‌جا کند.", sourceName: "برآورد", sourceUrl: SOURCE_URLS.hamrah405glx, visual: "peugeotDark", carType: "peugeot", order: 1
  },
  {
    id: "peugeot-405-glx-cng-1393", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "GLX دوگانه‌سوز", year: 1393,
    mileage: 235000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "۱٫۸ لیتری", fuel: "CNG / بنزین", gearbox: "دستی",
    price: 850, low: 816, high: 884, change: 0.5, history: [790, 801, 813, 827, 836, 846, 850],
    description: "دوگانه‌سوز شرکتی؛ تاریخ مخزن و سلامت کیت گاز بخشی از ارزش خودرو است.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah405cng, visual: "peugeotGold", carType: "peugeot", order: 18
  },
  {
    id: "peugeot-405-glx-cng-1396", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "GLX دوگانه‌سوز", year: 1396,
    mileage: 150000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "۱٫۸ لیتری", fuel: "CNG / بنزین", gearbox: "دستی",
    price: 1100, low: 1045, high: 1155, change: 0.9, history: [1012, 1021, 1038, 1056, 1074, 1090, 1100],
    description: "نمونه مرجع بدون رنگ؛ قیمت این تیپ در آگهی‌ها با وضعیت مخزن و بدنه فاصله زیادی دارد.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.vana405, visual: "peugeot", carType: "peugeot", order: 6
  },
  {
    id: "peugeot-405-glx-cng-1397", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "GLX دوگانه‌سوز", year: 1397,
    mileage: 180000, condition: "یک گلگیر رنگ", status: "used", body: "سدان", engine: "۱٫۸ لیتری", fuel: "CNG / بنزین", gearbox: "دستی",
    price: 1170, low: 1110, high: 1230, change: 1.3, history: [1060, 1080, 1105, 1122, 1134, 1155, 1170],
    description: "نمونه با یک گلگیر رنگ؛ اختلاف قیمت با نسخه بی‌رنگ را باید با کارشناسی بدنه سنجید.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.vana405, visual: "peugeotDark", carType: "peugeot", order: 20
  },
  {
    id: "peugeot-405-slx-1391", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "SLX موتور TU5", year: 1391,
    mileage: 270000, condition: "چند لکه رنگ", status: "used", body: "سدان", engine: "TU5 · ۱٫۶", fuel: "بنزین", gearbox: "دستی",
    price: 940, low: 890, high: 990, change: -0.5, history: [905, 915, 928, 950, 953, 945, 940],
    description: "SLX با موتور TU5؛ کیفیت تعمیرات قبلی و سلامت موتور، اختلاف قیمت ایجاد می‌کند.", sourceName: "گزارش بازار", sourceUrl: SOURCE_URLS.vana405, visual: "peugeotGold", carType: "peugeot", order: 21
  },
  {
    id: "peugeot-405-slx-1395", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "SLX موتور TU5", year: 1395,
    mileage: 192000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "TU5 · ۱٫۶", fuel: "بنزین", gearbox: "دستی",
    price: 1140, low: 1094, high: 1186, change: 1.2, history: [1052, 1060, 1079, 1090, 1108, 1126, 1140],
    description: "نمونه مرجع SLX با کارکرد متعارف؛ موتور TU5 در این تیپ عامل اصلی تفاوت قیمت است.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah405slx, visual: "peugeot", carType: "peugeot", order: 3
  },
  {
    id: "peugeot-405-slx-1397", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "SLX موتور TU5", year: 1397,
    mileage: 152000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "TU5 · ۱٫۶", fuel: "بنزین", gearbox: "دستی",
    price: 1295, low: 1243, high: 1347, change: 1.0, history: [1200, 1218, 1230, 1250, 1265, 1282, 1295],
    description: "نمونه کم‌کارتر SLX؛ شرایط بدنه و کارکرد واقعی را در مقایسه با قیمت مرجع لحاظ کن.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah405slx, visual: "peugeotDark", carType: "peugeot", order: 2
  },
  {
    id: "peugeot-405-slx-1399", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "SLX موتور TU5", year: 1399,
    mileage: 150000, condition: "بدون رنگ", status: "used", body: "سدان", engine: "TU5 · ۱٫۶", fuel: "بنزین", gearbox: "دستی",
    price: 1500, low: 1440, high: 1560, change: 1.5, history: [1375, 1394, 1417, 1442, 1461, 1478, 1500],
    description: "نمونه مرجع SLX مدل بالاتر؛ بازه قیمت با رنگ، کارکرد و سابقه سرویس تغییر می‌کند.", sourceName: "همراه مکانیک", sourceUrl: SOURCE_URLS.hamrah405slx, visual: "peugeot", carType: "peugeot", order: 1
  },
  {
    id: "peugeot-405-taxi-cng-1400", family: "peugeot", familyLabel: "پژو ۴۰۵", name: "پژو ۴۰۵", trim: "تاکسی دوگانه‌سوز", year: 1400,
    mileage: 145000, condition: "بدون رنگ", status: "used", body: "سدان تاکسی", engine: "۱٫۸ لیتری", fuel: "CNG / بنزین", gearbox: "دستی",
    price: 650, low: 600, high: 720, change: 0.8, history: [580, 592, 605, 617, 628, 645, 650],
    description: "نمونه تاکسی دوگانه‌سوز؛ نوع کاربری و سابقه سرویس‌های دوره‌ای باید جداگانه بررسی شود.", sourceName: "دیوار", sourceUrl: SOURCE_URLS.divar405cng, visual: "peugeotGold", carType: "peugeot", order: 22
  }
];

const dom = {
  root: document.documentElement,
  header: document.querySelector(".site-header"),
  navToggle: document.querySelector("#nav-toggle"),
  mainNav: document.querySelector("#main-nav"),
  themeToggle: document.querySelector("#theme-toggle"),
  heroSearch: document.querySelector("#hero-search"),
  heroSearchInput: document.querySelector("#hero-search-input"),
  catalogSearch: document.querySelector("#catalog-search-input"),
  searchClear: document.querySelector("#search-clear"),
  sort: document.querySelector("#sort-select"),
  grid: document.querySelector("#catalog-grid"),
  empty: document.querySelector("#empty-state"),
  clearFilters: document.querySelector("#clear-filters"),
  emptyReset: document.querySelector("#empty-reset"),
  resultCount: document.querySelector("#results-count"),
  catalogMore: document.querySelector("#catalog-more"),
  loadMore: document.querySelector("#load-more"),
  metricModelCount: document.querySelector("#metric-model-count"),
  allCount: document.querySelector("#all-count"),
  prideCount: document.querySelector("#pride-count"),
  peugeotCount: document.querySelector("#peugeot-count"),
  heroMarketPrice: document.querySelector("#hero-market-price"),
  heroMarketEnd: document.querySelector("#hero-market-end"),
  insightTabs: document.querySelector(".chart-tabs"),
  chartYLabels: document.querySelector("#chart-y-labels"),
  mainChartLine: document.querySelector("#main-chart-line"),
  mainChartArea: document.querySelector("#main-chart-area"),
  mainChartPoints: document.querySelector("#main-chart-points"),
  chartMainPrice: document.querySelector("#chart-main-price"),
  chartChange: document.querySelector("#chart-change"),
  chartDetails: document.querySelector("#chart-details"),
  topPriceModel: document.querySelector("#top-price-model"),
  topPriceMeta: document.querySelector("#top-price-meta"),
  topPriceValue: document.querySelector("#top-price-value"),
  sourceButton: document.querySelector("#data-note-button"),
  estimateForm: document.querySelector("#estimate-form"),
  estimateCar: document.querySelector("#estimate-car"),
  estimateMileage: document.querySelector("#estimate-mileage"),
  estimateRange: document.querySelector("#estimate-mileage-range"),
  estimateMileageLabel: document.querySelector("#estimate-mileage-label"),
  estimateInsurance: document.querySelector("#estimate-insurance"),
  estimateTechnical: document.querySelector("#estimate-technical"),
  estimatePrice: document.querySelector("#estimate-price"),
  estimateResultRange: document.querySelector("#estimate-range"),
  estimateBreakdown: document.querySelector("#estimate-breakdown"),
  compareSection: document.querySelector(".compare-section"),
  compareCount: document.querySelector("#compare-count"),
  compareSlots: document.querySelector("#compare-slots"),
  compareClear: document.querySelector("#compare-clear"),
  compareOpen: document.querySelector("#compare-open"),
  detailsModal: document.querySelector("#details-modal"),
  modalContent: document.querySelector("#modal-content"),
  compareModal: document.querySelector("#compare-modal"),
  compareModalContent: document.querySelector("#compare-modal-content"),
  toastRegion: document.querySelector("#toast-region"),
  backToTop: document.querySelector("#back-to-top"),
  yearNow: document.querySelector("#year-now")
};

const state = {
  family: "all",
  condition: "all",
  priceRange: "all",
  query: "",
  sort: "featured",
  visible: 6,
  insightFamily: "all",
  favorites: loadStorageSet("farmoon-favorites"),
  compare: [],
  lastFocused: null,
  activeModal: null
};

function loadStorageSet(key) {
  try {
    const item = JSON.parse(window.localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(item) ? item : []);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  try {
    window.localStorage.setItem("farmoon-favorites", JSON.stringify([...state.favorites]));
  } catch {
    // استفاده از سایت بدون localStorage هم ممکن است؛ علاقه‌مندی فقط ذخیره نخواهد شد.
  }
}

const faNumber = new Intl.NumberFormat("fa-IR");
const faDecimal = new Intl.NumberFormat("fa-IR", { minimumFractionDigits: 0, maximumFractionDigits: 2 });

function formatNumber(value) {
  return faNumber.format(Math.round(value));
}

function formatCompactPrice(million) {
  if (million >= 1000) {
    return `${faDecimal.format(million / 1000)} میلیارد تومان`;
  }
  return `${formatNumber(million)} میلیون تومان`;
}

function formatShortPrice(million) {
  if (million >= 1000) return `${faDecimal.format(million / 1000)} میلیارد`;
  return `${formatNumber(million)} م`;
}

function formatRange(low, high) {
  return `${formatShortPrice(low)} تا ${formatShortPrice(high)}`;
}

function formatKilometers(value) {
  return `${formatNumber(value)} km`;
}

function formatChange(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${faDecimal.format(value)}٪`;
}

function formatSignedMillion(value) {
  if (Math.abs(value) < 0.5) return "۰";
  const sign = value > 0 ? "+" : "−";
  return `${sign}${formatShortPrice(Math.abs(value))}`;
}

function normalize(value) {
  const digitMap = {
    "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9",
    "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9"
  };
  return String(value || "")
    .toLowerCase()
    .replace(/[۰-۹٠-٩]/g, (d) => digitMap[d])
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[‌\s\-_/]+/g, " ")
    .trim();
}

function carSearchText(car) {
  return normalize([
    car.name, car.familyLabel, car.trim, car.year, car.body, car.engine, car.fuel, car.gearbox,
    car.status === "zero" ? "صفر کم کار" : "کارکرده", car.id.replaceAll("-", " "),
    car.family === "peugeot" ? "405 پژو peugot peugeot slx glx tu5 xu7" : "pride saipa"
  ].join(" "));
}

function cssVariablesFor(car) {
  const colors = palette[car.visual];
  return `--visual-bg-start:${colors.start};--visual-bg-end:${colors.end};--car-body:${colors.body};--car-roof:${colors.roof};--car-glass:${colors.glass};--spark:${colors.line};`;
}

function carSvg(type, className = "car-silhouette") {
  const commonStart = `<svg class="${className}" viewBox="0 0 420 180" aria-hidden="true" focusable="false">`;
  const commonEnd = `</svg>`;
  const wheels = `<circle class="wheel" cx="114" cy="133" r="27"/><circle class="rim" cx="114" cy="133" r="13"/><circle class="wheel" cx="313" cy="133" r="27"/><circle class="rim" cx="313" cy="133" r="13"/>`;

  if (type === "pickup") {
    return `${commonStart}
      <ellipse cx="212" cy="154" rx="168" ry="12" fill="rgba(20,48,61,.20)"/>
      <path class="body" d="M43 130c4-18 19-28 40-30h49l50-47c10-10 23-15 37-15h50c16 0 29 7 41 19l32 36h36c20 0 34 10 39 30v11H43v-4Z"/>
      <path class="roof" d="m140 98 49-46c8-7 17-10 29-10h49c12 0 22 5 31 15l35 41H140Z"/>
      <path class="glass" d="m158 94 35-35c7-7 15-10 27-10h43c9 0 17 4 24 12l27 33H158Z"/>
      <path d="M260 50v47M208 51l2 46" stroke="rgba(235,249,248,.7)" stroke-width="3"/>
      <path d="M41 128h337v13H43c-4-4-4-8-2-13Z" fill="rgba(23,47,58,.46)"/>
      <path class="light" d="m49 106 27-4 4 11H44l5-7Z"/>
      <path d="M331 101h25c8 0 15 4 19 11h-42l-2-11Z" fill="#ee8c62"/>
      ${wheels}
    ${commonEnd}`;
  }

  if (type === "hatch") {
    return `${commonStart}
      <ellipse cx="210" cy="154" rx="165" ry="12" fill="rgba(20,48,61,.20)"/>
      <path class="body" d="M42 131c5-19 17-29 41-34l49-13 45-37c11-9 25-14 40-14h64c17 0 32 7 43 20l35 40 23 7c18 5 28 16 30 32H42v-1Z"/>
      <path class="roof" d="m135 84 47-35c10-7 21-11 36-11h61c13 0 23 5 32 15l27 32-203-1Z"/>
      <path class="glass" d="m150 80 36-27c9-7 18-9 31-9h59c11 0 18 4 27 13l20 24-173-1Z"/>
      <path d="m244 43 1 39M184 51l-1 32" stroke="rgba(235,249,248,.7)" stroke-width="3"/>
      <path d="M42 130h358v12H43c-4-3-4-7-1-12Z" fill="rgba(23,47,58,.47)"/>
      <path class="light" d="m48 107 31-8 5 13H43l5-5Z"/>
      <path d="m366 103 22 7 7 10h-31l2-17Z" fill="#ef8b5a"/>
      <path d="M92 102h31" stroke="rgba(255,255,255,.55)" stroke-width="2"/>
      ${wheels}
    ${commonEnd}`;
  }

  if (type === "liftback") {
    return `${commonStart}
      <ellipse cx="210" cy="154" rx="165" ry="12" fill="rgba(20,48,61,.20)"/>
      <path class="body" d="M42 131c5-19 18-31 42-35l45-10 57-43c10-8 23-12 37-12h72c18 0 31 9 41 23l34 43 23 6c18 5 27 15 29 29H42v-1Z"/>
      <path class="roof" d="m137 87 53-41c9-7 20-10 33-10h66c13 0 22 6 30 17l26 35-208-1Z"/>
      <path class="glass" d="m151 82 43-32c8-6 16-9 29-9h62c10 0 18 5 24 14l21 28-179-1Z"/>
      <path d="m245 41 1 42M192 48l-1 36" stroke="rgba(235,249,248,.7)" stroke-width="3"/>
      <path d="M42 130h358v12H43c-4-3-4-7-1-12Z" fill="rgba(23,47,58,.47)"/>
      <path class="light" d="m48 107 31-8 5 13H43l5-5Z"/>
      <path d="m364 106 25 6 6 9h-32l1-15Z" fill="#ef8b5a"/>
      ${wheels}
    ${commonEnd}`;
  }

  // سدان/پژو: برای ۴۰۵، فرم کشیده‌تر و برای پراید صندوقدار فرم فشرده‌تری دارد.
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
  return `${commonStart}
    <ellipse cx="211" cy="154" rx="170" ry="12" fill="rgba(20,48,61,.20)"/>
    <path class="body" d="${sedanPath}"/>
    <path class="roof" d="${roofPath}"/>
    <path class="glass" d="${glassPath}"/>
    <path d="m249 37 1 48M198 44l-1 39" stroke="rgba(235,249,248,.7)" stroke-width="3"/>
    <path d="M36 130h363v12H40c-4-3-5-7-4-12Z" fill="rgba(23,47,58,.47)"/>
    <path class="light" d="m42 109 33-9 5 13H37l5-4Z"/>
    <path d="m362 105 25 7 8 9h-34l1-16Z" fill="#ed8760"/>
    <path d="M86 102h35" stroke="rgba(255,255,255,.55)" stroke-width="2"/>
    ${wheels}
  ${commonEnd}`;
}

function getSparklineSvg(values, carId, color = "var(--spark)") {
  const { line, area } = buildPath(values, 80, 32, 3, 3);
  return `<svg viewBox="0 0 80 35" preserveAspectRatio="none" aria-hidden="true">
    <path d="${area}" fill="${color}" opacity=".11"></path>
    <path d="${line}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <circle cx="${getLastPoint(values, 80, 32, 3, 3).x}" cy="${getLastPoint(values, 80, 32, 3, 3).y}" r="2.7" fill="#fff" stroke="${color}" stroke-width="2"></circle>
  </svg>`;
}

function buildPath(values, width, height, paddingX = 0, paddingY = 0) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.max((max - min) * 0.12, 1);
  const lower = min - pad;
  const upper = max + pad;
  const plotWidth = width - paddingX * 2;
  const plotHeight = height - paddingY * 2;
  const points = values.map((value, index) => ({
    x: paddingX + (plotWidth * index) / Math.max(values.length - 1, 1),
    y: paddingY + plotHeight - ((value - lower) / Math.max(upper - lower, 1)) * plotHeight,
    value
  }));
  const line = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  const area = `${line} L${points[points.length - 1].x.toFixed(2)} ${(height - paddingY).toFixed(2)} L${points[0].x.toFixed(2)} ${(height - paddingY).toFixed(2)} Z`;
  return { line, area, points, lower, upper };
}

function getLastPoint(values, width, height, paddingX = 0, paddingY = 0) {
  return buildPath(values, width, height, paddingX, paddingY).points.at(-1);
}

function icon(name, extraClass = "") {
  return `<svg class="icon ${extraClass}"><use href="#icon-${name}"></use></svg>`;
}

function carStatusLabel(car) {
  return car.status === "zero" ? "صفر / کم‌کار" : "کارکرده";
}

function cardTemplate(car) {
  const favorite = state.favorites.has(car.id);
  const compared = state.compare.includes(car.id);
  const trendClass = car.change < 0 ? "is-negative" : "";
  const trendIcon = car.change < 0 ? "trend-down" : "spark";
  const conditionLabel = car.condition === "صفر کیلومتر" ? "صفر" : car.condition;

  return `<article class="car-card" style="${cssVariablesFor(car)}" data-car-id="${car.id}">
    <div class="car-card__visual">
      <div class="car-card__topline">
        <span class="car-card__family">${car.familyLabel}</span>
        <span class="car-card__trend ${trendClass}">${icon(trendIcon, "icon--xs")} ${formatChange(car.change)}</span>
      </div>
      ${carSvg(car.carType)}
    </div>
    <div class="car-card__content">
      <div class="car-card__title-row">
        <div><h3>${car.name}</h3><div class="car-card__trim">${car.trim}</div></div>
        <button class="card-favorite ${favorite ? "is-favorite" : ""}" type="button" data-favorite="${car.id}" aria-label="${favorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}" aria-pressed="${favorite}">${icon(favorite ? "heart-fill" : "heart")}</button>
      </div>
      <p class="car-card__reference">نمونه: مدل ${formatNumber(car.year)} · ${formatKilometers(car.mileage)} · ${conditionLabel}</p>
      <div class="car-card__price-row">
        <div><span class="car-card__price-label">قیمت نمونه مرجع</span><div class="car-card__price">${formatCompactPrice(car.price).replace(" تومان", "")}<span>تومان</span></div></div>
        <div class="mini-sparkline">${getSparklineSvg(car.history, car.id)}</div>
      </div>
      <div class="car-card__range"><span>بازه دیده‌شده</span><b>${formatRange(car.low, car.high)}</b></div>
      <ul class="car-card__specs">
        <li>${icon("calendar")}<b>${formatNumber(car.year)}</b></li>
        <li>${icon("gauge")}<b>${formatKilometers(car.mileage)}</b></li>
        <li>${icon("fuel")}<b>${car.fuel}</b></li>
      </ul>
      <div class="car-card__actions">
        <button class="card-details" type="button" data-details="${car.id}">مشاهده جزئیات ${icon("arrow-left", "icon--xs")}</button>
        <button class="card-compare ${compared ? "is-added" : ""}" type="button" data-compare="${car.id}" aria-label="${compared ? "حذف از مقایسه" : "افزودن به مقایسه"}" title="${compared ? "حذف از مقایسه" : "افزودن به مقایسه"}">${icon("compare")}</button>
      </div>
    </div>
  </article>`;
}

function getFilteredCars() {
  const query = normalize(state.query);
  const result = cars.filter((car) => {
    const matchFamily = state.family === "all" || car.family === state.family;
    const matchCondition = state.condition === "all" || car.status === state.condition;
    const matchPrice = state.priceRange === "all" ||
      (state.priceRange === "under600" && car.price < 600) ||
      (state.priceRange === "600to1000" && car.price >= 600 && car.price < 1000) ||
      (state.priceRange === "over1000" && car.price >= 1000);
    const matchQuery = !query || carSearchText(car).includes(query);
    return matchFamily && matchCondition && matchPrice && matchQuery;
  });

  return result.sort((a, b) => {
    if (state.sort === "price-desc") return b.price - a.price;
    if (state.sort === "price-asc") return a.price - b.price;
    if (state.sort === "year-desc") return b.year - a.year;
    if (state.sort === "change-desc") return b.change - a.change;
    return a.order - b.order;
  });
}

function renderCatalog(resetVisible = false) {
  if (resetVisible) state.visible = 6;
  const filtered = getFilteredCars();
  const shown = filtered.slice(0, state.visible);
  dom.grid.innerHTML = shown.map(cardTemplate).join("");
  dom.resultCount.textContent = formatNumber(filtered.length);
  dom.empty.hidden = filtered.length !== 0;
  dom.catalogMore.hidden = filtered.length === 0 || shown.length >= filtered.length;
  dom.loadMore.innerHTML = `نمایش ${formatNumber(Math.min(6, filtered.length - shown.length))} مدل بیشتر ${icon("arrow-left", "icon--xs")}`;
  dom.searchClear.hidden = !state.query;
  dom.clearFilters.hidden = !hasActiveFilters();
}

function hasActiveFilters() {
  return state.family !== "all" || state.condition !== "all" || state.priceRange !== "all" || Boolean(state.query) || state.sort !== "featured";
}

function updateFilterButtons() {
  document.querySelectorAll("[data-filter-family]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filterFamily === state.family);
  });
  document.querySelectorAll("[data-filter-condition]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filterCondition === state.condition);
  });
  document.querySelectorAll("[data-filter-price]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.filterPrice === state.priceRange);
  });
}

function resetFilters() {
  state.family = "all";
  state.condition = "all";
  state.priceRange = "all";
  state.query = "";
  state.sort = "featured";
  dom.catalogSearch.value = "";
  dom.heroSearchInput.value = "";
  dom.sort.value = "featured";
  updateFilterButtons();
  renderCatalog(true);
}

function updateCatalogCounts() {
  const prideCount = cars.filter((car) => car.family === "pride").length;
  const peugeotCount = cars.filter((car) => car.family === "peugeot").length;
  dom.metricModelCount.textContent = formatNumber(cars.length);
  dom.allCount.textContent = formatNumber(cars.length);
  dom.prideCount.textContent = formatNumber(prideCount);
  dom.peugeotCount.textContent = formatNumber(peugeotCount);
  const min = Math.min(...cars.map((car) => car.low));
  const max = Math.max(...cars.map((car) => car.high));
  dom.heroMarketPrice.textContent = formatCompactPrice(min).replace(" تومان", "");
  dom.heroMarketEnd.textContent = `تا ${formatCompactPrice(max)}`;
}

function updateMainChart() {
  const sourceCars = state.insightFamily === "all" ? cars : cars.filter((car) => car.family === state.insightFamily);
  const length = 7;
  const series = Array.from({ length }, (_, index) => {
    const value = sourceCars.reduce((sum, car) => sum + car.history[index], 0) / sourceCars.length;
    return Number(value.toFixed(2));
  });
  const { line, area, points, lower, upper } = buildPath(series, 740, 265, 5, 10);
  dom.mainChartLine.setAttribute("d", line);
  dom.mainChartArea.setAttribute("d", area);
  dom.mainChartPoints.innerHTML = points.map((point, index) => `<circle class="main-chart-circle" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="4.4"><title>بررسی ${formatNumber(7 - index)}: ${formatCompactPrice(point.value)}</title></circle>`).join("");
  const axisValues = [upper, upper - (upper - lower) / 3, upper - (upper - lower) * 2 / 3, lower];
  dom.chartYLabels.innerHTML = axisValues.map((value) => `<span>${formatShortPrice(value)}</span>`).join("");

  const latest = series.at(-1);
  const change = ((latest - series[0]) / series[0]) * 100;
  dom.chartMainPrice.textContent = formatCompactPrice(latest);
  dom.chartChange.className = `chart-change ${change < 0 ? "negative" : "positive"}`;
  dom.chartChange.innerHTML = `${icon(change < 0 ? "trend-down" : "spark", "icon--xs")} ${formatChange(change)} در ۷ بررسی`;
}

function updateTopPrice() {
  const car = [...cars].sort((a, b) => b.price - a.price)[0];
  dom.topPriceModel.textContent = `${car.name} ${car.trim}`;
  dom.topPriceMeta.textContent = `مدل ${formatNumber(car.year)} · ${formatKilometers(car.mileage)} کارکرد`;
  dom.topPriceValue.textContent = formatCompactPrice(car.price).replace(" تومان", "");
}

function populateEstimator() {
  const sorted = [...cars].sort((a, b) => {
    if (a.family !== b.family) return a.family.localeCompare(b.family, "fa");
    return a.order - b.order;
  });
  dom.estimateCar.innerHTML = sorted.map((car) => `<option value="${car.id}">${car.familyLabel} — ${car.name} ${car.trim} | ${formatNumber(car.year)}</option>`).join("");
  dom.estimateCar.value = "pride-111-se-1396";
  setEstimatorReference(false);
}

function currentEstimateCar() {
  return cars.find((car) => car.id === dom.estimateCar.value) || cars[0];
}

function updateRangeBackground() {
  const rangeValue = Number(dom.estimateRange.value);
  const min = Number(dom.estimateRange.min);
  const max = Number(dom.estimateRange.max);
  const percentage = Math.min(100, Math.max(0, ((rangeValue - min) / (max - min)) * 100));
  dom.estimateRange.style.setProperty("--range-progress", `${percentage}%`);
}

function setEstimatorReference(animate = true) {
  const car = currentEstimateCar();
  const safeMileage = Math.min(Number(dom.estimateRange.max), car.mileage);
  dom.estimateMileage.value = car.mileage;
  dom.estimateRange.value = safeMileage;
  updateRangeBackground();
  renderEstimate(animate);
}

function getEstimateParameters(car) {
  const mileage = Math.max(0, Number(dom.estimateMileage.value) || 0);
  const bodyCondition = document.querySelector("input[name='body-condition']:checked")?.value || "clean";
  const per100k = car.family === "peugeot" ? 0.042 : 0.035;
  const mileageAdjustment = Math.max(-0.11, Math.min(0.16, ((car.mileage - mileage) / 100000) * per100k));
  const conditionFactors = { clean: 0, minor: -0.035, several: -0.085, heavy: -0.17 };
  const bodyAdjustment = conditionFactors[bodyCondition];
  const insuranceAdjustment = dom.estimateInsurance.checked ? 0 : -0.015;
  const technicalAdjustment = dom.estimateTechnical.checked ? 0 : -0.08;
  const allAdjustment = mileageAdjustment + bodyAdjustment + insuranceAdjustment + technicalAdjustment;
  return { mileage, mileageAdjustment, bodyAdjustment, insuranceAdjustment, technicalAdjustment, allAdjustment };
}

function renderEstimate(animate = false) {
  const car = currentEstimateCar();
  const values = getEstimateParameters(car);
  const result = Math.max(0, car.price * (1 + values.allAdjustment));
  const lower = result * 0.95;
  const upper = result * 1.05;
  dom.estimateMileageLabel.textContent = formatKilometers(values.mileage);
  dom.estimatePrice.textContent = formatCompactPrice(result);
  dom.estimateResultRange.textContent = `بازه تقریبی: ${formatCompactPrice(lower)} تا ${formatCompactPrice(upper)}`;
  dom.estimateBreakdown.innerHTML = `
    <span>نمونه مرجع <b>${formatShortPrice(car.price)}</b></span>
    <span>تأثیر کارکرد <b>${formatSignedMillion(car.price * values.mileageAdjustment)}</b></span>
    <span>تأثیر شرایط <b>${formatSignedMillion(car.price * (values.bodyAdjustment + values.insuranceAdjustment + values.technicalAdjustment))}</b></span>`;

  if (animate) {
    dom.estimatePrice.animate([
      { opacity: 0.45, transform: "translateY(4px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], { duration: 260, easing: "ease-out" });
  }
}

function renderCompareBar() {
  const carsToCompare = state.compare.map((id) => cars.find((car) => car.id === id)).filter(Boolean);
  dom.compareSection.hidden = carsToCompare.length === 0;
  dom.compareCount.textContent = `${formatNumber(carsToCompare.length)} از ۲ انتخاب شده`;
  dom.compareSlots.innerHTML = [0, 1].map((slot) => {
    const car = carsToCompare[slot];
    if (!car) return `<div class="compare-slot">${icon("compare")}<span>یک مدل انتخاب کن</span></div>`;
    return `<div class="compare-slot is-filled"><div class="compare-slot__info"><strong>${car.name} ${car.trim}</strong><small>${formatCompactPrice(car.price)}</small></div><button type="button" data-remove-compare="${car.id}" aria-label="حذف ${car.name} از مقایسه">${icon("close", "icon--xs")}</button></div>`;
  }).join("");
  dom.compareOpen.disabled = carsToCompare.length !== 2;
}

function toggleCompare(id) {
  const index = state.compare.indexOf(id);
  const car = cars.find((entry) => entry.id === id);
  if (index >= 0) {
    state.compare.splice(index, 1);
    showToast(`${car.name} از مقایسه حذف شد.`);
  } else if (state.compare.length >= 2) {
    showToast("برای مقایسه، ابتدا یکی از دو انتخاب فعلی را حذف کن.");
    return;
  } else {
    state.compare.push(id);
    showToast(`${car.name} به مقایسه اضافه شد.`);
  }
  renderCompareBar();
  renderCatalog();
}

function openCompareModal() {
  if (state.compare.length !== 2) return;
  const selected = state.compare.map((id) => cars.find((car) => car.id === id));
  const [first, second] = selected;
  dom.compareModalContent.innerHTML = `
    <div class="compare-modal__head">
      <span class="eyebrow">مقایسه کنار هم</span>
      <h2 id="compare-modal-title">دو مدل، یک نگاه دقیق‌تر</h2>
    </div>
    <div class="compare-modal__table-wrap">
      <table class="compare-table">
        <thead><tr><th>مشخصه</th><th>${first.name} <small>${first.trim}</small></th><th>${second.name} <small>${second.trim}</small></th></tr></thead>
        <tbody>
          ${compareRow("قیمت نمونه مرجع", formatCompactPrice(first.price), formatCompactPrice(second.price), "compare-price-cell")}
          ${compareRow("بازه دیده‌شده", formatRange(first.low, first.high), formatRange(second.low, second.high))}
          ${compareRow("سال نمونه", `مدل ${formatNumber(first.year)}`, `مدل ${formatNumber(second.year)}`)}
          ${compareRow("کارکرد مرجع", formatKilometers(first.mileage), formatKilometers(second.mileage))}
          ${compareRow("وضعیت بدنه", first.condition, second.condition)}
          ${compareRow("کلاس بدنه", first.body, second.body)}
          ${compareRow("پیشرانه", first.engine, second.engine)}
          ${compareRow("سوخت", first.fuel, second.fuel)}
          ${compareRow("گیربکس", first.gearbox, second.gearbox)}
          ${compareRow("روند آخرین بررسی", `${formatChange(first.change)}`, `${formatChange(second.change)}`)}
        </tbody>
      </table>
    </div>
    <p class="compare-modal__note">مقایسه بر اساس دو نمونه مرجع ثبت‌شده انجام شده است. برای تصمیم نهایی، وضعیت واقعی هر خودرو را کارشناسی کن.</p>`;
  openModalElement(dom.compareModal, "compare");
}

function compareRow(label, first, second, className = "") {
  return `<tr><th>${label}</th><td class="${className}">${first}</td><td class="${className}">${second}</td></tr>`;
}

function showDetails(id) {
  const car = cars.find((entry) => entry.id === id);
  if (!car) return;
  const trendClass = car.change < 0 ? "negative" : "positive";
  const trendIcon = car.change < 0 ? "trend-down" : "spark";
  const compared = state.compare.includes(car.id);

  dom.modalContent.innerHTML = `
    <div class="modal-car-visual" style="${cssVariablesFor(car)}">
      <span class="modal-family">${car.familyLabel} · ${carStatusLabel(car)}</span>
      ${carSvg(car.carType)}
    </div>
    <div class="modal-body">
      <div class="modal-title-row">
        <div><h2 id="modal-title">${car.name}</h2><p>${car.trim}</p></div>
        <div class="modal-price"><span>قیمت نمونه مرجع</span><strong>${formatCompactPrice(car.price)}</strong></div>
      </div>
      <div class="modal-reference"><span>${icon("calendar", "icon--xs")} مدل ${formatNumber(car.year)}</span><span>${icon("gauge", "icon--xs")} ${formatKilometers(car.mileage)}</span><span>${icon("shield", "icon--xs")} ${car.condition}</span></div>
      <div class="modal-range"><span>بازه دیده‌شده در بازار</span><strong>${formatRange(car.low, car.high)}</strong></div>
      <div class="modal-mini-chart">
        <div class="modal-mini-chart__top"><span>روند ۷ بررسی اخیر</span><b class="${trendClass}">${icon(trendIcon, "icon--xs")} ${formatChange(car.change)}</b></div>
        ${getModalChart(car)}
      </div>
      <div class="modal-specs">
        <div class="modal-spec"><span>کلاس بدنه</span><strong>${car.body}</strong></div>
        <div class="modal-spec"><span>پیشرانه</span><strong>${car.engine}</strong></div>
        <div class="modal-spec"><span>سوخت / گیربکس</span><strong>${car.fuel} · ${car.gearbox}</strong></div>
      </div>
      <div class="modal-footer">
        <button class="button button--dark" type="button" data-estimate-car="${car.id}">برآورد با این مدل ${icon("arrow-left", "icon--xs")}</button>
        <button class="button button--outline" type="button" data-compare="${car.id}">${compared ? "حذف از مقایسه" : "افزودن به مقایسه"} ${icon("compare", "icon--xs")}</button>
      </div>
      <div class="modal-source">منبع نمونه: <a href="${car.sourceUrl}" target="_blank" rel="noopener noreferrer">${car.sourceName} ${icon("external", "icon--xs")}</a><span>·</span><span>ثبت در نسخه ۲۵ شهریور ۱۴۰۵</span></div>
    </div>`;
  openModalElement(dom.detailsModal, "details");
}

function getModalChart(car) {
  const { line, area, points } = buildPath(car.history, 500, 80, 5, 4);
  const last = points.at(-1);
  return `<svg viewBox="0 0 500 80" preserveAspectRatio="none" aria-label="روند قیمت ${car.name}">
    <defs><linearGradient id="modal-gradient-${car.id}" x1="0" x2="0" y1="0" y2="1"><stop stop-color="var(--spark)" stop-opacity=".3"/><stop offset="1" stop-color="var(--spark)" stop-opacity="0"/></linearGradient></defs>
    <path d="M0 19H500M0 49H500" stroke="var(--line)" stroke-width="1" stroke-dasharray="4 5"/>
    <path d="${area}" fill="url(#modal-gradient-${car.id})"></path>
    <path d="${line}" fill="none" stroke="var(--spark)" stroke-width="3.3" stroke-linecap="round" stroke-linejoin="round"></path>
    ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="2.4" fill="var(--card)" stroke="var(--spark)" stroke-width="2"></circle>`).join("")}
    <circle cx="${last.x}" cy="${last.y}" r="4.2" fill="var(--card)" stroke="var(--spark)" stroke-width="2.5"></circle>
  </svg>`;
}

function openModalElement(modal, type) {
  state.lastFocused = document.activeElement;
  state.activeModal = modal;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => modal.querySelector(".modal__close")?.focus(), 40);
}

function closeModal(modal) {
  if (!modal || !modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (![...document.querySelectorAll(".modal.is-open")].length) {
    document.body.classList.remove("modal-open");
    state.activeModal = null;
  }
  state.lastFocused?.focus?.();
}

function selectEstimateCar(id) {
  const car = cars.find((entry) => entry.id === id);
  if (!car) return;
  dom.estimateCar.value = car.id;
  closeModal(dom.detailsModal);
  document.querySelector("#estimator").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    setEstimatorReference();
    dom.estimateMileage.focus({ preventScroll: true });
  }, 450);
}

function toggleFavorite(id) {
  const car = cars.find((entry) => entry.id === id);
  if (!car) return;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${car.name} از علاقه‌مندی‌ها حذف شد.`);
  } else {
    state.favorites.add(id);
    showToast(`${car.name} به علاقه‌مندی‌ها اضافه شد.`);
  }
  saveFavorites();
  renderCatalog();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `${icon("check", "icon--xs")}<span>${message}</span>`;
  dom.toastRegion.append(toast);
  window.setTimeout(() => {
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  }, 3200);
}

function setTheme(theme) {
  dom.root.dataset.theme = theme;
  try { window.localStorage.setItem("farmoon-theme", theme); } catch { /* ignore */ }
  dom.themeToggle.setAttribute("aria-label", theme === "dark" ? "فعال‌کردن حالت روشن" : "فعال‌کردن حالت تیره");
}

function initializeTheme() {
  let saved;
  try { saved = window.localStorage.getItem("farmoon-theme"); } catch { saved = null; }
  const theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(theme);
}

function handleCatalogClick(event) {
  if (!event.target.closest("#catalog")) return;
  const familyFilter = event.target.closest("[data-filter-family]");
  const conditionFilter = event.target.closest("[data-filter-condition]");
  const priceFilter = event.target.closest("[data-filter-price]");
  const detail = event.target.closest("[data-details]");
  const favorite = event.target.closest("[data-favorite]");
  const compare = event.target.closest("[data-compare]");

  if (familyFilter) {
    state.family = familyFilter.dataset.filterFamily;
    updateFilterButtons(); renderCatalog(true); return;
  }
  if (conditionFilter) {
    state.condition = conditionFilter.dataset.filterCondition;
    updateFilterButtons(); renderCatalog(true); return;
  }
  if (priceFilter) {
    state.priceRange = priceFilter.dataset.filterPrice;
    updateFilterButtons(); renderCatalog(true); return;
  }
  if (detail) { showDetails(detail.dataset.details); return; }
  if (favorite) { toggleFavorite(favorite.dataset.favorite); return; }
  if (compare) { toggleCompare(compare.dataset.compare); }
}

function bindEvents() {
  document.addEventListener("click", handleCatalogClick);

  dom.catalogSearch.addEventListener("input", () => {
    state.query = dom.catalogSearch.value;
    renderCatalog(true);
  });
  dom.searchClear.addEventListener("click", () => {
    dom.catalogSearch.value = "";
    state.query = "";
    renderCatalog(true);
    dom.catalogSearch.focus();
  });
  dom.sort.addEventListener("change", () => {
    state.sort = dom.sort.value;
    renderCatalog(true);
  });
  dom.clearFilters.addEventListener("click", resetFilters);
  dom.emptyReset.addEventListener("click", resetFilters);
  dom.loadMore.addEventListener("click", () => {
    state.visible += 6;
    renderCatalog();
  });

  dom.heroSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = dom.heroSearchInput.value;
    dom.catalogSearch.value = state.query;
    renderCatalog(true);
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll("[data-quick-search]").forEach((button) => {
    button.addEventListener("click", () => {
      state.query = button.dataset.quickSearch;
      dom.heroSearchInput.value = state.query;
      dom.catalogSearch.value = state.query;
      renderCatalog(true);
      document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  dom.insightTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-insight-family]");
    if (!button) return;
    state.insightFamily = button.dataset.insightFamily;
    dom.insightTabs.querySelectorAll("button").forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
    updateMainChart();
  });
  dom.chartDetails.addEventListener("click", () => document.querySelector("#sources").scrollIntoView({ behavior: "smooth" }));
  dom.sourceButton.addEventListener("click", () => {
    showToast("هر کارت سال، کارکرد، وضعیت بدنه و لینک منبع نمونه را دارد.");
    document.querySelector("#sources").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dom.estimateCar.addEventListener("change", () => setEstimatorReference());
  dom.estimateMileage.addEventListener("input", () => {
    const max = Number(dom.estimateRange.max);
    const value = Math.min(max, Math.max(0, Number(dom.estimateMileage.value) || 0));
    dom.estimateRange.value = value;
    updateRangeBackground();
    renderEstimate();
  });
  dom.estimateRange.addEventListener("input", () => {
    dom.estimateMileage.value = dom.estimateRange.value;
    updateRangeBackground();
    renderEstimate();
  });
  document.querySelectorAll("input[name='body-condition'], #estimate-insurance, #estimate-technical").forEach((input) => {
    input.addEventListener("change", () => renderEstimate());
  });
  dom.estimateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderEstimate(true);
    showToast("برآورد اولیه با مشخصات واردشده به‌روزرسانی شد.");
  });

  dom.compareClear.addEventListener("click", () => {
    state.compare = [];
    renderCompareBar();
    renderCatalog();
  });
  dom.compareSlots.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-compare]");
    if (!remove) return;
    toggleCompare(remove.dataset.removeCompare);
  });
  dom.compareOpen.addEventListener("click", openCompareModal);

  dom.detailsModal.addEventListener("click", (event) => {
    const modalCompare = event.target.closest("[data-compare]");
    const modalEstimate = event.target.closest("[data-estimate-car]");
    if (modalCompare) {
      toggleCompare(modalCompare.dataset.compare);
      showDetails(modalCompare.dataset.compare);
      return;
    }
    if (modalEstimate) {
      selectEstimateCar(modalEstimate.dataset.estimateCar);
      return;
    }
    if (event.target.closest("[data-close-modal]")) closeModal(dom.detailsModal);
  });
  dom.compareModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-compare]")) closeModal(dom.compareModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (dom.compareModal.classList.contains("is-open")) closeModal(dom.compareModal);
      else if (dom.detailsModal.classList.contains("is-open")) closeModal(dom.detailsModal);
    }
    if (event.key === "Tab" && state.activeModal) trapModalFocus(event, state.activeModal);
  });

  dom.themeToggle.addEventListener("click", () => {
    setTheme(dom.root.dataset.theme === "dark" ? "light" : "dark");
  });

  dom.navToggle.addEventListener("click", () => {
    const open = dom.mainNav.classList.toggle("is-open");
    dom.navToggle.setAttribute("aria-expanded", String(open));
  });
  dom.mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    dom.mainNav.classList.remove("is-open");
    dom.navToggle.setAttribute("aria-expanded", "false");
  }));

  dom.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function trapModalFocus(event, modal) {
  const controls = [...modal.querySelectorAll("button, a[href], input, select, [tabindex]:not([tabindex='-1'])")].filter((entry) => !entry.hasAttribute("disabled"));
  if (!controls.length) return;
  const first = controls[0];
  const last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
}

function handleScroll() {
  const scrolled = window.scrollY > 10;
  dom.header.classList.toggle("is-scrolled", scrolled);
  dom.backToTop.classList.toggle("is-visible", window.scrollY > 680);
}

function updateNavOnScroll() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...dom.mainNav.querySelectorAll("a")];
  const observer = new IntersectionObserver((entries) => {
    const entry = entries.filter((item) => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!entry) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  }, { rootMargin: "-28% 0px -62% 0px", threshold: [0.01, 0.2, 0.45] });
  sections.forEach((section) => observer.observe(section));
}

function initialize() {
  initializeTheme();
  updateCatalogCounts();
  updateFilterButtons();
  renderCatalog();
  updateMainChart();
  updateTopPrice();
  populateEstimator();
  renderCompareBar();
  bindEvents();
  updateNavOnScroll();
  handleScroll();
  dom.yearNow.textContent = "۱۴۰۵";
}

initialize();
