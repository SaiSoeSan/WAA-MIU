import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";
import Item from "./components/Item";
import PostItem from "./components/PostItem";

type User = {
  uid: string;
  // avator: string;
  uname: string;
};

type CommentDataType = {
  rpid: number;
  user: User;
  content: string;
  ctime: string;
  like: number;
};

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

  const [user, setUser] = useState<User>({
    // userid
    uid: "30009257",
    // profile
    // avatar: "",
    // username
    uname: "John",
  });

  const [filter, setFilter] = useState("");

  const [commentData, setCommentData] = useState<CommentDataType[]>([]);

  const fetchComments = async () => {
    const res = await fetch("http://localhost:3004/data");
    const result = await res.json();
    setCommentData(result.posts);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleFilter = (type: string) => {
    setFilter(type);
    if (filter === "top") {
      commentData.sort((a, b) => (b.like > a.like ? 1 : -1));
    } else {
      commentData.sort((a, b) => (b.ctime > a.ctime ? 1 : -1));
    }
  };

  const postHandler = (e: MouseEvent<HTMLDivElement>) => {
    const newComment = {
      rpid: commentData.length + 1,
      user: user,
      content: "",
      ctime: "10-19 09:00",
      like: 106,
    };
    if (filter === "newest") setCommentData([newComment, ...commentData]);
    else setCommentData([...commentData, newComment]);
    // setComment("");
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

  const [comment, setComment] = useState("");

  const commentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{commentData.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                onClick={() => handleFilter(tab.type)}
                className={`nav-item ${tab.type === filter ? "active" : ""}`}
                key={tab.type}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* <PostItem /> */}

        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea
              onChange={commentHandler}
              className="reply-box-textarea"
              placeholder="tell something..."
              value={comment}
            />
            <div className="reply-box-send" onClick={postHandler}>
              <div className="send-text">Post</div>
            </div>
          </div>
        </div>

        <div className="reply-list">
          <Item items={commentData} onDelete={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
