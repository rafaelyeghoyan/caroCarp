let acc = document.getElementsByClassName("accordion");
let catalogue = document.getElementsByClassName("catalogue")[0];
let openCatalogue = document.getElementsByClassName("shopping_card")[0];
let body = document.body;
let isCatalogueOpen = false;
let logInBlock = document.getElementsByClassName("log_in")[0];
let userAccount = document.getElementsByClassName("user_link")[0];
let closeUserAccount = document.getElementById("_1");
let closeResetPass = document.getElementById("_2");
let closeResetPass1 = document.getElementById("_3");
let resetPassButton = document.getElementsByClassName("reset_password")[0];
let resetPass = document.getElementsByClassName("reset_password_block")[0];
let resetPassButton1 = document.getElementsByClassName("reset_password_submit_block")[0];
let submitReset = document.getElementsByClassName("send_code")[0];
let closeSetNewPass = document.getElementById("_4");
let setNewPass = document.getElementsByClassName("set_new_password")[0];
let submitCode = document.getElementsByClassName("submit_code")[0];
let setPass= document.getElementsByClassName("set_password")[0];

userAccount.addEventListener("click", (e) => {
    if (!isCatalogueOpen) {
        logInBlock.style.width = "100%";
        logInBlock.style.height = "100vh";
        body.style.overflow = "hidden";
        isCatalogueOpen = true;
    } else {
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


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
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

function togglePasswordVisibility2() {
    const passwordInput = document.getElementById("password2");
    const passwordType = passwordInput.getAttribute("type");

    if (passwordType === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}

function togglePasswordVisibility3() {
    const passwordInput = document.getElementById("password3");
    const passwordType = passwordInput.getAttribute("type");

    if (passwordType === "password") {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
}


resetPassButton.addEventListener("click", e => {
    logInBlock.style.width = "0";
    logInBlock.style.height = "0";
    isCatalogueOpen = false;
    resetPass.style.width = "100%";
    resetPass.style.height = "100vh";
    body.style.overflow = "hidden";
})

closeResetPass.addEventListener("click", ()=> {
    resetPass.style.width = "0";
    resetPass.style.height = "0";
    body.style.overflow = "";
    isCatalogueOpen = false;

})


submitReset.addEventListener("click", ()=>{
    resetPassButton1.style.width = "100%";
    resetPassButton1.style.height = "100vh";
    body.style.overflow = "hidden";
})


closeResetPass1.addEventListener("click", ()=>{
    resetPassButton1.style.width = "0";
    resetPassButton1.style.height = "0";
    body.style.overflow = "";
    isCatalogueOpen = false;

})

submitCode.addEventListener("click", ()=>{
    setNewPass.style.width = "100%";
    setNewPass.style.height = "100vh";
    body.style.overflow = "hidden";
})

closeSetNewPass.addEventListener("click", ()=>{
    setNewPass.style.width = "0";
    setNewPass.style.height = "0";
    body.style.overflow = "";
    isCatalogueOpen = false;

})

setPass.addEventListener("click", ()=>{
    setNewPass.style.width = "0";
    setNewPass.style.height = "0";
    resetPass.style.width = "0";
    resetPass.style.height = "0";
    resetPassButton1.style.width = "0";
    resetPassButton1.style.height = "0";
    logInBlock.style.width = "100%";
    logInBlock.style.height = "100vh";
    body.style.overflow = "hidden";
})


