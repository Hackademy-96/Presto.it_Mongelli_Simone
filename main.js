let navbar = document.querySelector("#navbar-wrap")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >0){
        navbar.classList.add("navbar-wrap")
    }else {
        navbar.classList.remove("navbar-wrap")
    }
})

let articlesNumber = document.querySelector("#articlesNumber")
let usersNumber = document.querySelector("#usersNumber")
let productsNumber = document.querySelector("#productsNumber")


function creatInterval(finalN, elemento, frequenza ){
let counter = 0;

let interval = setInterval( ()=>{
    if(counter < finalN){
    counter++
    elemento.innerHTML = counter;
    console.log(counter);
}else {
    clearInterval(interval)
}
},frequenza )
}







// INTERSECTION OBSERVER
let isEntered= false;
let observer = new IntersectionObserver( (entra)=>{
entra.forEach( (entry)=>{
    if(entry.isIntersecting && isEntered ==false){
        creatInterval(1708,articlesNumber, 5)
        creatInterval(453, usersNumber, 20)
        creatInterval(845, productsNumber, 10)
        isEntered = true;

    }
} )
} )


observer.observe(articlesNumber)