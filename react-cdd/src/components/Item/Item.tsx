
import React, {ChangeEvent} from 'react';
import './index.css';
import ToDo from "../types/Todo";

interface PropsType{
    id : number | string;
    name : string;
    done : boolean;
    onUpdateToDo : (newToDo : ToDo) => void;
    onDeleteToDoItem : (id : number | string) => void;
}


const Item = (props : PropsType) => {
    const {id,name,done,onUpdateToDo,onDeleteToDoItem} = props;
    const handleCheckBox = (e:ChangeEvent<HTMLInputElement>) => {
        onUpdateToDo({id,name,done:e.currentTarget.checked})
    }
    // const {data} = props;
    return (
        <>
            <li>
                <label>
                    <input type="checkbox" checked={done} onChange={handleCheckBox}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={() => onDeleteToDoItem(id)}>Delete</button>
            </li>
        </>
    )
}

export default Item;