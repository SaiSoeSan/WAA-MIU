import React, {ChangeEvent, useState} from "react";
import './index.css';
import ToDo from "../types/Todo";

   type PropTypes = {
       onDeleteToDo : () => void;
       todos : ToDo[];
       onSetAllTodoDoneUndone : (checked:boolean) => void
   }

    export default function Footer(props : PropTypes){
        const {todos,onDeleteToDo,onSetAllTodoDoneUndone} = props;

        const checkChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
           //callback
            onSetAllTodoDoneUndone(e.currentTarget.checked);
        }

    return (

        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={checkChangeHandler}
                       checked={todos.length === todos.filter(todo => todo.done).length && todos.length !== 0}
                />
            </label>
            <span>
          <span>Finished {
              todos.filter(todo => todo.done).length
          }</span> / total {todos.length}</span>
            <button className="btn btn-danger" onClick={onDeleteToDo} >Delete Finished Tasks</button>
        </div>
    )
}