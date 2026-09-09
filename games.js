const gamesDatabase = [
  // شوتر / بتل رویال
  { id: "cs2", title: "Counter-Strike 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", steamId: "730", desc: "محبوب‌ترین شوتر اول شخص تاکتیکال جهان" },
  { id: "tf2", title: "Team Fortress 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/440/header.jpg", steamId: "440", desc: "شوتر تیمی کلاسیک و پرهیجان" },
  { id: "pubg", title: "PUBG: BATTLEGROUNDS", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg", steamId: "578080", desc: "بازی بتل رویال واقعی و هیجان‌انگیز" },
  { id: "apex", title: "Apex Legends", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg", steamId: "1172470", desc: "شوتر بتل رویال قهرمان‌محور و سریع" },
  { id: "bloodstrike", title: "Blood Strike", genre: "shooter", platform: "PC • Mobile", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1909400/header.jpg", steamId: "1909400", desc: "بتل رویال سریع و بهینه‌شده" },
  { id: "rainbow6", title: "Tom Clancy's Rainbow Six Siege", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg", steamId: "359550", desc: "شوتر تاکتیکال و تخریب‌پذیر" },
  { id: "left4dead2", title: "Left 4 Dead 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/550/header.jpg", steamId: "550", desc: "شوتر زامبی هم‌تیمی فوق‌العاده" },
  { id: "payday2", title: "PAYDAY 2", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/218620/header.jpg", steamId: "218620", desc: "دزدی‌های اکشن تیمی" },
  { id: "destiny2", title: "Destiny 2", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg", steamId: "1085660", desc: "شوتر علمی‌تخیلی و اکشن آنلاین" },
  { id: "warframe", title: "Warframe", genre: "shooter", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg", steamId: "230410", desc: "نینجاهای فضایی در شوتر سوم شخص" },
  { id: "helldivers2", title: "HELLDIVERS 2", genre: "shooter", platform: "PC • PS5", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg", steamId: "553850", desc: "شوتر اکشن سوم‌شخص تیمی برای آزادی" },
  { id: "overwatch2", title: "Overwatch 2", genre: "shooter", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2357570/header.jpg", steamId: "2357570", desc: "شوتر قهرمان‌محور آنلاین تیمی" },

  // اکشن / جهان باز
  { id: "gta5", title: "Grand Theft Auto V", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", steamId: "271590", desc: "جهان‌بازترین بازی اکشن و جرم و جنایت" },
  { id: "rdr2", title: "Red Dead Redemption 2", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", steamId: "1174180", desc: "شاهکار غرب وحشی راک‌استار" },
  { id: "cyberpunk", title: "Cyberpunk 2077", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", steamId: "1091500", desc: "ماجراجویی در شهر آینده نایت سیتی" },
  { id: "witcher3", title: "The Witcher 3: Wild Hunt", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg", steamId: "292030", desc: "نقش‌آفرینی اکشن حماسی گرالت" },
  { id: "eldenring", title: "ELDEN RING", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", steamId: "1245620", desc: "شاهکار دارک فانتزی و جهان‌باز" },
  { id: "godofwar", title: "God of War", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg", steamId: "1593500", desc: "سفر کراتوس و آترئوس در اساطیر نورس" },
  { id: "spiderman", title: "Marvel’s Spider-Man Remastered", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg", steamId: "1817070", desc: "تار زدن در نیویورک با مرد عنکبوتی" },
  { id: "monsterhunter", title: "Monster Hunter: World", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg", steamId: "582010", desc: "شکار هیولاهای عظیم‌الجثه" },
  { id: "sekiro", title: "Sekiro: Shadows Die Twice", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg", steamId: "814380", desc: "مبارزات سامورایی فوق‌العاده سخت و دقیق" },
  { id: "darkSouls3", title: "DARK SOULS III", genre: "action", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg", steamId: "374320", desc: "پایان حماسه تاریک دارک سولز" },

  // استراتژیک / بقا
  { id: "dota2", title: "Dota 2", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg", steamId: "570", desc: "بزرگترین بازی استراتژیک رقابتی" },
  { id: "rust", title: "Rust", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg", steamId: "252490", desc: "بقا سخت و چندنفره در دنیایی بی‌رحم" },
  { id: "terraria", title: "Terraria", genre: "strategy", platform: "PC • Mobile", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg", steamId: "105600", desc: "ماجراجویی دو بعدی، ساخت و ساز و بقا" },
  { id: "stardew", title: "Stardew Valley", genre: "strategy", platform: "PC • Mobile", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg", steamId: "413150", desc: "زندگی آرام شبیه‌ساز کشاورزی و دوستی" },
  { id: "palworld", title: "Palworld", genre: "strategy", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg", steamId: "1623730", desc: "بقای جهان باز همراه با موجودات عجیب" },
  { id: "cities2", title: "Cities: Skylines II", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/949230/header.jpg", steamId: "949230", desc: "پیشرفته‌ترین شبیه‌ساز شهرسازی" },
  { id: "ageofempires2", title: "Age of Empires II: Definitive Edition", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030830/header.jpg", steamId: "1030830", desc: "استراتژیک همزمان تاریخی و کلاسیک" },
  { id: "civilization6", title: "Sid Meier’s Civilization VI", genre: "strategy", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg", steamId: "289070", desc: "ساخت یک امپراتوری بزرگ در طول تاریخ" },

  // نقش‌آفرینی (RPG) / داستانی
  { id: "baldursgate3", title: "Baldur's Gate 3", genre: "rpg", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", steamId: "1086940", desc: "بهترین بازی نقش‌آفرینی نوبتی برنده جایزه سال" },
  { id: "hollowknight", title: "Hollow Knight", genre: "rpg", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg", steamId: "367520", desc: "ماجراجویی عمیق در قلمرو حشرات" },
  { id: "fallout4", title: "Fallout 4", genre: "rpg", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg", steamId: "377160", desc: "بقای جهان‌باز در دنیای آخرالزمانی" },
  { id: "skyrim", title: "The Elder Scrolls V: Skyrim", genre: "rpg", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg", steamId: "489830", desc: "نقش‌آفرینی افسانه‌ای اژدهازاده" },
  { id: "persona5", title: "Persona 5 Royal", genre: "rpg", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg", steamId: "1687950", desc: "نقش‌آفرینی انیمه‌ای نوبتی فوق‌العاده" },

  // ورزشی / مسابقه‌ای
  { id: "ea24", title: "EA SPORTS FC 24", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg", steamId: "2195250", desc: "شبیه‌ساز رسمی فوتبال" },
  { id: "forza5", title: "Forza Horizon 5", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg", steamId: "1551360", desc: "مسابقات اتومبیل‌رانی جهان‌باز در مکزیک" },
  { id: "nba2k24", title: "NBA 2K24", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg", steamId: "2338770", desc: "شبیه‌ساز حرفه‌ای بسکتبال" },
  { id: "rocketleague", title: "Rocket League", genre: "sports", platform: "PC • Console", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg", steamId: "252950", desc: "فوتبال هیجان‌انگیز با ماشین‌های موشکی" },
  { id: "assetto", title: "Assetto Corsa", genre: "sports", platform: "PC", img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg", steamId: "244210", desc: "شبیه‌ساز واقعی رانندگی و دریفت" }
];
