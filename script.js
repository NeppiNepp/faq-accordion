const accordion = document.querySelectorAll(".accordion");


accordion.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const panel = btn.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
})