'use strict';

class Validator {
    constructor () {

        //mensajes predeterminados
        this.invalidEmailError = 'Introduce un email valido';
        this.emailExistsError = 'Este email ya esta registrado';
        this.passwordError = 'Introduce una contraseña de 6 o más caracteres';
        this.repeatPasswordError = 'Los campos no coinciden';

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
            if (isValid) {
                delete this.errors.invalidEmailError;
            }else {
            //si el mail no es valido, poner el mensaje que se mostrara
            this.errors.invalidEmailError = this.invalidEmailError;
        }

    }

        //validar que el email no esta tomado
        //funcionauxiliar de validateEmail
        emailIsValid = (email) => {
         //RegEx objeto especial que contiene las reglas de la sintaxi
         const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

         //metodo test prueba si la cadena cumple las reglas
         //y devuelve true o false
         const isValid = emailRegEx.test(email);
            
        }
        //validar la longuitud del password
        validatePassword = (password) => {}

        //validar si el password y el repeatpassword coinciden.
        validatePasswordRepeat = (password) =>{}
    
        //obtener el objeto con errors, para mostrarlos al usuario en la pagina registro
        getErrors = () => {
            return this.errors;
        }

        //reiniciar los erroes mostrados
        resetValidator = () => {}
    
    }


    const validator = new Validator();