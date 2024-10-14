import React,{KeyboardEvent} from "react";
import './index.css';

export default function Header({onAddToDo}: {onAddToDo : (data : string) => void}) {

    const handleSubmit = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            const value = e.currentTarget.value.trim();
            if(!value){
                alert("Enter your task name!");
            }else{
                onAddToDo(value);
                e.currentTarget.value = '';
            }
        }
    }
    return (
        <div className="todo-header">
            <input type="text" placeholder="Enter task name" onKeyUp={handleSubmit} />
        </div>
    )
}