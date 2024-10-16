import React from 'react';
import {NavLink, Routes, Route} from "react-router-dom";
import './index.css'
import Home from "./components/Home";
import Post from "./components/Post/Post";
import PostList from "./components/Post/PostList";
import PostDetail from "./components/Post/PostDetail";
import EditPost from "./components/Post/EditPost";

function App() {
  return (
      <>
        <nav>
            <NavLink style={{margin:"5px"}} to="/" end >Home</NavLink>
            <NavLink to="/posts" end >Posts</NavLink>
      </nav>

          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/posts" element={<Post />}>
                  <Route index element={<PostList />}></Route>
                  <Route path=":slug" element={<PostDetail />} ></Route>
                  <Route path=":id/edit" element={<EditPost />}></Route>
              </Route>
          </Routes>
    </>
  );
}

export default App;
