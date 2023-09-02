function restar() {
    let numUno = document.getElementById("varUno").value;
    let numDos = document.getElementById("varDos").value;
    console.log(numUno)
    console.log(numDos)
    let resultado = parseInt(numUno) - parseInt(numDos);
    document.getElementById("resultado").innerText = resultado;
    console.log(resultado);
}