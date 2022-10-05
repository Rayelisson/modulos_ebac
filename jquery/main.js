$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li onClick="riscar(${tarefa.split(" ").join("")})" id="${tarefa.split(" ").join("")}" ></li>`);
        $(novaTarefa).html(tarefa);
        $(novaTarefa).appendTo("ul");

        $('#tarefa').val('');
        console.log(tarefa);
    });

});

function riscar(x){
    idParariscar = x.id;

    tarefaParaRiscar = document.getElementById(`${idParariscar}`).classList.add('risco');
};