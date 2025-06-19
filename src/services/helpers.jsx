const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;



export const Helpers = {
    validateEmail(email){
        return emailRegex.test(email)
    }, 

    validatePassword(password){
        
        return password.length > 7 && passwordRegex.test(password);  
    },
    validateName(name){
        return name.length >= 3;
    }

    
}