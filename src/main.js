document.addEventListener('DOMContentLoaded', cargarProductos);

async function cargarProductos() {
  const response = await fetch('productos.json');   // 1. pide el archivo
  const productos = await response.json();          // 2. convierte el contenido a objeto/array JS
//console.log(productos);                         // 3. ya podés usarlo
  let gallery = document.querySelector('.gallery');
  productos.forEach(function (pizza) {
  //console.log(pizza.nombre+" "+pizza.precio);
  //console.log(`${pizza.nombre} ${pizza.precio}`);   // ALT+96 backticks Acento Grave
  let li=document.createElement("li");
  //p.innerHTML=pizza.nombre;
  li.innerHTML=`${pizza.nombre} ${pizza.precio}`;
  gallery.appendChild(li);
  })

 };