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
                   <p class="price">${producto.price}</p> 
                </div>
            </div>
            </article>
            `);
            const main =document.querySelector("main");
            main.append(articulo);
    });
})
