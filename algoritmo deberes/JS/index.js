algoritmo

/*Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
sumando los dos anteriores.
Proceso:
1. Comenzar con 0 y 1.
2. Cada nuevo valor se calcula: nuevo = anterior + actual.
3. Repetir hasta obtener n términos.
*/

function generarFibonacci (){
    let n = parseInt(prompt("Ingrese la cantidad de términos de la serie de Fibonacci que desea generar:"));
    let fibonacci = [];
    let anterior = 0;
    let actual = 1;
    for (let i = 0; i < n; i++) {
        fibonacci.push(anterior);
        let nuevo = anterior + actual;
        anterior = actual;
        actual = nuevo;
    }
    alert(fibonacci);
}
generarFibonacci();


/*2. Divisores de un número
Descripción:
Mostrar todos los números que dividen exactamente al número ingresado.
Proceso:
1. Recorrer de 1 a n.
2. Si n % i == 0, i es divisor.
Ejemplo:
n = 12
Divisores: 1, 2, 3, 4, 6, 12
Salida:
Divisores: 1, 2, 3, 4, 6, 12*/

function mostrarDivisores() {
    let n = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
    let divisores = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores.push(i);
        }
    }
    alert("Divisores: " + divisores.join(", "));
}
mostrarDivisores();


/*3. Suma de los divisores de un número
Descripción:
Calcular la suma total de los divisores positivos de un número.
Proceso:
1. Encontrar los divisores (como en el ejercicio anterior).
2. Acumularlos en una variable suma.
Ejemplo:
Divisores de 12 = 1 + 2 + 3 + 4 + 6 + 12 = 28
Salida:
Suma de divisores: 28
*/
    
