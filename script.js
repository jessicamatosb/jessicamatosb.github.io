//PAGINA INICIAL//
function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   arrTexto.forEach((Letra, i)=>{
    setTimeout(() => {
        elemento.innerHTML += letra;
    }, 75 * i);
    });
}

const titulo = document.querySelector('.texto-ola');
ativaLetra(titulo);


