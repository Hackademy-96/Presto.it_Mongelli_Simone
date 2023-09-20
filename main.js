let navbar = document.querySelector("#navbar-wrap")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >0){
        navbar.classList.add("navbar-wrap")
    }else {
        navbar.classList.remove("navbar-wrap")
    }
})