function sumaDivisores() {
    let n = parseInt(prompt("Ingrese un número para calcular la suma de sus divisores:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    alert("Suma de divisores: " + suma);
}
sumaDivisores();


/*4. Verificar si un número es perfecto
Descripción:
Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.
Proceso:
1. Calcular los divisores hasta n - 1.
2. Sumar esos valores.
3. Comparar con n.
Ejemplo:
n = 6
Divisores (sin incluir 6): 1 + 2 + 3 = 6
→ 6 es un número perfecto.
Salida:
6 es un número perfecto.*/

function esNumeroPerfecto() {
    let n = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
    let suma = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    if (suma === n) {
        alert(n + " es un número perfecto.");
    } else {
        alert(n + " no es un número perfecto.");
    }
}
esNumeroPerfecto();


/*5. Verificar si un número es primo
Descripción:
Un número primo solo tiene dos divisores: 1 y él mismo.
Proceso:
1. Recorrer del 2 hasta n-1.
2. Si n % i == 0, no es primo.
Ejemplo:
n = 11
Divisores: 1 y 11 → primo
n = 12
Divisores: 1, 2, 3, 4, 6, 12 → no primo
Salida:
11 es un número primo.
*/

function esNumeroPrimo() {
    let n = parseInt(prompt("Ingrese un número para verificar si es primo:"));
    let esPrimo = true;
    if (n <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        alert(n + " es un número primo.");
    } else {
        alert(n + " no es un número primo.");
    }
}
esNumeroPrimo();


/*6. Invertir los dígitos de un número
Descripción:
Mostrar el número al revés.
Proceso:
1. Tomar el último dígito con % 10.
2. Agregarlo al nuevo número multiplicando por 10 cada vez.
3. Dividir el número original entre 10 hasta llegar a 0.
Ejemplo:
n = 1234
Paso 1: tomar 4 → 4
Paso 2: tomar 3 → 43
Paso 3: tomar 2 → 432
Paso 4: tomar 1 → 4321
salida:
número invertido: 4321*/

function invertirDigitos() {
    let n = parseInt(prompt("Ingrese un número para invertir sus dígitos:"));
    let invertido = 0;
    while (n > 0) {
        let digito = n % 10;
        invertido = invertido * 10 + digito;
        n = Math.floor(n / 10);
    }
    alert("Número invertido: " + invertido);
}
invertirDigitos();


/*7. Contar dígitos de un número
Descripción:
Determinar cuántos dígitos tiene un número entero.
Proceso:
1. Mientras n > 0, dividir entre 10 y aumentar un contador.
Ejemplo:
n = 9876
Iteraciones: 9876 → 987 → 98 → 9 → 0
→ Cantidad de dígitos: 4
Salida:
Cantidad de dígitos: 4*/

function contarDigitos() {
    let n = parseInt(prompt("Ingrese un número para contar sus dígitos:"));
    let contador = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        contador++;
    }
    alert("Cantidad de dígitos: " + contador);
}
contarDigitos();


/*8. Factorial de un número
Descripción:
Calcular el producto de todos los enteros desde 1 hasta n.
Proceso:
1. Iniciar fact = 1.
2. Multiplicar en cada paso fact = fact × i.
3. Repetir hasta i = n.
Ejemplo paso a paso:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida:
5! = 120*/

function calcularFactorial() {
    let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    alert(n + "! = " + fact);
}
calcularFactorial();


/*9. Sumas sucesivas
Descripción:
Realizar sumas sucesivas de un número.
Proceso:
1. Repetir una suma tantas veces como indique el usuario.
2. Acumular el resultado.
Ejemplo:
Número = 3, Veces = 4
3 + 3 + 3 + 3 = 12
Salida:
Resultado = 12
*/
function sumarSucesivas() {

const numero = parseInt(prompt("Ingresa el número a sumar:"));
const veces = parseInt(prompt("Ingresa cuántas veces sumarlo:"));

let resultado = 0;
alert(`Número = ${numero}, Veces = ${veces}`);

for (let i = 0; i < veces; i++) {
    resultado += numero;
}

const operacion = Array(veces).fill(numero).join(" + ");
alert(`${operacion} = ${resultado}`);
alert(`Resultado = ${resultado}`);
}
sumarSucesivas();


/*10. Restas sucesivas
Descripción:
Restar un número de manera repetitiva hasta llegar a 0 o menor.
Proceso:
1. Restar el valor dado en cada ciclo.
2. Contar el número de restas necesarias.
Ejemplo:
Número = 15, Valor = 4
15 − 4 − 4 − 4 = 3
Salida:
Resultado final: 3*/

function restasSucesivas() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let valor = parseInt(prompt("Ingrese el valor a restar:"));
    let contador = 0;
    while (numero > 0) {
        numero -= valor;
        contador++;
    }
    alert("Resultado final: " + numero);
}
restasSucesivas();




//BLOQUE 2 


/*erie de Fibonacci para varios términos
Entrada:
n_valores = [5, 8, 10]
Proceso:
• Para cada n, generar la serie.
• Usar un ciclo que sume los dos anteriores.
Salida:
Fibonacci(5): 0, 1, 1, 2, 3
Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13
Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34*/

function generarFibonacciMultiple() {
    let n_valores = [5, 8, 10];
    for (let n of n_valores) {
        let fibonacci = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        alert("Fibonacci(" + n + "): " + fibonacci.join(", "));
    }
}
generarFibonacciMultiple();


/*2. Divisores de varios números
Entrada:
numeros = [6, 10, 15]
Proceso:
• Recorrer cada número y calcular sus divisores.
Salida:
6 → 1, 2, 3, 6
10 → 1, 2, 5, 10
15 → 1, 3, 5, 15*/

function mostrarDivisoresMultiple() {
    let numeros = [6, 10, 15];
    for (let n of numeros) {
        let divisores = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                divisores.push(i);
            }
        }
        alert(n + " → " + divisores.join(", "));
    }
}
mostrarDivisoresMultiple();


/*3. Suma de divisores de varios números
Entrada:
numeros = [6, 12, 28]
Proceso:
• Calcular los divisores y sumarlos para cada número.
Salida:
6 → 12
12 → 28
28 → 56
*/

