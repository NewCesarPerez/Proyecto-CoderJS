//Variables y arrays

let name;
let hamburguesa=0;
let patacon=0;
let arepa=0;
let optionForLandingPage;
let email;
let order;
let wishToOrder;
let orderId;
let anotherPlate;
let instEspecial;
let menuPlates=["(id: 01) Hamburguesa de pollo: $590", "(id: 02) Hamburguesa de carne: $590", "(id: 03) Hamburguesa de lomito $620", "(id: 04) Patacon de pollo: $620", "(id: 05) Patacon de carne: $650", "(id: 06) Arepas fritas de pollo: $520", "(id: 07) Arepas fritas de carne: $550"]
let menuDrinks=["(id: 08) Coca-Cola común: $160", "(id: 09) Coca-Cola light: $160"];
let ticket=0;
let finalOrder=[];

//Clases
class Burger{

    constructor(protein, vegetables, price, id){
        this.caract=protein;
        this.vegetables=vegetables;
        this.price=price;
        this.name="Hamburguesa de "
        this.id=id;

    }

    specialInstruction() {
        if (this.specialInstruction==false){

        }
        else{
        this.specialInstruction= prompt ('Por favor ingresa alguna instrucción especial que quieras.')
        }
        
    }

}
class Patacon{

    constructor(protein, vegetables, price, id){
        this.name="Patacon de "
        this.caract=protein;
        this.vegetables=vegetables;
        this.price=price;
        this.id=id;

    }

    specialInstruction() {
        if (this.specialInstruction==false){

        }
        else{
        this.specialInstruction= prompt ('Por favor ingresa alguna instrucción especial que quieras.')
        }
        
    }
    
}

class arepaFrita{

    constructor(protein, vegetables, price,id){
        this.caract=protein;
        this.vegetables=vegetables;
        this.name="Arepitas fritas de "
        this.price=price;
        this.id=id;

    }

    specialInstruction() {
        if (this.specialInstruction==false){

        }
        else{
        this.specialInstruction= prompt ('Por favor ingresa alguna instrucción especial que quieras.')
        }
        
    }
    
}

class BebidaCocaSaborOriginal{
    constructor(id){
        this.name="Coca-Cola"
        this.caract="Sabor Original"
        this.price=160
        this.id=id
    }


}

class BebidaCocaSaborLight{
    constructor(id){
        this.name="Coca-Cola"
        this.caract="Sin azucar"
        this.price=160
        this.id=id
    }


}
// //Declaracion e iniciacion de funciones

function helloToClient(){
    console.log('Bienvenido al puestico Burger!');
    // let h1Saludo=document.createElement('h1');      COMENTADO HASTA QUE TENGA UNA ALTERNATIVA AL PROMPT
    // h1Saludo.innerHTML="¡Bienvenido al puestico Burger"
    // document.body.appendChild(h1Saludo);
    name=prompt("Por favor ingresa tu nombre: ");

    // let uList=document.createElement('ul');          COMENTADO HASTA QUE TENGA UNA ALTERNATIVA AL PROMPT
    // for (element of menuPlates){
    //     let elementoListado=document.createElement('li');
    //     elementoListado.innerHTML=element;
    //     uList.appendChild(elementoListado);
    // }
    
    // document.body.appendChild(uList);

    if(name==null){
        alert('No has ingresado tu nombre')
        helloToClient();
            }
    
    }
function menu() {
    console.log("Un Menu bien Maracucho!")
for(let i=0;i<menuPlates.length;i++){
    console.log(menuPlates[i]);
    }    
for(let i=0;i<menuDrinks.length;i++){
    console.log(menuDrinks[i]);
    }
}


