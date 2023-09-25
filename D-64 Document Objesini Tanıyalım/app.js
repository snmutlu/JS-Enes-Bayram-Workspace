//? Document Objesi

/* 

Document objesi Window objesi içerisinde tanımlanmış bir objedir.
Bizim web sayfası içerisinde gördüğümüz herşey document objesi içerisinde
saklıdır. Herşeye bu obje içerisinden erişebiliriz. Document objesi içeri
sinde birçok özellik ve mothod barındırır.

*/

let value ;

// console.log(document);

// value = document.location.href; // Sayfanın üzerinde çalışmış olduğu adresi console'a yazdırmış olduk.

// value = document.location.host; // Sayfanın çalışmış olduğu host adresini yazdırmış olduk.

// value = document.location.port; // Sayfanın çalışmış olduğu port adresini yazdırmış olduk.

// value = document.location.pathname;

/* ------------------------------------------------- */

// value = document.characterSet; // Projemizdeki kullanmış olduğumuz dil kodunu gösteriyor.

// value = document.title; // Projemizin title'ını çağırmış oluyoruz.

// value = document.links; // Html sayfası içerisindeki linkleri çağırmış oluyoruz.

// value = document.links.item(4); // Linklerin 4. indexinde bulunan item'ı çağırmış oluyoruz.

// value = document.links.item(4).getAttribute("id"); // Linklerin 4. indexinde bulunan item'ın içerisindeki "id" adındaki attribute'ların içeriğini çağırmış oluyoruz.

// value = document.links.item(4).getAttribute("class"); // Linklerin 4. indexinde bulunan item'ın içerisindeki "class" adındaki attribute'ların içeriğini çağırmış oluyoruz.

// value = document.links.item(4).classList; // Linklerin 4. indexinde bulunan item'ın içerisindeki class'ları listele demiş oluyoruz.

value = document.links.item(4).classList[1]; // Linklerin 4. indexinde bulunan item'ın içerisindeki class'ların 1. indexindeki elemanı çağırmış oluyoruz.

// value = document.forms; // Sayfamız içerisindeki formları çağırmış oluyoruz.

// Document objesi içerisinde bu şekilde bir çok özellik ve method vardır.


console.log(value);