const cards=document.getElementById('cards');
const items=document.getElementById('items');
const footer=document.getElementById('footer');
const templateCard=document.getElementById('templateCard').content;
const templateCart=document.getElementById('template-carrito').content;
const templateFooter=document.getElementById('template-footer').content;
const fragment=document.createDocumentFragment();
let carrito={};

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'))
        printCart();
    }
} )
cards.addEventListener('click', e=>{
    addCarrito(e)
})
items.addEventListener('click', e=>{
    btnAccion(e);
})

const fetchData= async()=>{
    try{
        const res=await fetch('../api.json')
        const data=await res.json()
        
        printCards(data);
    }catch(error){
        console.log.apply(error)
    }
}
const printCards=data=>{
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent=producto.title;
        templateCard.querySelector('p').textContent=producto.price;
        templateCard.querySelector('img').setAttribute("src",producto.imagen);
        templateCard.querySelector('.btn-dark').dataset.id=producto.id;
        const clone=templateCard.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    cards.appendChild(fragment);
    // console.log(data)
}


const addCarrito=e=>{
    if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation();

}

const setCarrito= objeto=>{
    const product={
        id:objeto.querySelector('.btn-dark').dataset.id,
        title:objeto.querySelector('h5').textContent,
        price:objeto.querySelector('p').textContent,
        cantidad:1
        }
        if(carrito.hasOwnProperty(product.id)){
            product.cantidad=carrito[product.id].cantidad+1;

        }

        carrito[product.id]={...product}
        printCart();
    }

    

    const printCart=()=>{
        items.innerHTML='';
        Object.values(carrito).forEach(product=>{
            templateCart.querySelector('th').textContent=product.id;
            templateCart.querySelectorAll('td')[0].textContent=product.title;
            templateCart.querySelectorAll('td')[1].textContent=product.cantidad;
            templateCart.querySelector('.btn-info').dataset.id=product.id;
            templateCart.querySelector('.btn-danger').dataset.id=product.id;
            templateCart.querySelector('span').textContent=product.price*product.cantidad
            const clone=templateCart.cloneNode(true);
            fragment.appendChild(clone);
        })
        items.appendChild(fragment);
        printFooterCarrito()
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }

    const printFooterCarrito=()=>{
        footer.innerHTML='';
        if(Object.keys(carrito).length===0){
            footer.innerHTML=`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
            return;
        }
        const nCantidad=Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0);
        const  nPrecio=Object.values(carrito).reduce((acc,{cantidad, price})=>acc+cantidad*price,0)
        templateFooter.querySelectorAll('td')[0].textContent=nCantidad;
        templateFooter.querySelector('span').textContent=nPrecio;
        const clone=templateFooter.cloneNode(true);
        fragment.appendChild(clone);
        footer.appendChild(fragment)
        // const btnComprar=document.getElementById('comprar-carrito');
        // btnComprar.addEventListener('click', ()=>{
        //     carrito={};
        //     printCart();
            
        // })
        const btnVaciar=document.getElementById('vaciar-carrito');
        btnVaciar.addEventListener('click', ()=>{
            carrito={};
            printCart();
        })
    }

    const btnAccion=e=>{
        console.log(e.target);
        //Accion de aumentar
        if(e.target.classList.contains('btn-info')){
            // carrito[e.target.dataset.id]
            const producto=carrito[e.target.dataset.id]
            producto.cantidad++;
            carrito[e.target.dataset.id]={...producto};
            printCart();
        }
        //Accion disminuir
        if(e.target.classList.contains('btn-danger')){
            // carrito[e.target.dataset.id]
            const producto=carrito[e.target.dataset.id];
            producto.cantidad--;
            carrito[e.target.dataset.id]={...producto};
            printCart();
            if(producto.cantidad===0){
                delete carrito[e.target.dataset.id]
                printCart();
            }
        }

        e.stopPropagation();
    }

    //btnPagar
    const btnPagar= document.getElementById('btnPago')

    btnPagar.addEventListener('click',funcPagar);
    function funcPagar(){
    event.preventDefault();
    
        window.location.href ="gracias.html"

    }

    

