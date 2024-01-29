// Array
const array = ["João", "Maria", "José"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// Adicionando elemento ao final do array
const listaNomes = ["João", "Maria"];

listaNomes.push("Beatriz");

console.log(listaNomes);

// Remover um elemento do array
listaNomes.pop(); // pop remove o último elemento do array

console.log(listaNomes);

// Remover um elemento específico do array
const arrayNomes = ["João", "Maria", "José"];

arrayNomes.splice(1,1);

console.log(arrayNomes);

// Alterando um elemento do array
const arrayNomes2 = ["João", "Maria", "José"];

arrayNomes2[0] = "Pedro";
// outra forma = arrayNomes2.splice(0,1,"Pedro");

console.log(arrayNomes2);

// Percorrendo o array com loop for
const listNome = ["Jenifer", "Maria", "José"];

for (let i = 0; i < listNome.length; i++) {
    console.log(listNome[i]);
}

// Percorrer o array com loop forEach
const arrayList = ["Jenifer", "Márcio", "Ingrid"];

arrayList.forEach((nome) => {
    console.log(nome);
});

// Concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];

const juncaoNumeros = numeros.concat(outrosNumeros);

console.log(juncaoNumeros);

// Shift - remove o primeiro elemento do array
const nomes = ["João", "Maria", "José"];

const primeiroNome = nomes.shift();

console.log(nomes);

// Unshift - adiciona um ou mais elementos ao início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(5);

console.log(numerosTeste);

// indexOf
const frutas2 = ["maçã", "banana", "morango", "uva"];

console.log(frutas2.indexOf("morango"));
console.log(frutas2.indexOf("laranja"));

// lastIndexOf
const letras = ["a", "b", "c", "d", "e"];

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

// Slice
const testandoSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testandoSlice.slice(2, 4);

console.log(testandoSlice);
console.log(subArray);

// Buscando um array via slice numa posição inexistente
const subArray3 = testandoSlice.slice(10, 15);

console.log(subArray3);

// Includes
const frutasDona = ["maçã", "banana", "laranja"];

const temMaca = frutasDona.includes("maçã");

const temMelancia = frutasDona.includes("melância");

console.log(temMaca);
console.log(temMelancia);

// Includes a partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];

const temApos2 = letrasNovo.includes("a", 2);

console.log(temApos2);

// Reverse
const testandoReverse = [1, 2, 3, 4, 5];

testandoReverse.reverse();

console.log(testandoReverse);

// Spread
const testandoSpread = ["a", "b", "c", "d", "e"];

const novaLetras = [...testandoSpread].reverse();

console.log(testandoSpread);
console.log(novaLetras);

// Uppercase
const fraseA = "Boas vindas!";

const upper = fraseA.toUpperCase();

console.log(upper);

// Lowercase
const fraseB = "QUE LEGAL!";

const lower = fraseB.toLowerCase();

console.log(lower);