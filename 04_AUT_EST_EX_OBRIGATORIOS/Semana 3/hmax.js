const g = 10
function calculo () {
    var V0 = document.getElementById('V0').value;
    var ts = V0/g
    var hmax = V0**2/2*g
    return alert("O tempo de subida é: " + ts + " e a altura máxima é: " + hmax)
    console.log(ts)
    console.log(hmax)
}