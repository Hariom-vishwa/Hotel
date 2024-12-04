const openHamBtn = document.querySelector(".openHam")
const closeHamBtn = document.querySelector(".closeHam")
const hamMenu = document.querySelector(".hamMenu")

function openHam(){
    closeHamBtn.style.transform = "scale(1)"
    hamMenu.style.transform = "translateX(0)"
    hamMenu.style.scale = "1"
    hamMenu.style.top = "-20vw"
    hamMenu.style.right = "-8vw"
}

function closeHam(){
    closeHamBtn.style.transform = "scale(0)"
    hamMenu.style.transform = "translateX(120vw)"
    hamMenu.style.scale = "0"
    hamMenu.style.top = "-200vw"
    hamMenu.style.right = "-100vw"
}