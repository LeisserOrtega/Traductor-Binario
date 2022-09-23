// Convertir BINARIO a Texto, full Leisser Ortega. 
// 01001000 01101111 01101100 01100001  - Hola en binario
// 0100100001101111011011000110000100101100001000000110001101101111011011010110111100100000011001010111001101110100011000010111001100111111
// comentario random 
diccionarioPalabras = []

const pos0 = 128
const pos1 = 64
const pos2 = 32
const pos3 = 16
const pos4 = 8
const pos5 = 4
const pos6 = 2
const pos7 = 1
let palabraFinal = ''
let letraEnBinario = ''

function binarioATexto (){
    let palabraEnBinarioHtml = document.getElementById('textobinario').value
    if(palabraEnBinarioHtml === ''){
        
    }
    else{
    const palabraEnBinario = palabraEnBinarioHtml.replace(/ /g,'')
    let binarioEnArreglo = []
    let sumador =0
    let contador 
    binarioEnArreglo = palabraEnBinario.match(/.{1,8}/g);
    let arregloDeLetras = []
    
    binarioEnArreglo.forEach(letra => {
        let total =0
        arregloDeLetras = letra.match(/.{1,1}/g)
        for(let i=0; i<arregloDeLetras.length; i++){
            if(arregloDeLetras[i] === '1'){

                if(i===0){
                    sumador = pos0
                }
                if(i===1 ){
                    sumador = pos1
                }
                if(i===2){
                    sumador = pos2
                }
                if(i===3 ){
                    sumador = pos3
                }
                if(i===4){
                    sumador = pos4
                }
                if(i===5 ){
                    sumador = pos5
                }
                if(i===6){
                    sumador = pos6
                }
                if(i===7 ){
                    sumador = pos7
                }

                total = total + sumador
               
            }
         
        }
            // let palabraFinal = palabraFinal + diccionarioPalabras[total]
						// palabraFinal = palabraFinal + diccionarioPalabras[total]
                       
                        palabraFinal = palabraFinal + String.fromCharCode(total)
                       
            // console.log(palabraFinal)
            // console.log(`El numero en la posicion ${i} es ${arregloDeLetras[i]}`)
        // console.log(arregloDeLetras)

    })
    resultado = document.getElementById('resultado')
    resultado.innerHTML = palabraFinal
    palabraFinal = ' '
}
}



function textoABinario (){
    let palabraEnBinarioHtml = document.getElementById('textobinario').value
    if(palabraEnBinarioHtml === ''){
    }
    else{

  
    let letraEnBinario = ''
    let maskedBinary = ''
    let palabraFinal = ''
    const palabraEnBinario = palabraEnBinarioHtml
    let binarioEnArreglo = []
    let sumador =0
    let contador 
    binarioEnArreglo = palabraEnBinario.match(/.{1,1}/g);
    let arregloDeLetras = []
    binarioEnArreglo.forEach(letra => {
        
        letraEnBinario = letra.charCodeAt(0).toString(2)
      	arregloDeLetras = letraEnBinario
        // console.log('Tu letra en Binario es: ' + letraEnBinario)
      	maskedBinary = letraEnBinario.length < 8 ? letraEnBinario.padStart(8, '0') : letraEnBinario
      	palabraFinal = palabraFinal + ' ' + maskedBinary
      	
    })
    resultado = document.getElementById('resultado')
    resultado.innerHTML = palabraFinal
    palabraFinal = ' '
}
}


function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }