$( document ).ready(function() {

    var principal={

        funEliminarFila:function(btn){
            if(confirm("¿Estas seguro de Eliminar?")){
                $(btn).parent().parent().remove();
            }
        }
    }
    $( ".btn1" ).click(function() {
        principal.funEliminarFila(this);
    });
});



