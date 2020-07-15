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

        // validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        //si el nombre del email es valido
        if (!errors.invalidEmailError) {
            //comprueba si el email es unico
            validator.validateUniqueEmail(email);
        }

        this.setErrorMessages();
        this.checkButton();

    }


    //gestionar cambios de linput "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        // validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();
        this.checkButton();
    }


    //gestionar  cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;
    
        // validar el texto del input password
        // validar el texto del input repeatpassword
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();
        this.checkButton();
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

        this.showSuccessMessage();
        this.renoveMessages();
        this.checkButton();
    }

    //registrar funciones para cada input/campo
    addListeners =  () =>  {
     //escucha para los cambio de texto
     this.emailInput.addEventListener("input", this.handleEmailInput);
     this.passwordInput.addEventListener("input", this.handlePasswordInput);
     this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

     this.buttonInput.addEventListener("click", this.saveData);
    }

    showSuccessMessage = () => {
        //vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";

        const errorsObj =  validator.getErrors();
        //convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        if(errorsStringsArr.length > 1) {
            return;
        }
        const succesMessageP = document.createElement('p');
        succesMessageP.innerHTML = 'The account has been created';

        this.errorsWrapper.appendChild(succesMessageP);
    }

    renoveMessages = () => {
        setTimeout( () => {
            this.errorsWrapper.innerHTML = "";
        }, 2000)
    }


    setErrorMessages = () => {
        //vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";

        const errorsObj =  validator.getErrors();

        //convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach( (errorStr) => {
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageP);
        })
    }

    // activar o desactivar el botón de envio (Sign Up)
    checkButton = () => {
    const errorsObj = validator.getErrors();
    const errorsArr = Object.values(errorsObj);
    

    if(errorsArr.length > 0) {
      this.buttonInput.disabled = true;
    }
    else {
      this.buttonInput.disabled = false;
    }
  }
}

// crear una nueva instancia del Registration (objeto)
const registration = new Registration ();

window.addEventListener("load", registration.addListeners) ;
