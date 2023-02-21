import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactTimeago from "react-timeago";
import "./chat.css";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";
function Chat({ key, id, username, timestamp, imageUrl, read, profilePic }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      navigate("/chats/view");
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && `Tap to view: `}
          <ReactTimeago
            live={false}
            date={new Date(timestamp?.toDate()).toUTCString()}
          />
        </p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
