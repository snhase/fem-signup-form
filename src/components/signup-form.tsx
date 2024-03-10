import React from 'react'
import { Input } from './reusable-components/input.tsx'

export const SignupForm = () => {

    return (
        <div className='w-5/6 mx-auto p-10 bg-white shadow-card min-h-[400px] rounded-2xl border border-solid border-slate-200'>
            <form>
                <Input label="First Name"></Input>
                <Input label="Last Name"></Input>
                <Input label="Email Address"></Input>
                <Input label="Password"></Input>
                <button className="w-full mx-auto my-5 p-4 bg-[hsla(154,59%,51%,1)] rounded-lg text-center uppercase text-white"> Claim your free trial </button>
                <p className="text-center text-gray-400">By clicking the button, you are agreeing to our <span className="text-[hsla(0,100%,74%,1)]"> Terms and Services</span></p>
            </form>
        </div>
    );
}

