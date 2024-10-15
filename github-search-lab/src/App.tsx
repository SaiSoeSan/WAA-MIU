import React, {useState} from 'react';
import List from "./components/List/List";
import Header from "./components/Header/Header";
import User from "./components/types/User";
import axios from "axios";
import {searchUser} from "./apis/services/users.service";

function App() {
    const [users,setUsers] = useState<User[]>([]);

    const searchHandler = async (name :string) => {
        try {
            //call github search api
            const response = await searchUser(name);
            const data = await  response.data;
            //set users
            setUsers(data.items);
        }catch (e){
            throw new Error("Failed to search users")
        }
    }

  return (
      <div className="container">
        <Header onSearchHandler={searchHandler} />
        <List users={users} />
      </div>
  );
}

export default App;
