const gamesDatabase = [
  // --- بازی‌های ترند و ترندشده بین یوتیوبرها ---
  { 
    id: "howtofish", 
    title: "How to Fish", 
    genre: "action", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/4001890/header.jpg", 
    steamId: "4001890", 
    irDownloadLink: "https://parsigame.ir/", 
    irSiteName: "پارسی گیم",
    desc: "بازی فیزیک‌محور، خنده‌دار و ترند یوتیوبرها! ۴ نفره ماهیگیری کنید، مبارزه کنید و نجات پیدا کنید." 
  },
  { 
    id: "lethalcompany", 
    title: "Lethal Company", 
    genre: "action", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1942280/header.jpg", 
    steamId: "1942280", 
    irDownloadLink: "https://vgdl.ir/lethal-company/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "بازی ترسناک آنلاین و چندنفره فوق‌العاده ترند برای جمع‌آوری ضایعات در سیاره‌های متروکه." 
  },
  { 
    id: "contentwarning", 
    title: "Content Warning", 
    genre: "action", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2881650/header.jpg", 
    steamId: "2881650", 
    irDownloadLink: "https://vgdl.ir/content-warning/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "با دوستانتان فیلم‌های ترسناک بگیرید، ویروسی شوید و در یوتیوب/اسپوک‌تیوب محبوب شوید!" 
  },
  { 
    id: "amongus", 
    title: "Among Us", 
    genre: "strategy", 
    platform: "PC • Mobile", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg", 
    steamId: "945360", 
    irDownloadLink: "https://www.yasdl.com/171583/download-among-us.html", 
    irSiteName: "یاس دانلود",
    desc: "بازی معروف قاتل‌شناسی و همکاری تیمی تا ۱۵ نفر آنلاین." 
  },

  // --- شوتر / بتل رویال ---
  { 
    id: "cs2", 
    title: "Counter-Strike 2", 
    genre: "shooter", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", 
    steamId: "730", 
    irDownloadLink: "https://vgdl.ir/cs-go-pc/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "محبوب‌ترین شوتر اول شخص تاکتیکال جهان (رایگان استیم)" 
  },
  { 
    id: "tf2", 
    title: "Team Fortress 2", 
    genre: "shooter", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/440/header.jpg", 
    steamId: "440", 
    irDownloadLink: "https://parsigame.ir/", 
    irSiteName: "پارسی گیم",
    desc: "شوتر تیمی کلاسیک و رایگان استیم" 
  },
  { 
    id: "pubg", 
    title: "PUBG: BATTLEGROUNDS", 
    genre: "shooter", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg", 
    steamId: "578080", 
    irDownloadLink: "https://www.yasdl.com/187910/download-pubg-pc.html", 
    irSiteName: "یاس دانلود",
    desc: "بتل رویال واقع‌گرایانه و رایگان برای سیستم‌های متوسط به بالا" 
  },
  { 
    id: "left4dead2", 
    title: "Left 4 Dead 2", 
    genre: "shooter", 
    platform: "PC", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/550/header.jpg", 
    steamId: "550", 
    irDownloadLink: "https://vgdl.ir/left-4-dead-2-game/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "بهترین بازی ۴ نفره آنلاین و شبکه زامبی‌کشی" 
  },

  // --- اکشن / جهان باز ---
  { 
    id: "gta5", 
    title: "Grand Theft Auto V (GTA V)", 
    genre: "action", 
    platform: "PC • Console", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", 
    steamId: "271590", 
    irDownloadLink: "https://vgdl.ir/gta-v-pc/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "محبوب‌ترین بازی جهان‌باز همراه با بخش آنلاین و رول‌پلی (GTA RP)" 
  },
  { 
    id: "rdr2", 
    title: "Red Dead Redemption 2", 
    genre: "action", 
    platform: "PC • Console", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", 
    steamId: "1174180", 
    irDownloadLink: "https://parsigame.ir/1398/11/red-dead-redemption-2-pc/", 
    irSiteName: "پارسی گیم",
    desc: "شاهکار غرب وحشی و جهان‌باز راک‌استار" 
  },

  // --- استراتژیک / بقا / شبیه‌ساز ---
  { 
    id: "terraria", 
    title: "Terraria", 
    genre: "strategy", 
    platform: "PC • Mobile", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg", 
    steamId: "105600", 
    irDownloadLink: "https://www.yasdl.com/26412/download-terraria.html", 
    irSiteName: "یاس دانلود",
    desc: "ماجراجویی دو بعدی، ساخت و ساز و بقای چندنفره آنلاین" 
  },
  { 
    id: "stardew", 
    title: "Stardew Valley", 
    genre: "strategy", 
    platform: "PC • Mobile", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg", 
    steamId: "413150", 
    irDownloadLink: "https://www.sarzamindownload.com/", 
    irSiteName: "سرزمین دانلود",
    desc: "شبیه‌ساز کشاورزی و زندگی آرام با قابلیت بازی چندنفره" 
  },
  { 
    id: "palworld", 
    title: "Palworld", 
    genre: "strategy", 
    platform: "PC • Console", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg", 
    steamId: "1623730", 
    irDownloadLink: "https://vgdl.ir/palworld/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "بازی بقا و جهان‌باز چندنفره ترند پالمون‌ها" 
  },

  // --- ورزشی / مسابقه‌ای ---
  { 
    id: "ea24", 
    title: "EA SPORTS FC 24", 
    genre: "sports", 
    platform: "PC • Console", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg", 
    steamId: "2195250", 
    irDownloadLink: "https://parsigame.ir/1402/07/ea-sports-fc-24-pc/", 
    irSiteName: "پارسی گیم",
    desc: "شبیه‌ساز رسمی فوتبال برای آنلاین و چندنفره" 
  },
  { 
    id: "forza5", 
    title: "Forza Horizon 5", 
    genre: "sports", 
    platform: "PC • Console", 
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg", 
    steamId: "1551360", 
    irDownloadLink: "https://vgdl.ir/forza-horizon-5-pc/", 
    irSiteName: "ویجی‌دی‌ال (VGDL)",
    desc: "بهترین بازی ماشین‌سواری جهان‌باز و چندنفره آنلاین" 
  }
];
