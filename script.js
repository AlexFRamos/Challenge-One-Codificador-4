const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

const entradaMensaje = document.querySelector(".area");
const salidaResultado = document.querySelector(".area2");

const btnCopiar = document.querySelector(".copiar");
const btnEscuchar = document.querySelector(".sonido");
const btnBorrar = document.querySelector(".borrar");

const divParrafo = document.querySelector(".parrafo");

btnCopiar.style.display = "none";
btnEscuchar.style.display = "none";
btnBorrar.style.display = "none";
entradaMensaje.focus();

function validarMensaje(){
    let mensaje = entradaMensaje.value;
    let lestrasValidas = "abcdefghijklmnñopqrstuvwxyz,.-/* ";
    let mensajeError =  "";

    for(let letra of mensaje){
        if(!lestrasValidas.includes(letra)){
            alert(`La letras ${letra} no es valida`);
            reiniciarFun();
            entradaMensaje.focus();
        }
        
    }
    if(mensajeError.length === 0){
        return true;
    }
    return false;
}

function encriptarFun(){
    if(!validarMensaje())return;
    
    let mensaje = entradaMensaje.value;
    let mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    salidaResultado.style.backgroundImage = "none";
    salidaResultado.value = mensajeEncriptado;

    btnCopiar.style.display = "";
    btnEscuchar.style.display = "";
    btnBorrar.style.display = "";
    divParrafo.style.display = "none";

}

function desencriptarFun(){
    if(!validarMensaje())return;
    
    let mensajeEncriptado=entradaMensaje.value;
    let mensaje= mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "aa")
    .replaceAll("ufat", "u");

    salidaResultado.value = mensaje;

    salidaResultado.style.backgroundImage = "none";
    btnCopiar.style.display = "";
    btnEscuchar.style.display = "";
    btnBorrar.style.display = "";
    divParrafo.style.display = "none";
    entradaMensaje.focus();

}

function copiarFun() {
    let mensajeEncriptado = salidaResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);

    reiniciarFun();
    entradaMensaje.focus();
}

function escucharFun() {
    let mensajeEncriptado = salidaResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

function borrarFun(){
    reiniciarFun();
    entradaMensaje.focus();
}

function reiniciarFun(){
    salidaResultado.style.backgroundImage = "";
    entradaMensaje.value = "";
    salidaResultado.value = "";
    btnCopiar.style.display = "none";
    btnEscuchar.style.display = "none";
    btnBorrar.style.display = "none";
    divParrafo.style.display = "";
}

btnEncriptar.onclick = encriptarFun;
btnDesencriptar.onclick = desencriptarFun;
btnCopiar.onclick = copiarFun;
btnEscuchar.onclick = escucharFun;
btnBorrar.onclick = borrarFun;