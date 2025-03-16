const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const alphanumericRegex = /^[a-zA-Z0-9]+$/;



export const Helpers = {
    validateEmail(email){
        return emailRegex.test(email)
    }, 

    validatePassword(password){
        
        return password.length > 7 && alphanumericRegex.test(password);  
    },
    validateName(name){
        return name.length >= 3;
    }

    
}