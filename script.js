```javascript
// =============================
// MENU MOBILE
// =============================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("show");

}


// =============================
// FORM KONTAK
// =============================

function kirimPesan(event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value;

    alert(
        "Terima kasih, " +
        nama +
        "! Pesan Anda berhasil dikirim."
    );

    document.querySelector(".contact-form").reset();

}


// =============================
// TUTUP MENU SETELAH KLIK LINK
// =============================

const links =
    document.querySelectorAll(".nav-menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu =
            document.getElementById("navMenu");

        navMenu.classList.remove("show");

    });

});
```
