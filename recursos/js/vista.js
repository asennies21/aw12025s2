function renderizarCatalogo(arregloProductos) {
    const $contenedor = document.getElementById('contenedor');
    // Variable para concatenar el HTML
    let contenidoHelados = '';

    arregloProductos.forEach((producto) => {
        //////
        if (producto.disponible === true) {
            const plantillaHelado = `
            <article>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>        
                <span>$ ${producto.precio}</span>
                <button class="boton-producto" data-id="${producto.id}">Agregar al pedido</button>
            </article>
            `;
            contenidoHelados += plantillaHelado;
        }
    });

    $contenedor.innerHTML = contenidoHelados;

}
export { renderizarCatalogo };
