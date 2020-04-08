
//user form  (validateUserForm validates all the fields of the form before send it)
function validateUserForm(){
    var acumErrors = 0;
    var loginEmail = document.forms["frmLogin"]["loginEmail"].value;    
    var loginPassword = document.forms["frmLogin"]["loginPassword"].value;
    var errorLoginEmail = document.getElementById("errorLoginEmail");
    var errorLoginPassword = document.getElementById("errorLoginPassword");

    if(loginEmail == ""){
        errorLoginEmail.textContent = "El campo no puede estar vacío";
        document.getElementById("loginEmail").style.border = "3px solid #ff0202";
        document.getElementById("loginEmail").focus();
        acumErrors++;
    }else if(!validar_log_email(loginEmail)){
        errorLoginEmail.textContent = "El email no cumple el formato requerido";
        document.getElementById("loginEmail").style.border = "3px solid #ff0202";
        document.getElementById("loginEmail").focus();
        acumErrors++;
    }else{
        errorLoginEmail.textContent = "";
        document.getElementById("loginEmail").style.border = "none";
    }

    if (loginPassword == ""){
        errorLoginPassword.textContent = "El campo no puede estar vacío";
        document.getElementById("loginPassword").style.border = "3px solid #ff0202";         
        document.getElementById("loginPassword").focus();
        acumErrors++;
    }else if (loginPassword.length < 8){
        errorLoginPassword.textContent = "La contraseña debe tener mínimo 8 caracteres";
        document.getElementById("loginPassword").style.border = "3px solid #ff0202";  
        document.getElementById("loginPassword").focus();
        acumErrors++;
    }else{
        errorLoginPassword.textContent = "";
        document.getElementById("loginPassword").style.border = "none";
    }

    if(acumErrors == 0){
        return true;
    }else{
        return false;
    }
}

function validar_log_email(loginEmail) {
    var regex = /^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9.-]+\.+([a-zA-Z]{2,4})+$/;
    return regex.test(loginEmail) ? true : false;
}

//register form  (validateRegisterForm validates all the fields of the form before send it)
function validateRegisterForm(){
    var acumErrors = 0;
    var registerName = document.forms["frmRegister"]["registerName"].value;
    var registerEmail = document.forms["frmRegister"]["registerEmail"].value;    
    var registerPassword = document.forms["frmRegister"]["registerPassword"].value;
    var registerPasswordC = document.forms["frmRegister"]["registerPasswordC"].value;
    var errorRegisterName = document.getElementById("errorRegisterName");
    var errorRegisterEmail = document.getElementById("errorRegisterEmail");
    var errorRegisterPassword = document.getElementById("errorRegisterPassword");
    var errorRegisterPasswordC = document.getElementById("errorRegisterPasswordC");

    if(registerName == ""){
        errorRegisterName.textContent = "El campo no puede estar vacío";
        document.getElementById("registerName").style.border = "3px solid #ff0202";
        document.getElementById("registerName").focus();
        acumErrors++;
    }else if (registerName.length < 3){
        errorRegisterName.textContent = "El nombre debe tener al menos 3 caracteres";
        document.getElementById("registerName").style.border = "3px solid #ff0202";
        document.getElementById("registerName").focus();
        acumErrors++;
    }else{
        errorRegisterName.textContent = "";
        document.getElementById("registerName").style.border = "none";
    }  

    if(registerEmail == ""){
        errorRegisterEmail.textContent = "El campo no puede estar vacío";
        document.getElementById("registerEmail").style.border = "3px solid #ff0202";
        document.getElementById("registerEmail").focus();
        acumErrors++;
    }else if(!validar_reg_email(registerEmail)){
        errorRegisterEmail.textContent = "El email no cumple el formato requerido";
        document.getElementById("registerEmail").style.border = "3px solid #ff0202";
        document.getElementById("registerEmail").focus();
        acumErrors++;
    }else{
        errorRegisterEmail.textContent = "";
        document.getElementById("registerEmail").style.border = "none";
    }

    if (registerPassword == ""){
        errorRegisterPassword.textContent = "El campo no puede estar vacío";
        document.getElementById("registerPassword").style.border = "3px solid #ff0202";         
        document.getElementById("registerPassword").focus();
        acumErrors++;
    }else if (!validar_reg_password(registerPassword)){
        errorRegisterPassword.textContent = "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula, una minúscula y un número";
        document.getElementById("registerPassword").style.border = "3px solid #ff0202";  
        document.getElementById("registerPassword").focus();
        acumErrors++;
    }else{
        errorRegisterPassword.textContent = "";
        document.getElementById("registerPassword").style.border = "none";
    }

    if (registerPasswordC == ""){
        errorRegisterPasswordC.textContent = "El campo no puede estar vacío";
        document.getElementById("registerPasswordC").style.border = "3px solid #ff0202";
        document.getElementById("registerPasswordC").focus();
        acumErrors++;
    }else if (registerPasswordC !== registerPassword){
        errorRegisterPasswordC.textContent = "Las contraseñas introducidas no coinciden";
        document.getElementById("registerPasswordC").style.border = "3px solid #ff0202";
        document.getElementById("registerPasswordC").focus();
        acumErrors++;
    }else{
        errorRegisterPasswordC.textContent = "";
        document.getElementById("registerPasswordC").style.border = "none";
    }

    if(acumErrors == 0){
        return true;
    }else{
        return false;
    }
}

