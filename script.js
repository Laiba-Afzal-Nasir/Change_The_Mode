let body = document.querySelector("body")

let btn = document.querySelector(".btn")

let CurrMode = "light";

btn.addEventListener("click", () => {
    if(CurrMode === "light") {
        CurrMode = "dark"
     body.classList.add("dark")
   body.classList.remove("light")
    }else {
        CurrMode = "light"
        body.classList.add("light")
   body.classList.remove("dark")
    }
})