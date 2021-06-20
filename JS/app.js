

const pi =  document.getElementById('pad');

pi.addEventListener('click', (e) =>{

    if(e.target.classList.contains('aniadir')){
        const producto = e.target.parentElement.firstElementChild;
       
       //console.log(producto);
    }
    const agregar = {
        producto: e.target.parentElement.firstElementChild
    
    };
   agregarCarrito(agregar);

});

let arregloItems = [];

function agregarCarrito(item){
    arregloItems.push(item);
    //console.log(arregloItems);
  //  return arregloItems;
  document.getElementById('lista-carrito').innerHTML += '<tbody><td>'+arregloItems.producto+'</td></tbody>'
}














 function mostrarFormulario(){
    document.getElementById('lista-carrito').style.display = 'block';
   
}
function  ocultarFormulario(){
    document.getElementById('lista-carrito').style.display= 'none';
}
 function mostrar_ocultar(){
     let formulario = document.getElementById('lista-carrito')
     if(formulario.style.display == "none"){
         mostrarFormulario();
     }
     else{
         ocultarFormulario();
     }
    }


