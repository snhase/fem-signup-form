import React , { ChangeEvent }from 'react';
import { FormInputs, Errors, Touched } from 'components/signup-form';
import {validateInput} from "../../utils.tsx"

interface Props {
  errors?:Errors;
  label: string;
  touched?:Touched;
  type?:string;
  values?:FormInputs;
  setErrors?: (value: {[key: string]: string}) => void;
  setTouched?: (value: {[key: string]: boolean}) => void;
  setValues?: (value: {[key: string]: string}) => void;
}


export function Input({  errors, label, touched, type, values, setErrors, setTouched, setValues}: Props) {

  const id = label.replace(/ /gm, "");
  let inputClassName = "block w-full mt-5 mb-1 p-4 border-2 rounded-md border-slate-300"
  let inputErrorIconClass = "flex items-center after:-mx-10 after:mt-4 after:content-[url('../src/assets/images/icon-error.svg')]"

  const handleOnChange = (event : ChangeEvent<HTMLInputElement>) => {
    let field = event.target.id;
    let value = event.target.value;
    setValues({
      ...values,
      [field]:value
    });
    //validate input onchange only if error present
    if(errors[field]){
      setErrors(validateInput(field, value , errors));
    }
  }

  const handleOnBlur = (event : ChangeEvent<HTMLInputElement>) => {
    let field = event.target.id;
    let value = event.target.value;
    setTouched({ 
      ...touched,
      [field]: true 
    });
    setErrors(validateInput(field, value, errors));
  }
  
  return (
    <div>
      <div className={errors[id]? inputErrorIconClass : ""}>
        <input
        id={id}
        className={
          errors[id]?
          [inputClassName,"border-b-2 border-[hsla(0,100%,74%,1)] rounded-md focus-visible:border-b-2 focus-visible:border-1 focus-visible:border-[hsla(0,100%,74%,1)] focus-visible:border-[hsla(0,100%,74%,1)] focus-visible:outline-none"].join("")
          :
          [inputClassName,"focus:border-b-2 focus:border-1 focus:border-[hsla(249,10%,26%,1)"].join("")}
        placeholder={label}
        type={type}
        autoComplete="off"
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        />
      </div>
      {
        errors[id]?
        <div
          className="italic text-right text-xs text-[hsla(0,100%,74%,1)]"
          role="error"
        >
          {errors[id]}
        </div>
        :
        <div className="p-2"></div>
      }
    </div>
  );
}
