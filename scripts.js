document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
document.querySelector(".btn").addEventListener("click", function () {
    this.style.transform = "scale(0.9)"; // Tombol mengecil
    setTimeout(() => {
      this.style.transform = "scale(1)"; // Kembali normal setelah 200ms
    }, 200);
  }); 