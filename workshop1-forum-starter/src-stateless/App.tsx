import React, { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import "./App.scss";
import Child from "./Child";
import avatar from "./images/bozai.png";


// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 89,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];

function App() {
  const [tabs, setTabs] = useState([
    { type: "top", text: "Top" },
    { type: "newest", text: "Newest" },
  ]);

  const [user, setUser] = useState({
    // userid
    uid: "30009257",
    // profile
    avatar,
    // username
    uname: "John",
  });

  const [filter, setFilter] = useState("");

  const [commentData, setCommentData] = useState(defaultList);

  const handleFilter = (type: string) => {
    setFilter(type);
    if (filter === "top") {
      commentData.sort((a, b) => (b.like > a.like ? 1 : -1));
    } else {
      commentData.sort((a, b) => (b.ctime > a.ctime ? 1 : -1));
    }
  };

  const [comment, setComment] = useState("");

  const commentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const postHandler = (e: MouseEvent<HTMLDivElement>) => {
    const newComment = {
      rpid: commentData.length + 1,
      user: user,
      content: comment,
      ctime: "10-19 09:00",
      like: 106,
    };
    if (filter === "newest") setCommentData([newComment, ...commentData]);
    else setCommentData([...commentData, newComment]);
    setComment("");
  };

  const deleteHandler = (id: number) => {
    const foundItem = commentData.find((item) => item.rpid === id);
    if (foundItem?.user.uname === user.uname) {
      const updatedCommentData = commentData.filter((item) => item.rpid !== id);
      setCommentData(updatedCommentData);
    } else {
      alert("Unauthorized");
    }
  };

  return <Child commentData={commentData} tabs={tabs} user={user} />;
}

export default App;
