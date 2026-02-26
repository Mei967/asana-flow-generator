// ------------------------
// NAVEGACIÓN SPA
// ------------------------
document.querySelectorAll(".menu-item").forEach(button => {
    button.addEventListener("click", () => {

        const targetView = button.dataset.view;
        if (!targetView) return;

        document.querySelectorAll(".view").forEach(view => {
            view.classList.remove("active");
        });

        document.getElementById(targetView).classList.add("active");
    });
});


// ------------------------
// ACORDEONES (Tipos de Yoga + Biblioteca)
// ------------------------
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", function () {

        const content = this.nextElementSibling;

        if (!content) return;

        // Alternar visibilidad
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});