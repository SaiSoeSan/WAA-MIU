import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {ThemeProvider} from "./ThemeContext";
import Home from './Home';
import ThemeToggler from "./ThemeToggler";

function App() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(usernameRef.current?.value , passwordRef.current?.value, bioRef.current?.value);
    }

  return (
      <ThemeProvider>
          <Home />
          <ThemeToggler />
      </ThemeProvider>
    // <div>
    //
    //   <form onSubmit={submitHandler}>
    //       <div>
    //         Username : <input type="text" ref={usernameRef} />
    //       </div>
    //     <div>
    //       Password : <input type="password" ref={passwordRef}/>
    //     </div>
    //       <div>
    //           Bio: <textarea ref={bioRef}></textarea>
    //       </div>
    //       <div>
    //           <button>Register</button>
    //       </div>
    //   </form>
    // </div>
  );
}

export default App;
