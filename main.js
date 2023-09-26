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


observer.observe(articlesNumber);

// ultimi annunci

let annunci = [
    {nome: "Le Dune Del cardo", categoria: "Mare", prezzo: 1583.96, url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/7b/24/79/residence-le-dune-del.jpg?w=700&h=-1&s=1"}, 
    {nome: "Resort Martur", categoria: "Mare", prezzo: 3716.07, url:"https://media-cdn.tripadvisor.com/media/photo-s/0d/03/05/bf/martur-resort.jpg"}, 
    {nome: "Albani Residence", categoria: "Mare", prezzo: 8832.83, url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f1/a2/09/green-coast-resort-residences.jpg?w=700&h=-1&s=1"}, 
]
let annunciWrapper = document.querySelector("#annunciWrapper")
annunci.forEach((annuncio)=>{
let div = document.createElement("div")
div.classList.add("col-12", "col-md-4" ,"col-lg-3")
div.innerHTML= `
<div class="card">
<div class="overflow-hidden">
    <img src="${annuncio.url}" class="card-img-top transition" alt="...">
</div>
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span>
<div class="card-body">
<h5 class="card-title">${annuncio.nome}</h5>
<p class="card-text">${annuncio.categoria}</p>
<p class="card-text fw-bold">Prezzo: ${annuncio.prezzo}€</p>
<div class="d-flex justify-content-between">
    <a href="#" class="btn btn-outline-danger">Aggiungi al carrello</a>
    <i class="bi bi-heart fs-4"></i>
</div>
<p class="card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
</div>
</div>
`
annunciWrapper.appendChild(div)
})



















// Swiper 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });