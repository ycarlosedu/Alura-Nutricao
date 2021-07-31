var campoFiltro = document.querySelector('#filtro-tabela');

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(var i=0;i<pacientes.length;i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //expressao do value case "i"nsensitive
            if (!expressao.test(nome)){ //testa letra por letra
                paciente.classList.add("invisible");  
            }else{
                paciente.classList.remove("invisible");
            }
        }
    }else{
        for(var i=0;i<pacientes.length;i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
});