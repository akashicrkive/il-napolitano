document.addEventListener('DOMContentLoaded', cargarProductos);

async function cargarProductos() {
  const response = await fetch('productos.json');   // 1. pide el archivo
  const productos = await response.json();          // 2. convierte el contenido a objeto/array JS
//console.log(productos);                         // 3. ya podés usarlo
  let gallery = document.querySelector('.gallery'); // Dentro del ul cargo dinámicamente li
  productos.forEach(function (pizza) {
  //console.log(pizza.nombre+" "+pizza.precio);
  //console.log(`${pizza.nombre} ${pizza.precio}`);   // ALT+96 backticks Acento Grave
   let li = document.createElement("li");
  //p.innerHTML=pizza.nombre;
   li.innerHTML=`<li>
   <div class="box">
                    <figure>
                        <img src=${pizza.images}/>
                        <figcaption>
                            <h3>${pizza.nombre}</h3>
                            <p>${pizza.precio}</p>
                            <time>${pizza.fecha}</time>
                        </figcaption>
                    </figure>
                    <button class="button" value="1" data-price="${pizza.precio}">
                        Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
                    </button>
</div>
</li> `; 
   gallery.appendChild(li);
  })
}