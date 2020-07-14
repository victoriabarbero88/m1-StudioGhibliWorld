'use strict';

class Registration {
    constructor () {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeatPassword");

        this.buttonInput = document.querySelector("#signup-button");
        this.errorsWrapper = document.querySelector(".message-container"); 
    }

    //gestionar cambios del inpur "email"
    handleEmailInput = (event) => {
        const email = event.target.value;

        console.log('email', email);

        // validar el texto del input email
    }


    //gestionar cambios de linput "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;

        console.log('password', password);
        // validar el texto del input password
    }


    //gestionar  cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;

        console.log('repeatPassword', repeatPassword);
        // validar el texto del input repeatpassword
    }


    //gestionar el envio de los datos (submit)
    saveData = (event) => {
        //cuando el evento ocurre cancelalo y no recargues la pag.
        event.preventDefault();
        //recuperar los valores de cada input
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;
 
        const newUser = new User(name, email, password);
        console.log('new user');
 
        //Queremos guardar el nuevo usuario en la base de datos simulada
        db.saveNewUser( newUser);


        //vacias el formulario
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";
    }

    //registrar funciones para cada input/campo
    addListeners =  () =>  {
     //escucha para los cambio de texto
     this.emailInput.addEventListener("input", this.handleEmailInput);
     this.passwordInput.addEventListener("input", this.handlePasswordInput);
     this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

     this.buttonInput.addEventListener("click", this.saveData);
    }

}

// crear una nueva instancia del Registration (objeto)
const registration = new Registration ();

window.addEventListener("load", registration.addListeners) ;
