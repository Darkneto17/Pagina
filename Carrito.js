document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.agregar');
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    let carrito = [];
    let totalPrecio = 0;
  
    botonesAgregar.forEach(function(boton) {
      boton.addEventListener('click', agregarAlCarrito);
    });
  
    listaCarrito.addEventListener('click', eliminarDelCarrito);
  
    function agregarAlCarrito(event) {
      const producto = event.target.parentElement;
      const titulo = producto.querySelector('h3').textContent;
      const precio = parseFloat(producto.querySelector('p').textContent.replace('$', ''));
      const nuevoProducto = {
        titulo: titulo,
        precio: precio
      };
  
      carrito.push(nuevoProducto);
      mostrarCarrito();
    }
  
    function mostrarCarrito() {
      listaCarrito.innerHTML = '';
      totalPrecio = 0;
  
      carrito.forEach(function(producto) {
        const nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = `${producto.titulo} - Precio: $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(nuevoItem);
  
        totalPrecio = totalPrecio + producto.precio;
      });
  
      total.textContent = `Total: $${totalPrecio.toFixed(2)}`;
    }
  
    function eliminarDelCarrito(event) {
      if (event.target.tagName === 'BUTTON') {
        const productoEliminado = event.target.parentElement;
        const titulo = productoEliminado.querySelector('li').textContent.split(' - ')[0];
  
        carrito = carrito.filter(function(producto) {
          return producto.titulo !== titulo;
        });
  
        mostrarCarrito();
      }
    }
  });
  

function checkout() {
    var confirmation = confirm("¿Estás seguro de comprar estos productos?");
    if (confirmation) {
        var cartBody = document.querySelectorAll("#cart tbody");
        cartBody.innerHTML = "";
        alert("Gracias por tu compra!");
    }
}



