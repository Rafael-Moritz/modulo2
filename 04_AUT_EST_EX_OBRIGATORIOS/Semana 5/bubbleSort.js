    function ordenou() {
        var saida = document.getElementById("saida")
        var lista = (document.getElementById("num").value)
        var vetor = lista.split(",")
        var valor_alvo = document.getElementById("valoralvo").value
        var n = vetor.length
        saida.innerHTML=("")
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                   if(vetor[j] > vetor[j+1]) {
                           var num = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = num;
            }
        }
    }
    var posicao = (vetor.indexOf(valor_alvo)+1)
    saida.innerHTML += `A lista de números ordenada será de: ${vetor}`
    saida.innerHTML += `<br>A posição do valor-alvo será ${posicao}`
}