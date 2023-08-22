type tipoCalc = (num1: number, num2: number, symbol: string) => number;

export const calcular: tipoCalc = (num1, num2, simbol) => {
  let resultado: number = 0;

  if (simbol === "1") {
    simbol = "+";
    resultado = num1 + num2
  }
  if (simbol === "2") {
    simbol = "-";
    resultado = num1 - num2
  }
  if (simbol === "3") {
    simbol = "*";
    resultado = num1 * num2
  }
  if (simbol === "4") {
    simbol = "/";
    resultado = num1 / num2
  }
  return resultado;
}

export const paresInpares = (min: number, max: number): string => {
  let pares: number = 0;
  let inpares: number = 0;
  let resultado: string;

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      pares++;
    }
    else {
      inpares++;
    }
  }
  resultado = `entre el rango ${min} y ${max} hay ${pares} números pares y ${inpares} números inpares`;
  return resultado
}

export const tablaMultiplicar = (num: number): string => {
  const lista = document.createElement("ul");
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${num} x ${i} = ${num * i} `;
    lista.appendChild(listItem);
  }
  return lista.innerHTML;
}

export const fibonacci = (num: number): string => {
  let array = [];
  let resultado: string = "";

  if (num >= 1) {
    array.push(0);
  }
  if (num >= 2) {
    array.push(1);
  }

  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  resultado = array.join('').slice(0, num);

  return resultado
}

export const convertidorTemperatura = (num: number, grado: number): string => {
  let resultado: string = "";
  if (grado === 1) {
    resultado = `${num}° Fahrenheit a Celsius es =${((num - 32) * (5 / 9)).toFixed(2)}°`;
  }
  if (grado === 2) {
    resultado = `${num}° Celsius a Fahrenheit es =${((num * (9 / 5)) + 32).toFixed(2)}°`;
  }
  return resultado;
}

export const contadorPalabras = (oracion: string): string => {
  let resultado: string = "";
  if (oracion === ""){
    resultado = `Tú oración no tiene palabras`;
    return resultado
  }
  const expreg = oracion.replace(/[^\w\s]/g, "");
  const arreglo = expreg.split(/\s+/);

  resultado = `Tú oración tiene ${arreglo.length} palabras`;
  return resultado
}
