import React from "react";

type PropsType = {
    id : number;
    name : string;
    avatar_url : string;
    html_url : string;
}
const Item = (props : PropsType) => {
    const {id,name,avatar_url,html_url} = props;
    return (
        <div className="card">
            <a href={html_url} target="_blank">
                <img src={avatar_url} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{name}</p>
        </div>
    )
}

export default Item;