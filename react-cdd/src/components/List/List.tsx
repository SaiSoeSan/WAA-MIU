import React from 'react';
import Item from "../Item/Item";
import './index.css';
import ToDo from "../types/Todo";

type PropsType = {
    items: ToDo[];
    onUpdateToDo : (newTo:ToDo) => void;
    onDeleteToDoItem : (id : number | string) => void;
}


const List = (props:PropsType) => {
    const {items,onUpdateToDo,onDeleteToDoItem} = props;
    return (
        <ul className="todo-main">
            {
                items.map((item) => <Item onDeleteToDoItem={onDeleteToDoItem} onUpdateToDo={onUpdateToDo} {...item} key={item.id} />)
            }
        </ul>
    )
}

export default List;
