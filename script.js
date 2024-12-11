const menu = document.querySelector(".header-mobile")
const show = document.querySelector(".header-burger")
const hide = document.querySelector(".header-mobile-burger")

show.addEventListener("click", function() {
    menu.classList.add("header-mobile-show")
})

hide.addEventListener("click", function() {
    menu.classList.remove("header-mobile-show")
})