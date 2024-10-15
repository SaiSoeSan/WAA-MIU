import React from "react";
import avatar from "../images/bozai.png";

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

interface commentType {
  items: CommentDataType[];
  onDelete: (id: number) => void;
  user : User
}

export default function Item(props: commentType) {
  const { items, onDelete, user } = props;
  return (
    <>
      {items.map((data) => (
        <div key={data.rpid} className="reply-item">
          {/* profile */}
          <div className="root-reply-avatar">
            <div className="bili-avatar">
              <img src={avatar} className="bili-avatar-img" alt="" />
            </div>
          </div>

          <div className="content-wrap">
            <div className="user-info">
              <div className="user-name">{data.user.uname}</div>
            </div>
            <div className="root-reply">
              <span className="reply-content">{data.content}</span>
              <div className="reply-info">
                <span className="reply-time">{data.ctime}</span>
                <span className="reply-time">Like:{data.like}</span>
                {
                    data.user.uid === user.uid && <span
                        onClick={() => onDelete(data.rpid)}
                        className="delete-btn"
                    >
                  Delete
                </span>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
