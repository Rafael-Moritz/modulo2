function caixa() {
    var montante = document.getElementById("montante").value;
    var notas10 = Math.floor(montante/10);
    var notas1 = (montante%10)%5
    var notas5 = (montante - notas10*10 - notas1)/5

    document.getElementById('saida').innerHTML = "Notas de 10: " + notas10 + "<br />" + " Notas de 5: " + notas5 + "<br />" + " Notas de 1: " + notas1
}