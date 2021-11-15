// //Crear en html
// document.body.style.backgroundImage="url('../imagenes/imagenesPuestico/logoPuesticoBurger.jpg')";
// document.body.classList.add('imagen__body')
// let div=document.createElement('div')
// let h1Div=document.createElement('h1')
// h1Div.innerHTML='Hola Coder'
// div.appendChild(h1Div)
// document.body.appendChild(div)

// //

// let divCard=document.createElement('div')
// divCard.classList.add('card')

// let imgCard=document.createElement('img')
// imgCard.setAttribute('src', '../img') //va la ruta a la imagen
let templateCard=document.getElementById('templateCard').content;
let carts=document.getElementById('carts');
let carrito={};

let baseDeDatos=[
    {
        "price": 590,
        "id": 1,
        "title": "Hamburguesa",
        "imagen": "../imagenes/imagenesPuestico/Haburguesa de pollo_HDR.jpg"
        },
        {
        "price": 520,
        "id": 2,
        "title": "Arepitas fritas",
        "imagen": "../imagenes/imagenesPuestico/Arepitas_tapitas mechada1HDR.jpg"
        },
        {
        "price": 440,
        "id": 3,
        "title": "Tequeños",
        "imagen": "../imagenes/imagenesPuestico/20211027_233845.jpg"
        },
        {
        "price": 130,
        "id": 4,
        "title": "Pepsi Común",
        "imagen": "../imagenes/imagenesPuestico/pepsi.png"
        },
        {
        "price": 130,
        "id": 5,
        "title": "7up",
        "imagen": "../imagenes/imagenesPuestico/7up.png"
        },
        {
        "price": 240,
        "id": 6,
        "title": "Heineken",
        "imagen": "../imagenes/imagenesPuestico/patagonia.png"
        }
]

let storageDataBase= localStorage.setItem('baseCarrito',JSON.stringify(baseDeDatos));

class Producto {
    constructor(obj) {
        this.title  = obj.title.toUpperCase();
        this.price  = parseFloat(obj.price);
        this.id=parseFloat(obj.id);
        this.imagen=obj.imagen;
    }
    sumaIva() {
        this.price = this.price * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const storaged=JSON.parse(localStorage.getItem('baseCarrito'));
const productos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of storaged)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos){

    templateCard.querySelector('h5').textContent=producto.title;
    templateCard.querySelector('p').textContent=producto.price;
    templateCard.querySelector('img').setAttribute("src",producto.imagen);
    templateCard.querySelector('.btn-dark').dataset.id=producto.id;
    const clone=templateCard.cloneNode(true);
    carts.appendChild(clone);
}