
let mesaj = 
`
Migros'a hoş geldiniz
Money Card'ınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat : 100
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 220
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money Card'ı vardır
    let isim = prompt("Adınızı giriniz:");
    let soyisim = prompt("Soyisminizi giriniz:");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar = musteri.hesapla();

    alert(`Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
    `);
}
else{
    //Money Card'ı yoktur
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);
}   