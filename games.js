const gamesDatabase = [
  // شوتر / بتل رویال
  { id: "cs2", title: "Counter-Strike 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", steamId: "730", desc: "محبوب‌ترین شوتر اول شخص تاکتیکال جهان" },
  { id: "tf2", title: "Team Fortress 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/440/header.jpg", steamId: "440", desc: "شوتر تیمی کلاسیک و پرهیجان" },
  { id: "pubg", title: "PUBG: BATTLEGROUNDS", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg", steamId: "578080", desc: "بازی بتل رویال واقعی و هیجان‌انگیز" },
  { id: "apex", title: "Apex Legends", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg", steamId: "1172470", desc: "شوتر بتل رویال قهرمان‌محور و سریع" },
  { id: "rainbow6", title: "Tom Clancy's Rainbow Six Siege", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg", steamId: "359550", desc: "شوتر تاکتیکال و تخریب‌پذیر" },
  { id: "left4dead2", title: "Left 4 Dead 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/550/header.jpg", steamId: "550", desc: "شوتر زامبی هم‌تیمی فوق‌العاده" },
  { id: "helldivers2", title: "HELLDIVERS 2", genre: "shooter", platform: "PC • PS5", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg", steamId: "553850", desc: "شوتر اکشن سوم‌شخص تیمی برای آزادی" },

  // اکشن / جهان باز
  { id: "gta5", title: "Grand Theft Auto V", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", steamId: "271590", desc: "جهان‌بازترین بازی اکشن و جرم و جنایت" },
  { id: "rdr2", title: "Red Dead Redemption 2", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", steamId: "1174180", desc: "شاهکار غرب وحشی راک‌استار" },
  { id: "cyberpunk", title: "Cyberpunk 2077", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", steamId: "1091500", desc: "ماجراجویی در شهر آینده نایت سیتی" },
  { id: "witcher3", title: "The Witcher 3: Wild Hunt", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg", steamId: "292030", desc: "نقش‌آفرینی اکشن حماسی گرالت" },
  { id: "eldenring", title: "ELDEN RING", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", steamId: "1245620", desc: "شاهکار دارک فانتزی و جهان‌باز" },
  { id: "godofwar", title: "God of War", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg", steamId: "1593500", desc: "سفر کراتوس و آترئوس در اساطیر نورس" },

  // استراتژیک / بقا
  { id: "dota2", title: "Dota 2", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg", steamId: "570", desc: "بزرگترین بازی استراتژیک رقابتی" },
  { id: "rust", title: "Rust", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", steamId: "252490", desc: "بقا سخت و چندنفره در دنیایی بی‌رحم" },
  { id: "terraria", title: "Terraria", genre: "strategy", platform: "PC • Mobile", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg", steamId: "105600", desc: "ماجراجویی دو بعدی، ساخت و ساز و بقا" },
  { id: "palworld", title: "Palworld", genre: "strategy", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg", steamId: "1623730", desc: "بقای جهان باز همراه با موجودات عجیب" },

  // ورزشی / مسابقه‌ای
  { id: "forza5", title: "Forza Horizon 5", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg", steamId: "1551360", desc: "مسابقات اتومبیل‌رانی جهان‌باز در مکزیک" },
  { id: "ea24", title: "EA SPORTS FC 24", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg", steamId: "2195250", desc: "شبیه‌ساز رسمی فوتبال" }
];
