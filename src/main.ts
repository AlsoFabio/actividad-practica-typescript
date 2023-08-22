import {
    calcular,
    paresInpares,
    tablaMultiplicar,
    fibonacci,
    convertidorTemperatura,
    contadorPalabras
} from "./funciones";

document.addEventListener("DOMContentLoaded", () => {//Calculadora simple
    const form = document.getElementById("calcularForm") as HTMLFormElement;
    const num1Input = document.getElementById("num1Calcu") as HTMLInputElement;
    const num2Input = document.getElementById("num2Calcu") as HTMLInputElement;
    const selectInput = document.getElementById("selectCalcu") as HTMLSelectElement;
    const resultadoCalcu = document.getElementById("resultadoCalcu") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);
        const simbol = selectInput.value;

        resultadoCalcu.innerText = calcular(num1, num2, simbol).toString();
    });
});

document.addEventListener("DOMContentLoaded", () => {//Contador Pares Impares
    const form = document.getElementById("formParesImpares") as HTMLFormElement;
    const min = document.getElementById("minParesImpares") as HTMLInputElement;
    const max = document.getElementById("maxParesImpares") as HTMLInputElement;
    const resultadoParesImpares = document.getElementById("resultadoParesImpares") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const minimo = parseInt(min.value);
        const maximo = parseInt(max.value);

        resultadoParesImpares.innerText = paresInpares(minimo, maximo).toString();
    });
});

document.addEventListener("DOMContentLoaded", () => {//Tabla de Multiplicar
    const form = document.getElementById("formTabla") as HTMLFormElement;
    const numero = document.getElementById("numTabla") as HTMLInputElement;
    const resultado = document.getElementById("resultadoTabla") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const num = parseInt(numero.value);

        resultado.innerHTML = tablaMultiplicar(num);
    });
});

document.addEventListener("DOMContentLoaded", () => {//Fibonacci
    const form = document.getElementById("formFibo") as HTMLFormElement;
    const numero = document.getElementById("numFibo") as HTMLInputElement;
    const resultado = document.getElementById("resultadoFibo") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const num = parseInt(numero.value);
        resultado.innerText = fibonacci(num);
    });
});

document.addEventListener("DOMContentLoaded", () => {//Convertidor
    const form = document.getElementById("formGrados") as HTMLFormElement;
    const numero = document.getElementById("numGrados") as HTMLInputElement;
    const select = document.getElementById("selectGrados") as HTMLSelectElement;
    const resultado = document.getElementById("resultadoGrados") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const num = parseInt(numero.value);
        const grados = parseInt(select.value);
        resultado.innerText = convertidorTemperatura(num, grados).toString();
    });
});

document.addEventListener("DOMContentLoaded", () => {//Contador de Palabras
    const form = document.getElementById("formPalabra") as HTMLFormElement;
    const texto = document.getElementById("textoPalabra") as HTMLInputElement;
    const resultado = document.getElementById("resultadoPalabra") as HTMLParagraphElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const palabra = texto.value;
        resultado.innerText = contadorPalabras(palabra);
    });
});