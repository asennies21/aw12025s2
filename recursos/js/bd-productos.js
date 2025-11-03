
// Base de datos
const productos = [
    {
        id: 1,
        nombre: 'Helado de chocolate',
        precio: 1000,
        imagen: './recursos/productos/copa-helada.jpg',
        disponible: true
    },
    {
        id: 2,
        nombre: 'Helado de vainilla',
        precio: 2000,
        imagen: './recursos/productos/cucurucho-bochas.jpg',
        disponible: true
    },
    {
        id: 3,
        nombre: 'Helado de pistacho',
        precio: 3000,
        imagen: './recursos/productos/paleta-chocolate.jpg',
        disponible: true
    }

]

// 1 - NO NOMBRADA //-> solo puede haber una declacion con default
export default productos

// 2 - NOMBRADA
export { productos }