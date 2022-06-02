function calculoNota(){
    var nota = document.getElementById('nota').value;

    if(nota!=0 && nota<6){
        return alert("Nota armazenada com sucesso!")
    }
}