function validar_reg_email(registerEmail) {
    var regex = /^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9.-]+\.+([a-zA-Z]{2,4})+$/;
    return regex.test(registerEmail) ? true : false;
}

function validar_reg_password(registerPassword) {
    var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    return regex.test(registerPassword) ? true : false;
}

//lost password form  (validateLostPassword validates all the fields of the form before send it)
function lostPassword(){
    var acumErrors = 0;    
    var lostEmail = document.forms["frmLostPassword"]["lostEmail"].value;
    var errorLostEmail = document.getElementById("errorLostEmail");

    if(lostEmail == ""){
        errorLostEmail.textContent = "El campo no puede estar vacío";
        document.getElementById("lostEmail").style.border = "3px solid #ff0202";
        document.getElementById("lostEmail").focus();
        acumErrors++;
    }else if(!validar_lost_email(lostEmail)){
        errorLostEmail.textContent = "El email no cumple el formato requerido";
        document.getElementById("lostEmail").style.border = "3px solid #ff0202";
        document.getElementById("lostEmail").focus();
        acumErrors++;
    }else{
        errorLostEmail.textContent = "";
        document.getElementById("lostEmail").style.border = "none";
    }
    
    if(acumErrors == 0){
        return true;
    }else{
        return false;
    }
}

function validar_lost_email(lostEmail) {
    var regex = /^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9.-]+\.+([a-zA-Z]{2,4})+$/;
    return regex.test(lostEmail) ? true : false;
}

















/* 

function nameValidation(){
    var inputName = document.forms["frmRegister"]["name"].value;
    var errorName = document.getElementById("errorName");

    if(inputName == ""){
        errorName.textContent = "El campo no puede estar vacío";
        document.getElementById("name").style.border = "3px solid #ff0202";
        document.getElementById("name").focus();
        return false;
    }else if (inputName.length < 6){
        errorName.textContent = "El nombre debe tener al menos 5 caracteres";
        document.getElementById("password").style.border = "3px solid #ff0202";
        document.getElementById("password").focus();
        return false;
    }else{
        errorName.textContent = "";
        document.getElementById("name").style.border = "none";
        return true;
    }    
}

function emailValidation(){
    var inputEmail = document.forms["frmLogin"]["email"].value;
    var errorEmail = document.getElementById("errorEmail");

    if(inputEmail == ""){
        errorEmail.textContent = "El campo no puede estar vacío";
        document.getElementById("email").style.border = "3px solid #ff0202";
        document.getElementById("email").focus();
        return false;
    }else if(!validar_email(inputEmail)){
        errorEmail.textContent = "El email no cumple el formato requerido";
        document.getElementById("email").style.border = "3px solid #ff0202";
        document.getElementById("email").focus();
        return false;
    }else{
        errorEmail.textContent = "";
        document.getElementById("email").style.border = "none";
        return true;
    }
}

function passwordValidation(){
    var inputPassword = document.forms["frmLogin"]["password"].value;
    var errorPassword = document.getElementById("errorPassword");

    if (inputPassword == ""){
        errorPassword.textContent = "El campo no puede estar vacío";
        document.getElementById("password").style.border = "3px solid #ff0202";         
        document.getElementById("password").focus();
        return false;
    }else if (inputPassword.length < 8){
        errorPassword.textContent = "La contraseña debe tener mínimo 8 caracteres";
        document.getElementById("password").style.border = "3px solid #ff0202";  
        document.getElementById("password").focus();
        return false;
    }else{
        errorPassword.textContent = "";
        document.getElementById("password").style.border = "none";
        return true;
    }
}

function passwordCValidation(){
    var inputPassword = document.forms["frmRegister"]["password"].value;
    var inputPasswordC = document.forms["frmRegister"]["passwordC"].value;
    var errorPasswordC = document.getElementById("errorPasswordC");

    if (inputPasswordC == ""){
        errorPasswordC.textContent = "El campo no puede estar vacío";
        document.getElementById("passwordC").style.border = "3px solid #ff0202";
        document.getElementById("passwordC").focus();
        return false;
    }else if (inputPasswordC !== inputPassword){
        errorPasswordC.textContent = "Las contraseñas introducidas no coinciden";
        document.getElementById("passwordC").style.border = "3px solid #ff0202";
        document.getElementById("passwordC").focus();
        return false;
    }else{
        errorPasswordC.textContent = "";
        document.getElementById("passwordC").style.border = "none";
        return true;
    }
}

function validar_log_email(loginEmail) {
    var regex = /^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9.-]+\.+([a-zA-Z]{2,4})+$/;
    return regex.test(loginEmail) ? true : false;
}

function validar_password(inputPassword) {
    var regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    return regex.test(inputEmail) ? true : false;
}
 */