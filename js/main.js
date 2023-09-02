function restar() {
    let numUno = document.getElementById("varUno").value;
    let numDos = document.getElementById("varDos").value;
    let resultado = parseInt(numUno) - parseInt(numDos);
    document.getElementById("resultado").innerText = resultado;
}
