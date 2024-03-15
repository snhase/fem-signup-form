import React, { useState } from "react"
import {SignupForm} from './components/signup-form.tsx';
import { SignupSuccess } from "./components/signup-success.tsx";

export function App() {
  const [signup, setSignup] = useState(true)
  return (    
    <div className="mx-auto bg-[url('../src/assets/images/bg-intro-desktop.png')] bg-[hsl(0,100%,74%)] md:h-screen">
      <main className="container p-5 mx-auto items-center content-around justify-center text-center sm:text-left md:flex md:h-screen">
        <div className="flex-none mx-5 md:ml-20 md:flex-1 ">
          <h1 className="text-3xl md:text-6xl font-bold text-white">Learn to code by watching others</h1>
          <div className="mt-5 text-white ">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. 
          </div>
        </div>
        <div className="flex-none md:flex-1 items-center">
          {
            signup?
            <>
              <div className="w-5/6 mx-auto my-6 p-4 bg-[hsla(248,32%,49%,1)] rounded-lg text-center text-white shadow-[0px_5px_0px_rgba(0,0,0,0.2)]">Try it free 7 days then $20/mo. thereafter</div>
              <SignupForm setSignup={setSignup}/>
            </>
            :
            <SignupSuccess/>
          }
        </div>
      </main>
      <footer className="bg-[hsl(0,0%,100%)] bottom-0 p-3 text-center font-semibold">
      Challenge by <a
            className="text-blue-800 hover:text-blue-900 hover:underline"
            href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1" 
            target="_blank" 
            rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://github.com/snhase"
            className="text-blue-800 hover:text-blue-900 hover:underline"
            target="_blank" rel="noopener noreferrer">snhase</a>
      </footer>
    </div>
  );
}

