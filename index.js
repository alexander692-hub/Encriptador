function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const imagen = document.getElementById("imagen");
  
    //  verificar si el texto contiene solo letras minúsculas
    const soloLetrasMinusculas = /^[a-z\s]+$/;
  
    if (soloLetrasMinusculas.test(texto)) {
      const textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
  
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito: " + textoCifrado;
      parrafo.textContent = "";
      imagen.src = "./img/encriptar2.png";
    } else {
      imagen.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("¡Lo siento!", "Debes ingresar solo letras minúsculas y espacios.", "error");
    }
  }
  
  function desencriptar() {
    const textoCifrado = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const imagen = document.getElementById("imagen");
  
    
    const textoDesencriptado = textoCifrado
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (textoDesencriptado.length !== 0) {
      document.getElementById("texto").value = textoDesencriptado;
      tituloMensaje.textContent = "Texto desencriptado con éxito : " + textoDesencriptado;
      parrafo.textContent = "";
      imagen.src = "./img/desencriptado.jpeg";
    } else {
      imagen.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("¡Lo siento!", "El texto encriptado no es válido.", "error");
    }
  }
  