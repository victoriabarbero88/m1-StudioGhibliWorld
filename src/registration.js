'use strict'

class Registration {
    constructor () {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeatPassword");

        this.buttonInput = document.querySelector("#signup-button")
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
        //recuperar los valores de cada input
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;


        function createUser(name, email, password, repeatPassword) {
            const <i class="fa fa-usero" aria-hidden="true"></i>bj = {
                name: name,
                email: email,
                password: password,
                repeatPassword: repeatPassword

            }
        }
    }

    //registrar funciones para cada input/campo
    addListeners =  () =>
 {
     //escucha para los cambio de texto
     this.emailInput.addEventListener("input", this.handleEmailInput);
     this.passwordInput.addEventListener("input", this.handlePasswordInput);
     this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

     this.buttonInput.addEventListener("click", this.saveData);
 }

}

// crear una nueva instancia del Registration (objeto)
const Registration = new Registration ();

window.addEventListener("load", registration.addListeners) ;
