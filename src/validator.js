'use strict';

class Validator {
    constructor () {

        //mensajes predeterminados
        this.invalidEmailError = 'Please, introduce a valid email';
        this.emailExistsError = 'This mail is already used';
        this.passwordError = 'The password must contain 6 or more characters';
        this.repeatPasswordError = 'The password is not the same';

        //objeto con los errores que vamos a mostrar al usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.repeatPasswordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }


        //validar el nombre del email
        validateValidEmail = (email) => {

            //si el email es valido, quita mensaje de error
            if (this.emailIsValid(email)) {
                delete this.errors.invalidEmailError;
            }else {
            //si el mail no es valido, poner el mensaje que se mostrara
            this.errors.invalidEmailError = this.invalidEmailError;
        }

    }

        
        //funcionauxiliar de validateEmail
        emailIsValid = (email) => {
         //RegEx objeto especial que contiene las reglas de la sintaxi
         const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

         //metodo test prueba si la cadena cumple las reglas
         //y devuelve true o false
         const isValid = emailRegEx.test(email);
        
         return isValid;
        }


      
        //validar que el email no esta tomado (es unico)
        validateUniqueEmail = (newEmail) => {
            const usersDB = db.getAllUsers();

            let emailUnique = true;

            if(usersDB.length > 0) {
                usersDB.forEach( (userObj) => {
                    //si el email ya esta tomado, cambia el calor de la variable a false
                    if (userObj.email === newEmail) {
                        emailUnique = false;
                    }
                
                })

                if (emailUnique) {
                    //quita el mensaje de error
                delete this.errors.emailExistsError;
             }else{
                 //si el email no es unico, poner el mensaje de nuevo
                 this.errors.emailExistsError =  this.emailExistsError
             }
            }
        }
        //validar la longuitud del password
        validatePassword = (password) => {
          if (password.length > 5) {
              //quita el mensaje de error
            delete this.errors.passwordError;
          }  else {
              //si el password tiene menos de 5 caracteres, poner el mensaje
              this.errors.passwordError = this.passwordError;
          }
        }

        //validar si el password y el repeatpassword coinciden.
        validatePasswordRepeat = (password, passwordRepeat) =>{
            if (password === passwordRepeat) {
                //si los 2 password coinciden, quita el error
                delete this.errors.repeatPasswordError;
            } else {
                //si no coinciden, poner mensaje
                this.errors.repeatPasswordError = this.repeatPasswordError;
            }
        }
    
        //obtener el objeto con errors, para mostrarlos al usuario en la pagina registro
        getErrors = () => {
            return this.errors;
        }

        //reiniciar los erroes mostrados
        resetValidator = () => {
            this.errors = {
                invalidEmailError: this.invalidEmailError,
                passwordError: this.passwordError,
                repeatPasswordError: this.repeatPasswordError
            }
        }
    
    }


    const validator = new Validator();