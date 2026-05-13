//importaciones

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import fs from 'fs'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const wordlist: string[] = require('an-array-of-spanish-words')
const wordlistES: string[] = require('an-array-of-english-words')

//declaracion de variables
let a=1
const yarg = yargs(hideBin(process.argv)).option("String",{alias:"s",type:"string",},).parseSync()


let clave_con_espacios= yarg.String?.toLowerCase()

let clave_sin_espacios= clave_con_espacios!.split(" ").join("")

let codigo_resultante=""


const alfabeto= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


//declaracion de funciones

function getIndice(letra:String):number{let i=0
    for(let caracter of alfabeto){
        if(caracter===letra){return i}; ++i
    }

    return 0
}


function desencriptar(){ let z=0
    for(let letra of clave_con_espacios!){ if(letra===" "){codigo_resultante+=" "}
   if(letra!==" "&& (getIndice(letra)+a)<25){codigo_resultante+= alfabeto[getIndice(letra)!+a]}
   else if(letra!==" " && (getIndice(letra)+a)>=25){codigo_resultante+=alfabeto[a+getIndice(letra)-26 ]}
}


let codigo_array =codigo_resultante.split(" ")
while(z<codigo_array.length){
    if(wordlist.includes(codigo_array[z]) || wordlistES.includes(codigo_array[z])){console.log(`el resultado para ${a} saltos de línea es:`,codigo_resultante); break}
    ++z}
codigo_resultante=""
}

//ejecución


while(a<=26){
    desencriptar();
    ++a}


    //esto solo sirve para alfabeto en inglés
