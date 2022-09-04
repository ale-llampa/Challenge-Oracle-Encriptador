if (document.querySelector(".ingresa-texto").value == ""){
    ocultarCajaEncriptado();
    mostrarFondo();
    document.querySelector(".ingresa-texto").focus();
} else {
    mostrarCajaEncriptado();
    ocultarFondo();
}

var botonEncriptar = document.querySelector(".btn-primario");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.addEventListener("click",function(){
    var textoOriginal = document.querySelector(".ingresa-texto").value;
    if (validar(textoOriginal) !== false ) {
        ocultarFondo();
        mostrarCajaEncriptado();
        encriptarTexto(textoOriginal);
    }
}
);

botonDesencriptar.addEventListener("click", function(){
    var textoOriginal = document.querySelector(".ingresa-texto").value;
    if (validar(textoOriginal) !== false ) {
        ocultarFondo();
        mostrarCajaEncriptado();
        desencriptarTexto(textoOriginal);
    }
}
);

//Copia el texto encriptado al portapapeles y a la caja de ingresar texto
botonCopiar.addEventListener("click", function(){
    let copiaTexto = document.querySelector(".texto-encriptado");
    let pegarTexto = document.querySelector(".ingresa-texto");
    copiaTexto.select();
    document.execCommand("copy");
    pegarTexto.value = copiaTexto.value;
    
})


//Vuelve a escribir el mensaje original al obtener el Foco el textbox
let ingresaTexto = document.querySelector(".ingresa-texto");
let requisitos = document.querySelector(".requisitos");
ingresaTexto.addEventListener("focus",function() {
    requisitos.innerHTML = "ⓘ Solo letras minúsculas y sin acentos";
})


//Validando el texto ingresado, acentos mayúsculas y campo vacío
function validar(texto) {
    let tagRequisitos = document.querySelector(".requisitos");
    let acentos = ["á","é","í","ó","ú"];
    texto = texto.replace(/\s+/g, '');

    if (texto == "") {
        tagRequisitos.innerHTML = "ⓘ Ingresa algún texto";
        limpiarEncriptado();
        mostrarFondo();
        ocultarCajaEncriptado();
        return false;
    }

    for (let i = 0; i < texto.length; i++) {
        if (acentos.indexOf(texto.charAt(i)) != -1) {
            tagRequisitos.innerHTML = "ⓘ Ingresa texto sin acentos";
            limpiarEncriptado();
            return false;
        }
        
        if (texto[i] == texto[i].toUpperCase()) {
            tagRequisitos.innerHTML = "ⓘ Ingresa texto en minúsculas y sin caracteres especiales";
            limpiarEncriptado();
            return false;
        }
    }
}


//funciones de encriptar y desencriptar texto
function encriptarTexto(texto) {
    let vocales = ["e","i","a","o","u"];
    let claves = ["enter","imes","ai","ober","ufat"];
    let textoEncriptado = document.querySelector(".texto-encriptado");
    for (let i = 0; i < vocales.length; i++) {
        texto = texto.replaceAll(vocales[i],claves[i]);
    }
    textoEncriptado.value = texto;
}

function desencriptarTexto(texto) {
    let vocales = ["e","i","a","o","u"];
    let claves = ["enter","imes","ai","ober","ufat"];
    let textoEncriptado = document.querySelector(".texto-encriptado");
    for (let i = 0; i < vocales.length; i++) {
        texto = texto.replaceAll(claves[i],vocales[i]);
    }
    textoEncriptado.value = texto;
}

//Deja el textarea de texto Encriptado vacio
function limpiarEncriptado(){
    document.querySelector(".texto-encriptado").value="";
}


//Mostrar y Ocultar, caja de texto encriptado y fondo de campo vacio
function mostrarFondo(){
    document.querySelector(".img-fondo").classList.remove("invisible");
    document.querySelector(".no-texto").classList.remove("invisible");
}

function ocultarFondo(){
    document.querySelector(".img-fondo").classList.add("invisible");
    document.querySelector(".no-texto").classList.add("invisible");
}

function mostrarCajaEncriptado(){
    document.querySelector(".texto-encriptado").classList.remove("invisible");
    document.querySelector(".btn-copiar").classList.remove("invisible");
}

function ocultarCajaEncriptado(){
    document.querySelector(".texto-encriptado").classList.add("invisible");
    document.querySelector(".btn-copiar").classList.add("invisible");
}