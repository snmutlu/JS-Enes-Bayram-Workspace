//? Ürün Arama Uygulaması-Diziler


let urun1 = {
    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}

let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}

let urun3 = {
    isim: "Acer Gaming",
    kategori: "Teknoloji",
    fiyat: 13.999
}

let urun4 = {
    isim: "Lenovo V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}

let urun5 = {
    isim: "Lenovo V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}

let urun6 = {
    isim: "Lenovo Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];

let kullaniciUrunIsmi = prompt("Lütfen ürün ismi giriniz");

let filtreliUrunler = [];


function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun)

        }
    });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun){
        console.log("----------------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------------");

    });
}

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);