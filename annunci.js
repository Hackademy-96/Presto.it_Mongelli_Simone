let navbar = document.querySelector("#navbar-wrap");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >0){
        navbar.classList.add("navbar-wrap")
    }else {
        navbar.classList.remove("navbar-wrap")
    }
})

// fetch

fetch("./annunci.json").then( (response)=> response.json()).then( (data)=>{

    let cardsWrapper = document.querySelector("#cardsWrapper")

    // creazione card
    function creatCards(array) {
        cardsWrapper.innerHTML= "";
        
    
array.forEach((card, i)=> {
    let div = document.createElement("div")
    div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-5" )
    div.innerHTML = `
        <div class="card">
            <div class="overflow-hidden">
                <img src="${card.url}" class="card-img-top transition" alt="...">
            </div>
            
            <div class="card-body">
            <h5 class="card-title">${card.nome}</h5>
            <p class="">${card.descrizione}</p>
            <p class="card-text">${card.categoria}</p>
            <p class="card-text fw-bold">Prezzo: ${card.prezzo}€</p>
            <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-outline-info">Aggiungi al carrello</a>
                <i class="bi bi-heart fs-4"></i>
            </div>
            <p class="card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    `
    cardsWrapper.appendChild(div)
    
});
}
creatCards(data);
// filtro per categoria 
let categoryButtons = document.querySelector("#categoryButtons")

function setCategories(){
    let categories = data.map((el)=> el.categoria)
    console.log(categories);
    let uniqueCategories = [];
    categories.forEach((categoria)=> {
        if(! uniqueCategories.includes(categoria)){
            uniqueCategories.push(categoria)
        }
    })
    uniqueCategories.forEach((uniqueCategory)=>{
        let div = document.createElement("div")
        div.classList.add("form-check")
        div.innerHTML = ` 
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${uniqueCategory}">
        <label class="form-check-label" for="${uniqueCategory}">
        ${uniqueCategory}
        </label>
        `
        categoryButtons.appendChild(div)

    })
}
setCategories();

let inputChecks = document.querySelectorAll(".form-check-input")

function filterByCategory(array){
    let arrayButtons = Array.from( inputChecks)
    let checked = arrayButtons.find((el)=> el.checked)
    if(checked.id == "All"){
        return array;
    }else{
    let filtered = array.filter((el)=> el.categoria == checked.id)
    return filtered;
}


}
inputChecks.forEach((radioButton)=>{
    radioButton.addEventListener("click", ()=>{
        globalFilter();

})
})

// filtro per prezzo 
let inputPrice = document.querySelector("#inputPrice")
let price = document.querySelector("#price")

function minMaxPrice(){
    let prices = data.map((el)=> el.prezzo)
    let max = Math.max(...prices)
    let min = Math.min(...prices)
    inputPrice.max = max ;
    inputPrice.value = max ;
    inputPrice.min = min ;
    price.innerHTML = max ;
    
}
minMaxPrice();

function filterByPrice(array){
    
    let filtered = array.filter((el)=> el.prezzo <= inputPrice.value).sort((a,b)=> b.prezzo - a.prezzo) 
    price.innerHTML = inputPrice.value;
    return filtered ;

}
inputPrice.addEventListener("input", ()=>{
    globalFilter();

})

// filtro per parola 

let wordInput = document.querySelector("#wordInput")

function filterByWord(array){
    let value = wordInput.value;
    let filtered  = array.filter((el)=> el.nome.toLowerCase().includes(value.toLowerCase()))
    return filtered;
}
wordInput.addEventListener("input", ()=>{
    globalFilter();
})

function globalFilter(){
    let filteredByCategory = filterByCategory(data);

    let filteredByPrice = filterByPrice(filteredByCategory);

    let filteredByWord = filterByWord(filteredByPrice);
    creatCards(filteredByWord);
}

} )

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
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

