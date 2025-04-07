function sumar() {
    //rescatar num1 y num2 desde el formulario
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = num1 + num2;
    alert("el resultado es " + resultado);
}