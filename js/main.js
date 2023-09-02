function restar() {
    let numUno = document.getElementById("varUno").value;
    let numDos = document.getElementById("varDos").value;
    let resultado = parseInt(numUno) - parseInt(numDos);
    document.getElementById("resultado").innerText = resultado;
}

function sumar() {
    let numUno = document.getElementById("numUno").value;
    let numDos = document.getElementById("numDos").value;
    let resultado = parseInt(numUno) + parseInt(numDos);
    document.getElementById("resultado").innerText = resultado;
    console.log(resultado);
}