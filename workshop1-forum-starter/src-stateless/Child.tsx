import avatar from "./images/bozai.png";
import React, { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import "./App.scss";

type Tab = {
  type: string;
  text: string;
};

type User = {
  uid: string;
  avator: string;
  uname: string;
};

/*

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

*/

type CommentData = {
  user: User;
  content: string;
  ctime: string;
  like: number;
};

type PropTypes = {
  commentData: CommentData[];
  tabs: Tab[];
  user: User;
};

export default function Child(props: PropTypes) {
  const { commentData, tabs, user } = props;
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
            {tabs.map((tab) => (
              <span
                onClick={}
                className={`nav-item ${tab.type === filter ? "active" : ""}`}
                key={tab.type}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      {/* <div className="reply-wrap">
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
          {commentData.map((data) => (
            <div key={data.rpid} className="reply-item">
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" alt="" />
                </div>
              </div>

              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{user.uname}</div>
                </div>
                <div className="root-reply">
                  <span className="reply-content">{data.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">{data.ctime}</span>
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
      </div> */}
    </div>
  );
}
