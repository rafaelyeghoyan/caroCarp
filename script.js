let acc = document.getElementsByClassName("accordion");
let catalogue = document.getElementsByClassName("catalogue")[0];
let openCatalogue = document.getElementsByClassName("shopping_card")[0];
let body = document.body;
let isCatalogueOpen = false;
let logInBlock = document.getElementsByClassName("log_in")[0];
let userAccount = document.getElementsByClassName("user_link")[0];
let closeUserAccount = document.getElementById("_1");

userAccount.addEventListener("click", (e) => {
    if(!isCatalogueOpen){
        logInBlock.style.width = "100%";
        logInBlock.style.height = "100vh";
        body.style.overflow = "hidden";
        isCatalogueOpen = true;
    }else{
        logInBlock.style.width = "0";
        logInBlock.style.height = "0";
        body.style.overflow = "";
        isCatalogueOpen = false;
    }

})
closeUserAccount.addEventListener("click", (e) => {
    logInBlock.style.width = "0";
    logInBlock.style.height = "0";
    body.style.overflow = "";
    isCatalogueOpen = false;
})

openCatalogue.addEventListener("click", () => {
    if (!isCatalogueOpen) {
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

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const passwordType = passwordInput.getAttribute("type");

    if (passwordType === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}




