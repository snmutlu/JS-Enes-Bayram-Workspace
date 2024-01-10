//? AJAX Nedir?

/* Projelerimizi server'a bağlamak için, server'a istek
yollamak ve cevap almak için kullanılır. 
Çok eski bir yöntemdir ve artık çok fazla kullanılmaz.
Kısaca sunucuya bir istek atıp veri almak için kullanılır.
*/

/* AJAX içerisinde XMLHtppRequest() adında bir objemiz var
ve bizler bu class'ımızdan bir nesne türetiyoruz.
Bu XMLHttpRequest içerisinde readyState - status - responseText
gibi değerler var */


//! Değerler ve karşılıkları:
/*

onreadystatechange:	Defines a function to be called when the readyState
property changes
! onreadystatechange adında bir event var ve readyState 0-dan 4'e kadar
! değişirken birşeyler yaptırmak için bu event'i kullanabiliriz.
---------------------------------------------------------------------------------
readyState:	Holds the status of the XMLHttpRequest.

0: request not initialized  //! Request atılmadı anlamında
1: server connection established //! Server ayağa kalktı
2: request received //! İstek ulaştı
3: processing request //! İstek server'da işleniyor
4: request finished and response is ready //! İstek tamamlandı ve cevap hazır.
-----------------------------------------------------------------------------------
status	200: "OK" //! Server' attığımız istek başarılı anlamında
        403: "Forbidden" //! Yasaklı
        404: "Page not found" //! Sayfa bulunamadı
        For a complete list go to the Http Messages Reference

-----------------------------------------------------------------
statusText:	Returns the status-text (e.g. "OK" or "Not Found")

*/


//! AJAX İLE İLGİLİ BİR ÖRNEK :

/* 

<html>
<body>

<div id="demo">
<h1>The XMLHttpRequest Object</h1>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html> 

*/