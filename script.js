```javascript
// Menu mobile
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("show");
}

// Form kontak
function kirimPesan(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
        "Terima kasih, " + nama +
        "! Pesan Anda berhasil dikirim."
    );

    document.querySelector(".contact-form").reset();
}

// Efek navbar saat scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.padding = "12px 8%";
    } else {
        navbar.style.padding = "18px 8%";
    }

});
```
