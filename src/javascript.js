
const wrapper = document.getElementById("wrapper");
var contador = 0;



function avanca() {

wrapper.dataset.configuration ++;

contador ++;

if (contador > 13) {
    wrapper.dataset.configuration = 0;
    contador = 0;
  } 

}

function recomeca(){

    wrapper.dataset.configuration = 0;
    contador = 0;

}
