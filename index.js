$(document).ready(function(){
    
    $('#getTask').on('submit', function(e){
        
        $("#footerText").text('Limpar');
        
        $(".footer").on('click', function(){
            location.reload()
        });

        e.preventDefault();
        const task = $('#newTask').val();
        let newItem = $('<li title="Clique para marcar como feito">').text(task);
        
        $(".display").hide().append(newItem);
        $(".display").append(newItem);
        $(".display").slideDown();
        $("#newTask").val("");     
    });

    $(".display").on("click", "li", function(){
        $(this).css("text-decoration", "line-through");
        $(this).removeAttr("title");
        $(this).css({"opacity": "0.33"});

    });
});


/*
$("#seuBotao").prop("disabled", true);

*/