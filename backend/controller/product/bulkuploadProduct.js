
const productModel = require("../../models/productModel")

async function bulkuploadProduct(res,req) {

    // let data = [
    //     {
    //         "_id": "66699ccefad72f5d3f1d16a6",
    //         "productName": "Camera",
    //         "brandName": "Sony",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1718197326/mernproduct/hkkh3ejpw5b1tqrce9xy.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1718197417/mernproduct/gichwc83kku94dbhsxvc.jpg"
    //         ],
    //         "description": "Best Camera",
    //         "price": 100,
    //         "sellingPrice": 80,
    //         "createdAt": "2024-06-12T13:04:14.789Z",
    //         "updatedAt": "2024-06-12T14:37:21.368Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6669997afad72f5d3f1d16a1",
    //         "productName": "Camera",
    //         "brandName": "Sony",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1718194753/mernproduct/k7blym2sn2rvne5sgsdf.jpg"
    //         ],
    //         "description": "best camera on the market",
    //         "price": 120,
    //         "sellingPrice": 100,
    //         "createdAt": "2024-06-12T12:50:02.780Z",
    //         "updatedAt": "2024-06-12T14:38:38.952Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabfd5123c1cdde93a9c5d",
    //         "productName": "boAt Xtend‌ Sport",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1717631947/mernproduct/otnqfzutm2ltkbhlyvq2.webp"
    //         ],
    //         "description": "boAt Xtend‌ Sport 1",
    //         "price": 200,
    //         "sellingPrice": 150,
    //         "createdAt": "2024-03-20T10:52:05.684Z",
    //         "updatedAt": "2024-06-12T14:40:04.791Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabfbb123c1cdde93a9c59",
    //         "productName": "boAt Wave Prime 88",
    //         "brandName": "boat",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1717631961/mernproduct/h6mtqmkassimx0tdzo3y.webp"
    //         ],
    //         "description": "boAt Xtend‌ 1",
    //         "price": 140,
    //         "sellingPrice": 120,
    //         "createdAt": "2024-03-20T10:51:39.059Z",
    //         "updatedAt": "2024-06-12T14:41:07.630Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabf9e123c1cdde93a9c55",
    //         "productName": "boAt Wave Style Call",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931849/mernproduct/mjhvjodzpojpboxfsgkc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931852/mernproduct/qbxtpwakkabfwtc8qw8o.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931855/mernproduct/lyzqgtivzozetrw2xpx5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931858/mernproduct/hcy9yzenk4ez5lmt7aud.webp"
    //         ],
    //         "description": "boAt Wave Style Call 1",
    //         "price": 200,
    //         "sellingPrice": 167,
    //         "createdAt": "2024-03-20T10:51:10.484Z",
    //         "updatedAt": "2024-06-12T14:41:58.934Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabf82123c1cdde93a9c51",
    //         "productName": "boAt Wave Select",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931818/mernproduct/qlerhih9vr9ag7xgsg7o.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931821/mernproduct/of2kkjlma7yz7cz9p6bz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931825/mernproduct/qtzi3q2ss4xcunwa4ja2.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931828/mernproduct/wd68eatzq2theikirteb.webp"
    //         ],
    //         "description": "boAt Wave Select 1",
    //         "price": 150,
    //         "sellingPrice": 123,
    //         "createdAt": "2024-03-20T10:50:42.124Z",
    //         "updatedAt": "2024-06-12T14:43:18.829Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabf66123c1cdde93a9c4d",
    //         "productName": "boAt Wave Select",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931793/mernproduct/f7epodjslz1b6pebneix.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931796/mernproduct/azbjlj0lastkloehihmh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931799/mernproduct/yaesahyfztszz0ibmru1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931802/mernproduct/tpgdlgqlszri9egtlu9z.webp"
    //         ],
    //         "description": "boAt Wave Select 1",
    //         "price": 100,
    //         "sellingPrice": 100,
    //         "createdAt": "2024-03-20T10:50:14.259Z",
    //         "updatedAt": "2024-06-12T14:44:31.528Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabf48123c1cdde93a9c49",
    //         "productName": "boAt Wave Pro",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931762/mernproduct/cbm3o2gisfoayqjch0sw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931765/mernproduct/sbrwuybbt52zfh2nwrdn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931768/mernproduct/nr1lnm1s3rfoq89waips.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931772/mernproduct/pth8fktvcg91cs8ykfze.webp"
    //         ],
    //         "description": "boAt Wave Pro 1",
    //         "price": 100,
    //         "sellingPrice": 60,
    //         "createdAt": "2024-03-20T10:49:44.684Z",
    //         "updatedAt": "2024-06-12T14:48:00.847Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabf2b123c1cdde93a9c45",
    //         "productName": "boAt Wave Prime 47",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931727/mernproduct/qdjuc9xjtywccrzqgqwg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931732/mernproduct/gzksefh9io44qywuyxb2.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931735/mernproduct/ekq7gmwszreqijqvjdy4.webp",
    //             null
    //         ],
    //         "description": "boAt Wave Prime 47 2",
    //         "price": 80,
    //         "sellingPrice": 50,
    //         "createdAt": "2024-03-20T10:49:15.508Z",
    //         "updatedAt": "2024-06-12T14:49:51.673Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabec7123c1cdde93a9c41",
    //         "productName": "boAt Wave Call",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931624/mernproduct/k6rka6fdwg7m7lfpoo1v.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931629/mernproduct/xdbtioblx4gjlkjgc5o3.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931635/mernproduct/taxpydq0q4y7hwubl4zx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931640/mernproduct/gqympe4npeealxhyvoqb.webp"
    //         ],
    //         "description": "boAt Wave Call 1",
    //         "price": 130,
    //         "sellingPrice": 85,
    //         "createdAt": "2024-03-20T10:47:35.629Z",
    //         "updatedAt": "2024-06-12T14:52:12.090Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabe9d123c1cdde93a9c3d",
    //         "productName": "boAt Wave Beat Call",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931566/mernproduct/hwvaoarimvie7hx9gfxr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931584/mernproduct/fw3gnyfibskbbrf6cad0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931588/mernproduct/m8vn0py7foeclgchyzmx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931600/mernproduct/s8kie1msr1ai7gimwd5x.webp"
    //         ],
    //         "description": "boAt Wave Beat Call 1",
    //         "price": 100,
    //         "sellingPrice": 65,
    //         "createdAt": "2024-03-20T10:46:53.715Z",
    //         "updatedAt": "2024-06-12T14:53:08.687Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabe66123c1cdde93a9c39",
    //         "productName": "boAt Wave Beat",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931533/mernproduct/f9fe5ceu2jhmrvjxyd7u.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931538/mernproduct/zbsmtugmddswp8aiw2mj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931541/mernproduct/nxpesmkmljvgjalhvnkb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931546/mernproduct/jkuknsr8l6l8lcxhiwrd.webp"
    //         ],
    //         "description": "boAt Wave Beat 1",
    //         "price": 80,
    //         "sellingPrice": 60,
    //         "createdAt": "2024-03-20T10:45:58.899Z",
    //         "updatedAt": "2024-06-12T14:54:02.670Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabe42123c1cdde93a9c35",
    //         "productName": "boAt Watch Storm - Captain America Marvel Edition",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931506/mernproduct/ne0pdfbzqot0qpyiarqf.webp"
    //         ],
    //         "description": "boAt Watch Storm - Captain America Marvel Edition",
    //         "price": 85,
    //         "sellingPrice": 70,
    //         "createdAt": "2024-03-20T10:45:22.844Z",
    //         "updatedAt": "2024-06-12T14:54:55.235Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabe25123c1cdde93a9c31",
    //         "productName": "boAt TRebel Matrix",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931470/mernproduct/hqefwbeomtq30pdoznc0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931473/mernproduct/w0qqc0gau9rmqz5ssxrd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931476/mernproduct/xsys45t8phaho3qapba0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931478/mernproduct/hyfo2tylz28bufxe3s7l.webp"
    //         ],
    //         "description": "boAt TRebel Matrix 1",
    //         "price": 100,
    //         "sellingPrice": 70,
    //         "createdAt": "2024-03-20T10:44:53.580Z",
    //         "updatedAt": "2024-06-12T14:57:17.391Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabdfc123c1cdde93a9c2d",
    //         "productName": "boAt TRebel Blaze",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931426/mernproduct/vwith6twubfhmgks9heg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931430/mernproduct/ayfatxjoj6hzgvmkqudz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931433/mernproduct/oqjobpmqzbtqij8xtatc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931435/mernproduct/pjmkyp9rjgqgz2abkqgu.webp"
    //         ],
    //         "description": "boAt TRebel Blaze 1",
    //         "price": 100,
    //         "sellingPrice": 78,
    //         "createdAt": "2024-03-20T10:44:12.437Z",
    //         "updatedAt": "2024-06-12T15:01:13.363Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabddc123c1cdde93a9c29",
    //         "productName": "boAt Storm RTL",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931400/mernproduct/kuw1n9gfcvbjjb4ufxod.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931403/mernproduct/khag6pw9wpoybx0herik.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931405/mernproduct/kpzcukmyxkrw0szgv6ro.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931408/mernproduct/bamvk8mhrg5m9vxuo8ty.webp"
    //         ],
    //         "description": "boAt Storm RTL 1",
    //         "price": 150,
    //         "sellingPrice": 100,
    //         "createdAt": "2024-03-20T10:43:40.123Z",
    //         "updatedAt": "2024-06-12T15:03:10.719Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabdc1123c1cdde93a9c25",
    //         "productName": "boAt Storm Pro Call",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931368/mernproduct/a1crdfihveyoyzmm3mh5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931372/mernproduct/zpi8nqx4sbh5bkhavpyy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931374/mernproduct/geziqwwjwaqtyveplmim.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931377/mernproduct/vck2kax3jbfkt7lgzwho.webp"
    //         ],
    //         "description": "boAt Storm Pro Call 1",
    //         "price": 100,
    //         "sellingPrice": 90,
    //         "createdAt": "2024-03-20T10:43:13.350Z",
    //         "updatedAt": "2024-06-12T15:03:45.571Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabda2123c1cdde93a9c21",
    //         "productName": "boAt Storm",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931340/mernproduct/p3jegzgba4x0tdrnspsr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931342/mernproduct/mrrl5ydx5an5rsh8iu5q.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931346/mernproduct/n5ca63fzntguyqojeppo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931349/mernproduct/myyytpo48zkeorxfrds8.webp"
    //         ],
    //         "description": "boAt Storm Call 1 \nbest",
    //         "price": 100,
    //         "sellingPrice": 80,
    //         "createdAt": "2024-03-20T10:42:42.419Z",
    //         "updatedAt": "2024-06-12T15:04:11.931Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabd86123c1cdde93a9c1d",
    //         "productName": "boAt Storm ",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931312/mernproduct/mo3ikrghjyz3wed0cpvw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931316/mernproduct/bmrcpfm0z82uftomigxx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931318/mernproduct/nlhxsoeddcqqp0ize2rr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931321/mernproduct/obvfthol07m1smbjqkgh.webp"
    //         ],
    //         "description": "boAt Storm 2",
    //         "price": 100,
    //         "sellingPrice": 70,
    //         "createdAt": "2024-03-20T10:42:14.956Z",
    //         "updatedAt": "2024-06-12T15:04:41.633Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabd6b123c1cdde93a9c19",
    //         "productName": "boAt Cosmos Pro",
    //         "brandName": "boAt",
    //         "category": "watches",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931282/mernproduct/t1ulow0rzamdwmlbq9js.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931285/mernproduct/wbdodwfqk0wqxddq3pxb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931287/mernproduct/zf5gwqj22lkoitvgvdmc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931290/mernproduct/bzbfmwldsdgnbvtb4jyy.webp"
    //         ],
    //         "description": "boAt Cosmos Pro 1",
    //         "price": 100,
    //         "sellingPrice": 85,
    //         "createdAt": "2024-03-20T10:41:47.027Z",
    //         "updatedAt": "2024-06-12T15:05:14.249Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabcf3123c1cdde93a9c15",
    //         "productName": "Sansui 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Dolby Audio and DTS (Mystique Black) (2021 Model) (JSW50ASUHD)",
    //         "brandName": "Sansui",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931160/mernproduct/odwrgcc4g3tpg3u48myu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931164/mernproduct/rqmhoybmfta3fhmu5mvm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931167/mernproduct/xgtgwpmcqee3gttvsdbw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931169/mernproduct/gw3piznrurezs5lynpxh.webp"
    //         ],
    //         "description": "Sansui 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Dolby Audio and DTS (Mystique Black) (2021 Model) (JSW50ASUHD) 1",
    //         "price": 998,
    //         "sellingPrice": 700,
    //         "createdAt": "2024-03-20T10:39:47.877Z",
    //         "updatedAt": "2024-06-12T15:05:48.271Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabcd1123c1cdde93a9c11",
    //         "productName": "SAMSUNG Series 8 123 cm (49 inch) Ultra HD (4K) LED Smart Tizen TV (49NU8000)",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931129/mernproduct/fp8w93gep0wjkxqcynet.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931131/mernproduct/iztfuj5h2fuxshpzihtr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931134/mernproduct/pigzcffgcjvngvahaamf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931136/mernproduct/ixxipgot7wwdz6hkmu1s.webp"
    //         ],
    //         "description": "SAMSUNG Series 8 123 cm (49 inch) Ultra HD (4K) LED Smart Tizen TV (49NU8000) 1",
    //         "price": 800,
    //         "sellingPrice": 700,
    //         "createdAt": "2024-03-20T10:39:13.341Z",
    //         "updatedAt": "2024-06-12T15:06:21.467Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabcaf123c1cdde93a9c0d",
    //         "productName": "SAMSUNG QN700BK 163 cm (65 inch) QLED Ultra HD (8K) Smart Tizen TV (QA65QN700BKXXL)",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931091/mernproduct/pvlfdstx6wio90oh39gt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931094/mernproduct/eedxhpvbzotl5nopzkse.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931097/mernproduct/nqv1qcfm8qepkkgxtfjn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931101/mernproduct/h81rnqwpyl9jpjmemkrx.webp"
    //         ],
    //         "description": "SAMSUNG QN700BK 163 cm (65 inch) QLED Ultra HD (8K) Smart Tizen TV (QA65QN700BKXXL) 1",
    //         "price": 998,
    //         "sellingPrice": 747,
    //         "createdAt": "2024-03-20T10:38:39.485Z",
    //         "updatedAt": "2024-06-12T15:06:56.379Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabc8d123c1cdde93a9c09",
    //         "productName": "SAMSUNG Q Series 163 cm (65 inch) QLED Ultra HD (4K) Smart Tizen TV (65Q7FN) ",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931058/mernproduct/ix4jtmm4oolvtidhalbb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931061/mernproduct/v5h2feiildrsoh8nlvup.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931065/mernproduct/zuyacli37jf680axypnm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931068/mernproduct/puv03yc69w2tuosevhxw.webp"
    //         ],
    //         "description": "SAMSUNG Q Series 163 cm (65 inch) QLED Ultra HD (4K) Smart Tizen TV (65Q7FN) 1",
    //         "price": 1000,
    //         "sellingPrice": 800,
    //         "createdAt": "2024-03-20T10:38:05.069Z",
    //         "updatedAt": "2024-06-12T15:08:07.349Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabc6b123c1cdde93a9c05",
    //         "productName": "SAMSUNG 163 cm (65 inch) QLED Ultra HD (4K) Smart TV",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931022/mernproduct/h4tpjizdmju85i4ckpqm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931026/mernproduct/ui1kk9ad8b48by7i3oaw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931029/mernproduct/okqrflubjc3pzpr6pnfv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710931032/mernproduct/pzjpi7pv3yq0pf21uiro.webp"
    //         ],
    //         "description": "SAMSUNG 163 cm (65 inch) QLED Ultra HD (4K) Smart TV 1",
    //         "price": 1200,
    //         "sellingPrice": 897,
    //         "createdAt": "2024-03-20T10:37:31.188Z",
    //         "updatedAt": "2024-06-12T15:08:51.916Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabc45123c1cdde93a9c01",
    //         "productName": "SAMSUNG 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV (UA43TU8570UXXL)",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930985/mernproduct/wuegxxfboepobfkyxmoi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930987/mernproduct/stagzsd2wgdto2ldpyfj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930991/mernproduct/tzuwxfnt57iptw7lpehg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930994/mernproduct/nkyjdxppvptlpbs7lizf.webp"
    //         ],
    //         "description": "SAMSUNG 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV (UA43TU8570UXXL) 1",
    //         "price": 1000,
    //         "sellingPrice": 850,
    //         "createdAt": "2024-03-20T10:36:53.220Z",
    //         "updatedAt": "2024-06-12T15:10:02.702Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabc20123c1cdde93a9bfd",
    //         "productName": "SAMSUNG 80 cm (32 inch) HD Ready LED Smart Tizen TV with Voice Search (UA32TE40AAKBXL)",
    //         "brandName": "SAMSUNG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930945/mernproduct/zrdfnlw2rdvdgdvxygyu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930950/mernproduct/ktgi00snxjrf9q6n34cc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930954/mernproduct/e6e0r3qxlcxmytivegn0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930959/mernproduct/mryn1ky6odghg7pwlsfn.webp"
    //         ],
    //         "description": "SAMSUNG 80 cm (32 inch) HD Ready LED Smart Tizen TV with Voice Search (UA32TE40AAKBXL) 1",
    //         "price": 1250,
    //         "sellingPrice": 1000,
    //         "createdAt": "2024-03-20T10:36:16.349Z",
    //         "updatedAt": "2024-06-12T15:11:14.985Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabbf1123c1cdde93a9bf9",
    //         "productName": "realme 80 cm (32 inch) HD Ready LED Smart Android TV (TV 32)",
    //         "brandName": "realme",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930881/mernproduct/qfekdizahqip3f5pcfvy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930890/mernproduct/klyhzlsyjt8c4jf41waa.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930896/mernproduct/ypyrxx1hjhgaucpbmeuw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930899/mernproduct/f7byqv8duyu3r9pnuzym.webp",
    //             null
    //         ],
    //         "description": "realme 80 cm (32 inch) HD Ready LED Smart Android TV (TV 32) 1",
    //         "price": 1000,
    //         "sellingPrice": 890,
    //         "createdAt": "2024-03-20T10:35:29.875Z",
    //         "updatedAt": "2024-06-12T15:15:24.406Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabbba123c1cdde93a9bf5",
    //         "productName": "Panasonic 100 cm (40 inch) Full HD LED Smart Android TV (TH-40HS450DX)",
    //         "brandName": "Panasonic",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930841/mernproduct/xd9l3bp1fe2xb3sg7agp.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930846/mernproduct/m9y5yrdq2rh9fvt7nk3a.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930850/mernproduct/wnhlodhjmxpexvlrb6ha.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930854/mernproduct/q04hwinujwbmpk1gnlzs.webp"
    //         ],
    //         "description": "Panasonic 100 cm (40 inch) Full HD LED Smart Android TV (TH-40HS450DX) 1",
    //         "price": 956,
    //         "sellingPrice": 931,
    //         "createdAt": "2024-03-20T10:34:34.781Z",
    //         "updatedAt": "2024-06-12T15:16:06.174Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabb8b123c1cdde93a9bf1",
    //         "productName": "OnePlus Y1 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (40FA1A00)",
    //         "brandName": "OnePlus",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930792/mernproduct/jfsrok4jgmhufvvvoguu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930797/mernproduct/c9bfhci5lzhmb1tddyz1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930800/mernproduct/fmd8ieatqgah4kedtx5l.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930804/mernproduct/y6chpva5t3xhwm8ojmeb.webp"
    //         ],
    //         "description": "OnePlus Y1 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (40FA1A00) 1",
    //         "price": 956,
    //         "sellingPrice": 950,
    //         "createdAt": "2024-03-20T10:33:47.220Z",
    //         "updatedAt": "2024-06-12T15:16:38.022Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabb5c123c1cdde93a9bed",
    //         "productName": "MOTOROLA ZX2 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Atmos and Dolby Vision (40SAFHDME)",
    //         "brandName": "MOTOROLA",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930745/mernproduct/tphoryummn0rmiqirbrf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930752/mernproduct/nci7woujkvcpuzij6w3o.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930756/mernproduct/ddpvpy0axx0baouxi7zt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930761/mernproduct/onihdtt8dr7uqwtns6t1.webp"
    //         ],
    //         "description": "MOTOROLA ZX2 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Atmos and Dolby Vision (40SAFHDME) 1",
    //         "price": 956,
    //         "sellingPrice": 546,
    //         "createdAt": "2024-03-20T10:33:00.859Z",
    //         "updatedAt": "2024-06-12T15:17:26.417Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabb31123c1cdde93a9be9",
    //         "productName": "Mi 5A 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (2022 Model)",
    //         "brandName": "Mi",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930706/mernproduct/qbgnlylqlpsfnpyvxfpl.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930708/mernproduct/t5xj86mrtkekifei2hsn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930712/mernproduct/obcha0viskn79ccg5iex.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930716/mernproduct/r4qhkfviovygm3yffecd.webp",
    //             null
    //         ],
    //         "description": "Mi 5A 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio (2022 Model) 1",
    //         "price": 516,
    //         "sellingPrice": 997,
    //         "createdAt": "2024-03-20T10:32:17.803Z",
    //         "updatedAt": "2024-06-12T15:17:53.007Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabb0b123c1cdde93a9be5",
    //         "productName": "LG 164 cm (65 inch) OLED Ultra HD (4K) Smart TV",
    //         "brandName": "LG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930667/mernproduct/rhlcj1fx4qqoxw1xmypc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930671/mernproduct/ybwhfxmxuwc8mne8hh5y.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930674/mernproduct/wxtiurtobofcuhhouv6c.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930676/mernproduct/xguzzhg56jrnnnopxden.webp"
    //         ],
    //         "description": "LG 164 cm (65 inch) OLED Ultra HD (4K) Smart TV 1",
    //         "price": 512,
    //         "sellingPrice": 997,
    //         "createdAt": "2024-03-20T10:31:39.444Z",
    //         "updatedAt": "2024-06-12T15:18:29.153Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabae3123c1cdde93a9be1",
    //         "productName": "LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV",
    //         "brandName": "LG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930632/mernproduct/sy8qp1uhzepkcrgemfew.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930635/mernproduct/ha7dfbdqdnlph8d0kegb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930639/mernproduct/xaojp2jt9gkgn8umc3ke.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930642/mernproduct/fzuzkeqldmyrmdte2bai.webp"
    //         ],
    //         "description": "LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV 1",
    //         "price": 997,
    //         "sellingPrice": 854,
    //         "createdAt": "2024-03-20T10:30:59.677Z",
    //         "updatedAt": "2024-06-12T15:18:58.566Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fabac2123c1cdde93a9bdd",
    //         "productName": "LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA)",
    //         "brandName": "LG",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930596/mernproduct/pgxff5uzha2q5zhqtdci.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930599/mernproduct/daakusznxwn87wrvoovn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930602/mernproduct/likodlgias7ta1gv3ke8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930605/mernproduct/lkrrssb3kklqlt7muiov.webp"
    //         ],
    //         "description": "LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 1",
    //         "price": 999,
    //         "sellingPrice": 1500,
    //         "createdAt": "2024-03-20T10:30:26.020Z",
    //         "updatedAt": "2024-06-12T15:19:27.451Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faba9c123c1cdde93a9bd9",
    //         "productName": "iFFALCON by TCL F53 100 cm (40 inch) Full HD LED Smart Android TV with Android 11 (40F53)",
    //         "brandName": "iFFALCON",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930557/mernproduct/hxakb4oqd0qlkka1wcdp.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930560/mernproduct/qwzi9cot7lguweqmakxv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930563/mernproduct/nllvfz7xde5e1wxcdzyc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930567/mernproduct/j1h5smyfiojjrmo3akbo.webp"
    //         ],
    //         "description": "iFFALCON by TCL F53 100 cm (40 inch) Full HD LED Smart Android TV with Android 11 (40F53) 4",
    //         "price": 999,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T10:29:48.557Z",
    //         "updatedAt": "2024-06-12T15:20:07.699Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faba79123c1cdde93a9bd5",
    //         "productName": "acer I Series 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, MEMC (2022 Model) (AR50AR2851UDFL)",
    //         "brandName": "ACER",
    //         "category": "televisions",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930513/mernproduct/nsihw1sijo2620qyuq4j.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930517/mernproduct/sk6p15700qb0tgylhmkx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930526/mernproduct/jdq2uxapeagw58ecpmav.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930530/mernproduct/nm96djiif92skw1onpv8.webp"
    //         ],
    //         "description": "acer I Series 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, MEMC (2022 Model) (AR50AR2851UDFL) 1",
    //         "price": 999,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T10:29:13.227Z",
    //         "updatedAt": "2024-06-12T15:20:41.102Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab9ea123c1cdde93a9bd1",
    //         "productName": "Syska HT450-Apache Green Trimmer 90 min Runtime 20 Length Settings (Green)",
    //         "brandName": "SYSKA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930379/mernproduct/a6l49ikmqppn8mnpdugs.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930382/mernproduct/aj0zqj2nhlbvllrnfe68.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930386/mernproduct/ymwu5ttcq6btgmedvt5f.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930389/mernproduct/r0swzly6g8sijz6cughy.webp"
    //         ],
    //         "description": "Syska HT450-Apache Green Trimmer 90 min Runtime 20 Length Settings (Green) 1",
    //         "price": 99,
    //         "sellingPrice": 96,
    //         "createdAt": "2024-03-20T10:26:50.668Z",
    //         "updatedAt": "2024-06-12T15:21:09.465Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab9c2123c1cdde93a9bcd",
    //         "productName": "Syska HT200U Trimmer 40 min Runtime 5 Length Settings (Black)",
    //         "brandName": "SYSKA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930341/mernproduct/vrbst7nfsi0rgkwshni0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930344/mernproduct/yv4vlbmb5trsnzzei8ju.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930347/mernproduct/re67fbpyr9eqn811c2to.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930351/mernproduct/f9qmz10lk3a7oq70fmcs.webp"
    //         ],
    //         "description": "Syska HT200U Trimmer 40 min Runtime 5 Length Settings (Black)",
    //         "price": 98,
    //         "sellingPrice": 99,
    //         "createdAt": "2024-03-20T10:26:10.260Z",
    //         "updatedAt": "2024-06-12T15:21:41.020Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab99d123c1cdde93a9bc9",
    //         "productName": "PHILIPS MG3710-65 Trimmer 60 min Runtime 8 Length Settings (Black)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930306/mernproduct/fj1ex2lthl2l5spxes7g.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930309/mernproduct/bg18lju4dkpqjnsggpbg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930313/mernproduct/khiwrliifauwv2gi4th4.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930318/mernproduct/zaqnmjmdbbtxaywzies5.webp"
    //         ],
    //         "description": "PHILIPS MG3710-65 Trimmer 60 min Runtime 8 Length Settings (Black) 1",
    //         "price": 99,
    //         "sellingPrice": 66,
    //         "createdAt": "2024-03-20T10:25:33.547Z",
    //         "updatedAt": "2024-06-12T15:22:49.396Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab97a123c1cdde93a9bc5",
    //         "productName": "PHILIPS BT3231-15 Trimmer 60 min Runtime 20 Length Settings (Green)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930255/mernproduct/ogo2usmjlpvm00xhxwoq.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930259/mernproduct/mshmfygpz4np0xcuc2w8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930268/mernproduct/j5gkatrmaith3nnlicsr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930282/mernproduct/o9sdkxvayhm3ocwtdcx5.webp"
    //         ],
    //         "description": "PHILIPS BT3231-15 Trimmer 60 min Runtime 20 Length Settings (Green) 1",
    //         "price": 99,
    //         "sellingPrice": 77,
    //         "createdAt": "2024-03-20T10:24:58.668Z",
    //         "updatedAt": "2024-06-12T15:23:30.459Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab947123c1cdde93a9bc1",
    //         "productName": "PHILIPS BT3102-15 Trimmer 60 min Runtime 10 Length Settings (Multicolor)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930218/mernproduct/f0ydqsmfyjdl6rorxpej.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930221/mernproduct/bzs02k40muwmn0uu30hr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930226/mernproduct/ytr3pjvwzy7k2753u06x.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930230/mernproduct/v8xwhqlc0i8tdtoawwfc.webp",
    //             null
    //         ],
    //         "description": "PHILIPS BT3102-15 Trimmer 60 min Runtime 10 Length Settings (Multicolor) 1",
    //         "price": 999,
    //         "sellingPrice": 149,
    //         "createdAt": "2024-03-20T10:24:07.589Z",
    //         "updatedAt": "2024-06-12T15:24:28.261Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab922123c1cdde93a9bbd",
    //         "productName": "PHILIPS BT3101-25 Trimmer 45 min Runtime 10 Length Settings (Maroon)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930184/mernproduct/xtn5nahlzyib8qr5pfep.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930188/mernproduct/xdbgljr1s8uk8tujvzq1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930193/mernproduct/t6esy2izedkdgwuw7wbj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930196/mernproduct/fftn50vc31p8rj2ncjag.webp"
    //         ],
    //         "description": "PHILIPS BT3101-25 Trimmer 45 min Runtime 10 Length Settings (Maroon) 1",
    //         "price": 999,
    //         "sellingPrice": 598,
    //         "createdAt": "2024-03-20T10:23:30.676Z",
    //         "updatedAt": "2024-03-20T10:23:30.676Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab8ff123c1cdde93a9bb9",
    //         "productName": "PHILIPS BT3101-15 Trimmer 45 min Runtime 10 Length Settings (Black, White)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930142/mernproduct/nqcm5wefwcmmydwtml39.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930147/mernproduct/ksieyk7cautqf3q2dicu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930153/mernproduct/q99gcnjlgstxc65alvqo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930158/mernproduct/s7mbghry9q55plx6ilgy.webp"
    //         ],
    //         "description": "PHILIPS BT3101-15 Trimmer 45 min Runtime 10 Length Settings (Black, White) 1",
    //         "price": 3999,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T10:22:55.420Z",
    //         "updatedAt": "2024-03-20T10:22:55.420Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab8d3123c1cdde93a9bb5",
    //         "productName": "PHILIPS BT1232-15 Trimmer 30 mins Runtime 3 Length Settings (Blue)",
    //         "brandName": "PHILIPS",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930082/mernproduct/k0fvsacdtsmgmwpbtoqr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930087/mernproduct/lc0x05yjcbnl4qgw5spn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930093/mernproduct/pylhfiryyarx1x4rx8fh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930098/mernproduct/q6xmwnlqvbrhhxcfhwk6.webp"
    //         ],
    //         "description": "PHILIPS BT1232-15 Trimmer 30 mins Runtime 3 Length Settings (Blue)",
    //         "price": 1954,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T10:22:11.124Z",
    //         "updatedAt": "2024-03-20T10:22:11.124Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab896123c1cdde93a9bb1",
    //         "productName": "NOVA NHT 1073-00 USB Trimmer 60 min Runtime 4 Length Settings (Black, Blue ",
    //         "brandName": "NOVA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930041/mernproduct/arj4azqyn32qw5x61ti0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930055/mernproduct/e4qw5ecmvundexkwrzsl.webp"
    //         ],
    //         "description": "NOVA NHT 1073-00 USB Trimmer 60 min Runtime 4 Length Settings (Black, Blue 2",
    //         "price": 1954,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T10:21:10.171Z",
    //         "updatedAt": "2024-03-20T10:21:10.171Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab863123c1cdde93a9bac",
    //         "productName": "NOVA NHT 1058 Waterproof Trimmer 200 min Runtime 40 Length Settings (Grey)",
    //         "brandName": "NOVA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929987/mernproduct/rxlb6dmzteqgjzv6x0se.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929990/mernproduct/pid1agpd8jshccvvtebt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929994/mernproduct/dwlz1mwezjmbbdo08zxk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930002/mernproduct/f4qdjl6swrrqyvjbuca4.webp"
    //         ],
    //         "description": "NOVA NHT 1058 Waterproof Trimmer 200 min Runtime 40 Length Settings (Grey) 4",
    //         "price": 999,
    //         "sellingPrice": 598,
    //         "createdAt": "2024-03-20T10:20:19.508Z",
    //         "updatedAt": "2024-03-20T10:20:19.508Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab862123c1cdde93a9ba9",
    //         "productName": "NOVA NHT 1058 Waterproof Trimmer 200 min Runtime 40 Length Settings (Grey)",
    //         "brandName": "NOVA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929987/mernproduct/rxlb6dmzteqgjzv6x0se.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929990/mernproduct/pid1agpd8jshccvvtebt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929994/mernproduct/dwlz1mwezjmbbdo08zxk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710930002/mernproduct/f4qdjl6swrrqyvjbuca4.webp"
    //         ],
    //         "description": "NOVA NHT 1058 Waterproof Trimmer 200 min Runtime 40 Length Settings (Grey) 4",
    //         "price": 999,
    //         "sellingPrice": 598,
    //         "createdAt": "2024-03-20T10:20:18.341Z",
    //         "updatedAt": "2024-03-20T10:20:18.341Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab83d123c1cdde93a9ba5",
    //         "productName": "NOVA NHT 1052 USB Trimmer 90 min Runtime 40 Length Settings (Black)",
    //         "brandName": "NOVA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929950/mernproduct/q1lijchsalshpkpdwlmw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929955/mernproduct/es04zrzessr7ms6rxbzr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929958/mernproduct/uamy0aczwn03f2uibouu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929962/mernproduct/xw98dxjw5rrtlcpilocu.webp"
    //         ],
    //         "description": "NOVA NHT 1052 USB Trimmer 90 min Runtime 40 Length Settings (Black) 1",
    //         "price": 4561,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-20T10:19:41.533Z",
    //         "updatedAt": "2024-03-20T10:19:41.533Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab818123c1cdde93a9ba1",
    //         "productName": "NOVA NHT 1039-05 USB Trimmer 45 min Runtime 4 Length Settings (Blue)",
    //         "brandName": "NOVA",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929919/mernproduct/w0e9fonw4j2nzngxe8ja.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929923/mernproduct/nwpljplsnnq0tztr50yb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929925/mernproduct/ftd75x90xhymexo4altb.webp",
    //             null
    //         ],
    //         "description": "NOVA NHT 1039-05 USB Trimmer 45 min Runtime 4 Length Settings (Blue) 1",
    //         "price": 1954,
    //         "sellingPrice": 1599,
    //         "createdAt": "2024-03-20T10:19:04.021Z",
    //         "updatedAt": "2024-03-20T10:19:04.021Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab7f6123c1cdde93a9b9d",
    //         "productName": "Mi XXQ01HM Trimmer 90 min Runtime 40 Length Settings (Black)",
    //         "brandName": "Mi",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929884/mernproduct/gg2udawrbznoruuyvqaj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929887/mernproduct/m151ac0z2wiz5vzoafja.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929891/mernproduct/phuljuboxmez0j33h5j8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929895/mernproduct/ml4iss4wktxidqtpgcut.webp"
    //         ],
    //         "description": "Mi XXQ01HM Trimmer 90 min Runtime 40 Length Settings (Black) 1",
    //         "price": 3999,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-20T10:18:30.294Z",
    //         "updatedAt": "2024-03-20T10:18:30.294Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab7d5123c1cdde93a9b99",
    //         "productName": "Luhao Dragon Professional Hair Clipper Fully Waterproof Trimmer 90 min Runtime Trimmer 90 min Runtime 4 Length Settings (Gold)",
    //         "brandName": "Luhao Dragon",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929845/mernproduct/phz2rqp9zhkwdvcbuqc6.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929848/mernproduct/edhnypuitk1wepzubye2.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929851/mernproduct/dzbcue5wuihqthejcztx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929854/mernproduct/iu7bmidxc5qsyiifwbgn.webp"
    //         ],
    //         "description": "Luhao Dragon Professional Hair Clipper Fully Waterproof Trimmer 90 min Runtime Trimmer 90 min Runtime 4 Length Settings (Gold) 1",
    //         "price": 5999,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-20T10:17:57.989Z",
    //         "updatedAt": "2024-03-20T10:17:57.989Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab7ae123c1cdde93a9b95",
    //         "productName": "ChinuStyle Men Rechargeable Hair Clipper Hair Trimmer For Men Beard Electric Cutter Hair Cutting Machine Haircut Cordless Clipper Trimmer 60 min Runtime 1 Length Settings (Multicolor)",
    //         "brandName": "Other",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929792/mernproduct/ovoax1sxwqgde5ue94cy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929795/mernproduct/hvqcybmcfbjlrc1tq1wm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929798/mernproduct/t9ygdtwxf11alhbm6oqr.webp",
    //             null
    //         ],
    //         "description": "ChinuStyle Men Rechargeable Hair Clipper Hair Trimmer For Men Beard Electric Cutter Hair Cutting Machine Haircut Cordless Clipper Trimmer 60 min Runtime 1 Length Settings (Multicolor) 1",
    //         "price": 2999,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-20T10:17:18.244Z",
    //         "updatedAt": "2024-03-20T10:17:18.244Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab76e123c1cdde93a9b91",
    //         "productName": "Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black)",
    //         "brandName": "Ambrane",
    //         "category": "trimmers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929736/mernproduct/mbiqr5smqcfmdflk7o7u.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929739/mernproduct/s4enavx94fapmr5alhbv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929743/mernproduct/lxak5qcyzhlxbjpmtsov.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929746/mernproduct/eojdtpjbcrwbzplerxbf.webp"
    //         ],
    //         "description": "Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 1",
    //         "price": 2999,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-20T10:16:14.780Z",
    //         "updatedAt": "2024-03-20T10:16:14.780Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab73a123c1cdde93a9b8d",
    //         "productName": "Stone 1000",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929696/mernproduct/sv73yx4tg5xw7cynb09z.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929703/mernproduct/nilrukrrru0fjl3c6rjf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929706/mernproduct/uqyak2sfw4nryvkn1krd.webp"
    //         ],
    //         "description": "Stone 1000 1",
    //         "price": 799,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T10:15:22.356Z",
    //         "updatedAt": "2024-03-20T10:15:22.356Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab715123c1cdde93a9b89",
    //         "productName": "Stone 500",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929660/mernproduct/iqpl8zvadgesmlqtuobr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929663/mernproduct/bdjpzhnrgttgpypaac2l.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929667/mernproduct/wtjsob32h3xaqysppppt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929671/mernproduct/wk3cnmw4aposd5rqhsel.webp"
    //         ],
    //         "description": "Stone 500",
    //         "price": 999,
    //         "sellingPrice": 799,
    //         "createdAt": "2024-03-20T10:14:45.893Z",
    //         "updatedAt": "2024-03-20T10:14:45.893Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab6f0123c1cdde93a9b85",
    //         "productName": "Stone 350",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929628/mernproduct/ou4tw9lgstlb4cwul3gs.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929632/mernproduct/kvrl3n9sxmz9kxzlk5mv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929636/mernproduct/p0m3r1p2nfkk9eqrwssm.webp"
    //         ],
    //         "description": "Stone 350 1",
    //         "price": 999,
    //         "sellingPrice": 898,
    //         "createdAt": "2024-03-20T10:14:08.117Z",
    //         "updatedAt": "2024-03-20T10:14:08.117Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab6d5123c1cdde93a9b81",
    //         "productName": "Stone 260",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929593/mernproduct/ut7zmc1rt6zvihhsqtja.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929597/mernproduct/fxhy3onm4qfhfuenyeon.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929600/mernproduct/dfwpfj9pyusxuplqrql6.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929604/mernproduct/dg644cmzxrb4upuw7vyn.webp"
    //         ],
    //         "description": "Stone 260 1",
    //         "price": 1999,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T10:13:41.028Z",
    //         "updatedAt": "2024-03-20T10:13:41.028Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab6b1123c1cdde93a9b7d",
    //         "productName": "Stone 200 ",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929558/mernproduct/yp4wnlcvshxxdvhiu9yl.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929562/mernproduct/ihynfmprr034cg3yukim.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929568/mernproduct/veewszf9cdqoyvxszxxv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929572/mernproduct/nn7bneimxz26humlos8v.webp"
    //         ],
    //         "description": "Stone 200 1",
    //         "price": 6999,
    //         "sellingPrice": 1998,
    //         "createdAt": "2024-03-20T10:13:05.660Z",
    //         "updatedAt": "2024-03-20T10:13:05.660Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab68d123c1cdde93a9b79",
    //         "productName": "boAt Stone Symphony",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929536/mernproduct/ksyicv5rimlqtu2nmfew.webp"
    //         ],
    //         "description": "boAt Stone Symphony",
    //         "price": 899,
    //         "sellingPrice": 799,
    //         "createdAt": "2024-03-20T10:12:29.116Z",
    //         "updatedAt": "2024-03-20T10:12:29.116Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab677123c1cdde93a9b75",
    //         "productName": "boAt Stone 1508",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929507/mernproduct/z3afx12rdo15f63d8qhh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929509/mernproduct/fbvcbcvvh2i0mzo4pn5u.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929512/mernproduct/aeomudh288fvqjis2wal.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929514/mernproduct/vtddwxypdaydyrfqecwg.webp"
    //         ],
    //         "description": "boAt Stone 1508 1",
    //         "price": 999,
    //         "sellingPrice": 899,
    //         "createdAt": "2024-03-20T10:12:07.835Z",
    //         "updatedAt": "2024-03-20T10:12:07.835Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab65c123c1cdde93a9b71",
    //         "productName": "boAt Stone 1450",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929480/mernproduct/hajzckgtp0xidslxizsu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929482/mernproduct/w0va9dmoebfltozqbzs4.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929484/mernproduct/ukaulnt7hk0rp9th6zuw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929487/mernproduct/adsuqdcdgf6hggb3erro.webp"
    //         ],
    //         "description": "boAt Stone 1450 1",
    //         "price": 999,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-20T10:11:40.588Z",
    //         "updatedAt": "2024-03-20T10:11:40.588Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab641123c1cdde93a9b6d",
    //         "productName": "boAt Stone 1200",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929452/mernproduct/ntfzj8wxzninhm3qzq6g.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929454/mernproduct/jspo9q4aah1wznk32otb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929457/mernproduct/jif3uzwvnfgkvxjeaxem.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929459/mernproduct/are9x4vey0j5yehgz937.webp"
    //         ],
    //         "description": "boAt Stone 1200 1",
    //         "price": 999,
    //         "sellingPrice": 897,
    //         "createdAt": "2024-03-20T10:11:13.749Z",
    //         "updatedAt": "2024-03-20T10:11:13.749Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab625123c1cdde93a9b69",
    //         "productName": "boAt Stone 620",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929423/mernproduct/ujnnkz3gfc8e5zbr2x7b.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929426/mernproduct/iauor3ixqy08kkk6qjdj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929428/mernproduct/jw6n6k5btg2p52diddqd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929432/mernproduct/vguldirq665tasu2wg63.webp"
    //         ],
    //         "description": "boAt Stone 620 1",
    //         "price": 5954,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-20T10:10:45.485Z",
    //         "updatedAt": "2024-03-20T10:10:45.485Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab608123c1cdde93a9b65",
    //         "productName": "boAt Stone 190",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929395/mernproduct/fktb4dqux0esjfjtsnpq.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929393/mernproduct/qlf1stjp2yocehtr37qu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929397/mernproduct/ohd2xvqlf4j4yfsmyroa.webp"
    //         ],
    //         "description": "boAt Stone 190 1",
    //         "price": 899,
    //         "sellingPrice": 799,
    //         "createdAt": "2024-03-20T10:10:16.974Z",
    //         "updatedAt": "2024-03-20T10:10:16.974Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab5e8123c1cdde93a9b61",
    //         "productName": "boAt Stone 180",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929362/mernproduct/cdy0dnxasbof10rhlvy1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929365/mernproduct/g7u4h2eggajmhpdzdiaf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929368/mernproduct/wbmbzeqspgudnbuuzdx0.webp"
    //         ],
    //         "description": "boAt Stone 180",
    //         "price": 596,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-20T10:09:44.430Z",
    //         "updatedAt": "2024-03-20T10:09:44.430Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab5ca123c1cdde93a9b5d",
    //         "productName": "boAt Stone 170",
    //         "brandName": "BoAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929342/mernproduct/dw8ca8di3zudf9frslxt.webp"
    //         ],
    //         "description": "boAt Stone 170",
    //         "price": 4951,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T10:09:14.918Z",
    //         "updatedAt": "2024-03-20T10:09:14.918Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab5b6123c1cdde93a9b59",
    //         "productName": "boAt Rugby Plus",
    //         "brandName": "BoAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929309/mernproduct/aymdoha8yyuqrd3ecdhg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929312/mernproduct/aguo8iufwj8bzpxu2lrb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929314/mernproduct/qtsg1k9dkjkws2tynour.webp",
    //             null
    //         ],
    //         "description": "boAt Rugby Plus 1",
    //         "price": 999,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T10:08:54.957Z",
    //         "updatedAt": "2024-03-20T10:08:54.957Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab597123c1cdde93a9b55",
    //         "productName": "boAt Rugby Plus",
    //         "brandName": "boAt",
    //         "category": "speakers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929280/mernproduct/jumk59korrtmyfnlrhfx.webp",
    //             null
    //         ],
    //         "description": "boAt Rugby Plus 1\n",
    //         "price": 4955,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-20T10:08:23.462Z",
    //         "updatedAt": "2024-03-20T10:08:23.462Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab52d123c1cdde93a9b51",
    //         "productName": "Whirlpool 184 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Intellisense Inverter Compressor (Blue Radiance, 205 MAGIC COOL ROY 4SInv BLUE RADIANCE-Z)",
    //         "brandName": "Whirlpool",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929166/mernproduct/ttxwulsyryhgdw5jzsbl.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929169/mernproduct/dme5nmhdl5mnc3rdvkta.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929175/mernproduct/tpx3mdj4yav9qc6r2mdk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929178/mernproduct/khh0qkago4mg64h5lskg.webp"
    //         ],
    //         "description": "Whirlpool 184 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer with Intellisense Inverter Compressor (Blue Radiance, 205 MAGIC COOL ROY 4SInv BLUE RADIANCE-Z)",
    //         "price": 26666,
    //         "sellingPrice": 15000,
    //         "createdAt": "2024-03-20T10:06:37.148Z",
    //         "updatedAt": "2024-03-20T10:06:37.148Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab505123c1cdde93a9b4d",
    //         "productName": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Wine, 205 WDE PRM 2S WINE BLOOM-Z)",
    //         "brandName": "Whirlpool",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929128/mernproduct/wblzz4ptjjapjvpoe3z5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929131/mernproduct/btse1sfjtbvacwdicu5x.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929134/mernproduct/gg2ophrpxqdtb4cgw6gw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929137/mernproduct/w0qwazbzbljywdyn8gzt.webp"
    //         ],
    //         "description": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Wine, 205 WDE PRM 2S WINE BLOOM-Z)",
    //         "price": 46850,
    //         "sellingPrice": 25546,
    //         "createdAt": "2024-03-20T10:05:57.613Z",
    //         "updatedAt": "2024-03-20T10:05:57.613Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab4dc123c1cdde93a9b49",
    //         "productName": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Solid Blue - Blue, 205 WDE CLS 2S SAPPHIRE BLUE-Z)",
    //         "brandName": "Whirlpool",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929082/mernproduct/yyrag7n3ptvz4upytkqt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929085/mernproduct/ytws01p1y4a4ydoxjak3.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929088/mernproduct/hafz682sqcjqh5qlpgga.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929091/mernproduct/qbsazwe4f5gmvoiq1je6.webp"
    //         ],
    //         "description": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Solid Blue - Blue, 205 WDE CLS 2S SAPPHIRE BLUE-Z)",
    //         "price": 46850,
    //         "sellingPrice": 29555,
    //         "createdAt": "2024-03-20T10:05:16.636Z",
    //         "updatedAt": "2024-03-20T10:05:16.636Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab4ac123c1cdde93a9b45",
    //         "productName": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Sapphire, 205 WDE PRM 2S SAPPHIRE BLOOM-Z) ",
    //         "brandName": "Whirlpool",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929029/mernproduct/hdjagkxdudc6fz1bk4mz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929033/mernproduct/hzgv8wy9bplhvlqjtssz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929036/mernproduct/uus7v3v4azcpbx0eyshg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710929038/mernproduct/cqh4jvcqih3s4nmzrwzm.webp"
    //         ],
    //         "description": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator (Sapphire, 205 WDE PRM 2S SAPPHIRE BLOOM-Z)",
    //         "price": 45615,
    //         "sellingPrice": 40855,
    //         "createdAt": "2024-03-20T10:04:28.710Z",
    //         "updatedAt": "2024-03-20T10:04:28.710Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab478123c1cdde93a9b41",
    //         "productName": "SAMSUNG 189 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter (Camellia Purple, RR21C2H25CR-HL)",
    //         "brandName": "SAMSUNG",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928982/mernproduct/zmf8fcn0mjsaklnoagtd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928987/mernproduct/tfd8pe2fjyllvshe7m2p.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928992/mernproduct/qwwvmvdrmovurbzlv1gs.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928998/mernproduct/xq9gwftbwhmyatsxl8dq.webp"
    //         ],
    //         "description": "SAMSUNG 189 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter (Camellia Purple, RR21C2H25CR-HL)",
    //         "price": 49561,
    //         "sellingPrice": 29999,
    //         "createdAt": "2024-03-20T10:03:36.510Z",
    //         "updatedAt": "2024-03-20T10:03:36.510Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab44a123c1cdde93a9b3d",
    //         "productName": "LG 260 L Frost Free Double Door 2 Star Refrigerator (Ebony Regal, GL-N292RERY)",
    //         "brandName": "LG",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928936/mernproduct/njck3ub6uuo1b8ub3xyk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928940/mernproduct/a2h22vv10duhtvcgzrqv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928946/mernproduct/wua7skq5kycdwa3jexmq.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928950/mernproduct/ws3tsohmxmspyaacfflf.webp"
    //         ],
    //         "description": "LG 260 L Frost Free Double Door 2 Star Refrigerator (Ebony Regal, GL-N292RERY) ",
    //         "price": 69554,
    //         "sellingPrice": 38999,
    //         "createdAt": "2024-03-20T10:02:50.093Z",
    //         "updatedAt": "2024-03-20T10:02:50.093Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab410123c1cdde93a9b39",
    //         "productName": "LG 185 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer (Blue Charm, GL-D201ABCU)",
    //         "brandName": "LG",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928876/mernproduct/aopled0masnpzknejfoe.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928880/mernproduct/cqwwxcov7upar4nqt9fe.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928884/mernproduct/vhw1myyqsnimhu4ilxt5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928892/mernproduct/f96budmmbhtyphot7mtu.webp"
    //         ],
    //         "description": "12351",
    //         "price": 69854,
    //         "sellingPrice": 45652,
    //         "createdAt": "2024-03-20T10:01:52.678Z",
    //         "updatedAt": "2024-03-20T10:01:52.678Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab3e2123c1cdde93a9b35",
    //         "productName": "LG 185 L Direct Cool Single Door 3 Star Refrigerator (Ebony Regal, GL-B199OERD)",
    //         "brandName": "LG",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928820/mernproduct/ard2h84hrcj70rgw1wyn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928824/mernproduct/yiesyqst1fouof8or51w.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928831/mernproduct/tjlermtzf5xyforhpqp8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928836/mernproduct/tcoia3rdfk7ywh0lbxo6.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928842/mernproduct/zawpmdsve0o206o1ok5i.webp"
    //         ],
    //         "description": "LG 185 L Direct Cool Single Door 3 Star Refrigerator (Ebony Regal, GL-B199OERD) ",
    //         "price": 68954,
    //         "sellingPrice": 49999,
    //         "createdAt": "2024-03-20T10:01:06.590Z",
    //         "updatedAt": "2024-03-20T10:01:06.590Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab3ac123c1cdde93a9b31",
    //         "productName": "Haier 258 L Frost Free Double Door 3 Star Convertible Refrigerator (Xcel Glass, HRF-2784PXG-E)",
    //         "brandName": "Haier",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928779/mernproduct/o7b33acrgzwo3bxwc9nu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928782/mernproduct/ilyw5cc9hbryg9ypc2wv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928784/mernproduct/drf2ouscqoxhycuavknx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928788/mernproduct/us1fc7wi84oyva2lnfqi.webp"
    //         ],
    //         "description": "Haier 258 L Frost Free Double Door 3 Star Convertible Refrigerator (Xcel Glass, HRF-2784PXG-E) 4",
    //         "price": 79555,
    //         "sellingPrice": 61499,
    //         "createdAt": "2024-03-20T10:00:12.110Z",
    //         "updatedAt": "2024-03-20T10:00:12.110Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab384123c1cdde93a9b2d",
    //         "productName": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator (Prism Glass, HRD-1954CPG-E)",
    //         "brandName": "Haier",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928743/mernproduct/rfqflzd4wbapxmedvoep.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928746/mernproduct/thp139ojuc8tbgoqbphx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928748/mernproduct/bjvc4uxs0t9h8loz9olr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928750/mernproduct/pgtfydefvmlo3yrordba.webp"
    //         ],
    //         "description": "Haier 195 L Direct Cool Single Door 4 Star Refrigerator (Prism Glass, HRD-1954CPG-E)",
    //         "price": 36542,
    //         "sellingPrice": 15000,
    //         "createdAt": "2024-03-20T09:59:32.110Z",
    //         "updatedAt": "2024-03-20T09:59:32.110Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab35e123c1cdde93a9b29",
    //         "productName": "Godrej 236 L Frost Free Double Door 2 Star Refrigerator (Royal Dremin, RF EON 236B 25 HI RY DR)",
    //         "brandName": "Godrej",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928693/mernproduct/ufj0zgsd2ge4ox6wonon.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928696/mernproduct/qfe1ewbq06mbbtgcvbt1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928699/mernproduct/e7tpjh4iuqyrrafe0wvh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928702/mernproduct/fas4yd6lzvcbtzbbkmdt.webp",
    //             null
    //         ],
    //         "description": "Godrej 236 L Frost Free Double Door 2 Star Refrigerator (Royal Dremin, RF EON 236B 25 HI RY DR)",
    //         "price": 69542,
    //         "sellingPrice": 49512,
    //         "createdAt": "2024-03-20T09:58:54.566Z",
    //         "updatedAt": "2024-03-20T09:58:54.566Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab330123c1cdde93a9b25",
    //         "productName": "Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer (Aqua Blue, RD UNO 2154 PTDI AQ BL)",
    //         "brandName": "Godrej",
    //         "category": "refrigerator",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928655/mernproduct/nhawxqooqipnpouloiut.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928658/mernproduct/dnxd7twrrvzp9lgwsmpv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928661/mernproduct/stb6fosqcaij2wlqmg0j.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928665/mernproduct/kvz8onhbh2ejd6rddivu.webp"
    //         ],
    //         "description": "Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer (Aqua Blue, RD UNO 2154 PTDI AQ BL)",
    //         "price": 59654,
    //         "sellingPrice": 39998,
    //         "createdAt": "2024-03-20T09:58:08.518Z",
    //         "updatedAt": "2024-03-20T09:58:08.518Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab2de123c1cdde93a9b21",
    //         "productName": "GIGASTAR 3.2 GHz LGA 1156 Intel Core i5-650 For H55 Motherboard 1st Generation Processor (Silver)",
    //         "brandName": "Intel",
    //         "category": "processor",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928569/mernproduct/xkptvdhuamspwugj9fkw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928572/mernproduct/mprzmh7rdfdj1zmoqy7d.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928575/mernproduct/y2l0tu83nft5zbfubcc0.webp",
    //             null
    //         ],
    //         "description": "GIGASTAR 3.2 GHz LGA 1156 Intel Core i5-650 For H55 Motherboard 1st Generation Processor (Silver)",
    //         "price": 69542,
    //         "sellingPrice": 29999,
    //         "createdAt": "2024-03-20T09:56:46.581Z",
    //         "updatedAt": "2024-03-20T09:56:46.581Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab2b2123c1cdde93a9b1d",
    //         "productName": "amd Ryzen 7 3800XT 3.9 GHz Upto 4.7 GHz AM4 Socket 8 Cores 16 Threads Desktop Processor (Silver) ",
    //         "brandName": "AMD",
    //         "category": "processor",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928532/mernproduct/r5msx8pdlwk2jz1esv4h.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928536/mernproduct/sxhheyfuoqxbt25lkmon.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928539/mernproduct/d2jtlgn5usyuiy5btobi.webp",
    //             null
    //         ],
    //         "description": "amd Ryzen 7 3800XT 3.9 GHz Upto 4.7 GHz AM4 Socket 8 Cores 16 Threads Desktop Processor (Silver) 1",
    //         "price": 78945,
    //         "sellingPrice": 45612,
    //         "createdAt": "2024-03-20T09:56:02.806Z",
    //         "updatedAt": "2024-03-20T09:56:02.806Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab283123c1cdde93a9b19",
    //         "productName": "amd Ryzen 7 3700X with Wraith Prism & RGB LED Cooler (100-100000071BOX) 3.6 Ghz Upto 4.4 Ghz AM4 Socket 8 Cores 16 Threads 4 MB L2 32 MB L3 Desktop Processor (Silver)",
    //         "brandName": "AMD",
    //         "category": "processor",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928461/mernproduct/zunrgi0q07r4ou4gvcnt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928464/mernproduct/ojenn265mwtfzyvt3lku.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928467/mernproduct/tmubc3d2vvolmpmsxn5z.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928471/mernproduct/xrl4zfg77s8ymvyakva6.webp"
    //         ],
    //         "description": "amd Ryzen 7 3700X with Wraith Prism & RGB LED Cooler (100-100000071BOX) 3.6 Ghz Upto 4.4 Ghz AM4 Socket 8 Cores 16 Threads 4 MB L2 32 MB L3 Desktop Processor (Silver)",
    //         "price": 20000,
    //         "sellingPrice": 18999,
    //         "createdAt": "2024-03-20T09:55:15.157Z",
    //         "updatedAt": "2024-03-20T09:55:15.157Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab23f123c1cdde93a9b15",
    //         "productName": "Canon PIXMA MG2470 All-in-One Inkjet Printer (White, Grey, Ink Cartridge)",
    //         "brandName": "Canon",
    //         "category": "printers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928426/mernproduct/nbddqe9wsnotoab6tk4v.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928429/mernproduct/ikic45jueox6siq2ntps.webp"
    //         ],
    //         "description": "Canon PIXMA MG2470 All-in-One Inkjet Printer (White, Grey, Ink Cartridge) 1",
    //         "price": 25641,
    //         "sellingPrice": 4560,
    //         "createdAt": "2024-03-20T09:54:07.389Z",
    //         "updatedAt": "2024-03-20T09:54:07.389Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab224123c1cdde93a9b11",
    //         "productName": "Canon MG2570S Multi-function Color Inkjet Printer (Black, Ink Cartridge)",
    //         "brandName": "Canon",
    //         "category": "printers",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928378/mernproduct/lmbqwcgvzn1sdyuljtxc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928382/mernproduct/wspr2mmehrbtyuj9uksq.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928385/mernproduct/cpyltf2xzcw0xvo748v8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928392/mernproduct/cslagup3qi2x7legtfce.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928399/mernproduct/vbuakxvkljeikdmwhnbs.webp"
    //         ],
    //         "description": "Canon MG2570S Multi-function Color Inkjet Printer (Black, Ink Cartridge) 1",
    //         "price": 8950,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:53:40.277Z",
    //         "updatedAt": "2024-03-20T09:53:40.277Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab19f123c1cdde93a9b0d",
    //         "productName": "Zoook Bomber Wired Optical Mouse (USB 2.0, Black)",
    //         "brandName": "Zoook Bomber",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928250/mernproduct/qmrqfwzkgbt8rai8hdah.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928254/mernproduct/btmzayptfwygkean4xto.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928257/mernproduct/yrzdcljvdpirpusrvsco.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928261/mernproduct/bivyaovanszo7kbkzfwh.webp"
    //         ],
    //         "description": "Zoook Bomber Wired Optical Mouse (USB 2.0, Black) 1",
    //         "price": 599,
    //         "sellingPrice": 299,
    //         "createdAt": "2024-03-20T09:51:27.573Z",
    //         "updatedAt": "2024-03-20T09:51:27.573Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab173123c1cdde93a9b09",
    //         "productName": "Portronics Toad One Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Black)",
    //         "brandName": "Portronics",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928212/mernproduct/ladnk1fsfciec7pug8o5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928216/mernproduct/hvsvsyaa1ftvaipsobhj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928219/mernproduct/b9mqb7mbatsudq5e1az1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928223/mernproduct/fq3xhu8pxmcealg7sljx.webp"
    //         ],
    //         "description": "Portronics Toad One Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Black)",
    //         "price": 899,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-20T09:50:43.877Z",
    //         "updatedAt": "2024-03-20T09:50:43.877Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab140123c1cdde93a9b05",
    //         "productName": "Portronics Toad 24, POR 1611 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "brandName": "Portronics",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928160/mernproduct/gpn7m6rabu4pp2amvt8q.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928166/mernproduct/ix7nqjtnttfsfyjzbp0s.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928169/mernproduct/odbe84lcdtplxx5vi6ii.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928173/mernproduct/ord1eamwvm2nvx6py4ad.webp"
    //         ],
    //         "description": "Portronics Toad 24, POR 1611 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "price": 699,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T09:49:52.501Z",
    //         "updatedAt": "2024-03-20T09:49:52.501Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab117123c1cdde93a9b01",
    //         "productName": "Portronics Toad 22, POR 1612 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "brandName": "Portronics",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928113/mernproduct/dhhpkqc0jwnus2shtq9s.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928117/mernproduct/qxg2ndekbcj4h34zemlj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928122/mernproduct/vdlm8d8hy3kgxo0rmavi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928125/mernproduct/a88zxherbovvicsdjhmq.webp"
    //         ],
    //         "description": "Portronics Toad 22, POR 1612 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "price": 899,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-20T09:49:11.053Z",
    //         "updatedAt": "2024-03-20T09:49:11.053Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab0e5123c1cdde93a9afd",
    //         "productName": "Logitech B175 - Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse (2.4GHz Wireless, Black) 1",
    //         "brandName": "Logitech",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928075/mernproduct/w4nzlyct71mdasdow0sz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928080/mernproduct/u2rigw9lxcopxnpepveg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928083/mernproduct/rkzsjifqnu7ebdsvhjo1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928085/mernproduct/lrhhk7fsgnjebmme6ghw.webp"
    //         ],
    //         "description": "Logitech B175 - Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "price": 599,
    //         "sellingPrice": 398,
    //         "createdAt": "2024-03-20T09:48:21.645Z",
    //         "updatedAt": "2024-03-20T09:48:21.645Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab0c2123c1cdde93a9af9",
    //         "productName": "Logitech B100 Wired Optical Mouse (USB, Black) 1",
    //         "brandName": "Logitech",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928032/mernproduct/yyrrfoczukbopeohxdek.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928036/mernproduct/bhknfruam4iv7lw7yf9v.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928038/mernproduct/bpzewe2epiuhthch98yu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928042/mernproduct/ocu5xna02gzb8cpbhnls.webp"
    //         ],
    //         "description": "",
    //         "price": 8954,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-20T09:47:46.142Z",
    //         "updatedAt": "2024-03-20T09:47:46.142Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab091123c1cdde93a9af5",
    //         "productName": "Lenovo mice_bo 400 mouse(model l300) Wireless Optical Mouse",
    //         "brandName": "Lenovo",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927984/mernproduct/s96g5nir9rozsgcg4yec.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927989/mernproduct/gckxnlwyzuujlak9se5z.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927993/mernproduct/goxd0rkyv2j9bqsy0fh9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710928000/mernproduct/uauqzvo1toycdfs5lnbk.webp"
    //         ],
    //         "description": "Lenovo mice_bo 400 mouse(model l300) Wireless Optical Mouse 1",
    //         "price": 499,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-20T09:46:57.142Z",
    //         "updatedAt": "2024-03-20T09:46:57.142Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab061123c1cdde93a9af1",
    //         "productName": "Lenovo 130 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "brandName": "Lenovo",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927939/mernproduct/lrbwngmvfojhhef5uqzm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927943/mernproduct/avxeqnwwbuammcnfncui.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927946/mernproduct/ofg2rprdotjlzvgvwblx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927949/mernproduct/ei40z9xa6v7fjrungphq.webp"
    //         ],
    //         "description": "Lenovo 130 Wireless Optical Mouse (2.4GHz Wireless, Black) 1",
    //         "price": 799,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-20T09:46:09.398Z",
    //         "updatedAt": "2024-03-20T09:46:09.398Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab03c123c1cdde93a9aed",
    //         "productName": "HP x1000 Wired Optical Mouse (USB 2.0, Black)",
    //         "brandName": "HP",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927904/mernproduct/rkvsel7bzzhhkyv8k3vb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927909/mernproduct/pci1vbaduks54xzo108p.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927911/mernproduct/mcyzvzgwteyk99dxlzhm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927914/mernproduct/bvkmdlz0ngo2i10zoeci.webp"
    //         ],
    //         "description": "HP x1000 Wired Optical Mouse (USB 2.0, Black)",
    //         "price": 799,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-20T09:45:32.213Z",
    //         "updatedAt": "2024-03-20T09:45:32.213Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65fab01a123c1cdde93a9ae9",
    //         "productName": "HP 250 Wireless Optical Mouse (2.4GHz Wireless, Black)",
    //         "brandName": "HP",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927868/mernproduct/ljpz6swkvy7pjglwhqth.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927872/mernproduct/h0bxse666ebzgwnlhsep.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927875/mernproduct/cjrk4kwswkjaijr0yewr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927878/mernproduct/mrgywws4r92sfjw4vweg.webp"
    //         ],
    //         "description": "HP 250 Wireless Optical Mouse (2.4GHz Wireless, Black) 1",
    //         "price": 7995,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-20T09:44:58.237Z",
    //         "updatedAt": "2024-03-20T09:44:58.237Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faaff4123c1cdde93a9ae5",
    //         "productName": "Flipkart SmartBuy Power Wired Optical Mouse (USB 3.0, Midnight Black)",
    //         "brandName": "Flipkart SmartBuy",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927802/mernproduct/edbw3ovupr66dfj3mm1f.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927809/mernproduct/pbgnhbrref9tvsyvxjun.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927812/mernproduct/zdrafzki32imxea0oket.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927814/mernproduct/iizvx6qobd2hxnrw9iag.webp"
    //         ],
    //         "description": "Flipkart SmartBuy Power Wired Optical Mouse (USB 3.0, Midnight Black) 1",
    //         "price": 499,
    //         "sellingPrice": 298,
    //         "createdAt": "2024-03-20T09:44:20.447Z",
    //         "updatedAt": "2024-03-20T09:44:20.447Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faafb2123c1cdde93a9ae1",
    //         "productName": "DELL MS 116 Wired Optical Mouse (USB, Black)",
    //         "brandName": "DELL",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927758/mernproduct/hj2eicfgobq1erpmfur9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927762/mernproduct/urxifzpgwdakfxid4v1j.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927765/mernproduct/lijehg2mtbnou0qmpmha.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927768/mernproduct/uqx4ekyqufsxriovjh0u.webp",
    //             null
    //         ],
    //         "description": "DELL MS 116 Wired Optical Mouse (USB, Black) 1",
    //         "price": 766,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-20T09:43:14.950Z",
    //         "updatedAt": "2024-03-20T09:43:14.950Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faaf89123c1cdde93a9add",
    //         "productName": "ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue)",
    //         "brandName": "ASUS",
    //         "category": "Mouse",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927713/mernproduct/ioxmyg9wsryo9uk2xigc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927716/mernproduct/oujtyl6vmi7hjb2gatao.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927719/mernproduct/torncnp35ysqzsc8zkzn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927722/mernproduct/siloaqgqaicyjkvcf8ja.webp"
    //         ],
    //         "description": "ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue)",
    //         "price": 899,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-20T09:42:33.550Z",
    //         "updatedAt": "2024-03-20T09:42:33.550Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faaeb9123c1cdde93a9ad9",
    //         "productName": "SAMSUNG Galaxy S20 FE 5G (Cloud Mint, 128 GB) (8 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927513/mernproduct/rjkhg9mshnyemowgqyp9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927517/mernproduct/bh66jjsgshjxac2bd50u.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927520/mernproduct/txjurv5yijnnkrihxkcz.webp",
    //             null
    //         ],
    //         "description": "SAMSUNG Galaxy S20 FE 5G (Cloud Mint, 128 GB) (8 GB RAM) 1",
    //         "price": 68995,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:39:05.951Z",
    //         "updatedAt": "2024-03-20T09:39:05.951Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faae8f123c1cdde93a9ad5",
    //         "productName": "SAMSUNG Galaxy A23 (Peach, 128 GB) (8 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927461/mernproduct/hpp2owyckmd4cl2ruiwv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927467/mernproduct/umfdxlzx70wlnaoilhis.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927471/mernproduct/t7xbsrnfpas4asdehzks.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927475/mernproduct/vsowvt73okxxgob0djad.webp",
    //             null
    //         ],
    //         "description": "SAMSUNG Galaxy A23 (Peach, 128 GB) (8 GB RAM) 1",
    //         "price": 9999,
    //         "sellingPrice": 8888,
    //         "createdAt": "2024-03-20T09:38:23.038Z",
    //         "updatedAt": "2024-03-20T09:38:23.038Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faae56123c1cdde93a9ad1",
    //         "productName": "SAMSUNG Galaxy A14 5G (Dark Red, 64 GB) (4 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927413/mernproduct/idphwbmsulnijgd2gq4s.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927418/mernproduct/z5xvsws5scyfwmvuyiyb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927423/mernproduct/jt7omd5rxiduultqs7jq.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927429/mernproduct/py5ybpqaq0vo4tfuikgs.webp"
    //         ],
    //         "description": "SAMSUNG Galaxy A14 5G (Dark Red, 64 GB) (4 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:37:26.334Z",
    //         "updatedAt": "2024-03-20T09:37:26.334Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faae1e123c1cdde93a9acd",
    //         "productName": "SAMSUNG Galaxy A13 (Blue, 128 GB) (6 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927349/mernproduct/dliyljjrmfosz42ghyin.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927359/mernproduct/h3osjcsyionhvr6awnhs.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927366/mernproduct/a718kq9f1ihepfrlvkds.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927373/mernproduct/lk2lf8lts9h2m3ggibdk.webp"
    //         ],
    //         "description": "SAMSUNG Galaxy A13 (Blue, 128 GB) (6 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:36:30.870Z",
    //         "updatedAt": "2024-03-20T09:36:30.870Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faadeb123c1cdde93a9ac9",
    //         "productName": "SAMSUNG Galaxy A12 (Black, 128 GB) (6 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927300/mernproduct/dzw8avftskzp8fvmzctd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927306/mernproduct/wdwbyq3vfa5gnkrol8az.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927312/mernproduct/y4v6brka7vj84y66thzs.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927318/mernproduct/s78cv4ei3l2gtcczs0fi.webp"
    //         ],
    //         "description": "SAMSUNG Galaxy A12 (Black, 128 GB) (6 GB RAM)",
    //         "price": 9999,
    //         "sellingPrice": 8999,
    //         "createdAt": "2024-03-20T09:35:39.632Z",
    //         "updatedAt": "2024-03-20T09:35:39.632Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faadbb123c1cdde93a9ac5",
    //         "productName": "SAMSUNG Galaxy A10s (Black, 32 GB) (3 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927247/mernproduct/sr0tjegda1eykb4nmzw8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927253/mernproduct/adc5ayqpyurskjd1hoqn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927262/mernproduct/s4myrn8pcwwnvxc7d9bm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927269/mernproduct/a4meh1bzqi3jimxgx6g5.webp"
    //         ],
    //         "description": "SAMSUNG Galaxy A10s (Black, 32 GB) (3 GB RAM) 1",
    //         "price": 9999,
    //         "sellingPrice": 8888,
    //         "createdAt": "2024-03-20T09:34:51.007Z",
    //         "updatedAt": "2024-03-20T09:34:51.007Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faad85123c1cdde93a9ac1",
    //         "productName": "SAMSUNG Galaxy A03 (Black, 32 GB) (3 GB RAM)",
    //         "brandName": "SAMSUNG",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927202/mernproduct/bjucecuyqdlysdsc8ihc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927205/mernproduct/l66t8ophdvhkgx4p19jj.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927208/mernproduct/sfp6yhwskkjfeqrpzpdo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927211/mernproduct/hugav9hrb7v5pwdizlja.webp"
    //         ],
    //         "description": "SAMSUNG Galaxy A03 (Black, 32 GB) (3 GB RAM) 1",
    //         "price": 12999,
    //         "sellingPrice": 10999,
    //         "createdAt": "2024-03-20T09:33:57.231Z",
    //         "updatedAt": "2024-03-20T09:33:57.231Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faad58123c1cdde93a9abd",
    //         "productName": "realme X7 Pro 5G (Fantasy, 128 GB) (8 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927142/mernproduct/hotni2iqwlv39e7zqsrf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927150/mernproduct/i22vxlbw8q6lc9fxaapt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927155/mernproduct/dme3ku3tvhp8yh9na4qp.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927169/mernproduct/kogwiw2hsrrfnlzz1zgn.webp"
    //         ],
    //         "description": "realme X7 Pro 5G (Fantasy, 128 GB) (8 GB RAM) 1",
    //         "price": 7985,
    //         "sellingPrice": 6998,
    //         "createdAt": "2024-03-20T09:33:12.062Z",
    //         "updatedAt": "2024-03-20T09:33:12.062Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faad1d123c1cdde93a9ab9",
    //         "productName": "realme Narzo 50A Prime (Flash Black, 64 GB) (4 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927093/mernproduct/wplwwqbiwph4ob1pmjka.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927100/mernproduct/kcuhp5dphnvktpdxig9g.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927109/mernproduct/qam444ujxkdnnufpv73s.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927113/mernproduct/iqgjqc1hi75x9osmvbpy.webp"
    //         ],
    //         "description": "realme Narzo 50A Prime (Flash Black, 64 GB) (4 GB RAM) 1",
    //         "price": 10999,
    //         "sellingPrice": 9999,
    //         "createdAt": "2024-03-20T09:32:13.326Z",
    //         "updatedAt": "2024-03-20T09:32:13.326Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faace8123c1cdde93a9ab5",
    //         "productName": "realme Narzo 50A (Oxygen Blue, 128 GB) (4 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927034/mernproduct/r5fop0kitwkrvkk6pef2.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927041/mernproduct/n4vxqd306znth8p0lcen.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927045/mernproduct/v8uaywdflsvtlcueno8a.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927058/mernproduct/pxj01glywwblst5ay07t.webp"
    //         ],
    //         "description": "realme Narzo 50A (Oxygen Blue, 128 GB) (4 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 8555,
    //         "createdAt": "2024-03-20T09:31:20.496Z",
    //         "updatedAt": "2024-03-20T09:31:20.496Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faacaa123c1cdde93a9ab1",
    //         "productName": "realme Narzo 50 (Speed Blue, 64 GB) (4 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926991/mernproduct/crafurycaq334euaq5g1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926994/mernproduct/ziozbuqtp8yudlogn48x.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926998/mernproduct/dpfodkv243jwzbpnq8ix.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710927001/mernproduct/wkezibqy9g8ctmypdlux.webp"
    //         ],
    //         "description": "realme Narzo 50 (Speed Blue, 64 GB) (4 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:30:18.783Z",
    //         "updatedAt": "2024-03-20T09:30:18.783Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faac7f123c1cdde93a9aad",
    //         "productName": "realme GT Neo 3 (Asphalt Black, 128 GB) (8 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926939/mernproduct/tplmpabitm8z6l96jlno.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926945/mernproduct/d71lasjllcqwxmyvtqhk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926950/mernproduct/wo0ec1wpketfbdbbwfbv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926958/mernproduct/hrx2aqefhdjusmgxaugm.webp"
    //         ],
    //         "description": "realme GT Neo 3 (Asphalt Black, 128 GB) (8 GB RAM) 1",
    //         "price": 7966,
    //         "sellingPrice": 5999,
    //         "createdAt": "2024-03-20T09:29:35.545Z",
    //         "updatedAt": "2024-03-20T09:29:35.545Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faac52123c1cdde93a9aa9",
    //         "productName": "realme GT Neo 3 (Asphalt Black, 128 GB) (8 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926886/mernproduct/ivdhs8kon7idmlojn6al.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926894/mernproduct/gjutyml7vckfxj3xehst.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926898/mernproduct/kqdoo4jeowwrsclow3xt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926903/mernproduct/gkvrlktvwr11wvhdsw6e.webp"
    //         ],
    //         "description": "realme GT Neo 3 (Asphalt Black, 128 GB) (8 GB RAM)",
    //         "price": 8965,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:28:50.384Z",
    //         "updatedAt": "2024-03-20T09:28:50.384Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faac1b123c1cdde93a9aa5",
    //         "productName": "realme GT NEO 2 (NEO Black, 128 GB) (8 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926841/mernproduct/ahndr85hkusiusd2ae4y.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926845/mernproduct/dc01e0mruu8ljhb0h5ok.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926848/mernproduct/wek2sybw5tug1zaaufev.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926851/mernproduct/jgbp0xm2gi8pl8a1sux8.webp"
    //         ],
    //         "description": "realme GT NEO 2 (NEO Black, 128 GB) (8 GB RAM)",
    //         "price": 12562,
    //         "sellingPrice": 9999,
    //         "createdAt": "2024-03-20T09:27:55.359Z",
    //         "updatedAt": "2024-03-20T09:27:55.359Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faabef123c1cdde93a9aa1",
    //         "productName": "realme GT 5G (Racing Yellow, 256 GB) (12 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926800/mernproduct/jjhteovcmmtcmhzkxbha.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926805/mernproduct/jwbolwbscmzq5wrprcdi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926809/mernproduct/eksbs0jhkapfbs9t4p7b.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926813/mernproduct/cjvbbbgde1vvfyb40paz.webp"
    //         ],
    //         "description": "realme GT 5G (Racing Yellow, 256 GB) (12 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-20T09:27:11.993Z",
    //         "updatedAt": "2024-03-20T09:27:11.993Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65faabc0123c1cdde93a9a9d",
    //         "productName": "realme C35 (Glowing Green, 64 GB) (4 GB RAM) 1",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926751/mernproduct/majxqb919cfkqbthsch8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926755/mernproduct/osulouyh69hmmr14kzkv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926760/mernproduct/jpptqimhjcwlcxvicved.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1710926763/mernproduct/brih3n37pjfoo5oo08ut.webp"
    //         ],
    //         "description": "realme C35 (Glowing Green, 64 GB) (4 GB RAM) 1",
    //         "price": 6110,
    //         "sellingPrice": 5999,
    //         "createdAt": "2024-03-20T09:26:24.694Z",
    //         "updatedAt": "2024-03-20T09:26:24.694Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b240978156fafed8f6f9",
    //         "productName": "realme C33 (Night Sea, 32 GB) (3 GB RAM)",
    //         "brandName": "realme C33 (Night Sea, 32 GB) (3 GB RAM)",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814303/mernproduct/wrvrej4isx27gidxusx0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814309/mernproduct/pltgiqs8ai5vzyhp5tnh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814312/mernproduct/aenqp4z3ypbjoizs1qmo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814317/mernproduct/gluks5gl5urqsbrtaosm.webp"
    //         ],
    //         "description": "realme C33 (Night Sea, 32 GB) (3 GB RAM) 1",
    //         "price": 46000,
    //         "sellingPrice": 28999,
    //         "createdAt": "2024-03-07T12:25:36.197Z",
    //         "updatedAt": "2024-03-07T12:25:36.197Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b216978156fafed8f6f5",
    //         "productName": "realme C30 (Bamboo Green, 32 GB) (2 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814255/mernproduct/usll04w0apk50i6rjzlr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814260/mernproduct/aczvpwdf4irdjgzxesca.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814262/mernproduct/eiagqxecuhtwqeyaqxvi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814265/mernproduct/uamyzpi7yiz37pbh50pz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814269/mernproduct/vabj1dvglymziemy9mgl.webp"
    //         ],
    //         "description": "realme C30 (Bamboo Green, 32 GB) (2 GB RAM) 3",
    //         "price": 30000,
    //         "sellingPrice": 26666,
    //         "createdAt": "2024-03-07T12:24:54.957Z",
    //         "updatedAt": "2024-03-07T12:24:54.957Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b1e7978156fafed8f6f1",
    //         "productName": "realme C25s (Watery Grey, 128 GB) (4 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814218/mernproduct/yqj0k6evuvh970f5zeo9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814221/mernproduct/examv8eeipqzqzchpszy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814224/mernproduct/iyaximwmufr7zkq9znku.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814228/mernproduct/v1gdecfdc51dk3jnc6wj.webp"
    //         ],
    //         "description": "realme C25s (Watery Grey, 128 GB) (4 GB RAM) 4",
    //         "price": 16000,
    //         "sellingPrice": 9999,
    //         "createdAt": "2024-03-07T12:24:07.045Z",
    //         "updatedAt": "2024-03-07T12:24:07.045Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b1bf978156fafed8f6ed",
    //         "productName": "realme 9i 5G (Soulful Blue, 64 GB) (4 GB RAM)",
    //         "brandName": "realme 9i 5G (Soulful Blue, 64 GB) (4 GB RAM)",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814171/mernproduct/gxze1dysuqs4qggibmki.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814173/mernproduct/n4rz2x0tk3dbaxipmzqy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814175/mernproduct/ecayrhuuflvjrui85buc.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814178/mernproduct/gkeh8lf0kw7qvkkhdnx5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814184/mernproduct/j1pqlbtip9faqjv4kxje.webp"
    //         ],
    //         "description": "realme 9i 5G (Soulful Blue, 64 GB) (4 GB RAM) 1",
    //         "price": 14999,
    //         "sellingPrice": 12999,
    //         "createdAt": "2024-03-07T12:23:27.462Z",
    //         "updatedAt": "2024-03-07T12:23:27.462Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b194978156fafed8f6e9",
    //         "productName": "realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814133/mernproduct/oayp6afwuedzsu4co3qa.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814136/mernproduct/abddffwo96az1mjdcesg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814139/mernproduct/zyvf0tjtrwwbl2gmgbfe.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814141/mernproduct/c2umb99ew9pi92zocmjk.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814147/mernproduct/m0pqbyugszy860vazpf8.webp"
    //         ],
    //         "description": "realme 9 Pro 5G (Midnight Black, 128 GB) (6 GB RAM) 1",
    //         "price": 8999,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-07T12:22:44.758Z",
    //         "updatedAt": "2024-03-07T12:22:44.758Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b167978156fafed8f6e5",
    //         "productName": "realme 9 5G (Stargaze White, 128 GB) (6 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814078/mernproduct/wr6cyejtdxdprtv5zgan.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814083/mernproduct/jv1b8c3izy7yd6b28u6e.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814087/mernproduct/qid0mgkw5t5qeuhrxql5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814091/mernproduct/cqaclcnxw5zzdsfk1zxe.webp"
    //         ],
    //         "description": "realme 9 5G (Stargaze White, 128 GB) (6 GB RAM) 1",
    //         "price": 9999,
    //         "sellingPrice": 8999,
    //         "createdAt": "2024-03-07T12:21:59.510Z",
    //         "updatedAt": "2024-03-07T12:21:59.510Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b12c978156fafed8f6e1",
    //         "productName": "realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)",
    //         "brandName": "realme",
    //         "category": "mobiles",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813996/mernproduct/ocixmu9crbgsclm8msl9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814000/mernproduct/dxpfvknlmfy2qqvtiaev.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814006/mernproduct/eijkpkwr8jm4somfcel8.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709814010/mernproduct/oq6yytrmwro4hjdqwrly.webp"
    //         ],
    //         "description": "realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM) 1",
    //         "price": 12666,
    //         "sellingPrice": 9998,
    //         "createdAt": "2024-03-07T12:21:00.918Z",
    //         "updatedAt": "2024-03-07T12:21:00.918Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b0d7978156fafed8f6dd",
    //         "productName": "boAt TRebel Rockerz 235 V2",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813940/mernproduct/p5rkhrmudl9gpov1ga21.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813946/mernproduct/om8rh7thucsrjztkxiiv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813949/mernproduct/kpzldgwd47diecyllvru.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813956/mernproduct/uwptgvtztqbencfh4pd4.webp"
    //         ],
    //         "description": "boAt TRebel Rockerz 235 V2 1",
    //         "price": 7895,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-07T12:19:35.789Z",
    //         "updatedAt": "2024-03-07T12:19:35.789Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b0aa978156fafed8f6d9",
    //         "productName": "boAt TRebel Rockerz 235 V2",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813895/mernproduct/eqbrqrjamagvi6jxjo4k.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813898/mernproduct/aq5pmnngif5xbdgbegbc.webp",
    //             null
    //         ],
    //         "description": "boAt TRebel Rockerz 235 V2 1",
    //         "price": 3607,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-07T12:18:50.837Z",
    //         "updatedAt": "2024-03-07T12:18:50.837Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b07c978156fafed8f6d5",
    //         "productName": "boAt Rockerz 558",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813849/mernproduct/ovibrmareg5ibvauqxw7.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813853/mernproduct/lqllymc43ierdbvgfqnb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813857/mernproduct/oegickhkr0d4kgxcrzvn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813862/mernproduct/tfetaodxuvjsyezjt4co.webp"
    //         ],
    //         "description": "boAt Rockerz 558 4",
    //         "price": 6999,
    //         "sellingPrice": 2999,
    //         "createdAt": "2024-03-07T12:18:04.461Z",
    //         "updatedAt": "2024-03-07T12:18:04.461Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b052978156fafed8f6d1",
    //         "productName": "boAt Rockerz 518",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813806/mernproduct/ras0rj08f7eydak7kgd9.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813815/mernproduct/nqv85vrq5zeknox2smbm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813830/mernproduct/ut5xxnsmuhofps1byhyf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813833/mernproduct/tmkyntmstidlilp4pbbs.webp"
    //         ],
    //         "description": "boAt Rockerz 518 2",
    //         "price": 6000,
    //         "sellingPrice": 3999,
    //         "createdAt": "2024-03-07T12:17:22.237Z",
    //         "updatedAt": "2024-03-07T12:17:22.237Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9b015978156fafed8f6cd",
    //         "productName": "boAt Rockerz 450 Batman DC Edition",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813744/mernproduct/i3zzvv872qd36jckosw1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813749/mernproduct/xsiwlta8qupvpprpem3q.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813752/mernproduct/e3b8lffbf40tpt4rqfmz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813756/mernproduct/pzvug4uswxk9yqsyqyry.webp"
    //         ],
    //         "description": "boAt Rockerz 450 Batman DC Edition 1",
    //         "price": 9652,
    //         "sellingPrice": 2997,
    //         "createdAt": "2024-03-07T12:16:21.149Z",
    //         "updatedAt": "2024-03-07T12:16:21.149Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9afe3978156fafed8f6c9",
    //         "productName": "boAt Rockerz 330 Pro",
    //         "brandName": "boAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813673/mernproduct/watkzpi73f8iuoazwsou.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813680/mernproduct/si0oopuy5zqzfpcjxc3o.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813684/mernproduct/xuuygyrwpzzurk2qsui1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813689/mernproduct/rl5w0gcx99jzjokfz4mu.webp"
    //         ],
    //         "description": "boAt Rockerz 330 Pro 1",
    //         "price": 945,
    //         "sellingPrice": 899,
    //         "createdAt": "2024-03-07T12:15:31.277Z",
    //         "updatedAt": "2024-03-07T12:15:31.277Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9afa3978156fafed8f6c5",
    //         "productName": "boAt Rockerz 330 Pro",
    //         "brandName": "BoAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813640/mernproduct/m1hxvbhdtcttoflimqxd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813642/mernproduct/olioa2rmv6eew6idm8mm.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813645/mernproduct/es1kpuuju319el3effrg.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813648/mernproduct/kjtiemybqdvqwao2ihsn.webp"
    //         ],
    //         "description": "boAt Rockerz 330 Pro 1",
    //         "price": 681,
    //         "sellingPrice": 649,
    //         "createdAt": "2024-03-07T12:14:27.837Z",
    //         "updatedAt": "2024-03-07T12:14:27.837Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9af7d978156fafed8f6c1",
    //         "productName": "boAt Rockerz 330 Pro",
    //         "brandName": "BoAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813605/mernproduct/yewgo61agygryxdt4rx5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813608/mernproduct/jauvs4voz3xvywbboo7j.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813612/mernproduct/qi0qnzjbdyw3v1vpiv5k.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813614/mernproduct/ofjjbha3nuuayzedeue2.webp"
    //         ],
    //         "description": "boAt Rockerz 330 Pro 1",
    //         "price": 900,
    //         "sellingPrice": 799,
    //         "createdAt": "2024-03-07T12:13:49.142Z",
    //         "updatedAt": "2024-03-07T12:13:49.142Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9af57978156fafed8f6bd",
    //         "productName": "boAt Rockerz 330",
    //         "brandName": "BoAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813561/mernproduct/cphae15lkqemt2uxphvh.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813566/mernproduct/r9cuwejflrad4rmdzw2b.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813569/mernproduct/uslz7fcwfccpvuutvnyo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813572/mernproduct/hzrgx12iuorf8nnbnipu.webp"
    //         ],
    //         "description": "boAt Rockerz 330 1",
    //         "price": 600,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-07T12:13:11.869Z",
    //         "updatedAt": "2024-03-07T12:13:11.869Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ae30978156fafed8f6b9",
    //         "productName": "boAt Rockerz 258 Pro+",
    //         "brandName": "BoAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813247/mernproduct/uuvyguentoxqdykwiquz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813252/mernproduct/zix8ee0ztv6wrierkn43.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813255/mernproduct/h0gnpag9vofkuzv49tou.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813258/mernproduct/oyftzro0fhll5mn0bnlb.webp"
    //         ],
    //         "description": "boAt Rockerz 258 Pro+ 1",
    //         "price": 1120,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-07T12:08:16.596Z",
    //         "updatedAt": "2024-03-07T12:08:16.596Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9adf6978156fafed8f6b5",
    //         "productName": "boAt Rockerz 103 Pro",
    //         "brandName": "BoAt",
    //         "category": "earphones",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813191/mernproduct/siettlp27nrfc6lqy8au.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813195/mernproduct/tbj3rfgc9otany4noa3g.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813197/mernproduct/gt3pc6wcozsepbh7qdr1.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813201/mernproduct/kunzllh1awgsa9jkubw6.webp"
    //         ],
    //         "description": "boAt Rockerz 103 Pro",
    //         "price": 600,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-07T12:07:18.404Z",
    //         "updatedAt": "2024-03-07T12:07:18.404Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9adb8978156fafed8f6b1",
    //         "productName": "SJCAM SJ4000 WiFi 12MP Optical Full HD WiFi Sports Action Camera 170°Wide FOV 30M Waterproof DV Camcorder, Gold",
    //         "brandName": "SJCAM",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813141/mernproduct/w7bvtkwnrl2jjjeshct6.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813145/mernproduct/cl1zhdyziawkzohoqpe8.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813148/mernproduct/gal8nty7jm3y47nvopcf.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813151/mernproduct/upvmzehtffm6sq6yqc5v.jpg"
    //         ],
    //         "description": "SJCAM SJ4000 WiFi 12MP Optical Full HD WiFi Sports Action Camera 170°Wide FOV 30M Waterproof DV Camcorder, Gold 1",
    //         "price": 7960,
    //         "sellingPrice": 5999,
    //         "createdAt": "2024-03-07T12:06:16.300Z",
    //         "updatedAt": "2024-03-07T12:06:16.300Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ad85978156fafed8f6ad",
    //         "productName": "Osaka OS 550 Tripod 55 Inches (140 cm) with Mobile Holder and Carry Case for Smartphone & DSLR Camera Portable Lightweight Aluminium Tripod",
    //         "brandName": "Osaka",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813081/mernproduct/x1cih39cicis9sydv1zt.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813085/mernproduct/mx7mb2aiwrevujm9mvgj.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813088/mernproduct/dlfrttwhuxqyipldtrcs.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813091/mernproduct/bf7zqu25i9kglbq9z6le.jpg"
    //         ],
    //         "description": "Osaka OS 550 Tripod 55 Inches (140 cm) with Mobile Holder and Carry Case for Smartphone & DSLR Camera Portable Lightweight Aluminium Tripod 1",
    //         "price": 29999,
    //         "sellingPrice": 25999,
    //         "createdAt": "2024-03-07T12:05:25.590Z",
    //         "updatedAt": "2024-03-07T12:05:25.590Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ad4d978156fafed8f6a9",
    //         "productName": "Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F-4G ED VR Lens and 64GB Memory Card",
    //         "brandName": "Nikon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813019/mernproduct/fn1awy5xc3ccelbdrepr.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813023/mernproduct/ntvbrub7rwooti6xr11m.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813027/mernproduct/yplbuhet2vab4s43p5np.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709813030/mernproduct/wpsdidd4lijacqp8m7qn.jpg",
    //             null
    //         ],
    //         "description": "Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F-4G ED VR Lens and 64GB Memory Card 1",
    //         "price": 46900,
    //         "sellingPrice": 39999,
    //         "createdAt": "2024-03-07T12:04:29.565Z",
    //         "updatedAt": "2024-03-07T12:04:29.565Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ad07978156fafed8f6a5",
    //         "productName": "Nikon D780 DSLR Body with 24-120mm VR Lens, 3X Optical Zoom, Black",
    //         "brandName": "Nikon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812961/mernproduct/ofx7fdbokn0byfzgms3x.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812965/mernproduct/lqedkjq99hmxmxnxgfg5.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812972/mernproduct/akdnxsveawj0qfb7zzkj.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812975/mernproduct/lnfcahircntlaqhcyuve.jpg"
    //         ],
    //         "description": "Nikon D780 DSLR Body with 24-120mm VR Lens, 3X Optical Zoom, Black 1",
    //         "price": 20000,
    //         "sellingPrice": 15999,
    //         "createdAt": "2024-03-07T12:03:19.468Z",
    //         "updatedAt": "2024-03-07T12:03:19.468Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9acc8978156fafed8f6a1",
    //         "productName": "Imou 360° 1080P Full HD Security Camera, Human Detection, Motion Tracking, 2-Way Audio, Night Vision, Dome Camera with WiFi & Ethernet Connection, Alexa Google Assistant, Up to 256GB SD Card Support",
    //         "brandName": "Imou",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812899/mernproduct/evzizxvqqcxt34jbi5dh.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812903/mernproduct/baoglvssnxlda3c45qt9.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812907/mernproduct/yfydiocmdz1izejjx4if.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812910/mernproduct/s6w1n9n8kszqmgk35pqd.jpg"
    //         ],
    //         "description": "Imou 360° 1080P Full HD Security Camera, Human Detection, Motion Tracking, 2-Way Audio, Night Vision, Dome Camera with WiFi & Ethernet Connection, Alexa Google Assistant, Up to 256GB SD Card Support 1",
    //         "price": 9600,
    //         "sellingPrice": 4560,
    //         "createdAt": "2024-03-07T12:02:16.579Z",
    //         "updatedAt": "2024-03-07T12:02:16.579Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ac7e978156fafed8f69d",
    //         "productName": "GoPro HERO10 Action Camera with Free Swivel Clip, Digital, Battery & Shorty Tripod (Waterproof, Front & Rear Dual Screen,5.3K60 Ultra HD Video, 23MP Photos) (1 Year INTL Warranty + 1 Year IN warranty)",
    //         "brandName": "GO PRO",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812810/mernproduct/n0c9xumwi9njo7qdupkd.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812814/mernproduct/ezu5mrv4vhxfqg20dvuh.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812817/mernproduct/r2ahijwcqyb8r8agcgau.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812819/mernproduct/dzx97xhem2vcodpxal3k.jpg"
    //         ],
    //         "description": "GoPro HERO10 Action Camera with Free Swivel Clip, Digital, Battery & Shorty Tripod (Waterproof, Front & Rear Dual Screen,5.3K60 Ultra HD Video, 23MP Photos) (1 Year INTL Warranty + 1 Year IN warranty) 1",
    //         "price": 16006,
    //         "sellingPrice": 7890,
    //         "createdAt": "2024-03-07T12:01:02.926Z",
    //         "updatedAt": "2024-03-07T12:01:02.926Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ac3e978156fafed8f699",
    //         "productName": "Fujifilm Instax Mini 9 Instant Camera (Smokey White) Gift Box with 10 Shots",
    //         "brandName": "FUJIFILM",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812758/mernproduct/gg1vtfqa8x4trlaqo56m.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812762/mernproduct/bfbuq4re3jkb5ykxfaka.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812765/mernproduct/rccvegyvc2wceipqui8g.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812768/mernproduct/b2zsq4p7uhkadt85nrfg.jpg",
    //             null
    //         ],
    //         "description": "Fujifilm Instax Mini 9 Instant Camera (Smokey White) Gift Box with 10 Shots 1",
    //         "price": 9000,
    //         "sellingPrice": 4600,
    //         "createdAt": "2024-03-07T11:59:58.043Z",
    //         "updatedAt": "2024-03-07T11:59:58.043Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ac0e978156fafed8f695",
    //         "productName": "Fujifilm Instax Mini 9 Instant Camera (Cobalt Blue)",
    //         "brandName": "Canon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812686/mernproduct/sgusckt6veviclbiysuq.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812693/mernproduct/fs6kyou6j09ylmukbclu.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812696/mernproduct/ehkwv2mlgbalvq07l4b8.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812699/mernproduct/rczc6ipnuhwyztdn2gpd.jpg"
    //         ],
    //         "description": "Fujifilm Instax Mini 9 Instant Camera (Cobalt Blue) 1",
    //         "price": 6000,
    //         "sellingPrice": 4999,
    //         "createdAt": "2024-03-07T11:59:10.451Z",
    //         "updatedAt": "2024-03-07T11:59:10.451Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9abc4978156fafed8f691",
    //         "productName": "DIGITEK® (DTR 260 GT) Gorilla Tripod-Mini 33 CM (13 Inch) Tripod for Mobile Phone with Phone Mount & Remote, Flexible Gorilla Stand for DSLR & Action Cameras",
    //         "brandName": "DIGITEK",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812610/mernproduct/ksf0xmykohp7g3ndk6wn.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812614/mernproduct/ajrk1trmjfofzdm8rqjb.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812617/mernproduct/applwxs2xyidgn0fqscb.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812620/mernproduct/dm1jpofnaucftdyreca9.jpg",
    //             null
    //         ],
    //         "description": "DIGITEK® (DTR 260 GT) Gorilla Tripod-Mini 33 CM (13 Inch) Tripod for Mobile Phone with Phone Mount & Remote, Flexible Gorilla Stand for DSLR & Action Cameras",
    //         "price": 9000,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-07T11:57:56.003Z",
    //         "updatedAt": "2024-03-07T11:57:56.003Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ab72978156fafed8f68d",
    //         "productName": "CP PLUS 3MP Full HD Smart Wi-fi CCTV Home Security Camera",
    //         "brandName": "CP Plus",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812544/mernproduct/b711yjp3jdgxnw1uler3.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812548/mernproduct/t8crvfsdhch8viqo86p5.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812551/mernproduct/blohoeru1uh4ce38cpuf.jpg"
    //         ],
    //         "description": "CP PLUS 3MP Full HD Smart Wi-fi CCTV Home Security Camera",
    //         "price": 9000,
    //         "sellingPrice": 5999,
    //         "createdAt": "2024-03-07T11:56:34.436Z",
    //         "updatedAt": "2024-03-07T11:56:34.436Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ab34978156fafed8f689",
    //         "productName": "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
    //         "brandName": "Canon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812497/mernproduct/rgqxzyr3lhlswgfjwegk.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812501/mernproduct/kzlj9dzxh06023udounm.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812505/mernproduct/s7qrsm9lfpckn2yci1lp.jpg"
    //         ],
    //         "description": "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 2",
    //         "price": 15000,
    //         "sellingPrice": 7999,
    //         "createdAt": "2024-03-07T11:55:32.066Z",
    //         "updatedAt": "2024-03-07T11:55:32.066Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9ab00978156fafed8f685",
    //         "productName": "Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)",
    //         "brandName": "Canon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812446/mernproduct/phohjwzktijnd5eov8at.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812453/mernproduct/eoh1ueoctqvdkzdobj9k.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812461/mernproduct/sqavuk3794pkrjtnfbii.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812464/mernproduct/ufmdepldbntezpwjunef.jpg"
    //         ],
    //         "description": "Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)",
    //         "price": 9000,
    //         "sellingPrice": 8000,
    //         "createdAt": "2024-03-07T11:54:40.418Z",
    //         "updatedAt": "2024-03-07T11:54:40.418Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9aad1978156fafed8f681",
    //         "productName": "Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit",
    //         "brandName": "Canon",
    //         "category": "camera",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812386/mernproduct/gdnvwhuhskjwhgom5tfy.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812391/mernproduct/egj6mstyj6idg5ugbqki.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812395/mernproduct/mzila6fd8aye1vjhn6cl.jpg",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812398/mernproduct/dhcrrheeznxvpcdbwnfu.jpg"
    //         ],
    //         "description": "Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit",
    //         "price": 4660,
    //         "sellingPrice": 3999,
    //         "createdAt": "2024-03-07T11:53:53.571Z",
    //         "updatedAt": "2024-03-07T11:53:53.571Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9aa8d978156fafed8f67d",
    //         "productName": "boAt TRebel Airdopes 431",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812326/mernproduct/msycechnz6f04f9m5x6w.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812332/mernproduct/kdtdjn0trj6lazcmlceb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812336/mernproduct/twwjuxin449anv8qocgi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812340/mernproduct/r28plgdfkgwznuvacimi.webp"
    //         ],
    //         "description": "boAt TRebel Airdopes 431 1",
    //         "price": 6812,
    //         "sellingPrice": 5999,
    //         "createdAt": "2024-03-07T11:52:45.315Z",
    //         "updatedAt": "2024-03-07T11:52:45.315Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9aa5a978156fafed8f679",
    //         "productName": "boAt TRebel Airdopes 181",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812282/mernproduct/usbbixof8bbnrcsq2psa.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812287/mernproduct/o5mgubgmfojwpppaqpcv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812290/mernproduct/jukxaym2m6fwobyt0hni.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812293/mernproduct/dykjo0t5ndmvssjzbusw.webp"
    //         ],
    //         "description": "boAt TRebel Airdopes 181",
    //         "price": 850,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-07T11:51:54.619Z",
    //         "updatedAt": "2024-03-07T11:51:54.619Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9aa2f978156fafed8f675",
    //         "productName": "boAt Immortal 121",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812250/mernproduct/xbcrnmxsffsss5oxayd5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812254/mernproduct/qahorgfb92btrmmsdyza.webp"
    //         ],
    //         "description": "boAt Immortal 121",
    //         "price": 846,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-07T11:51:11.810Z",
    //         "updatedAt": "2024-03-07T11:51:11.810Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9aa08978156fafed8f671",
    //         "productName": "boAt Airdopes 701 ANC",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812202/mernproduct/hlv34fpburhjmch2tiqy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812208/mernproduct/pibq58kfigdgaacxsd96.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812211/mernproduct/crvhsbkeunynx8s3i1tb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812214/mernproduct/zixqhi2bsgzyo2xygnz5.webp"
    //         ],
    //         "description": "boAt Airdopes 701 ANC",
    //         "price": 9600,
    //         "sellingPrice": 4506,
    //         "createdAt": "2024-03-07T11:50:32.723Z",
    //         "updatedAt": "2024-03-07T11:50:32.723Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a9de978156fafed8f66d",
    //         "productName": "boAt Airdopes 511 V2",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812161/mernproduct/pbqbhtstm8iwtb3n23ba.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812164/mernproduct/ywuyrkv1s9e2smwmmwo2.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812167/mernproduct/lq9z5g1eichkmikhv0b0.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812171/mernproduct/lumycqzcqeok3zbknd1h.webp"
    //         ],
    //         "description": "boAt Airdopes 511 V2 1",
    //         "price": 7500,
    //         "sellingPrice": 5665,
    //         "createdAt": "2024-03-07T11:49:50.050Z",
    //         "updatedAt": "2024-03-07T11:49:50.050Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a9b2978156fafed8f669",
    //         "productName": "boAt Airdopes 501 ANC",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812113/mernproduct/fwev9azj8dfenf2owjrf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812119/mernproduct/dlpwm2ezufmcghslg1wn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812123/mernproduct/ggzyqunl8hpda4tswvkf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812128/mernproduct/ouvlii3o1g8lcqlx3qsc.webp"
    //         ],
    //         "description": "boAt Airdopes 501 ANC 1",
    //         "price": 600,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-07T11:49:06.425Z",
    //         "updatedAt": "2024-03-07T11:49:06.425Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a980978156fafed8f665",
    //         "productName": "boAt Airdopes 451v2",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812043/mernproduct/saxgloec0qqs4lnkavhu.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812050/mernproduct/jkha5no3eexqalv7emka.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812055/mernproduct/vfokgz20cqmesnqtpv5u.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709812058/mernproduct/b18afz6a956aefswoswf.webp"
    //         ],
    //         "description": "Indulge in the immersive sound of Airdopes 451v2 bluetooth earbuds powered by boAt Signature Sound and 10mm drivers. Pause your music by plugging out your earbuds and plug in to continue with the in-ear detection. With our ENxTM Technology, experience uninterrupted calling, getting rid of the background noise in a meeting. For the sporty ones, it comes with IPX7 Rain & Sweat Shield, so you could sweat it out even when the heavens are pouring. Never stop groovin’ to your favourite tracks with Airdopes 451v2.",
    //         "price": 3000,
    //         "sellingPrice": 1999,
    //         "createdAt": "2024-03-07T11:48:16.010Z",
    //         "updatedAt": "2024-03-07T11:48:16.010Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a93a978156fafed8f661",
    //         "productName": "boAt Airdopes 411 ANC",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811962/mernproduct/jtdnwnkqs5ufgbif1mst.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811967/mernproduct/rdzruen4metp4rzypnma.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811977/mernproduct/hen0rnnwic66zjqrspmv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811985/mernproduct/re2xxoocvm4oiv3fblpn.webp"
    //         ],
    //         "description": "The boAt Airdopes 411 ANC are wireless earbuds with active noise cancellation (ANC). They have a 10m Bluetooth range, 17.5 hours of playback time, and a 320mAh case. They also have ENxTM technology that eliminates background noise during calls.",
    //         "price": 900,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-07T11:47:06.539Z",
    //         "updatedAt": "2024-03-07T11:47:06.539Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a8ea978156fafed8f65d",
    //         "productName": "boAt Airdopes 381 MKI",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811864/mernproduct/xhxfs6qzvpaatralvdlt.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811877/mernproduct/kwmrwfiukpwqd3ytbsqo.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811885/mernproduct/jtfo9azgqeauooduywd5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811894/mernproduct/tmultaureruv8yixlxio.webp"
    //         ],
    //         "description": "Immerse in your playlist for a long time as you don Airdopes 381 Make in India with pride. Its 20 Hours non-stop playback will keep your charging worries at bay. With IPX5, Airdopes 381 Make in India is water resistant, making it perfect for outdoor adventures. Groove on your tunes with its 7mm drivers.",
    //         "price": 900,
    //         "sellingPrice": 799,
    //         "createdAt": "2024-03-07T11:45:46.930Z",
    //         "updatedAt": "2024-03-07T11:45:46.930Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a88e978156fafed8f659",
    //         "productName": "boAt Airdopes 381",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811805/mernproduct/y4zl3vv8lsugn4ioe4ea.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811809/mernproduct/us5gkv50wrbce3xghv6r.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811813/mernproduct/awxes1kry8xixgr8pyyv.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811816/mernproduct/jfxolyihye1meawdrx3t.webp"
    //         ],
    //         "description": "The boAt Airdopes 381 are in-ear wireless earbuds with a sweat and water resistant design. They have a frequency of 20Hz-20KHz, Bluetooth v5.0, and an ergonomic",
    //         "price": 1360,
    //         "sellingPrice": 789,
    //         "createdAt": "2024-03-07T11:44:14.019Z",
    //         "updatedAt": "2024-03-07T11:44:14.019Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a854978156fafed8f655",
    //         "productName": "boAt Airdopes 201",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811742/mernproduct/g7eruheipcxnrgvkrew5.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811746/mernproduct/ymua2cyxlrgyucphdkip.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811750/mernproduct/zkgtykpfrngeismcwizy.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709811754/mernproduct/esz3co1domvegyfbfz8v.webp"
    //         ],
    //         "description": "Wireless earbuds to amplify the music you love and forget what’s happening around you. Plug into Nirvana with these in-ear wireless earbuds, powered with Bluetooth v5.0 for seamless connectivity. Immersive sound to make you experience the unreal. Lightweight to give you comfort for the entire day. Let your style do the talking, with these tws bluetooth earphones. Keep the earbuds in the 470mAh charging case as you carry your style along with your music that allows for a total of almost 15 Hours of play-time.",
    //         "price": 700,
    //         "sellingPrice": 399,
    //         "createdAt": "2024-03-07T11:43:16.398Z",
    //         "updatedAt": "2024-03-07T11:43:16.398Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a350978156fafed8f641",
    //         "productName": "boAt Airdopes 192",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810471/mernproduct/rxmy7zzai8okybewxjgi.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810475/mernproduct/ygobnckpbdoffljsh3ms.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810478/mernproduct/krfddeoojqhgq5vkkzrx.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810483/mernproduct/zuiouw9e4wlgjj3ywkcm.webp"
    //         ],
    //         "description": "Get a head start with Airdopes 192. Experience the best gaming and calling experience with BEAST™ mode and ENx™ noise cancellation technology. With 13mm drivers designed and perfected, experience that high quality audio that cannot be found anywhere else. Airdopes 192 has a battery life of 30 hours that can simply last all day long without a hitch. Enhance your experience with LED lights and set the bar for style and form.",
    //         "price": 6000,
    //         "sellingPrice": 3999,
    //         "createdAt": "2024-03-07T11:21:52.603Z",
    //         "updatedAt": "2024-03-07T11:21:52.603Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a316978156fafed8f63d",
    //         "productName": "boAt Airdopes 172",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810412/mernproduct/ouqnn4k6jgu5xn5liueb.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810416/mernproduct/bcfspg6fvkgmcres6ntf.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810421/mernproduct/uef30xnuwduhszbdx0ro.webp"
    //         ],
    //         "description": "ASAP Fast charge: 120 minutes of playtime with 5 minutes of charging\n11mm drivers: For clear voice calls and balanced bass and treble\nENxTM Technology: Noise cancellation when speaking into the mic\nBEASTTM mode: Low latency for gaming with little to no audio lag",
    //         "price": 1600,
    //         "sellingPrice": 999,
    //         "createdAt": "2024-03-07T11:20:54.745Z",
    //         "updatedAt": "2024-03-07T11:20:54.745Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a2e0978156fafed8f639",
    //         "productName": "boAt Airdopes 131",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810354/mernproduct/n57ekfbkhwxztm22chsn.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810357/mernproduct/dnrxhk5i7etzslsjhnhz.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810361/mernproduct/awhackfyhdbn8b8iogwr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810366/mernproduct/ozwkduuj5mmptnclzkaw.webp"
    //         ],
    //         "description": "The boAt Airdopes 131 are wireless earbuds with a microphone, 13 mm drivers, and a 650 mAh charging case. They have up to 60 hours of playback time, 12 hours of charging time, and offer up to 3 hours of playback time per charge. They also have active noise cancellation, Bluetooth v5.0, and IWP technology. \n",
    //         "price": 900,
    //         "sellingPrice": 498,
    //         "createdAt": "2024-03-07T11:20:00.080Z",
    //         "updatedAt": "2024-03-07T11:20:00.080Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a2a3978156fafed8f635",
    //         "productName": "boAt Airdopes 121 v2",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810279/mernproduct/u4xjocnshhrnfj6xy50n.webp"
    //         ],
    //         "description": "Plug into your sound with boAt Airdopes 121v2 True Wireless earbuds to enjoy your playlist in a truly wireless way. With Bluetooth v5.0 and Insta wake N' pair technology you just have to take out earbuds from the case and they automatically pair with your device in an instant. Its 380mAh carry cum charging case offers an additional playtime of up to 10.5 Hours. With a battery capacity of 380mAh for each earbud, indulge in blissful audio experience for up to 3.5 Hours per charge. The TWS Airdopes 121v2 comes equipped with 8mm drivers that pump out immersive sound. The stereo calling feature lets the user indulge in smooth and clear chats over calls. One can access the instant voice assistant by just a single press via the Multifunction Button control. It comes in three stylish colours: Active Black, Midnight Blue and Cherry Blossom to uplift the vibes like never before.",
    //         "price": 800,
    //         "sellingPrice": 499,
    //         "createdAt": "2024-03-07T11:18:59.679Z",
    //         "updatedAt": "2024-03-07T11:18:59.679Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a225978156fafed8f631",
    //         "productName": "Airpodes 115",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810144/mernproduct/zvdbeiol6jqtnsgtpecw.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810149/mernproduct/z1ravrmbhxpliejx5y9v.webp"
    //         ],
    //         "description": "airpodes",
    //         "price": 1500,
    //         "sellingPrice": 599,
    //         "createdAt": "2024-03-07T11:16:53.649Z",
    //         "updatedAt": "2024-03-07T11:16:53.649Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "65e9a193978156fafed8f62d",
    //         "productName": "Airpodes 111",
    //         "brandName": "Boat",
    //         "category": "airpodes",
    //         "productImage": [
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810007/mernproduct/pibsza3qmxwaddczgppr.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810011/mernproduct/mv1qgd8rdhitockhbe8b.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810015/mernproduct/rlt60xuqcxg6cv1vkimd.webp",
    //             "http://res.cloudinary.com/ddwo8iuhl/image/upload/v1709810020/mernproduct/j1kiemtr9piwpy8cktz0.webp"
    //         ],
    //         "description": "Best Airpodes ",
    //         "price": 1200,
    //         "sellingPrice": 850,
    //         "createdAt": "2024-03-07T11:14:27.469Z",
    //         "updatedAt": "2024-03-07T11:14:27.469Z",
    //         "__v": 0
    //     }
    // ]
    
    // let newData = data.map((item) => {
    
    //     let prod_image = item.productImage.map((img_link) => {
    //         return img_link;
    //     });
    
    //     return {
    //         "id": item._id,
    //         "productName": item.productName,
    //         "brandName": item.brandName,
    //         "category": item.category,
    //         "productImage": prod_image,
    //         "description": item.description,
    //         "price": item.price,
    //         "sellingPrice": item.sellingPrice,
    //     }
    // })
    
    
    // // console.log("New Data",newData.length);
    
    // for (let i = 0; i < newData.length; i++) {
    //     const uploadProduct = new productModel(newData[i]);
    //     const saveProduct = await uploadProduct.save()
    //     console.log("ith product uplaod",i);
    // }


}


 module.exports = bulkuploadProduct




