<script>
    // Toplam sayfa sayısı
    var totalPages = 10;

    // Mevcut sayfa numarası
    var currentPage = 1; // Bu değeri dinamik olarak güncelleyin

    // Sayfalama bağlantılarını oluştur
    var paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination";

    for (var i = 1; i <= totalPages; i++) {
        var link = document.createElement("a");
        link.href = "index.html?page=" + i;
        link.textContent = i;

        if (i === currentPage) {
            link.classList.add("current-page");
        }

        paginationContainer.appendChild(link);
    }

    document.body.appendChild(paginationContainer);

// Tüm paylaş düğmelerini seçin
var paylasDugmeleri = document.querySelectorAll('.paylas-btn');

// Her bir paylaş düğmesi için olay dinleyicisi ekleme
paylasDugmeleri.forEach(function(dugme) {
  dugme.addEventListener('click', function() {
    // Paylaşma işlemi burada gerçekleştirilebilir
    // Örneğin, sosyal medya paylaşma işlemi yapılabilir veya özel bir paylaşma penceresi açılabilir
    alert('Paylaş düğmesine tıklandı!');
  });
});
</script>
