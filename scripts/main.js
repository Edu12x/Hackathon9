let ejercicio = parseInt(prompt("ingrese el ejercicio del 1 al 5"));

switch (ejercicio) {
  case 1:
    EJercicio1();
    break;
  case 2:
    EJercicio2();
    break;
  case 3:
    Ejercicio3();
    break;
  case 4:
    Ejercicio4();
    break;
  case 5:
    Ejercicio5();
    break;
  case 6:
    EJercicio6();
    break;
  case 7:
    EJercicio7();
    break;
  case 8:
    Ejercicio8();
    break;
  case 9:
    Ejercicio9();
    break;
  case 10:
    Ejercicio10();
    break;
  default:
    alert("Elija opcion correcta del 1 al 10");
    break;
}

//Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.//

function EJercicio1() {
  let num1 = parseInt(prompt("ingrese el 1er numero"));
  let num2 = parseInt(prompt("ingrese el 2do numero"));
  function suma(a, b) {
    return a + b;
  }
  alert(`la suma de los 2 numeros es ${suma(num1, num2)} `);
}

//Un estudiante realiza 4 exámenes, calcular el promedio de estos.

function EJercicio2() {
  let num1 = parseInt(prompt("ingrese el 1er examen"));
  let num2 = parseInt(prompt("ingrese el 2do examen"));
  let num3 = parseInt(prompt("ingrese el 3er examen"));
  let num4 = parseInt(prompt("ingrese el 4to examen"));
  function promedio(a, b, c, d) {
    return (a + b + c + d) / 4;
  }
  alert(`el promedio de los examenes es ${promedio(num1, num2, num3, num4)} `);
}

/**
 * 3. Calcular el área de un rectángulo
 */

function Ejercicio3() {
  let base = parseInt(prompt("ingrese la base del rectangulo"));
  let altura = parseInt(prompt("ingrese la altura del rectangulo"));
  function areaRectangulo(a, b) {
    return a * b;
  }
  alert(`el area de un triangulo es ${areaRectangulo(base, altura)} `);
}

/**
 * 4. Calcular el área de un triángulo
 */

function Ejercicio4() {
  let base = parseInt(prompt("ingrese la base del triangulo"));
  let altura = parseInt(prompt("ingrese la altura del triangulo"));
  function areaTriangulo(a, b) {
    return a * b;
  }
  alert(`el area de un triangulo es ${areaTriangulo(base, altura)} `);
}

/**
 * 5. Calcular el área de una circunferencia
 */

function Ejercicio5() {
  let phi = 3.1415;
  let radio = parseInt(prompt("Ingrese el radio"));
  function areaCirculo(a) {
    return phi * a ** 2;
  }
  alert(`el area del circulo es ${areaCirculo(radio)} `);
}

/**
 * 6. Determinar el sueldo semanal de un trabajador basándose en sus horas
        trabajadas y su salario de hora hombre
 */
function EJercicio6() {
  let horasTrabajadas = parseInt(prompt("ingrese las horas trabajadas"));
  let salarioHora = parseInt(prompt("ingrese el Salario por hora"));

  function sueldoSemanal(a, b) {
    return a * b;
  }
  alert(
    `el sueldo semanal es  ${sueldoSemanal(horasTrabajadas, salarioHora)} `
  );
}

/**
 * 7 Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
resolver el problema, determinando cuantas pulgadas debe pedir con base en
los metros que requiere. Represéntelo mediante el diagrama de flujo y el
pseudocódigo (1 pulgada = 0.0254 m).
 */

function EJercicio7() {
  let metro = parseInt(prompt("ingrese la cantidad de metros"));
  let pulgada = 0.0254;

  function convertirMetroaPulgadas(a) {
    return a * pulgada;
  }
  alert(
    `la cantidad de puldadas requeridas es  ${convertirMetroaPulgadas(metro)} `
  );
}

/**
 * 8 Una empresa importadora desea determinar cuántos dólares puede adquirir
con equis cantidad de dinero peruano
 */

function Ejercicio8() {
  let soles = parseInt(prompt("ingrese la cantidad de Soles a cambiar"));
  let tipoCambio = 3.5505;
  function convertirSolesaDolares(a) {
    return a / tipoCambio;
  }
  alert(`la cantidad de dolares es  ${convertirSolesaDolares(soles)} `);
}

/**
 * 9 Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
les pregunta el año en que nacieron
 */

function Ejercicio9() {
  let annoNacimiento = parseInt(
    prompt("ingrese el año de nacimiento de la persona")
  );
  let today = new Date();
  let year = today.getFullYear();
  function obtenerEdad(a) {
    return year - a;
  }
  alert(`La edad de la persona es  ${obtenerEdad(annoNacimiento)} `);
}

// 10 Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
//edad de la persona de menor edad

function Ejercicio10() {
  var persons = [
    { nombre: "Bruno Sánchez ", edad: 21 },
    { nombre: "Wendy Flores ", edad: 22 },
    { nombre: "Maritza Escajadillo ", edad: 15 },
  ];
  var keyMenor = 0;
  var edadMenor = 0;
  console.log("-----     Respuesta 10     -----");
  for (let index = 0; index < persons.length; index++) {
    if (index == 0) {
      edadMenor = persons[index].edad;
    } else {
      if (persons[index].edad < edadMenor) {
        edadMenor = persons[index].edad;
        keyMenor = index;
      }
    }
  }
  console.log(
    `${persons[keyMenor].nombre} con ${persons[keyMenor].edad} es el de menor edad `
  );
}
