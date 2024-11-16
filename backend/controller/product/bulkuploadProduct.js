
const productModel = require("../../models/productModel")

async function bulkuploadProduct(res,req) {

  
    // let new_data=[
    //     {
    //       "productName": "SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)  (8 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618332/Ecommerce/anng5wmvhr5ev2ewkouu.jpg"
    //       ],
    //       "description": "Explore a new range of night photography features on this Samsung Galaxy S22 5G smartphone. You can click stunning images even in low light with the Nightography mode. It is designed with a pro-grade camera which comprises a big pixel sensor that welcomes more light for mind-blowing photography. Built with impressive software and hardware, this phone is a game-changer. With a 120 Hz refresh rate and dynamic AMOLED 2x display, you are going to experience immersive screen time. This phone operates on a Snapdragon 8 Gen 1 processor that delivers quick and hassle- free navigation. This device is protected by Corning Gorilla Glass Victus and has an IP68 waterproof rating.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "Xiaomi 12 Pro 5G (Opera Mauve, 256 GB)  (12 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618333/Ecommerce/z8prgdgmocpcmsnrfatw.jpg"
    //       ],
    //       "description": "Treat your inner tech geek with this Xiaomi 12 Pro 5G mobile that surprises you with its flawless performance. With a 120 Hz, 10-bit 2K+, and AMOLED Display setup, you can show off your flair wherever you go. Your entertainment experience is upgraded with an AMOLED display that makes every image come to life. The quad speaker with sound by Harman/Kardon exhilarates you with its sound clarity. The flagship camera setup of this phone, with 50 MP + 50 MP + 50 MP, complements your photography skills. With the Pro Focus AI tracking technology, you can easily take clear pictures of moving objects. With the liquid cooling technology, your phone’s heat can be controlled even when you are multitasking. Unbeatable performance is achieved with the powerful Snapdragon 8 Gen 1 processor. Supported by a massive 4600 mAh battery and Surge P1 technology, you can witness an exceptional charging speed on this Xiaomi 12 Pro mobile.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618334/Ecommerce/m7kp6so8zuc2gfwrlaef.jpg"
    //       ],
    //       "description": "The Redmi Note 12 Pro 5G has a tonne of incredible features and provides gorgeous photographs and a faultless user experience. Due to its 2 um pixel size, the 50 MP Sony IMX766 sensor on the Redmi Note 12 Pro 5G is able to capture more light and produce stunning low-light images. Additionally, this phone boasts an innovative OIS that works to reduce camera shake and provide steady, blur-free images, even in dim lighting conditions. An additional benefit of this phone is its 120 Hz Pro AMOLED display with adaptive sync, which provides a fluid, lively, and engaging user experience. You can enjoy this phone's MediaTek Dimesity 1080 processor efficiently since it has a big vapour chamber, a high CPU frequency, and compatibility with 10 5G bands.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "ASUS Vivobook 15 Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) X515EA-EJ312W Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg)",
    //       "brandName": "Laptops",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618335/Ecommerce/rg4jsoedvqzc1foc1q0v.jpg"
    //       ],
    //       "description": "The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "DELL Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (14.96 inch, Carbon Black, 1.65 Kg, With MS Office)",
    //       "brandName": "Laptops",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618335/Ecommerce/sbu8rgpcthgxjhbxuk0a.jpg"
    //       ],
    //       "description": "DELL Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (14.96 inch, Carbon Black, 1.65 Kg, With MS Office)",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "ASUS ROG Strix G15 Ryzen 7 Octa Core AMD R7-4800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics (15.6 Inch, Eclipse Gray, 2.10 Kg)",
    //       "brandName": "Laptops",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618336/Ecommerce/klj5jc3ze0vhmbrfjhsw.jpg"
    //       ],
    //       "description": "You can enjoy an immersive and engaging gaming experience on the ASUS ROG Strix G15 Gaming Laptop. With its focused power, this laptop streamlines and enhances the gaming experience on Windows 11 Home. Gaming and smooth, rapid multitasking are made possible by this laptop's AMD Ryzen 4000H-Series CPU and GeForce RTX 30-series GPU. You can play fast esports on this laptop as its display has a refresh rate of up to 144 Hz. When running heavy applications, this laptop's advanced thermal innovations help keep it cool. And, its Adaptive-Sync helps enhance the overall gaming experience.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "beatXP Marv Neo 1.85'' HD Display with Bluetooth Calling Smartwatch",
    //       "brandName": "Smart Watches",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618337/Ecommerce/iiejoidwhlbzecgsyhwr.jpg"
    //       ],
    //       "description": "High-performance and robust, the beatXP Marv Neo Smartwatch is an excellent addition to your watch collection. It lends high clarity on its up to 4.699 cm (1.85) wide TFT HD display. Additionally, its stylish screen with personalised watch faces offers an appealing appearance. Also, this smartwatch's EzyPair technology ensures a stable connection for hassle-free Bluetooth calling. Moreover, this smartwatch allows you to track your health indicators, such as calorie intake and more while participating in various fitness and sports activities.",
    //       "price": 6999,
    //       "sellingPrice": 4049
    //     },
    //     {
    //       "productName": "NOVA NHP 8106 Hair Dryer  (1400 W, Black)",
    //       "brandName": "Trimmers, Dryers & more",
    //       "category": "Personal Care Appliances",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618337/Ecommerce/ambsfl5hqcmi48qymwe8.jpg"
    //       ],
    //       "description": "The Nova Professional NHP 8220 Hair Dryer is a powerful and efficient hair styling tool. It operates at 1800 W, making it quick and effective in drying and styling your hair. The multicolor design adds a touch of style to your grooming routine. This hair dryer is perfect for both personal and professional use, offering salon-like results from the comfort of your home. Style your hair effortlessly with Nova Professional NHP 8220 Hair Dryer.",
    //       "price": 1899,
    //       "sellingPrice": 1124
    //     },
    //     {
    //       "productName": "Longway Speedy 300 mm Energy Saving 3 Blade Table Fan  (Black, Pack of 1)",
    //       "brandName": "Table Fans",
    //       "category": "Home & Kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618338/Ecommerce/itseiiscc41ua7hswy8c.jpg"
    //       ],
    //       "description": "Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6\" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ",
    //       "price": 2250,
    //       "sellingPrice": 1199
    //     },
    //     {
    //       "productName": "boAt Rockerz 255 Pro+ /258 Pro+ with ASAP Charge and upto 60 Hours Playback Bluetooth Headset  (Active Black, In the Ear)",
    //       "brandName": "Headphones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618339/Ecommerce/rbapwdjgtcqf9knvfojm.jpg"
    //       ],
    //       "description": "boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for instant wireless connectivity. Its super powerful 300mAh battery provides a humongous playtime of up to 60 hours for an extended audio bliss. Its 10mm dynamic drivers help supply superior musical experience to the user with immersive sound. With our ASAP fast charge technology, you can get the headphones fully charged in just 60 minutes. It also offers resistance against water and sweat with IPX7 rated premium build. One can control the playback and calls easily via the provided multifunction controls and even summon respective smart Voice Assistant. Get ready to get enthralled by the pumped up audio and soaring vibe of Rockerz 255 Pro+",
    //       "price": 2990,
    //       "sellingPrice": 1199
    //     },
    //     {
    //       "productName": "SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)  (4 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618340/Ecommerce/dzckguaaymagmzdkimnr.jpg"
    //       ],
    //       "description": "This smartphone features a terrific 16.62 cm (6.6) FHD+ LCD Display that can effortlessly blow your mind with its incredible performance. Furthermore, this phone boasts a 50 MP Triple Camera setup that allows you to capture awesomeness with a gentle tap. Moreover, the Samsung Galaxy F13 sports up to 8 GB of RAM and features an innovative RAM plus technology that taps into the phone’s internal storage to elevate its performance.",
    //       "price": 14999,
    //       "sellingPrice": 9199
    //     },
    //     {
    //       "productName": "APPLE iPhone 13 (Midnight, 128 GB)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618342/Ecommerce/adgqu4eqtbqfzlasdxpx.jpg"
    //       ],
    //       "description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "NIKON Z 50 Mirrorless Camera Body with 16-50mm Lens (Black)",
    //       "brandName": "Cameras",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618343/Ecommerce/dfl4t3ob5ykgv62imrkm.jpg"
    //       ],
    //       "description": "Capture stunning photos and videos with this high-resolution digital camera. Perfect for photography enthusiasts.",
    //       "price": 1200,
    //       "sellingPrice": 840
    //     },
    //     {
    //       "productName": "Prestige PKOSS Electric Kettle (1.5 L, Silver, Black)",
    //       "brandName": "Electric Kettles",
    //       "category": "Home & Kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618344/Ecommerce/vclu2nbcnaizefwhssft.jpg"
    //       ],
    //       "description": "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    //       "price": 1195,
    //       "sellingPrice": 717
    //     },
    //     {
    //       "productName": "Men Printed Round Neck Cotton Blend White T-Shirt",
    //       "brandName": "T-Shirts",
    //       "category": "Sports & Fitness",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618345/Ecommerce/xuta99rvcq8wgu6rps6f.jpg"
    //       ],
    //       "description": "Stay cool and stylish with this really cool T-Shirt",
    //       "price": 499,
    //       "sellingPrice": 166
    //     },
    //     {
    //       "productName": "POCO C51 (Power Black, 64 GB)  (4 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618345/Ecommerce/gmpvqtoydphcctn5zggp.jpg"
    //       ],
    //       "description": "Give your inner tech nerd a treat with the POCO C51 smartphone, which mesmerises you from the minute you switch it on thanks to its top-notch performance. The POCO C51's MediaTek Helio G36 octa-core Processor, clocked at up to 2.2 GHz, has all the power needed for responsive web surfing and multimedia tasks. Also, the POCO C51 includes a fantastic Turbo RAM function that allows you access to up to 7 GB of RAM whenever you need it. This feature enables you to play visually demanding games and easily consume high-quality material. Also, the big 16.56 cm (6.52) HD+ display on this phone is perfect for all of your surfing and gaming demands. Also, the POCO C51 smartphone has an 8 MP dual camera and a 5 MP selfie camera that allows you to record the enthralling moments in your daily life with sharp images.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "vivo T2x 5G (Aurora Gold, 128 GB)  (8 GB RAM)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618346/Ecommerce/l7sawuriqmdlfzddph9u.jpg"
    //       ],
    //       "description": "With the superb Vivo T2x 5G, you can take advantage of great pictures and a flawless user experience. With the Vivo T2x 5G, you can experience exceptional performance owing to its 7 nm 5G CPU, the octa-core Dimensity 6020, with a top clock speed of 2.2 GHz. Additionally, the 50 MP main camera on this smartphone beautifully catches every detail you see. Additionally, Super Night Selfie employs noise cancellation technology in conjunction with an Aura Screen Light to produce a calming light that is effective in low light. The pioneering Extended RAM 3.0 technology also uses ROM to expand RAM with a maximum capacity of 8 GB. This enables smooth app switching and allows up to 27 active applications to run in the background.",
    //       "price": 19999,
    //       "sellingPrice": 14199
    //     },
    //     {
    //       "productName": "APPLE iPhone 14 (Blue, 128 GB)",
    //       "brandName": "Mobile Phones",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618347/Ecommerce/jll4kvultzdfry5titfy.jpg"
    //       ],
    //       "description": "Best smart phone under this price range compare to other phones in 2023 if you see overall build quality, performance and Camera with autofocus and video action mode are awesome 50% extra RAM compared to iPhone 13 and other more features. Best time to upgrade to iPhone 14 . ",
    //       "price": 69999,
    //       "sellingPrice": 64199
    //     },
    //     {
    //       "productName": "kisan",
    //       "brandName": "mobile",
    //       "category": "smartwatch",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/raw/upload/v1725618348/Ecommerce/ztmdaatkhxcsxigoibsk"
    //       ],
    //       "description": "hello to the future",
    //       "price": 56,
    //       "sellingPrice": 88
    //     },
    //     {
    //       "productName": "WishCare® 100% Pure Premium Cold Pressed Olive Oil for Hair & Skin - 200ml",
    //       "brandName": "Haircare",
    //       "category": "Hair Oil",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618348/Ecommerce/gfspnwu81eslytxbiwec.webp"
    //       ],
    //       "description": "HIGHEST QUALITY: WishCare Olive Oil is obtained from the first pressing of the olive and is left in its natural unrefined state for the highest nutrient retention possible. High in vitamin E and A, antioxidants and essential fatty acids. Comes with an easy to use fliptop cap and comb applicator to make your life simpler.\nHAIR CARE : WishCare Olive Oil is rich in vitamins A, E and antioxidants. It helps protect the keratin in hair and seals in moisture. It help your hair look healthier, stronger and shinier. A hot oil treatment featuring olive oil will help you gain manageability so your hair is easier to style.\nSKIN CARE : WishCare Olive Oil can be used as a natural moisturizer as it contains essential fatty acids. It also helps to keep the skin hydrated and prevents it from getting dry during winters while making it supple and lustrous.\nBODY MASSAGE OIL : WishCare Olive oil is one of the best oils that are used for body massage.A nourishing olive oil massage helps in relieving sore muscles and strained joints. Olive oil massage that helps in calming the nerves, increasing blood circulation throughout the body, improving energy levels and supplying overall nourishment to the body.\nHEALTHY NAILS & CUTICLES : WishCare Olive Oil penetrates the skin and nails and repair the damage and softens nails and cuticles. Olive oil is good to moisturize and strengthen the fragile fingernails. It maintains the skin’s elasticity and tends to keep it smooth, supple, and glowing.",
    //       "price": 400,
    //       "sellingPrice": 272
    //     },
    //     {
    //       "productName": "PHone",
    //       "brandName": "android",
    //       "category": "smartphone",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618349/Ecommerce/lzlppwnsjum7hgxcaflb.png"
    //       ],
    //       "description": "black in color",
    //       "price": 123456789,
    //       "sellingPrice": 1234567
    //     },
    //     {
    //       "productName": "INKAST Men's Cotton Rich Heavy Weight Hooded Sweatshirt (Regular Fit)",
    //       "brandName": "Clothes ",
    //       "category": "Clothes for men",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618350/Ecommerce/wsolydvexebykrhjesom.jpg"
    //       ],
    //       "description": "Material composition60% Cotton, 40% Polyester\nSleeve typeLong Sleeve\nMaterial typeCotton Blend\nFit typeRegular\nNeck styleHooded Neck\nStyleCasual\nCountry of OriginIndia",
    //       "price": 1200,
    //       "sellingPrice": 900
    //     },
    //     {
    //       "productName": "bike 01",
    //       "brandName": "motrobike",
    //       "category": "bike ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618350/Ecommerce/gbwhpf6rxrcywitihpp5.svg"
    //       ],
    //       "description": "best bike",
    //       "price": 1500000,
    //       "sellingPrice": 1500
    //     },
    //     {
    //       "productName": "table",
    //       "brandName": "table",
    //       "category": "table",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618353/Ecommerce/v2ncw2iy5ybtwolm6nai.jpg"
    //       ],
    //       "description": "sduchi",
    //       "price": 4520,
    //       "sellingPrice": 4500
    //     },
    //     {
    //       "productName": "Miraj",
    //       "brandName": "Iphon",
    //       "category": "mobile",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618354/Ecommerce/yqpjfn3pnwhadt2mzfds.jpg"
    //       ],
    //       "description": "its very nice",
    //       "price": 5,
    //       "sellingPrice": 100000
    //     },
    //     {
    //       "productName": "Chocolate",
    //       "brandName": "Chocolate",
    //       "category": "Chocolate",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618355/Ecommerce/dy2wu4cah3a7uy4sjddw.jpg"
    //       ],
    //       "description": "this is Chocolate ",
    //       "price": 100,
    //       "sellingPrice": 90
    //     },
    //     {
    //       "productName": "Book 01",
    //       "brandName": "Book",
    //       "category": "Book",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618357/Ecommerce/geyc6vwntcwltt2fmbn2.jpg"
    //       ],
    //       "description": "This is a Book 01",
    //       "price": 200,
    //       "sellingPrice": 190
    //     },
    //     {
    //       "productName": "Xiaomi 12 Pro 5G",
    //       "brandName": "Mobile",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618358/Ecommerce/whhs0an3wis3kgdawxft.jpg"
    //       ],
    //       "description": "This is Xiaomi 12 Pro 5G",
    //       "price": 30000,
    //       "sellingPrice": 27000
    //     },
    //     {
    //       "productName": "TV 281",
    //       "brandName": "TV",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618359/Ecommerce/ofbwf3vzkpo491jwg87u.png"
    //       ],
    //       "description": "This is TV 281",
    //       "price": 40000,
    //       "sellingPrice": 30000
    //     },
    //     {
    //       "productName": "OnePlus Nord CE 2 Lite 5G",
    //       "brandName": "Mobile",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618359/Ecommerce/wznrfqupfmws0batahcl.jpg"
    //       ],
    //       "description": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
    //       "price": 25000,
    //       "sellingPrice": 20000
    //     },
    //     {
    //       "productName": "Apple iPhone 14",
    //       "brandName": "Mobile",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618361/Ecommerce/v0uik6l2xijb04jcs8i3.webp"
    //       ],
    //       "description": "Apple iPhone 14 Quick Specifications\nSpecification\tValue\nCPU\t3.22 GHz, Hexa Core Processor\nRear Camera\t12 MP f/1.5 (Main)\n12 MP f/2.4 (Ultra Wide) with autofocus\nInternal Memory\t128 GB\nBattery\t3279 mAh, Li-ion Battery\nDisplay\t6.1 inches, 1170 x 2532 pixels",
    //       "price": 56999,
    //       "sellingPrice": 54149.05
    //     },
    //     {
    //       "productName": "Lymio Casual Shirt for Men",
    //       "brandName": "Shirt",
    //       "category": "Clothes",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618363/Ecommerce/p6xquxfd7qeqnbry4imq.jpg"
    //       ],
    //       "description": "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Patta)",
    //       "price": 4999,
    //       "sellingPrice": 349
    //     },
    //     {
    //       "productName": "Leriya Fashion Dress for Women Midi",
    //       "brandName": "Dress ",
    //       "category": "Clothes",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618364/Ecommerce/oevmyu7x3srqy0awobbf.jpg"
    //       ],
    //       "description": "Leriya Fashion Dress for Women Midi | One Piece Dress for Women | Beach Dress for Women",
    //       "price": 1999,
    //       "sellingPrice": 389
    //     },
    //     {
    //       "productName": "AGARO Marvel 19 Liters Oven Toaster Griller",
    //       "brandName": "kitchen",
    //       "category": "kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618364/Ecommerce/khcoacerpr0cw1mnunql.webp"
    //       ],
    //       "description": "AGARO Marvel 19 Liters Oven Toaster Griller,Motorised Rotisserie Cake Baking Otg With 5 Heating Mode,(Black),1280 Watts",
    //       "price": 3999,
    //       "sellingPrice": 3449
    //     },
    //     {
    //       "productName": "Prestige PIC 6.1 V3 PIC 2200 Watts Induction Cooktop",
    //       "brandName": "Kitchen",
    //       "category": "Kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618365/Ecommerce/unjmmxguhhebbopkf1wy.jpg"
    //       ],
    //       "description": "Prestige PIC 6.1 V3 PIC 2200 Watts Induction Cooktop | Black | Automatic Whistle Counter | Feather Touch Buttons | Keep Warm Function| Dual Heat Sensor",
    //       "price": 6145,
    //       "sellingPrice": 3890
    //     },
    //     {
    //       "productName": "Pressure Cooker",
    //       "brandName": "Cooker",
    //       "category": "Kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618366/Ecommerce/by42s46obijb6uhexwfb.jpg"
    //       ],
    //       "description": "Hawkins Classic Aluminium Inner Lid Pressure Cooker, 5 Litre, Silver (Cl50), 5 Liter",
    //       "price": 2150,
    //       "sellingPrice": 1940
    //     },
    //     {
    //       "productName": "Mixer",
    //       "brandName": "Mixer",
    //       "category": "Kitchen",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618367/Ecommerce/hnbo44molr1vvstl800t.webp"
    //       ],
    //       "description": "Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)",
    //       "price": 3500,
    //       "sellingPrice": 1298
    //     },
    //     {
    //       "productName": "8.0 kg AI Ecobubble™ Front Load Washing Machine with SmartThings & Wi-Fi, WW80T504DAX1",
    //       "brandName": "Washing Machine",
    //       "category": "Electronics ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618370/Ecommerce/ti2zmpqlx5pdogefemsw.png"
    //       ],
    //       "description": "Get clothes spotlessly clean, even if they’re really dirty. The Bubble Soak function helps remove a wide variety of stubborn stains, like blood, tea, wine, make-up and grass. Clothes are thoroughly soaked in active bubbles, so dirt and stains are loosened and can be removed more effectively*.",
    //       "price": 30000,
    //       "sellingPrice": 25000
    //     },
    //     {
    //       "productName": "msd",
    //       "brandName": "men",
    //       "category": "shirt",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618370/Ecommerce/p50eyjnefffwlj4dt8wm.jpg"
    //       ],
    //       "description": "msd",
    //       "price": 520,
    //       "sellingPrice": 50
    //     },
    //     {
    //       "productName": "Iphone15",
    //       "brandName": "Mobile ",
    //       "category": "Electronic ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/raw/upload/v1725618371/Ecommerce/rmlgeqa7x8hzz5iloynl"
    //       ],
    //       "description": "Iphone15",
    //       "price": 1000,
    //       "sellingPrice": 8000
    //     },
    //     {
    //       "productName": "HP laptop",
    //       "brandName": "Laptops",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618373/Ecommerce/dkigwrpfn5phgjg3zeza.webp"
    //       ],
    //       "description": "Hp",
    //       "price": 500,
    //       "sellingPrice": 450
    //     },
    //     {
    //       "productName": "Urban Terrain Shimano Geared for Men with Front Suspension & Dual Disc Brake MTB UT1000 27.5 T Road Cycle  (21 Gear, Black)",
    //       "brandName": "geared cycles",
    //       "category": "cycles",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618374/Ecommerce/d3nmpoeomuyae3cefzcv.jpg"
    //       ],
    //       "description": "This Urban Terrain mountain bike is made of steel to ensure sturdiness and durability. While its 21-speed gear shift helps you ride it on various terrains with ease, its 69.85 cm wide tires ensure a smooth and comfortable ride. Also, the double disc brakes ensure improved safety and reliability.",
    //       "price": 49990,
    //       "sellingPrice": 114899
    //     },
    //     {
    //       "productName": "Iget",
    //       "brandName": "Oxygen",
    //       "category": "Self Satisfaction",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618375/Ecommerce/nbnratkliqxddt7ubkzv.jpg"
    //       ],
    //       "description": "ifykyk",
    //       "price": 1500,
    //       "sellingPrice": 1200
    //     },
    //     {
    //       "productName": "Phone",
    //       "brandName": "Mobile",
    //       "category": "Phone",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618376/Ecommerce/axatov5tm7aspitllyme.jpg"
    //       ],
    //       "description": "Phone",
    //       "price": 10000,
    //       "sellingPrice": 10000
    //     },
    //     {
    //       "productName": "The Derma Co. Sunscreen",
    //       "brandName": "Sunscreens",
    //       "category": "Skincare",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618377/Ecommerce/lrmeq8de9jolbqpbwvlh.jpg"
    //       ],
    //       "description": "SPF 50+++ , great for skin",
    //       "price": 500,
    //       "sellingPrice": 448
    //     },
    //     {
    //       "productName": "boAt Airdopes 311 Pro TWS in-Ear Earbuds",
    //       "brandName": "Headphones & Earbuds",
    //       "category": "Electronics",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618378/Ecommerce/oy4mps2afcd5uy6qi6zo.jpg"
    //       ],
    //       "description": "50 HRS Playtime, Dual Mics with ENx™ Tech, 50 ms low-latency BEAST™ Mode, ASAP™ Charging, IWP™ Tech(Lavender Rush)",
    //       "price": 4990,
    //       "sellingPrice": 1198
    //     },
    //     {
    //       "productName": "Olive Grey Stripe Printed Shirt",
    //       "brandName": "Stripe shirts",
    //       "category": "Tropical Treasures",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618379/Ecommerce/gn47njtzvanjl7thdgb7.jpg"
    //       ],
    //       "description": "Full Sleeves\nPrinted Design\nStand Collar\nCurved Hem Design",
    //       "price": 1499,
    //       "sellingPrice": 999
    //     },
    //     {
    //       "productName": "Bottles",
    //       "brandName": "Home's Product",
    //       "category": "Bottles",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618381/Ecommerce/jjhgtdiuz0wmlrvrgwii.jpg"
    //       ],
    //       "description": "All size of Water is Available",
    //       "price": 200,
    //       "sellingPrice": 180
    //     },
    //     {
    //       "productName": "test",
    //       "brandName": "blue",
    //       "category": "excel",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618382/Ecommerce/dxuqgx4j6xsjntl4ekcq.png"
    //       ],
    //       "description": "test",
    //       "price": 8900,
    //       "sellingPrice": 8900
    //     },
    //     {
    //       "productName": "test",
    //       "brandName": "blue",
    //       "category": "excel",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618383/Ecommerce/vh3ozn9hbrew5nopgbv6.png"
    //       ],
    //       "description": "test",
    //       "price": 8900,
    //       "sellingPrice": 8900
    //     },
    //     {
    //       "productName": "ewqdwqdq",
    //       "brandName": "red",
    //       "category": "ddquyl",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618383/Ecommerce/q3gh2nx6xoelqpqxtmht.jpg"
    //       ],
    //       "description": "ewqeqwdq",
    //       "price": 7980,
    //       "sellingPrice": 4550
    //     },
    //     {
    //       "productName": "Windows 11",
    //       "brandName": "Windows 11",
    //       "category": "Windows",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618386/Ecommerce/mtnycr0wtpbwiqvcbcrb.png"
    //       ],
    //       "description": "Windows 11",
    //       "price": 4500,
    //       "sellingPrice": 4200
    //     },
    //     {
    //       "productName": "Windows 11",
    //       "brandName": "Windows 11",
    //       "category": "Windows",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618386/Ecommerce/tmrtgdf1ejrpots5nbaf.png"
    //       ],
    //       "description": "Windows 11",
    //       "price": 4500,
    //       "sellingPrice": 4200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618388/Ecommerce/cm9hlsfr4j366rdkz1j7.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618388/Ecommerce/ilwstl8h9j1zgdfuvk9k.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618389/Ecommerce/x8gsxiaafjdufzhxwghy.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618390/Ecommerce/wskfywbtuu2jhlirqjes.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618391/Ecommerce/uwyexxi9lzmtmbnl6mig.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618391/Ecommerce/j21tx63yaca7wgmfijmc.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Windows 10",
    //       "brandName": "Windows 10",
    //       "category": "Windows ",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618392/Ecommerce/jgoh5nhy09si1y3e104p.png"
    //       ],
    //       "description": "Windows 10",
    //       "price": 8500,
    //       "sellingPrice": 8200
    //     },
    //     {
    //       "productName": "Highneck",
    //       "brandName": "Top",
    //       "category": "Clothes",
    //       "productImage": [
    //         "https://res.cloudinary.com/dhnzqkbez/image/upload/v1725618393/Ecommerce/qc5yowamitmkxxolondw.jpg"
    //       ],
    //       "description": "Very Cold",
    //       "price": 100,
    //       "sellingPrice": 50
    //     }
    //   ]
    
    
    // console.log("New Data",new_data.length);
    
    // for (let i = 0; i < new_data.length; i++) {
    //     const uploadProduct = new productModel(new_data[i]);
    //     const saveProduct = await uploadProduct.save()
    //     console.log("ith product uplaod",i);
    // }


}


 module.exports = bulkuploadProduct




