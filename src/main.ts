console.log("----------------------------------------------------------------");

console.log("Calculadora simple");


const calcular = (num1: number, num2: number, simbol: string) => {

  let resultado: any;

  if (simbol === "+") {
    resultado = num1 + num2
  }
  if (simbol === "-") {
    resultado = num1 - num2
  }
  if (simbol === "*") {
    resultado = num1 * num2
  }
  if (simbol === "/") {
    resultado = num1 / num2
  }
  return console.log(`${num1} ${simbol} ${num2} = ${resultado}`);
  
}

console.log(calcular(10, 20, '+'));

console.log("----------------------------------------------------------------");

console.log("Contador de números pares e inpares");

const paresInpares = (min: number, max: number) => {
  let pares: number = 0;
  let inpares: number = 0;

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      pares++;
    }
    else {
      inpares++;
    }
  }
  console.log(`entre el rango ${min} y ${max} hay ${pares} números pares y ${inpares} números inpares`);
  return
}
    //rangos a elección
let rangoMin:number = 10;
let rangoMax:number = 20;

console.log(paresInpares(rangoMin, rangoMax));

console.log("----------------------------------------------------------------");

console.log("Tabla de multiplicar");

const tablaMultiplicar = (num: number) => {

  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

let numTabla:number= 7;//elija el numero del cual quiere generar la tabla

console.log(tablaMultiplicar(numTabla));

console.log("----------------------------------------------------------------");

console.log("Fibonacci");

const fibonacci = (num: number) => {
  let array = [];

  if (num >= 1) {
    array.push(0);
  }
  if (num >= 2) {
    array.push(1);
  }

  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  console.log(array.join('').slice(0, num));
}
  let N:number = 12; //modifique al valor deseado
fibonacci(N);

console.log("----------------------------------------------------------------");

console.log("Convertidor de temperaturas");

const convertidorTemperatura = (num: number, grado: string) => {
  if (grado === 'Celsius') {
    return console.log((num - 32) * (5 / 9));

  }
  if (grado === 'Fahrenheit') {
    return console.log((num * (9 / 5)) + 32);
  }
}

let grados: number = 0;//eliga los grado a eleccion
let temperatura: string = "Fahrenheit";// eliga entre los grados "Celsius" ö los "Fahrenheit"

convertidorTemperatura(grados, temperatura);

console.log("----------------------------------------------------------------");

console.log("Contador de palabras");

const contadorPalabras = (oracion: string) => {

  const expreg = oracion.replace(/[^\w\s]/g, "");
  const arreglo = expreg.split(/\s+/);
  console.log(arreglo);

  console.log(`Tú oración tiene ${arreglo.length} palabras`);
}
const oracion: string = "Hola. Alguna vez nos hemos vimos antes?";//introduce tu oración

contadorPalabras(oracion);