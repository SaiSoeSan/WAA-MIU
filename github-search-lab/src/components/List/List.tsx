import React from "react";
import Item from "../Item/Item";
import User from "../types/User";

type PropTypes = {
    users : User[]
}

const List = ({users}:PropTypes) => {
    return (
        <div className="row">
            {
                users.length > 0 && users.map(user => <Item key={user.id} {...user} />)
            }
            {
                users.length === 0 && <h4>No users found</h4>
            }
        </div>
    )
}

export default List;