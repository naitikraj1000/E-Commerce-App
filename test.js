const fs = require('fs');
const axios = require('axios');
const path = require('path');
const cloudinary = require('cloudinary').v2;


let data = [
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec274b409f906d81645e3",
        "productName": "SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)  (8 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70",
        "category": "Electronics",
        "description": "Explore a new range of night photography features on this Samsung Galaxy S22 5G smartphone. You can click stunning images even in low light with the Nightography mode. It is designed with a pro-grade camera which comprises a big pixel sensor that welcomes more light for mind-blowing photography. Built with impressive software and hardware, this phone is a game-changer. With a 120 Hz refresh rate and dynamic AMOLED 2x display, you are going to experience immersive screen time. This phone operates on a Snapdragon 8 Gen 1 processor that delivers quick and hassle- free navigation. This device is protected by Corning Gorilla Glass Victus and has an IP68 waterproof rating.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "55\n",
                "reviewer": "6630d30515691cddffa8063f",
                "date": "2024-04-30T11:35:25.520Z",
                "_id": "6630d77d15691cddffa8073c"
            }
        ],
        "createdAt": "2023-10-17T17:20:52.639Z",
        "updatedAt": "2024-07-15T03:34:53.610Z",
        "__v": 3
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec276b409f906d81645e5",
        "productName": "Xiaomi 12 Pro 5G (Opera Mauve, 256 GB)  (12 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/c/x/-original-imagqmtffg9sjjp6.jpeg?q=70",
        "category": "Electronics",
        "description": "Treat your inner tech geek with this Xiaomi 12 Pro 5G mobile that surprises you with its flawless performance. With a 120 Hz, 10-bit 2K+, and AMOLED Display setup, you can show off your flair wherever you go. Your entertainment experience is upgraded with an AMOLED display that makes every image come to life. The quad speaker with sound by Harman/Kardon exhilarates you with its sound clarity. The flagship camera setup of this phone, with 50 MP + 50 MP + 50 MP, complements your photography skills. With the Pro Focus AI tracking technology, you can easily take clear pictures of moving objects. With the liquid cooling technology, your phone’s heat can be controlled even when you are multitasking. Unbeatable performance is achieved with the powerful Snapdragon 8 Gen 1 processor. Supported by a massive 4600 mAh battery and Surge P1 technology, you can witness an exceptional charging speed on this Xiaomi 12 Pro mobile.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:20:54.160Z",
        "updatedAt": "2023-12-21T01:43:58.959Z",
        "__v": 2
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec277b409f906d81645e7",
        "productName": "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70",
        "category": "Electronics",
        "description": "The Redmi Note 12 Pro 5G has a tonne of incredible features and provides gorgeous photographs and a faultless user experience. Due to its 2 um pixel size, the 50 MP Sony IMX766 sensor on the Redmi Note 12 Pro 5G is able to capture more light and produce stunning low-light images. Additionally, this phone boasts an innovative OIS that works to reduce camera shake and provide steady, blur-free images, even in dim lighting conditions. An additional benefit of this phone is its 120 Hz Pro AMOLED display with adaptive sync, which provides a fluid, lively, and engaging user experience. You can enjoy this phone's MediaTek Dimesity 1080 processor efficiently since it has a big vapour chamber, a high CPU frequency, and compatibility with 10 5G bands.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 3,
                "comment": "good product",
                "reviewer": "65d5a1c911e5a5dfcc165dda",
                "date": "2024-02-21T07:12:06.277Z",
                "_id": "65d5a24611e5a5dfcc165e22"
            },
            {
                "rating": 5,
                "comment": "good ",
                "reviewer": "662b6ad3451b9cdd2aded2be",
                "date": "2024-04-26T08:55:35.213Z",
                "_id": "662b6c07451b9cdd2aded372"
            }
        ],
        "createdAt": "2023-10-17T17:20:55.378Z",
        "updatedAt": "2024-06-19T14:21:41.901Z",
        "__v": 4
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec279b409f906d81645e9",
        "productName": "ASUS Vivobook 15 Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) X515EA-EJ312W Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg)",
        "subcategory": "Laptops",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/e/f/-original-imagrgprbhchwgve.jpeg?q=70",
        "category": "Electronics",
        "description": "The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.",
        "tagline": "Limited Stock",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "ddrrtdgd",
                "reviewer": "658295507988d7ef8738539f",
                "date": "2023-12-20T07:20:38.720Z",
                "_id": "658295c67988d7ef873853e0"
            },
            {
                "rating": 5,
                "comment": "mkhugyrf",
                "reviewer": "65aa9b35e5dacbce7efcd3fc",
                "date": "2024-01-19T15:56:29.001Z",
                "_id": "65aa9bade5dacbce7efcd43b"
            },
            {
                "rating": 5,
                "comment": "zxzc",
                "reviewer": "6668360c1010a9819164f13c",
                "date": "2024-06-11T11:38:50.935Z",
                "_id": "6668374a1010a9819164f3df"
            }
        ],
        "createdAt": "2023-10-17T17:20:57.965Z",
        "updatedAt": "2024-06-11T11:38:50.937Z",
        "__v": 3
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec27ab409f906d81645eb",
        "productName": "DELL Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (14.96 inch, Carbon Black, 1.65 Kg, With MS Office)",
        "subcategory": "Laptops",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
        "category": "Electronics",
        "description": "DELL Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (14.96 inch, Carbon Black, 1.65 Kg, With MS Office)",
        "tagline": "Limited Stock",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "Good Laptop",
                "reviewer": "662b80969f9a307000802ff9",
                "date": "2024-04-26T11:14:05.490Z",
                "_id": "662b8c7dadd9e9a3cf69e088"
            }
        ],
        "createdAt": "2023-10-17T17:20:58.883Z",
        "updatedAt": "2024-04-26T11:14:05.492Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec27bb409f906d81645ed",
        "productName": "ASUS ROG Strix G15 Ryzen 7 Octa Core AMD R7-4800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics (15.6 Inch, Eclipse Gray, 2.10 Kg)",
        "subcategory": "Laptops",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70",
        "category": "Electronics",
        "description": "You can enjoy an immersive and engaging gaming experience on the ASUS ROG Strix G15 Gaming Laptop. With its focused power, this laptop streamlines and enhances the gaming experience on Windows 11 Home. Gaming and smooth, rapid multitasking are made possible by this laptop's AMD Ryzen 4000H-Series CPU and GeForce RTX 30-series GPU. You can play fast esports on this laptop as its display has a refresh rate of up to 144 Hz. When running heavy applications, this laptop's advanced thermal innovations help keep it cool. And, its Adaptive-Sync helps enhance the overall gaming experience.",
        "tagline": "Limited Stock",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:20:59.682Z",
        "updatedAt": "2023-10-17T17:20:59.682Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 6999,
            "cost": 4049,
            "discountPercent": 42
        },
        "_id": "652ec27db409f906d81645ef",
        "productName": "beatXP Marv Neo 1.85'' HD Display with Bluetooth Calling Smartwatch",
        "subcategory": "Smart Watches",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/a/0/j/4-6-bxio2003-android-ios-beatxp-yes-original-imagt9fsjarfyhfm.jpeg?q=70",
        "category": "Electronics",
        "description": "High-performance and robust, the beatXP Marv Neo Smartwatch is an excellent addition to your watch collection. It lends high clarity on its up to 4.699 cm (1.85) wide TFT HD display. Additionally, its stylish screen with personalised watch faces offers an appealing appearance. Also, this smartwatch's EzyPair technology ensures a stable connection for hassle-free Bluetooth calling. Moreover, this smartwatch allows you to track your health indicators, such as calorie intake and more while participating in various fitness and sports activities.",
        "tagline": "Best Seller",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:01.995Z",
        "updatedAt": "2023-10-17T17:21:01.995Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1899,
            "cost": 1124,
            "discountPercent": 40
        },
        "_id": "652ec27eb409f906d81645f1",
        "productName": "NOVA NHP 8106 Hair Dryer  (1400 W, Black)",
        "subcategory": "Trimmers, Dryers & more",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/khtghow0pkrrdj-0/hair-dryer/p/o/0/nhp-8106-nova-original-imafxtddk7rdercf.jpeg?q=70",
        "category": "Personal Care Appliances",
        "description": "The Nova Professional NHP 8220 Hair Dryer is a powerful and efficient hair styling tool. It operates at 1800 W, making it quick and effective in drying and styling your hair. The multicolor design adds a touch of style to your grooming routine. This hair dryer is perfect for both personal and professional use, offering salon-like results from the comfort of your home. Style your hair effortlessly with Nova Professional NHP 8220 Hair Dryer.",
        "tagline": "Kubra, Nova & more",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "Bad",
                "reviewer": "66d8105510a182e9f8c7dfec",
                "date": "2024-09-04T07:52:16.914Z",
                "_id": "66d811b010a182e9f8c7e1fc"
            }
        ],
        "createdAt": "2023-10-17T17:21:02.907Z",
        "updatedAt": "2024-09-04T07:52:16.916Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 2250,
            "cost": 1199,
            "discountPercent": 46
        },
        "_id": "652ec27fb409f906d81645f3",
        "productName": "Longway Speedy 300 mm Energy Saving 3 Blade Table Fan  (Black, Pack of 1)",
        "subcategory": "Table Fans",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/fan/s/i/r/speedy-230-1-table-fan-300-longway-original-imagpgp5kzufdcxj.jpeg?q=70",
        "category": "Home & Kitchen",
        "description": "Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6\" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ",
        "tagline": "Top Selling",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:03.839Z",
        "updatedAt": "2024-07-25T09:29:49.573Z",
        "__v": 2
    },
    {
        "price": {
            "mrp": 2990,
            "cost": 1199,
            "discountPercent": 59
        },
        "_id": "652ec282b409f906d81645f5",
        "productName": "boAt Rockerz 255 Pro+ /258 Pro+ with ASAP Charge and upto 60 Hours Playback Bluetooth Headset  (Active Black, In the Ear)",
        "subcategory": "Headphones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
        "category": "Electronics",
        "description": "boAt Rockerz 255 Pro+ is a power-packed in-ear wireless neckband headphone that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with Bluetooth V5.0 for instant wireless connectivity. Its super powerful 300mAh battery provides a humongous playtime of up to 60 hours for an extended audio bliss. Its 10mm dynamic drivers help supply superior musical experience to the user with immersive sound. With our ASAP fast charge technology, you can get the headphones fully charged in just 60 minutes. It also offers resistance against water and sweat with IPX7 rated premium build. One can control the playback and calls easily via the provided multifunction controls and even summon respective smart Voice Assistant. Get ready to get enthralled by the pumped up audio and soaring vibe of Rockerz 255 Pro+",
        "tagline": "Grab Now!",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:06.561Z",
        "updatedAt": "2023-10-17T17:21:06.561Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 14999,
            "cost": 9199,
            "discountPercent": 38
        },
        "_id": "652ec283b409f906d81645f7",
        "productName": "SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)  (4 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
        "category": "Electronics",
        "description": "This smartphone features a terrific 16.62 cm (6.6) FHD+ LCD Display that can effortlessly blow your mind with its incredible performance. Furthermore, this phone boasts a 50 MP Triple Camera setup that allows you to capture awesomeness with a gentle tap. Moreover, the Samsung Galaxy F13 sports up to 8 GB of RAM and features an innovative RAM plus technology that taps into the phone’s internal storage to elevate its performance.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:07.514Z",
        "updatedAt": "2023-10-17T17:21:07.514Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec284b409f906d81645f9",
        "productName": "APPLE iPhone 13 (Midnight, 128 GB)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        "category": "Electronics",
        "description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:08.328Z",
        "updatedAt": "2023-10-17T17:21:08.328Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1200,
            "cost": 840,
            "discountPercent": 30
        },
        "_id": "652ec286b409f906d81645fb",
        "productName": "NIKON Z 50 Mirrorless Camera Body with 16-50mm Lens (Black)",
        "subcategory": "Cameras",
        "productImage": "https://rukminim2.flixcart.com/image/312/312/k5o7r0w0/dslr-camera/z/h/4/z-50-z-50-nikon-original-imafzasjz33kaa8k.jpeg?q=70",
        "category": "Electronics",
        "description": "Capture stunning photos and videos with this high-resolution digital camera. Perfect for photography enthusiasts.",
        "tagline": "Best Seller",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:10.278Z",
        "updatedAt": "2023-10-17T17:21:10.278Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1195,
            "cost": 717,
            "discountPercent": 40
        },
        "_id": "652ec287b409f906d81645fd",
        "productName": "Prestige PKOSS Electric Kettle (1.5 L, Silver, Black)",
        "subcategory": "Electric Kettles",
        "productImage": "https://rukminim2.flixcart.com/image/612/612/kjlrb0w0/electric-kettle/g/h/w/prestige-prestige-pkoss-pkoss-1-5-original-imafz4wtzxhkau3g.jpeg?q=70",
        "category": "Home & Kitchen",
        "description": "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
        "tagline": "Deal of the day",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:11.201Z",
        "updatedAt": "2023-10-17T17:21:11.201Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 499,
            "cost": 166,
            "discountPercent": 66
        },
        "_id": "652ec287b409f906d81645ff",
        "productName": "Men Printed Round Neck Cotton Blend White T-Shirt",
        "subcategory": "T-Shirts",
        "productImage": "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/f/i/j/s-twtrnful-d108-tripr-original-imags8h2wffceyvh.jpeg?q=70",
        "category": "Sports & Fitness",
        "description": "Stay cool and stylish with this really cool T-Shirt",
        "tagline": "Deal of the Day",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [
            {
                "rating": 2,
                "comment": "Waste",
                "reviewer": "66ced85627b93a6f2a295b7d",
                "date": "2024-08-28T08:01:18.010Z",
                "_id": "66ced94e27b93a6f2a295ca8"
            }
        ],
        "createdAt": "2023-10-17T17:21:11.973Z",
        "updatedAt": "2024-08-28T08:01:18.011Z",
        "__v": 3
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec28ab409f906d8164601",
        "productName": "POCO C51 (Power Black, 64 GB)  (4 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70",
        "category": "Electronics",
        "description": "Give your inner tech nerd a treat with the POCO C51 smartphone, which mesmerises you from the minute you switch it on thanks to its top-notch performance. The POCO C51's MediaTek Helio G36 octa-core Processor, clocked at up to 2.2 GHz, has all the power needed for responsive web surfing and multimedia tasks. Also, the POCO C51 includes a fantastic Turbo RAM function that allows you access to up to 7 GB of RAM whenever you need it. This feature enables you to play visually demanding games and easily consume high-quality material. Also, the big 16.56 cm (6.52) HD+ display on this phone is perfect for all of your surfing and gaming demands. Also, the POCO C51 smartphone has an 8 MP dual camera and a 5 MP selfie camera that allows you to record the enthralling moments in your daily life with sharp images.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:14.085Z",
        "updatedAt": "2023-10-17T17:21:14.085Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 19999,
            "cost": 14199,
            "discountPercent": 30
        },
        "_id": "652ec28bb409f906d8164603",
        "productName": "vivo T2x 5G (Aurora Gold, 128 GB)  (8 GB RAM)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
        "category": "Electronics",
        "description": "With the superb Vivo T2x 5G, you can take advantage of great pictures and a flawless user experience. With the Vivo T2x 5G, you can experience exceptional performance owing to its 7 nm 5G CPU, the octa-core Dimensity 6020, with a top clock speed of 2.2 GHz. Additionally, the 50 MP main camera on this smartphone beautifully catches every detail you see. Additionally, Super Night Selfie employs noise cancellation technology in conjunction with an Aura Screen Light to produce a calming light that is effective in low light. The pioneering Extended RAM 3.0 technology also uses ROM to expand RAM with a maximum capacity of 8 GB. This enables smooth app switching and allows up to 27 active applications to run in the background.",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:15.036Z",
        "updatedAt": "2023-10-17T17:21:15.036Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 69999,
            "cost": 64199,
            "discountPercent": 30
        },
        "_id": "652ec28cb409f906d8164605",
        "productName": "APPLE iPhone 14 (Blue, 128 GB)",
        "subcategory": "Mobile Phones",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        "category": "Electronics",
        "description": "Best smart phone under this price range compare to other phones in 2023 if you see overall build quality, performance and Camera with autofocus and video action mode are awesome 50% extra RAM compared to iPhone 13 and other more features. Best time to upgrade to iPhone 14 . ",
        "tagline": "New Arrival",
        "quantity": 1,
        "seller": {
            "_id": "652ebf61b409f906d81645a3",
            "shopName": "Shopcart"
        },
        "reviews": [],
        "createdAt": "2023-10-17T17:21:16.260Z",
        "updatedAt": "2023-10-17T17:21:16.260Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 345,
            "cost": 35468,
            "discountPercent": 4
        },
        "_id": "654c1387285f0c9f0477b84a",
        "productName": "m",
        "subcategory": "jj",
        "productImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-imgix.headout.com%2Ftour%2F7064%2FTOUR-IMAGE%2Fb2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg%3Fauto%3Dformat%26w%3D780%26h%3D384%26q%3D90%26fit%3Dcrop%26ar%3D21%253A9&tbnid=PRMNxHNuRbYHDM&vet=12ahUKEwiM25-TwbWCAxUonP0HHTtJA1cQMygDegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.imgworldstickets.com%2F&docid=tJDZOssgVwbwjM&w=780&h=334&q=img&ved=2ahUKEwiM25-TwbWCAxUonP0HHTtJA1cQMygDegQIARB0",
        "category": "ghhg",
        "description": "dfhg",
        "tagline": "trfygjh",
        "quantity": 1,
        "seller": {
            "_id": "654c12f8285f0c9f0477b83a",
            "shopName": "jkjkjkjk"
        },
        "reviews": [],
        "createdAt": "2023-11-08T23:02:31.980Z",
        "updatedAt": "2023-11-08T23:02:31.980Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 4563656,
            "cost": 65656,
            "discountPercent": 565
        },
        "_id": "655248272610319a35c1603f",
        "productName": "rtg",
        "subcategory": "etyety",
        "productImage": "thththtrh",
        "category": "thttyt",
        "description": "ggtgh",
        "tagline": "tytyty",
        "quantity": 1,
        "seller": {
            "_id": "655247c42610319a35c16034",
            "shopName": "jokershop"
        },
        "reviews": [],
        "createdAt": "2023-11-13T16:00:39.767Z",
        "updatedAt": "2023-11-13T16:00:39.767Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 56,
            "cost": 88,
            "discountPercent": 5
        },
        "_id": "655d10ea4cfa677de12b9f26",
        "productName": "kisan",
        "subcategory": "mobile",
        "productImage": "https://unsplash.com/photos/a-man-in-a-yellow-turban-is-picking-flowers-dab-NdsXqmQ",
        "category": "smartwatch",
        "description": "hello to the future",
        "tagline": "hdhhdh",
        "quantity": 1,
        "seller": {
            "_id": "655d0f264cfa677de12b9f16",
            "shopName": "hello"
        },
        "reviews": [],
        "createdAt": "2023-11-21T20:19:54.745Z",
        "updatedAt": "2023-11-21T20:19:54.745Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 100,
            "cost": 150,
            "discountPercent": 2
        },
        "_id": "656d9f295b6527293867bef1",
        "productName": "milk",
        "subcategory": "Milk",
        "productImage": "mohan@gmail.com",
        "category": "Milk",
        "description": "Milk",
        "tagline": "Cow",
        "quantity": 1,
        "seller": {
            "_id": "656d9ed95b6527293867bee4",
            "shopName": "Elyee cofee"
        },
        "reviews": [],
        "createdAt": "2023-12-04T09:43:05.450Z",
        "updatedAt": "2023-12-04T09:43:05.450Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 232,
            "cost": 23,
            "discountPercent": 2
        },
        "_id": "657139fffa86e4841aabcbd4",
        "productName": "sdf",
        "subcategory": "test1",
        "productImage": "nca",
        "category": "test",
        "description": "sdfas",
        "tagline": "tester",
        "quantity": 1,
        "seller": {
            "_id": "657139c5fa86e4841aabcbc9",
            "shopName": "shopify"
        },
        "reviews": [],
        "createdAt": "2023-12-07T03:20:31.495Z",
        "updatedAt": "2023-12-07T03:20:31.495Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 400,
            "cost": 272,
            "discountPercent": 31
        },
        "_id": "657914c7b93f39cb312335ac",
        "productName": "WishCare® 100% Pure Premium Cold Pressed Olive Oil for Hair & Skin - 200ml",
        "subcategory": "Haircare",
        "productImage": "https://m.media-amazon.com/images/I/41LfLCuem8L._SX300_SY300_QL70_FMwebp_.jpg",
        "category": "Hair Oil",
        "description": "HIGHEST QUALITY: WishCare Olive Oil is obtained from the first pressing of the olive and is left in its natural unrefined state for the highest nutrient retention possible. High in vitamin E and A, antioxidants and essential fatty acids. Comes with an easy to use fliptop cap and comb applicator to make your life simpler.\nHAIR CARE : WishCare Olive Oil is rich in vitamins A, E and antioxidants. It helps protect the keratin in hair and seals in moisture. It help your hair look healthier, stronger and shinier. A hot oil treatment featuring olive oil will help you gain manageability so your hair is easier to style.\nSKIN CARE : WishCare Olive Oil can be used as a natural moisturizer as it contains essential fatty acids. It also helps to keep the skin hydrated and prevents it from getting dry during winters while making it supple and lustrous.\nBODY MASSAGE OIL : WishCare Olive oil is one of the best oils that are used for body massage.A nourishing olive oil massage helps in relieving sore muscles and strained joints. Olive oil massage that helps in calming the nerves, increasing blood circulation throughout the body, improving energy levels and supplying overall nourishment to the body.\nHEALTHY NAILS & CUTICLES : WishCare Olive Oil penetrates the skin and nails and repair the damage and softens nails and cuticles. Olive oil is good to moisturize and strengthen the fragile fingernails. It maintains the skin’s elasticity and tends to keep it smooth, supple, and glowing.",
        "tagline": "Hair Oil",
        "quantity": 1,
        "seller": {
            "_id": "65791454b93f39cb312335a4",
            "shopName": "demo"
        },
        "reviews": [],
        "createdAt": "2023-12-13T02:19:51.333Z",
        "updatedAt": "2023-12-13T02:38:44.455Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 123456789,
            "cost": 1234567,
            "discountPercent": 15
        },
        "_id": "65a5233cecc382245b72ee8e",
        "productName": "PHone",
        "subcategory": "android",
        "productImage": "https://shopcart-ecommerce-site.vercel.app/static/media/altimg.121d1c79f0aaa19a07d9.png",
        "category": "smartphone",
        "description": "black in color",
        "tagline": "hello brother",
        "quantity": 1,
        "seller": {
            "_id": "65a522ddecc382245b72ee81",
            "shopName": "BALA JI Store"
        },
        "reviews": [],
        "createdAt": "2024-01-15T12:21:16.447Z",
        "updatedAt": "2024-01-15T12:21:16.447Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 20000,
            "cost": 18000,
            "discountPercent": 10
        },
        "_id": "65c4ef8f72069934ac31fe25",
        "productName": "Smart Watch",
        "subcategory": "Watch",
        "productImage": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
        "category": "Men",
        "description": "it is new technology",
        "tagline": "Ye",
        "quantity": 1,
        "seller": {
            "_id": "65c4eebf72069934ac31fe1b",
            "shopName": "rrr"
        },
        "reviews": [],
        "createdAt": "2024-02-08T15:13:19.197Z",
        "updatedAt": "2024-02-08T15:13:19.197Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1200,
            "cost": 900,
            "discountPercent": 2
        },
        "_id": "65c5a03115468a6bc29f6d99",
        "productName": "INKAST Men's Cotton Rich Heavy Weight Hooded Sweatshirt (Regular Fit)",
        "subcategory": "Clothes ",
        "productImage": "https://m.media-amazon.com/images/I/71L83wmCvyL._SY879_.jpg",
        "category": "Clothes for men",
        "description": "Material composition60% Cotton, 40% Polyester\nSleeve typeLong Sleeve\nMaterial typeCotton Blend\nFit typeRegular\nNeck styleHooded Neck\nStyleCasual\nCountry of OriginIndia",
        "tagline": "Clothes ",
        "quantity": 1,
        "seller": {
            "_id": "65c59f9715468a6bc29f6d8d",
            "shopName": "shopcart"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "nice",
                "reviewer": "65c5a06b15468a6bc29f6dbb",
                "date": "2024-02-09T03:51:54.017Z",
                "_id": "65c5a15a15468a6bc29f6e5c"
            }
        ],
        "createdAt": "2024-02-09T03:46:57.216Z",
        "updatedAt": "2024-02-09T03:51:54.018Z",
        "__v": 3
    },
    {
        "price": {
            "mrp": 452,
            "cost": 254,
            "discountPercent": 24
        },
        "_id": "65f0b79522a565d183f057bf",
        "productName": "ad asd a",
        "subcategory": "afasd",
        "productImage": "aaads a ",
        "category": "afa",
        "description": "af a af adsf sa",
        "tagline": "ad adfa fdsf",
        "quantity": 1,
        "seller": {
            "_id": "65f0b76622a565d183f05722",
            "shopName": "abcd2"
        },
        "reviews": [],
        "createdAt": "2024-03-12T20:14:13.732Z",
        "updatedAt": "2024-03-12T20:14:13.732Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 12,
            "cost": 12,
            "discountPercent": 111
        },
        "_id": "65fb9203d433824e5792cd6d",
        "productName": "Test",
        "subcategory": "20",
        "productImage": "3003714069",
        "category": "12",
        "description": "Test",
        "tagline": "1",
        "quantity": 1,
        "seller": {
            "_id": "65fb91d1d433824e5792cd42",
            "shopName": "Seller"
        },
        "reviews": [],
        "createdAt": "2024-03-21T01:48:51.239Z",
        "updatedAt": "2024-03-21T01:48:51.239Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1500000,
            "cost": 1500,
            "discountPercent": 10
        },
        "_id": "660156500417a49901af4089",
        "productName": "bike 01",
        "subcategory": "motrobike",
        "productImage": "https://imgd.aeplcdn.com/0x0/statics/grey-16x9.svg",
        "category": "bike ",
        "description": "best bike",
        "tagline": "tata",
        "quantity": 1,
        "seller": {
            "_id": "660155d60417a49901af4077",
            "shopName": "ali shop "
        },
        "reviews": [],
        "createdAt": "2024-03-25T10:47:44.415Z",
        "updatedAt": "2024-03-25T10:47:44.415Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 4520,
            "cost": 4500,
            "discountPercent": 20
        },
        "_id": "660fcb4a656a213679442dc3",
        "productName": "table",
        "subcategory": "table",
        "productImage": "https://www.ulcdn.net/images/products/312898/slide/1332x726/Arabia_Dining_Table_TK_4.jpg?1609230340",
        "category": "table",
        "description": "sduchi",
        "tagline": "sdc",
        "quantity": 1,
        "seller": {
            "_id": "660fca5c656a213679442dac",
            "shopName": "htfg"
        },
        "reviews": [
            {
                "rating": 4,
                "comment": "nice table",
                "reviewer": "667662c4119f9a05ad448f3d",
                "date": "2024-07-01T02:22:24.536Z",
                "_id": "668212e089f9282c19b5ecd6"
            }
        ],
        "createdAt": "2024-04-05T09:58:34.993Z",
        "updatedAt": "2024-07-01T02:22:24.541Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 25000,
            "cost": 24499,
            "discountPercent": 10
        },
        "_id": "660fcfe5656a213679442fb2",
        "productName": "DSC Bat of Virat Kohli",
        "subcategory": "bat",
        "productImage": "data:image/jpeg;base64,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",
        "category": "Sport",
        "description": "DSC Virat Kohli",
        "tagline": "bat, dsc",
        "quantity": 1,
        "seller": {
            "_id": "660fcf71656a213679442fa7",
            "shopName": "SK C Shop"
        },
        "reviews": [],
        "createdAt": "2024-04-05T10:18:13.874Z",
        "updatedAt": "2024-04-05T10:18:13.874Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 5,
            "cost": 100000,
            "discountPercent": 500
        },
        "_id": "6626cbe4cb57c0d94baf5f5c",
        "productName": "Miraj",
        "subcategory": "Iphon",
        "productImage": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
        "category": "mobile",
        "description": "its very nice",
        "tagline": "Iphon",
        "quantity": 1,
        "seller": {
            "_id": "6626cb33cb57c0d94baf5f1d",
            "shopName": "jumaika"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "nice",
                "reviewer": "6626c90acb57c0d94baf5eb0",
                "date": "2024-04-22T20:47:17.286Z",
                "_id": "6626ccd5cb57c0d94baf6005"
            }
        ],
        "createdAt": "2024-04-22T20:43:16.212Z",
        "updatedAt": "2024-04-22T20:49:12.852Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 123,
            "cost": 23,
            "discountPercent": 2
        },
        "_id": "66308b3f94294d4ba9e3cb57",
        "productName": "qwe",
        "subcategory": "wqe",
        "productImage": "werw",
        "category": "23",
        "description": "wqe",
        "tagline": "qwe",
        "quantity": 1,
        "seller": {
            "_id": "662fe79fb48e9544d17db348",
            "shopName": "Harry"
        },
        "reviews": [],
        "createdAt": "2024-04-30T06:10:07.465Z",
        "updatedAt": "2024-04-30T06:10:07.465Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 100,
            "cost": 90,
            "discountPercent": 10
        },
        "_id": "6651979624daa5a821afc458",
        "productName": "Chocolate",
        "subcategory": "Chocolate",
        "productImage": "https://img.freepik.com/free-psd/big-chocolate-small-ones-are-each-split-into-three-parts-isolated-transparent-background_191095-22398.jpg?w=740&t=st=1716621205~exp=1716621805~hmac=51a6fcdeff3618dcb944996ff33ffc4d469eedc7dc6b60500f773f166d44ca55",
        "category": "Chocolate",
        "description": "this is Chocolate ",
        "tagline": "Chocolate",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T07:47:34.326Z",
        "updatedAt": "2024-05-25T07:47:34.326Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 200,
            "cost": 190,
            "discountPercent": 5
        },
        "_id": "665197f324daa5a821afc45f",
        "productName": "Book 01",
        "subcategory": "Book",
        "productImage": "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1716619052~exp=1716622652~hmac=ddd6ae277f032521c2e20d8b5f3663c2e734359bb20be379107792baea2b7e76&w=900",
        "category": "Book",
        "description": "This is a Book 01",
        "tagline": "Book",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T07:49:07.404Z",
        "updatedAt": "2024-05-25T11:04:14.621Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 30000,
            "cost": 27000,
            "discountPercent": 10
        },
        "_id": "66519b5124daa5a821afc541",
        "productName": "Xiaomi 12 Pro 5G",
        "subcategory": "Mobile",
        "productImage": "https://img.etimg.com/thumb/msid-98897778,width-300,height-225,imgsize-35708,resizemode-75/6-latest-mobile-phones-with-12gb-ram-in-india.jpg",
        "category": "Electronics",
        "description": "This is Xiaomi 12 Pro 5G",
        "tagline": "Mobile",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T08:03:29.870Z",
        "updatedAt": "2024-05-25T08:03:29.870Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 40000,
            "cost": 30000,
            "discountPercent": 25
        },
        "_id": "6651a964fad0a5ae943123d6",
        "productName": "TV 281",
        "subcategory": "TV",
        "productImage": "https://cdn.pixabay.com/photo/2020/11/23/06/21/television-5768804_1280.png",
        "category": "Electronics",
        "description": "This is TV 281",
        "tagline": "TV",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:03:32.043Z",
        "updatedAt": "2024-05-25T09:03:32.043Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 25000,
            "cost": 20000,
            "discountPercent": 20
        },
        "_id": "6651aae6fad0a5ae943123de",
        "productName": "OnePlus Nord CE 2 Lite 5G",
        "subcategory": "Mobile",
        "productImage": "https://m.media-amazon.com/images/I/61fDxgcyBDL._SL1500_.jpg",
        "category": "Electronics",
        "description": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
        "tagline": "Mobile",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:09:58.345Z",
        "updatedAt": "2024-05-25T09:11:23.115Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 56999,
            "cost": 54149.05,
            "discountPercent": 5
        },
        "_id": "6651ad56fad0a5ae94312418",
        "productName": "Apple iPhone 14",
        "subcategory": "Mobile",
        "productImage": "https://cdn1.smartprix.com/rx-iVyp4t2Vm-w420-h420/apple-iphone-14.webp",
        "category": "Electronics",
        "description": "Apple iPhone 14 Quick Specifications\nSpecification\tValue\nCPU\t3.22 GHz, Hexa Core Processor\nRear Camera\t12 MP f/1.5 (Main)\n12 MP f/2.4 (Ultra Wide) with autofocus\nInternal Memory\t128 GB\nBattery\t3279 mAh, Li-ion Battery\nDisplay\t6.1 inches, 1170 x 2532 pixels",
        "tagline": "Mobile",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:20:22.228Z",
        "updatedAt": "2024-05-25T09:20:22.228Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 4999,
            "cost": 349,
            "discountPercent": 93
        },
        "_id": "6651aec9fad0a5ae9431241c",
        "productName": "Lymio Casual Shirt for Men",
        "subcategory": "Shirt",
        "productImage": "https://m.media-amazon.com/images/I/71On2XSPuRL._SY879_.jpg",
        "category": "Clothes",
        "description": "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Patta)",
        "tagline": "Men Shirt",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:26:33.608Z",
        "updatedAt": "2024-05-25T09:26:33.608Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1999,
            "cost": 389,
            "discountPercent": 81
        },
        "_id": "6651af9bfad0a5ae94312420",
        "productName": "Leriya Fashion Dress for Women Midi",
        "subcategory": "Dress ",
        "productImage": "https://m.media-amazon.com/images/I/712naEHTSUL._SY879_.jpg",
        "category": "Clothes",
        "description": "Leriya Fashion Dress for Women Midi | One Piece Dress for Women | Beach Dress for Women",
        "tagline": "Women Dress ",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:30:03.007Z",
        "updatedAt": "2024-05-25T09:30:03.007Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 3999,
            "cost": 3449,
            "discountPercent": 14
        },
        "_id": "6651b12dfad0a5ae94312424",
        "productName": "AGARO Marvel 19 Liters Oven Toaster Griller",
        "subcategory": "kitchen",
        "productImage": "https://m.media-amazon.com/images/I/41zQj2h9NLL._SX300_SY300_QL70_FMwebp_.jpg",
        "category": "kitchen",
        "description": "AGARO Marvel 19 Liters Oven Toaster Griller,Motorised Rotisserie Cake Baking Otg With 5 Heating Mode,(Black),1280 Watts",
        "tagline": "Toaster ",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:36:45.480Z",
        "updatedAt": "2024-05-25T09:36:45.480Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 6145,
            "cost": 3890,
            "discountPercent": 37
        },
        "_id": "6651b2effad0a5ae94312428",
        "productName": "Prestige PIC 6.1 V3 PIC 2200 Watts Induction Cooktop",
        "subcategory": "Kitchen",
        "productImage": "https://m.media-amazon.com/images/I/81z6RfbuUcL._SX679_.jpg",
        "category": "Kitchen",
        "description": "Prestige PIC 6.1 V3 PIC 2200 Watts Induction Cooktop | Black | Automatic Whistle Counter | Feather Touch Buttons | Keep Warm Function| Dual Heat Sensor",
        "tagline": "Induction ",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:44:15.694Z",
        "updatedAt": "2024-05-25T09:44:15.694Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 2150,
            "cost": 1940,
            "discountPercent": 10
        },
        "_id": "6651b390fad0a5ae9431242c",
        "productName": "Pressure Cooker",
        "subcategory": "Cooker",
        "productImage": "https://m.media-amazon.com/images/I/519aOqUZ0pL._SX679_.jpg",
        "category": "Kitchen",
        "description": "Hawkins Classic Aluminium Inner Lid Pressure Cooker, 5 Litre, Silver (Cl50), 5 Liter",
        "tagline": "Cooker",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [],
        "createdAt": "2024-05-25T09:46:56.756Z",
        "updatedAt": "2024-05-25T09:46:56.756Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 3500,
            "cost": 1298,
            "discountPercent": 63
        },
        "_id": "6651b420fad0a5ae94312430",
        "productName": "Mixer",
        "subcategory": "Mixer",
        "productImage": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPsbifl_tzXJGfaoAkk-MKBIJm2mEL15Vvr2mx01kfOzOBc6eqmOXGlDdI1ZWM8a-69UN_IeKchNEYTz3vwEkOJgmTScgreNKTYTogc6plKnHfAA1Z2MNK",
        "category": "Kitchen",
        "description": "Lifelong Mixer Grinder for Kitchen - 3 Jars 500 Watt Mixie - Chutney Jar, Dry Grinder Jar & Liquidizing Jar used as Wet Grinder & Blender for Milkshake, Smoothie, Puree -Stainless Steel Blades(LLMG23)",
        "tagline": "Mixer",
        "quantity": 1,
        "seller": {
            "_id": "6651973024daa5a821afc447",
            "shopName": "Test Tm"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "nice",
                "reviewer": "6651c09668e1af82006525d4",
                "date": "2024-05-25T10:44:58.337Z",
                "_id": "6651c12a68e1af82006526a0"
            },
            {
                "rating": 4,
                "comment": "good",
                "reviewer": "6651df09ad05fc90eb2ab624",
                "date": "2024-05-27T04:42:37.675Z",
                "_id": "66540f3dfffaa45b1087ecaa"
            }
        ],
        "createdAt": "2024-05-25T09:49:20.831Z",
        "updatedAt": "2024-05-27T04:42:37.676Z",
        "__v": 4
    },
    {
        "price": {
            "mrp": 1212121212,
            "cost": 12121212,
            "discountPercent": 2121
        },
        "_id": "665290e28b230e5d86b4bd65",
        "productName": "Car",
        "subcategory": "sasas",
        "productImage": "data:image/jpeg;base64,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",
        "category": "sas",
        "description": "Caar",
        "tagline": "sasa",
        "quantity": 1,
        "seller": {
            "_id": "665290768b230e5d86b4bd46",
            "shopName": "myshop"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "dsdds",
                "reviewer": "665290f98b230e5d86b4bda9",
                "date": "2024-05-26T01:35:28.518Z",
                "_id": "665291e08b230e5d86b4beca"
            }
        ],
        "createdAt": "2024-05-26T01:31:14.451Z",
        "updatedAt": "2024-05-26T01:35:28.520Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 30000,
            "cost": 25000,
            "discountPercent": 16
        },
        "_id": "66768483c7182343068943df",
        "productName": "8.0 kg AI Ecobubble™ Front Load Washing Machine with SmartThings & Wi-Fi, WW80T504DAX1",
        "subcategory": "Washing Machine",
        "productImage": "https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-374541-ww80t504dax1tl-538070792?$1300_1038_PNG$",
        "category": "Electronics ",
        "description": "Get clothes spotlessly clean, even if they’re really dirty. The Bubble Soak function helps remove a wide variety of stubborn stains, like blood, tea, wine, make-up and grass. Clothes are thoroughly soaked in active bubbles, so dirt and stains are loosened and can be removed more effectively*.",
        "tagline": "Smart Wash",
        "quantity": 1,
        "seller": {
            "_id": "6673327e21c438116704e85a",
            "shopName": "graphics"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "Very Nice Machine and good price",
                "reviewer": "6673319121c438116704e60b",
                "date": "2024-06-22T08:04:00.245Z",
                "_id": "66768570c718234306894525"
            }
        ],
        "createdAt": "2024-06-22T08:00:03.984Z",
        "updatedAt": "2024-06-22T08:04:00.247Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 520,
            "cost": 50,
            "discountPercent": 10
        },
        "_id": "66782086ed9021ceaf5cd32d",
        "productName": "msd",
        "subcategory": "men",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfeJpK7jSiLgXqAfUcTuY4dXEsc0j7M0Tqg&s",
        "category": "shirt",
        "description": "msd",
        "tagline": "nice",
        "quantity": 1,
        "seller": {
            "_id": "66766bc8119f9a05ad449384",
            "shopName": "om store"
        },
        "reviews": [],
        "createdAt": "2024-06-23T13:17:59.003Z",
        "updatedAt": "2024-06-23T13:17:59.003Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1000,
            "cost": 8000,
            "discountPercent": 10
        },
        "_id": "66797bdd7b34eef5f0a098d1",
        "productName": "Iphone15",
        "subcategory": "Mobile ",
        "productImage": "https://images.app.goo.gl/mrAzXSbBBJDM53mz9",
        "category": "Electronic ",
        "description": "Iphone15",
        "tagline": "Yo",
        "quantity": 1,
        "seller": {
            "_id": "66797b6b7b34eef5f0a098aa",
            "shopName": "Jjj"
        },
        "reviews": [],
        "createdAt": "2024-06-24T13:59:57.204Z",
        "updatedAt": "2024-06-24T13:59:57.204Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 500,
            "cost": 450,
            "discountPercent": 10
        },
        "_id": "667cde3895578a133d967e4c",
        "productName": "HP laptop",
        "subcategory": "Laptops",
        "productImage": "https://www.mega.pk/items_images/HP+15+DY1751ms+Core+i5+10th+Generation+Laptop+8GB+RAM+512GB+SSD+Touchscreen+LED+Windows+10+Price+in+Pakistan%2C+Specifications%2C+Features_-_19700.webp",
        "category": "Electronics",
        "description": "Hp",
        "tagline": "Available",
        "quantity": 1,
        "seller": {
            "_id": "667cda2f95578a133d967da7",
            "shopName": "dummy "
        },
        "reviews": [],
        "createdAt": "2024-06-27T03:36:24.764Z",
        "updatedAt": "2024-06-27T03:39:23.968Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 49990,
            "cost": 114899,
            "discountPercent": 74
        },
        "_id": "66813b54ad86f5b6a6506d08",
        "productName": "Urban Terrain Shimano Geared for Men with Front Suspension & Dual Disc Brake MTB UT1000 27.5 T Road Cycle  (21 Gear, Black)",
        "subcategory": "geared cycles",
        "productImage": "https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/7/r/r/shimano-geared-for-men-with-front-suspension-dual-disc-brake-mtb-original-imahf4pdrvsdhpgb.jpeg?q=70&crop=false",
        "category": "cycles",
        "description": "This Urban Terrain mountain bike is made of steel to ensure sturdiness and durability. While its 21-speed gear shift helps you ride it on various terrains with ease, its 69.85 cm wide tires ensure a smooth and comfortable ride. Also, the double disc brakes ensure improved safety and reliability.",
        "tagline": "mens cycle",
        "quantity": 1,
        "seller": {
            "_id": "66813b01ad86f5b6a6506cef",
            "shopName": "sc"
        },
        "reviews": [],
        "createdAt": "2024-06-30T11:02:44.095Z",
        "updatedAt": "2024-06-30T11:02:44.095Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1500,
            "cost": 1200,
            "discountPercent": 69
        },
        "_id": "66995784c20185a2cb7bb2a4",
        "productName": "Iget",
        "subcategory": "Oxygen",
        "productImage": "https://dms.mydukaan.io/original/jpeg/media/f3a155d1-baa6-414e-9388-ad64d2f2331b.jpeg",
        "category": "Self Satisfaction",
        "description": "ifykyk",
        "tagline": "wowyes",
        "quantity": 1,
        "seller": {
            "_id": "669956cac20185a2cb7bb28a",
            "shopName": "Chai with Sutta"
        },
        "reviews": [
            {
                "rating": 5,
                "comment": "Pure oxygen",
                "reviewer": "669957b4c20185a2cb7bb30b",
                "date": "2024-07-18T18:00:59.965Z",
                "_id": "6699585bc20185a2cb7bb3dc"
            }
        ],
        "createdAt": "2024-07-18T17:57:24.840Z",
        "updatedAt": "2024-07-18T18:00:59.967Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 10000000,
            "cost": 10000000,
            "discountPercent": 0
        },
        "_id": "66a5dc0d936344991045dc76",
        "productName": "India",
        "subcategory": "INDIA",
        "productImage": "data:image/png;base64,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",
        "category": "INDIA",
        "description": "INDIA IS FOR SALE HAHHAHAH",
        "tagline": "INDIA",
        "quantity": 1,
        "seller": {
            "_id": "66a5db98936344991045dc5e",
            "shopName": "MyShop123"
        },
        "reviews": [],
        "createdAt": "2024-07-28T05:50:05.169Z",
        "updatedAt": "2024-07-28T05:50:05.169Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 10000,
            "cost": 10000,
            "discountPercent": 10
        },
        "_id": "66a760a13adfb4f694b32ec8",
        "productName": "Phone",
        "subcategory": "Mobile",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcXpi3yaaIpTwuJWiXqW6fG71bhlN6_h_GA&s",
        "category": "Phone",
        "description": "Phone",
        "tagline": "Reusable",
        "quantity": 1,
        "seller": {
            "_id": "66a760273adfb4f694b32eae",
            "shopName": "bro2"
        },
        "reviews": [],
        "createdAt": "2024-07-29T09:28:01.675Z",
        "updatedAt": "2024-07-29T09:28:01.675Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 500,
            "cost": 448,
            "discountPercent": 10
        },
        "_id": "66a7c95f8bba773f9831291d",
        "productName": "The Derma Co. Sunscreen",
        "subcategory": "Sunscreens",
        "productImage": "https://images.thedermaco.com/catalog/product/t/e/texture_2.jpg?auto=format&fit=contain&width=720&auto=compress",
        "category": "Skincare",
        "description": "SPF 50+++ , great for skin",
        "tagline": "Show your glow",
        "quantity": 1,
        "seller": {
            "_id": "66a7c165a32fa8704d9f80cf",
            "shopName": "Skincare Essentials"
        },
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "reviewer": "66a7b932a32fa8704d9f7d65",
                "date": "2024-07-29T17:14:26.787Z",
                "_id": "66a7cdf28bba773f98312d4e"
            }
        ],
        "createdAt": "2024-07-29T16:54:55.365Z",
        "updatedAt": "2024-07-29T17:14:26.793Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 4990,
            "cost": 1198,
            "discountPercent": 76
        },
        "_id": "66a7caf18bba773f98312ae5",
        "productName": "boAt Airdopes 311 Pro TWS in-Ear Earbuds",
        "subcategory": "Headphones & Earbuds",
        "productImage": "https://m.media-amazon.com/images/I/61+bsawcIJL._SL1500_.jpg",
        "category": "Electronics",
        "description": "50 HRS Playtime, Dual Mics with ENx™ Tech, 50 ms low-latency BEAST™ Mode, ASAP™ Charging, IWP™ Tech(Lavender Rush)",
        "tagline": "Stay entertained non-stop",
        "quantity": 1,
        "seller": {
            "_id": "66a7c165a32fa8704d9f80cf",
            "shopName": "Skincare Essentials"
        },
        "reviews": [],
        "createdAt": "2024-07-29T17:01:37.684Z",
        "updatedAt": "2024-07-29T17:43:19.170Z",
        "__v": 2
    },
    {
        "price": {
            "mrp": 1499,
            "cost": 999,
            "discountPercent": 33
        },
        "_id": "66a7d5dc8bba773f98313432",
        "productName": "Olive Grey Stripe Printed Shirt",
        "subcategory": "Stripe shirts",
        "productImage": "https://vestirio.com/cdn/shop/products/37020549_37_1800x1800.webp?v=1657954847",
        "category": "Tropical Treasures",
        "description": "Full Sleeves\nPrinted Design\nStand Collar\nCurved Hem Design",
        "tagline": "Cold machine wash. For more details see the wash care label attached.",
        "quantity": 1,
        "seller": {
            "_id": "66a7c165a32fa8704d9f80cf",
            "shopName": "Skincare Essentials"
        },
        "reviews": [],
        "createdAt": "2024-07-29T17:48:12.475Z",
        "updatedAt": "2024-07-29T17:48:12.475Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1267,
            "cost": 88,
            "discountPercent": 10
        },
        "_id": "66ba0fbf6293407877690b49",
        "productName": "flowers",
        "subcategory": "hhh",
        "productImage": "https://images.pexels.com/photos/757889/pexels-photo-757889.jpe",
        "category": "abc hb",
        "description": "jasdnjilascnasjklc jcnsdjcnsl",
        "tagline": "flowers",
        "quantity": 1,
        "seller": {
            "_id": "66ba0f4a6293407877690af9",
            "shopName": "abcshop"
        },
        "reviews": [],
        "createdAt": "2024-08-12T13:35:59.904Z",
        "updatedAt": "2024-08-12T13:35:59.904Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 200,
            "cost": 180,
            "discountPercent": 2
        },
        "_id": "66c5acfdadeee0a1ec567519",
        "productName": "Bottles",
        "subcategory": "Home's Product",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIy4vqEkaGiXI6NZMN5fUHzgTzMpx5UymMQ&s",
        "category": "Bottles",
        "description": "All size of Water is Available",
        "tagline": "1324",
        "quantity": 1,
        "seller": {
            "_id": "66c5ac29adeee0a1ec5674fc",
            "shopName": "shopppnaemee"
        },
        "reviews": [],
        "createdAt": "2024-08-21T09:01:49.183Z",
        "updatedAt": "2024-08-21T09:01:49.183Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8900,
            "cost": 8900,
            "discountPercent": 7400
        },
        "_id": "66ceda6927b93a6f2a295dd1",
        "productName": "test",
        "subcategory": "blue",
        "productImage": "https://media.geeksforgeeks.org/wp-content/uploads/20210819201723/1.png",
        "category": "excel",
        "description": "test",
        "tagline": "takeit or regret",
        "quantity": 1,
        "seller": {
            "_id": "66ced9ab27b93a6f2a295db6",
            "shopName": "BroCode"
        },
        "reviews": [],
        "createdAt": "2024-08-28T08:06:01.184Z",
        "updatedAt": "2024-08-28T08:06:01.184Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8900,
            "cost": 8900,
            "discountPercent": 7400
        },
        "_id": "66cedaa527b93a6f2a295dd3",
        "productName": "test",
        "subcategory": "blue",
        "productImage": "https://media.geeksforgeeks.org/wp-content/uploads/20210819201723/1.png",
        "category": "excel",
        "description": "test",
        "tagline": "takeit or regret",
        "quantity": 1,
        "seller": {
            "_id": "66ced9ab27b93a6f2a295db6",
            "shopName": "BroCode"
        },
        "reviews": [],
        "createdAt": "2024-08-28T08:07:01.036Z",
        "updatedAt": "2024-08-28T08:07:01.036Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 798,
            "cost": 455,
            "discountPercent": 455
        },
        "_id": "66cedb5527b93a6f2a295e69",
        "productName": "ewq",
        "subcategory": "yellow",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw4zM8bYkbqu4rxIuBXcIq1vIZKSC6LIyAg&s",
        "category": "ddq",
        "description": "ewqeqw",
        "tagline": "fsafa",
        "quantity": 1,
        "seller": {
            "_id": "66cedb1727b93a6f2a295e51",
            "shopName": "manlo"
        },
        "reviews": [],
        "createdAt": "2024-08-28T08:09:57.337Z",
        "updatedAt": "2024-08-28T08:09:57.337Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 7980,
            "cost": 4550,
            "discountPercent": 4551
        },
        "_id": "66cedb8327b93a6f2a295e6b",
        "productName": "ewqdwqdq",
        "subcategory": "red",
        "productImage": "https://www.pcworld.com/wp-content/uploads/2023/04/pcw-ppt-primary-100787681-orig-4.jpg?quality=50&strip=all",
        "category": "ddquyl",
        "description": "ewqeqwdq",
        "tagline": "fsafalu",
        "quantity": 1,
        "seller": {
            "_id": "66cedb1727b93a6f2a295e51",
            "shopName": "manlo"
        },
        "reviews": [],
        "createdAt": "2024-08-28T08:10:43.277Z",
        "updatedAt": "2024-08-28T08:10:43.277Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 4500,
            "cost": 4200,
            "discountPercent": 4000
        },
        "_id": "66cffa6a3032d736e0f97d3d",
        "productName": "Windows 11",
        "subcategory": "Windows 11",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code19.png",
        "category": "Windows",
        "description": "Windows 11",
        "tagline": "Buy Windows 11 Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:34:50.181Z",
        "updatedAt": "2024-08-29T04:34:50.181Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 4500,
            "cost": 4200,
            "discountPercent": 4000
        },
        "_id": "66cffa733032d736e0f97d3f",
        "productName": "Windows 11",
        "subcategory": "Windows 11",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code19.png",
        "category": "Windows",
        "description": "Windows 11",
        "tagline": "Buy Windows 11 Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:34:59.346Z",
        "updatedAt": "2024-08-29T04:34:59.346Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffbf83032d736e0f97d45",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:41:28.618Z",
        "updatedAt": "2024-08-29T04:41:28.618Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffbff3032d736e0f97d47",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:41:35.950Z",
        "updatedAt": "2024-08-29T04:41:35.950Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffc8a3032d736e0f97d49",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:43:54.580Z",
        "updatedAt": "2024-08-29T04:43:54.580Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffc8b3032d736e0f97d4b",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [
            {
                "rating": 3,
                "comment": "wrost",
                "reviewer": "66cffcd03032d736e0f97e4e",
                "date": "2024-08-29T04:46:49.436Z",
                "_id": "66cffd393032d736e0f980b3"
            }
        ],
        "createdAt": "2024-08-29T04:43:55.391Z",
        "updatedAt": "2024-08-29T04:46:49.437Z",
        "__v": 1
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffc8c3032d736e0f97d4d",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:43:56.181Z",
        "updatedAt": "2024-08-29T04:43:56.181Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffc8c3032d736e0f97d4f",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:43:56.980Z",
        "updatedAt": "2024-08-29T04:43:56.980Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 8500,
            "cost": 8200,
            "discountPercent": 8000
        },
        "_id": "66cffc8d3032d736e0f97d51",
        "productName": "Windows 10",
        "subcategory": "Windows 10",
        "productImage": "https://static.javatpoint.com/cpages/images/how-to-run-a-c-program-in-visual-studio-code20.png",
        "category": "Windows ",
        "description": "Windows 10",
        "tagline": "Buy Now",
        "quantity": 1,
        "seller": {
            "_id": "66cff83d3032d736e0f97d24",
            "shopName": "C Lab"
        },
        "reviews": [],
        "createdAt": "2024-08-29T04:43:57.773Z",
        "updatedAt": "2024-08-29T04:43:57.773Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 1323,
            "cost": 23423,
            "discountPercent": 23422
        },
        "_id": "66d41c4d23a5f9da7c58adc9",
        "productName": "Watch",
        "subcategory": "asda",
        "productImage": "https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/05/Apple-Watch-Series-7-Blue.jpg",
        "category": "Watch",
        "description": "asdasd",
        "tagline": "asda",
        "quantity": 1,
        "seller": {
            "_id": "66d41bf923a5f9da7c58adae",
            "shopName": "iop"
        },
        "reviews": [],
        "createdAt": "2024-09-01T07:48:29.154Z",
        "updatedAt": "2024-09-01T07:48:29.154Z",
        "__v": 0
    },
    {
        "price": {
            "mrp": 100,
            "cost": 50,
            "discountPercent": 5
        },
        "_id": "66d80e9d10a182e9f8c7dc9a",
        "productName": "Highneck",
        "subcategory": "Top",
        "productImage": "https://m.media-amazon.com/images/I/21LnTch8q6L._AC_UY1100_.jpg",
        "category": "Clothes",
        "description": "Very Cold",
        "tagline": "Cozys",
        "quantity": 1,
        "seller": {
            "_id": "66d80d2210a182e9f8c7d8a0",
            "shopName": "Sam Shop"
        },
        "reviews": [],
        "createdAt": "2024-09-04T07:39:09.733Z",
        "updatedAt": "2024-09-04T07:43:18.784Z",
        "__v": 0
    }
]


