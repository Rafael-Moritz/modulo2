function operacao() {
    var indiceOpe = document.getElementById('ope').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var ope = ["+" , "-" , "*" , "/" , "%"];
    console.log(ope[indiceOpe]);
    console.log(num1);
    console.log(num2);
    var resultado;
    if(indiceOpe == 0) {
        var resultado = parseInt(num1) + parseInt(num2);
    }
    if(indiceOpe == 1) {
        var resultado = num1 - num2;
    }
    if(indiceOpe == 2) {
        var resultado = num1 * num2;
    }
    if(indiceOpe == 3) {
        var resultado = num1 / num2;
    }
    if(indiceOpe == 4) {
        var resultado = num1 % num2;
    }

    document.getElementById('saida').innerHTML = resultado
}