let figura = prompt("Eliga la opción del área que desea calcular:\n 1)Triángulo\n 2)Paralelogramo\n 3)Rectángulo\n 4)Cuadrado,\n 5)Rombo\n 6)Cometa\n 7)Trapecio\n 8)Círculo\n");

let base;
let altura;
let radio;
let dMenor;
let DMayor;
let baseMayor;
let lado;

switch (figura) {
    case "1":
        base = prompt("¿Cuánto mide la base en cm? ")
        altura = prompt("¿Cuánto mide la altura en cm? ")
        document.write(`El área del Triangulo es: ${base * altura / 2} cm^2`)
        break

    case "2":
        base = prompt("¿Cuánto mide la base en cm? ")
        altura = prompt("¿Cuánto mide la altura en cm? ")
        document.write(`El área del Paralelogramo es: ${base * altura} cm^2`)
        break

    case "3":
        base = prompt("¿Cuánto mide la base en cm? ")
        altura = prompt("¿Cuánto mide la altura en cm? ")
        document.write(`El área del Rectangulo es: ${base * altura} cm^2`)
        break

    case "4":
        lado = prompt("Cuánto mide el lado en cm? ")
        document.write(`El área del Cuadrado es: ${lado * lado} cm^2`)
        break

    case "5":
        DMayor = prompt("¿Cuánto mide la diagonal mayor en cm? ")
        dMenor = prompt("¿Cuánto mide la diagonal menor en cm? ")
        document.write(`El área del Rombo es: ${DMayor * dMenor / 2} cm^2`)
        break

    case "6":
        DMayor = prompt("¿Cuánto mide la diagonal mayor en cm? ")
        dMenor = prompt("¿Cuánto mide la diagonal menor en cm? ")
        document.write(`El área de la Cometa es: ${DMayor * dMenor / 2} cm^2`)
        break

    case "7":
        baseMayor = prompt("Cuánto mide la base mayor en cm? ")
        base = prompt("¿Cuánto mide la base menor en cm? ")
        altura = prompt("¿Cuánto mide la altura en cm? ")

        var area = ((parseInt(baseMayor) + parseInt(base)) / 2) * parseInt(altura);

        document.write(`El área del Trapecio es: ${+ area} cm^2`)
        break

    case "8":
        radio = prompt("¿Cuánto mide el radio del circulo en cm? ")
        //math
        document.write(`El área del círculo es: ${Math.PI * Math.pow(radio, 2)} cm^2`)
        break;

    default:
        document.write("Esta opcion no es valida")
        break;
}