// console.log(data.length)

let new_data = [];





// Configuration
cloudinary.config({
    cloud_name: 'dhnzqkbez',
    api_key: '561224513913339',
    api_secret: '47b3Hfb8nIO-dfVGy2tsMlABJaE'
});



async function uploadImageFromUrl(imageUrl, folder, new_obj) {
    try {
        // Upload image from URL and specify the folder
        const result = await cloudinary.uploader.upload(imageUrl, {
            resource_type: 'auto', // Auto-detects the resource type
            folder: folder // Specify the folder where the image will be stored
        });

        new_obj.productImage[0] = result.secure_url;
        new_data.push(new_obj);
    } catch (error) {
        console.error('Error uploading image:', error);
      
    }
}


const folder = 'Ecommerce';



// convert old_data to new_data



async function func() {
    for (let i = 0; i < data.length; i++) {

        if (data[i].category == 'ghhg' || data[i].category == 'thttyt' || data[i].category == 'afa' || data[i].category == '12' || data.category == '23' || data[i].category.length <= 3 || data[i].category == 'INDIA') continue;

if(data[i].productImage[0]=='h' && data[i].productImage[1]=='t' && data[i].productImage[2]=='t' && data[i].productImage[3]=='p') {

    let temp = [];
    temp.push(data[i].productImage)
    let new_obj = {
        "productName": data[i].productName,
        "brandName": data[i].subcategory,
        "category": data[i].category,
        "productImage": temp,
        "description": data[i].description,
        "price": data[i].price.mrp,
        "sellingPrice": data[i].price.cost,
    }
            
    await uploadImageFromUrl(data[i].productImage, folder, new_obj);
    console.log(i,"done");

}

    }


console.log(new_data.length);

const jsonContent = JSON.stringify(new_data, null, 2);

fs.writeFile('output.txt', jsonContent, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('File has been written successfully');
    }
});

}

func();






