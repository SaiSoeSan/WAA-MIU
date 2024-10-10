import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';

function App() {

    // const clickHandler = (name: string) => {
    //     console.log("clicked",name);
    // }

    //second way using closure
    // const clickHandler = (name:string) => {
    //     return () => {
    //         console.log("clicked",name)
    //     }
    // }
    // let [count,setCount] = useState(0)
    //
    // const [person, setPerson] = useState(
    //     {
    //         firstName : 'John',
    //         lastName : 'Smith',
    //         age : 29
    //     }
    // );
    //
    // const changeAgeHandler = () => {
    //     setPerson({...person, age : person.age + 1})
    // }
    //
    //
    // const incrementHandler = () => {
    //     setCount(count + 1);
    //     console.log(count);
    // }
    //
    // const inputRef = useRef<HTMLInputElement>(null)
    //
    // const clickHandler = () => {
    //     console.log(inputRef.current?.value)
    // }

    const [formData,setFormData] = useState({
        username : '',
        password : ''
    });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const submitHandler = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
      {/*<h1>Hello World</h1>*/}
      {/*  <h3>Count : {count} </h3>*/}
      {/*  <button onClick={incrementHandler}>Increase Me</button>*/}
        {/*<button onClick={() => clickHandler("sai soe san")}>Click me</button>*/}
        {/*<button onClick={clickHandler("sai soe san")}>Click me</button>*/}
        {/*<h2>Person Info</h2>*/}
        {/*<div>{person.firstName},{person.lastName},{person.age}</div>*/}
        {/*<button onClick={changeAgeHandler}>Change Person Age</button>*/}

        {/*<h4>Ref Hook</h4>*/}
        {/*<input type="text" name="usernsme" ref={inputRef} />*/}
        {/*<button onClick={clickHandler}>Show Ref</button>*/}

      <form onSubmit={submitHandler}>
          <div>
            Username : <input type="text" name="username" onChange={inputChangeHandler}/>
          </div>
        <div>
          Password : <input type="password" name="password" onChange={inputChangeHandler}/>
        </div>
          <div>
              <button>Register</button>
          </div>
      </form>
    </div>
  );
}

export default App;
