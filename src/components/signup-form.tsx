import React, {FormEvent, useState} from 'react'
import { Input } from './reusable-components/input.tsx'
import { Card } from './reusable-components/card.tsx'

interface Props {
    setSignup?: (value:boolean)=> void
}
export interface FormInputs {
    FirstName?: string;
    LastName?: string;
    EmailAddress?: string;
    Password?:string;
}
export type Errors = Partial<Record<keyof FormInputs, string>>
export type Touched = Partial<Record<keyof FormInputs, boolean>>

export const SignupForm = ( { setSignup } : Props ) => {
    const [values, setValues] = useState<FormInputs>({});
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Touched>({});
    
    const handleOnSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Object.keys(touched).length === 0) {
            let untouchedErrrors = {
                FirstName: "First Name cannot be empty",
                LastName: "Last Name cannot be empty",
                EmailAddress: "Email Address cannot be empty",
                Password:"Password cannot be empty"
            }
            setErrors(untouchedErrrors);
        }
        else if(Object.keys(errors).length === 0) {
            setSignup(false);
        }

    }

    return (
        <Card>
            <form onSubmit={handleOnSubmit}>
                <Input 
                    label="First Name"
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    touched={touched}
                    setTouched={setTouched}
                    ></Input>
                <Input 
                    label="Last Name"
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    touched={touched}
                    setTouched={setTouched}
                    ></Input>
                <Input 
                    label="Email Address"
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    touched={touched}
                    setTouched={setTouched}
                    ></Input>
                <Input 
                    label="Password"
                    type="password"
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                    touched={touched}
                    setTouched={setTouched}
                    ></Input>
                <button 
                    className="w-full mx-auto my-5 p-4 bg-[hsla(154,59%,51%,1)] rounded-lg text-center uppercase text-white cursor-pointer hover:bg-[hsla(154,70%,51%,1)] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={Object.keys(errors).length>0?true:false}
                    > Claim your free trial </button>
                <p className="text-xs text-center text-gray-400">By clicking the button, you are agreeing to our <span className="text-[hsla(0,100%,74%,1)]"> Terms and Services</span></p>
            </form>
        </Card>
    );
}

