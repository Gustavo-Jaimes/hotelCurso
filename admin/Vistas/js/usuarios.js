

//Borrar Usuarios
$(".TB").on("click", ".BorrarU", function(){

	var Uid = $(this).attr("Uid");
	var Ufoto = $(this).attr("Ufoto");

	window.location = "index.php?url=usuarios&Uid="+Uid+"&Ufoto="+Ufoto;

})


// Llamar datos para editar
$(".TB").on("click", ".EditarU", function(){
    var Uid = $(this).attr("Uid");
    var datos = new FormData();

    datos.append("Uid", Uid);

    $.ajax({
        url: "Ajax/usuariosA.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(respuesta){
            $("usuarioE").val(respuesta["usuario"]);
        }
    })
})