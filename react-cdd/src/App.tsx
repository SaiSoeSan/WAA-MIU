import React, {useEffect, useState} from 'react';

import { v4 as uuidv4 } from 'uuid';

import './index.css';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import ToDo from "./components/types/Todo";
import {findSourceMap} from "node:module";
import * as child_process from "node:child_process";

function App() {
    const [todos,setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
        async function getTodos() {
            const response = await fetch("http://localhost:3004/todos");
            const data = await response.json();
            setTodos(data);
        }
        getTodos();
    },[])

    //add todo callback from child to parent
    const addNewToDo = (data : string) => {
        console.log("Adding new to do list")
        const newTodo = {
            id : uuidv4(),
            name : data,
            done : false
        }
        setTodos([newTodo,...todos]);
    }

    const updateToDo = (newToDo:ToDo) => {
        const checkedToDo = todos.find(todo => todo.id === newToDo.id);
        if(checkedToDo){
            checkedToDo.done = newToDo.done;
            setTodos([...todos]);
        }
    }

    const deleteToDos = () => {
        const finishedToDo = todos.filter(todo => !todo.done)
        if(finishedToDo.length === todos.length){
            alert("No Item checked");
        }
        setTodos(finishedToDo);
    }

    //single delete
    const deleteToDoItem =(id : number | string) => {
        if (window.confirm("Are you sure you want to delete the item?")) {
            const deletedToDos = todos.filter(todo => todo.id !== id);
            setTodos(deletedToDos);
        }
    }

    //set all todo done
    const setAllTodoDoneUndone = (checkValue:boolean) => {
        console.log("my checked value ", checkValue);
        const newTodos = todos.map((todo) => {
                todo.done = checkValue;
            return todo;
        });
        setTodos(newTodos);
    }

  return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header onAddToDo={addNewToDo} />
          <List onUpdateToDo={updateToDo} onDeleteToDoItem={deleteToDoItem} items={todos} />
          <Footer onSetAllTodoDoneUndone={setAllTodoDoneUndone} onDeleteToDo={deleteToDos} todos={todos}  />
        </div>
      </div>
  );
}

export default App;
