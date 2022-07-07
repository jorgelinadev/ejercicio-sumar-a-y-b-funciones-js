//alert('Mi archivo está bien linkeado');

//sumar(a, b)
//Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

//sumar(2, 3) // 5
//sumar(1.2, 3.4) // 4.6
//sumar(3, -5) // -2

const a = Number(prompt('Ingresa el primer número'));
const b = Number(prompt('Ingresa el segundo número'));

const suma = (a,b) => {
    return a + b;
};
console.log(suma(a,b));

const resultadoDeLaSuma = suma(a,b);

console.log(`El resultado de la suma de ${a} +  ${b}   es:  ${resultadoDeLaSuma}`);

alert(`El resultado de la suma de ${a} + ${b}es: ${resultadoDeLaSuma}`);
