function validateForm(){
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var nombre = document.getElementById("name").value;
	var lista = document.getElementsByClassName("form-control").value;
	var withoutOpcion = document.querySelector("select").value;

    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      var span = document.createElement("span");
      var referencia= document.getElementById("name");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Debe ingresar su nombre ");
      span.appendChild(texto);
 }
   	else {
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
            console.log("letra")
            m = /[a-z]/g;
        }    
   	} 

   	if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
    	var span = document.createElement("span");
      var referencia= document.getElementById("lastname");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Debe ingresar su apellido ");
      span.appendChild(texto);
   	}
   	else {
       var n = /^[a-zA-Z]*$/;
       if(!apellido.search(n)) {
            console.log("letra")
            n = /[a-z]/g;
        }    
        if(!apellido.search(n)){
                span.appendChild(texto);
        }
   	} 

	if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
		var span = document.createElement("span");
      var referencia= document.getElementById("input-email");
      var padre=referencia.parentNode;
      padre.insertBefore(span,referencia);
      var texto = document.createTextNode("Verifique su e-mail");
      span.appendChild(texto);
	} else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresa una contraseña válida");
        span.appendChild(texto);
    } 
    
    if((withoutOpcion == 0)){
            var span = document.createElement("span");
            var referencia = document.querySelector("select");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("Elige tu tipo de bici.");
            span.appendChild(texto);
        }
}