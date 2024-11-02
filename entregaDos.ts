import * as rl from "readline-sync";

const arrNumeros: number[] = [4, 7, 9, 3, 1, 45, 67, 3];

let maximo:number=0; 

for (let i = 0; i < arrNumeros.length; i++) {
    if(arrNumeros[i]> maximo){
    maximo = arrNumeros[i];
}
}
console.log(`el numero mayor es :${maximo}`)
if(maximo %2 ===0) {
    console.log(`${maximo}es par`);
} else {
console.log(`${maximo}es impar`);
    }