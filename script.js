let acc = document.getElementsByClassName("accordion");
let catalogue = document.getElementsByClassName("catalogue")[0];
let openCatalogue = document.getElementsByClassName("shopping_card")[0];
let body = document.body;
let isCatalogueOpen = false;

openCatalogue.addEventListener("click", () => {
    if (!isCatalogueOpen) { // Если блок закрыт
        catalogue.style.width = "100%";
        catalogue.style.height = "100vh";
        body.style.overflow = "hidden";
        isCatalogueOpen = true;
    } else {
        catalogue.style.width = "0";
        catalogue.style.height = "0";
        body.style.overflow = "";
        isCatalogueOpen = false;
    }
});


for ( let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



