function getApi(done){
    $.ajax({
        url: 'https://fakestoreapi.com/products',
        dataType: 'json',
        success: function(data){
            done(data);
        }
    })
}

getApi(data => {
    data.forEach(producto => {
        const articulo = document.createRange().createContextualFragment(`
            <article>
            <div id="container" class="tarjeta">
                <img src="${producto.image}" class="imagen"></img>
                <div class="nombre">
                    <p>${producto.title}</p>
                   <p class="price">S/.${producto.price}</p> 
                </div>
            </div>
            </article>
            `);
            const main =document.querySelector("main");
            main.append(articulo);
        
    });
})
function getApi2(done){
    $.ajax({
        url: 'https://fakestoreapi.com/products?limit=8',
        dataType: 'json',
        success: function(data){
            done(data);
        }
    })
}

getApi2(data=>{
    data.forEach(producto=>{
        const articulo1 = document.createRange().createContextualFragment(`
            <div class="slide"><img src="${producto.image}" alt="${producto.title}"></div>
            `);
            const carousel =document.querySelector(".carousel");
            carousel.append(articulo1);
    })
})

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slidesToShow = 4; // Número de imágenes visibles
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - slidesToShow;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * (100 / slidesToShow); // Desplazamiento en función del número de imágenes visibles
  carousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

