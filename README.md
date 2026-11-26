# 🍕 Pizza Il Napoletano

Sitio web de una pizzería argentina inspirada en la tradición italiana. 
Muestra el catálogo de pizzas en una galería responsive, con buscador en tiempo real y un modal de detalle 
por producto.

Proyecto desarrollado con **HTML, CSS y JavaScript vanilla** (módulos ES6), sin frameworks.
---

## ✨ Características

- **Galería de productos dinámica:** las pizzas se cargan desde un archivo `productos.json` con `fetch` y se dibujan en el DOM.
- **Buscador en tiempo real:** filtra las pizzas por nombre mientras se escribe.
- **Modal de detalle:** al hacer clic en la imagen de una pizza se abre un modal (SweetAlert2) con foto, descripción y precio.
- **Diseño responsive:** 3 columnas en escritorio, 2a en tablet (< 1024px) y 1 en mobile (< 768px).
- **Animaciones:** de entrada en los titulos con Animate.css.
- **Botón flotante de Whatsapp:** 

## 🛠 Tecnologías

- HTML
- CSS
- JavaScript
- JSON
- [GoogleFonts](https://fonts.google.com/)
- [Animate.css](https://animate.style/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [squoosh](https://squoosh.app/)
- [CDNJS](https://cdnjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [resizing.app](https://resizing.app/)
- [JsonLint](https://jsonlint.com/)

## 📁 Estructura del proyecto

```
.
├── index.html            
├── main.js               
├── products.json        
├── css/
│   └── style.css          
├── js/
│   ├── api.js             
│   ├── ui.js             
│   └── core/
│       └── products.js    
└── img/
    ├── logo.webp
    └── pizza-*.jpg 

```

## 🚀 Cómo ejecutarlo en local

Como el proyecto usa **módulos ES** y `fetch` para leer `products.json`, **no funciona abriendo el HTML con doble clic** 
(`file://`). Hay que servirlo con un servidor local.

## 👤 Autor

Desarrollado por **Juan Augusto Alonso** y **Valeria Oviedo**
- [Github](https://github.com/JuanAugusto08/)
- [Github](https://github.com/akashicrkive/)

## 📄 Licencia

Este proyecto está bajo la licencia MIT.