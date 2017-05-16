function Login(){

     var pagina = "http://localhost:1337/loginRecu";
     var email = $("#usuario").val();
     var password = $("#Pass").val(); 
     var datosLogin = {
         email: email,
         password: password
     };
    $.ajax({
        type: 'post',
        url: pagina,
        data: { datosLogin: datosLogin},
        dataType: 'json'
      
    })
        .done(function (grilla) {

            alert("se conecto");
           window.location.replace("index.html");
        })
        .fail(function (peticion, textStatus, errorThrown) {
            alert("error");
            
            alert(peticion.responseText + '?n' + textStatus + '\n' + errorThrown);
        })

}
function agregarContacto(){
      var pagina = "http://localhost:1337/crearNuevoContacto";
     var nombre = $("#Nombre").val();
     var email = $("#Email").val(); 
     var webSite=  $("#WebSite").val();
     var ubicacion =  $("#Ubicaion").val();
     var fechaNacimiento=  $("#Fecha").val();
    
     var datosContactoLogin = {
         nombre: nombre,
         email: email,
        webSite: webSite,
        ubicacion: ubicacion,
        fechaNacimiento: fechaNacimiento
     };
    $.ajax({
        type: 'post',
        url: pagina,
        data: { datosContactoLogin: datosContactoLogin},
        dataType: 'json'
      
    })
        .done(function (grilla) {
            alert("se conecto");        
        })
        .fail(function (peticion, textStatus, errorThrown) {
            alert("error");           
           
        });



}



function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }   



