import { Errors } from "components/signup-form";
import { zxcvbn } from "@zxcvbn-ts/core"

export const validateInput = ( field :string, value :string, errors :Errors ): Errors => {
    
    switch(field) {
        case "FirstName" : 
        case "LastName" : {
            if(value.trim().length <= 0){
                errors[field] = `${field.split(/(?=[A-Z])/).join(" ")} cannot be empty`;
            }
            else{
                delete errors[field];
            }
            return errors
        }
        case "EmailAddress" : {
            if(value.length === 0){
                errors[field] = "Email address cannot be empty";
            }
            else if(!value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm)){
                errors[field] =  "Looks like this is not an email";
            }
            else{
                delete errors[field];
            }
            return errors;
        }
        case "Password" : {
            let strengthResult = zxcvbn(value);
            if(value.length === 0) {
                errors[field] =  "Password cannot be empty";
            }
            else if(!value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,20}$/)) {
                errors[field] = "Password must contain at least 1 letter (a-zA-Z), 1 number (0-9) and at least 8 characters.";
            }
            else if(strengthResult && strengthResult.score < 2){
                errors[field] = "Password chosen is weak. Try using random combination of words, letters, numbers and symbols.";
            }
            else{
                delete errors[field];
            }
            return errors;
        }
    }
}