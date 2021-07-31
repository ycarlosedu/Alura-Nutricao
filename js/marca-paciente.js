
var tabela = document.querySelector("#tabela-pacientes");

function marcaPaciente(paciente){
    paciente.classList.add('active');
}

function desmarcaPacientes(pacientes){
    pacientes.forEach(function(paciente){
        paciente.classList.remove('active');
    });
};

tabela.addEventListener("click", function(event) {
    var pacientes = document.querySelectorAll('.paciente');
    paciente = event.target.parentNode;
    desmarcaPacientes(pacientes);
    marcaPaciente(paciente);
});