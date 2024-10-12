import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";

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
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              onChange={commentHandler}
              className="reply-box-textarea"
              placeholder="tell something..."
              value={comment}
            />
            {/* post button */}
            <div className="reply-box-send" onClick={postHandler}>
              <div className="send-text">Post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {commentData.map((data) => (
            <div key={data.rpid} className="reply-item">
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img src={avatar} className="bili-avatar-img" alt="" />
                </div>
              </div>

              <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                  <div className="user-name">{data.user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                  <span className="reply-content">{data.content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{data.ctime}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{data.like}</span>
                    <span
                      onClick={() => deleteHandler(data.rpid)}
                      className="delete-btn"
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
