// =======================
// SMARTZMART PRODUCT CATALOGUE
// Every product actually shown on mobiles.html / laptops.html / Tvs.html
// Each has a unique id so Add to Cart always adds the right item.
// =======================
const products = [

// ---------- MOBILES (mobiles.html) ----------
{ id:1, name:"Apple iPhone 13", price:49999, oldPrice:59999, image:"Images/iphone.avif", category:"mobile", page:"mobiles.html" },
{ id:2, name:"Realme P3 5G", price:18999, oldPrice:22999, image:"Images/realme.png", category:"mobile", page:"mobiles.html" },
{ id:3, name:"Redmi Note 13 Pro", price:22999, oldPrice:26999, image:"Images/redme.png", category:"mobile", page:"mobiles.html" },
{ id:4, name:"Motorola Edge 50", price:27999, oldPrice:31999, image:"Images/moto.png", category:"mobile", page:"mobiles.html" },
{ id:5, name:"Vivo V50", price:34999, oldPrice:34999, image:"Images/vivo.png", category:"mobile", page:"mobiles.html" },
{ id:6, name:"Oppo Reno 13", price:29999, oldPrice:29999, image:"Images/oppo.png", category:"mobile", page:"mobiles.html" },
{ id:7, name:"OnePlus Nord 4", price:31999, oldPrice:31999, image:"Images/oneplus.png", category:"mobile", page:"mobiles.html" },
{ id:8, name:"Samsung Galaxy S24", price:74999, oldPrice:74999, image:"Images/samsungphone.png", category:"mobile", page:"mobiles.html" },

// ---------- LAPTOPS (laptops.html) ----------
{ id:9, name:"HP Pavilion i7", price:72990, oldPrice:84990, image:"Images/Hp.webp", category:"laptop", page:"laptops.html" },
{ id:10, name:"ASUS ROG", price:129990, oldPrice:139990, image:"Images/asus.webp", category:"laptop", page:"laptops.html" },
{ id:11, name:"Acer Aspire 7", price:69990, oldPrice:76990, image:"Images/acer.webp", category:"laptop", page:"laptops.html" },
{ id:12, name:"Infinix GT Book", price:59990, oldPrice:66990, image:"Images/infinix.webp", category:"laptop", page:"laptops.html" },
{ id:13, name:"Dell Inspiron 15", price:64990, oldPrice:64990, image:"Images/dell.webp", category:"laptop", page:"laptops.html" },
{ id:14, name:"Lenovo IdeaPad Slim 5", price:67999, oldPrice:67999, image:"Images/lenovo.webp", category:"laptop", page:"laptops.html" },
{ id:15, name:"MSI Thin 15", price:89990, oldPrice:89990, image:"Images/msi.webp", category:"laptop", page:"laptops.html" },
{ id:16, name:"Apple MacBook Air M3", price:114900, oldPrice:114900, image:"Images/apple-macbook.webp", category:"laptop", page:"laptops.html" },

// ---------- SMART TVs (Tvs.html) ----------
{ id:17, name:"Samsung QLED 55\"", price:54999, oldPrice:72999, image:"Images/samsung.webp", category:"tv", page:"Tvs.html" },
{ id:18, name:"LG WebOS 43\"", price:31999, oldPrice:39999, image:"Images/LG.webp", category:"tv", page:"Tvs.html" },
{ id:19, name:"Panasonic 55\"", price:44999, oldPrice:54999, image:"Images/panasonic.webp", category:"tv", page:"Tvs.html" },
{ id:20, name:"Xiaomi 43\"", price:27999, oldPrice:34999, image:"Images/xiaomi.webp", category:"tv", page:"Tvs.html" },
{ id:21, name:"Sony Bravia 55\"", price:69999, oldPrice:84999, image:"Images/sony.webp", category:"tv", page:"Tvs.html" },
{ id:22, name:"TCL 50\" 4K", price:39999, oldPrice:47999, image:"Images/tcl.webp", category:"tv", page:"Tvs.html" },
{ id:23, name:"Realme QLED Ultra HD", price:29999, oldPrice:35999, image:"Images/oneplus-tv.webp", category:"tv", page:"Tvs.html" },
{ id:24, name:"Acer V Series", price:26999, oldPrice:31999, image:"Images/acer-tv.webp", category:"tv", page:"Tvs.html" },

// ---------- HOME PAGE "FEATURED PRODUCTS" (index.html only) ----------
// These match exactly what's displayed on the homepage cards.
{ id:25, name:"HP Intel Core i7", price:69999, oldPrice:69999, image:"Images/Hp.webp", category:"laptop", page:"index.html" },
{ id:26, name:"Infinix GT Book", price:52999, oldPrice:52999, image:"Images/infinix.webp", category:"laptop", page:"index.html" },
{ id:27, name:"Acer Aspire 7", price:63999, oldPrice:63999, image:"Images/acer.webp", category:"laptop", page:"index.html" },
{ id:28, name:"ASUS ROG", price:99999, oldPrice:99999, image:"Images/asus.webp", category:"laptop", page:"index.html" },
{ id:29, name:"Panasonic 55\" Inch", price:42999, oldPrice:42999, image:"Images/panasonic.webp", category:"tv", page:"index.html" },
{ id:30, name:"Samsung QLED", price:59999, oldPrice:59999, image:"Images/samsung.webp", category:"tv", page:"index.html" },
{ id:31, name:"Xiaomi Fire TV", price:28999, oldPrice:28999, image:"Images/xiaomi.webp", category:"tv", page:"index.html" },
{ id:32, name:"LG Smart TV", price:21999, oldPrice:21999, image:"Images/LG.webp", category:"tv", page:"index.html" }

];