function takeOrder(){

orderId=parseInt(prompt("Ingresa el id de tu pedido (Cuando quieras procesar tu compra, inserta 0 para finalizar)\n (id: 01) Hamburguesa de pollo: $590 \n  (id: 02) Hamburguesa de carne: $590 \n (id: 03) Hamburguesa de lomito $620 \n (id: 04) Patacon de pollo: $620 \n (id: 05) Patacon de carne: $650 \n (id: 06) Arepas fritas de pollo: $520 \n (id: 07) Arepas fritas de carne: $550 (id: 08) Coca-Cola común: $160 \n (id: 09) Coca-Cola light: $160 \n Ingresa el id de tu pedido (Cuando quieras procesar tu compra, inserta 0 para finalizar)"))
    while(orderId!=0){
        switch (orderId) {
            case 1:
                finalOrder.push(new Burger("pollo", true, 590, 1));
                break;
            case 2:
                finalOrder.push(new Burger("carne", true, 590, 2))  ;
                break;
            case 3:
                finalOrder.push(new Burger("lomito", true, 620, 3))  ;
                break;
            case 4:
                finalOrder.push(new Patacon("pollo", true, 620, 4))  ;
                break;
            case 5:
                finalOrder.push(new Patacon("carne", true, 650, 5))  ;
                break;
            case 6:
                finalOrder.push(new arepaFrita("pollo", true, 520, 6))  ;
                break;
            case 7:
                finalOrder.push(new arepaFrita("carne", true, 550, 7))  ;
                break;
            case 8:
                finalOrder.push(new BebidaCocaSaborOriginal(8));
                break;
            case 9:
                finalOrder.push(new BebidaCocaSaborLight(9));
                break;
                
        }
        
            orderId=parseInt(prompt("Ingresa el id de tu pedido (Cuando quieras procesar tu compra, inserta 0 para finalizar)\n (id: 01) Hamburguesa de pollo: $590 \n (id: 02) Hamburguesa de carne: $590 \n (id: 03) Hamburguesa de lomito $620 \n (id: 04) Patacon de pollo: $620 \n (id: 05) Patacon de carne: $650 \n (id: 06) Arepas fritas de pollo: $520 \n (id: 07) Arepas fritas de carne: $550 (id: 08) Coca-Cola común: $160 \n (id: 09) Coca-Cola light: $160 \n Ingresa el id de tu pedido (Cuando quieras procesar tu compra, inserta 0 para finalizar)"))  
    }

    if (finalOrder!=null){
    for(const printOrder of finalOrder){
        ticket=ticket+printOrder.price;
        console.log("Pedido: ", printOrder.name, printOrder.caract)

        }
    }

    let desireToEliminate=confirm('¿Hay algo que quieras eliminar de tu compra?')
    let eliminated=1;
    let eliminateId=1;
    if (desireToEliminate==true){
        let eliminate=parseInt(prompt('ingresa el id del producto que deseas eliminar (Cuando quieras procesar tu compra, inserta 0 para finalizar)'))
    
    while(eliminate!=0){
        switch (eliminate) {
            case 1:
                eliminateId=1
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 2:
                eliminateId=2
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 3:
                eliminateId=3
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 4:
                eliminateId=4
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 5:
                eliminateId=5
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 6:
                eliminateId=6
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 7:
                eliminateId=7
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 8:
                eliminateId=8
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
            case 9:
                eliminateId=9
                finalOrder=finalOrder.filter(eliminar => eliminar.id!==eliminateId)
                break;
                
        }
        
            eliminate=parseInt(prompt("Ingresa el id del producto que deseas eliminar"))  
    }

    if (finalOrder!=null){
        ticket=0;
        console.log('Pedido actualizado')
        for(const printOrder of finalOrder){
            
            ticket=ticket+printOrder.price;
            console.log("Pedido: ", printOrder.name, printOrder.caract)
    
            }
        }

        
    }
    localStorage.setItem('carrito',JSON.stringify(finalOrder));
    
}

function printTicket() {

let finalOrderH2=document.createElement('h2');
finalOrderH2.innerHTML="Tu pedido es el siguiente: "
document.body.appendChild(finalOrderH2);
    //Creación vía JS del pedido final.
    let listOrder=document.createElement('ul')
    for(const printTicket of finalOrder){      
        let listTicket=document.createElement('li');
        listTicket.innerHTML=""+printTicket.name+ printTicket.caract
        listOrder.appendChild(listTicket)
    }
    document.body.appendChild(listOrder);
    //impresion vía JS del total final.
    let valorFinalCompra=document.createElement('h2')
    valorFinalCompra.innerHTML="El total de su compra es: $"+ticket;
    valorFinalCompra.style.color='yellow';
    document.body.appendChild(valorFinalCompra);
    console.log("El total de su compra es: $",ticket)
    let agradecimiento=document.createElement('h2');
    agradecimiento.innerHTML="¡Muchas gracias!";
    agradecimiento.style.color='red';
    document.body.appendChild(agradecimiento);
}
//Llamado a funciones
helloToClient();
menu();
takeOrder();
printTicket();


