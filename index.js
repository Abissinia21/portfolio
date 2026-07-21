const button = document.getElementById("theme-toggle");
const icon = button.querySelector("i");

button.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        icon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");
    }else{
        icon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    icon.classList.replace("fa-moon","fa-sun");
}