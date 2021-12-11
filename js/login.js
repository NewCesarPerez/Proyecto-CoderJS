const inputName=document.getElementById('userId');
const inputPass=document.getElementById('passId');
const login=document.getElementById('btLogin')
const user="rocio"
const password=123456;


login.addEventListener('click',funcLogin);
function funcLogin(){
    event.preventDefault();
    const inputNameValue=inputName.value.toLowerCase();
    const inputPassValue=inputPass.value;

    if(inputNameValue===user&&inputPassValue==password){
        window.location.href ="carrito.html"

    }
    else{
        const mensaje=document.createElement('div')
        mensaje.innerHTML=`<h3>Usuario o clave incorrecto</h3`;
        const loginFooter=document.getElementById('card-footer');
        loginFooter.appendChild(mensaje)
    
        
    }

}