function sumarDivisoresMultiple() {
    let numeros = [6, 12, 28];
    for (let n of numeros) {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                suma += i;
            }
        }
        alert(n + " → " + suma);
    }
}
sumarDivisoresMultiple();


/*4. Números perfectos en una lista
Entrada:
numeros = [6, 10, 28, 30]
Proceso:
• Comparar cada número con la suma de sus divisores.
Salida:
Números perfectos: 6, 28*/

function encontrarNumerosPerfectos() {
    let numeros = [6, 10, 28, 30];
    let perfectos = [];
    for (let n of numeros) {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                suma += i;
            }
        }
        if (suma === n) {
            perfectos.push(n);
        }
    }
    alert("Números perfectos: " + perfectos.join(", "));
}
encontrarNumerosPerfectos();


/*5. Números primos en una lista
Entrada:
numeros = [5, 6, 7, 8, 11]
Proceso:
• Verificar si cada número solo tiene dos divisores.
Salida:
Primos: 5, 7, 11*/
function encontrarNumerosPrimos() {
    let numeros = [5, 6, 7, 8, 11];
    let primos = [];   
    for (let n of numeros) {
        let esPrimo = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(n);
        }
    }
    alert("Primos: " + primos.join(", "));
}
encontrarNumerosPrimos();


/*6. Invertir varios números
Entrada:
numeros = [123, 456, 780]
Proceso:
• Extraer los dígitos en orden inverso usando ciclos.
Salida:
123 → 321
456 → 654
780 → 87*/

function invertirVariosNumeros() {
    let numeros = [123, 456, 780];
    for (let n of numeros) {
        let invertido = 0;
        while (n > 0) {
            invertido = invertido * 10 + (n % 10);
            n = Math.floor(n / 10);
        }
        alert(n + " → " + invertido);
    }
}
invertirVariosNumeros();


/*7. Contar dígitos de varios números
Entrada:
numeros = [45, 678, 12345]
Proceso:
• Dividir cada número entre 10 y contar iteraciones.
Salida:
45 → 2 dígitos
678 → 3 dígitos
12345 → 5 dígitos*/

function contarDigitosVarios() {
    let numeros = [45, 678, 12345];
    for (let n of numeros) {
        let contador = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            contador++;
        }
        alert(n + " → " + contador + " dígitos");
    }
}
contarDigitosVarios();
/*8. Factoriales de varios números
Entrada:
numeros = [3, 4, 5]
Proceso:
• Calcular el factorial de cada número.
Salida:
3! → 6
4! → 24
5! → 120
*/

function calcularFactoriales() {
    let numeros = [3, 4, 5];
    for (let n of numeros) {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        alert(n + "! → " + factorial);
    }
}
calcularFactoriales();


/*9. Sumas sucesivas en una lista
Entrada:
numeros = [2, 3, 4]
veces = 4
Proceso:
• Repetir la suma de cada número veces veces.
Salida:
2 × 4 = 8
3 × 4 = 12
4 × 4 = 16
*/

function sumarSucesivas() {
    let numeros = [2, 3, 4];
    let veces = 4;
    for (let n of numeros) {
        let resultado = 0;
        for (let i = 0; i < veces; i++) {
            resultado += n;
        }
        alert(n + " × " + veces + " = " + resultado);
    }
}
sumarSucesivas();



/*10. Restas sucesivas en una lista
Entrada:
numeros = [15, 22, 30]
valor_resta = 4
Proceso:
• Restar repetidamente hasta que el resultado sea menor que el valor restado.
Salida:
15 → 3
22 → 2
30 → 2*/
function restasSucesivasVarios() {
    let numeros = [15, 22, 30];
    let valor_resta = 4;
    for (let n of numeros) {
        let resultado = n;
        let contador = 0;
        while (resultado >= valor_resta) {
            resultado -= valor_resta;
            contador++;
        }
        alert(n + " → " + contador);
    }
}
restasSucesivasVarios();


