import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";

import "../CSS/Message.css";

function Message(props) {
  return props.me ? (
    <div className="message__me">
      <div className="message__avatar">
        <Avatar src={props.userSrc} />
        <h5>{props.time}</h5>
      </div>
      {props.image ? (
        <div className="message__content">
          <img src={props.image} alt="" />
          <div className="message__content__image__banner">
            <h6> 50 Shades of Grey / Romance</h6>
            <Rating name="size-medium" defaultValue={5} size="small" />
          </div>
          <h5>{props.message}</h5>
          <button>View</button>
        </div>
      ) : (
        <div className="message__content">
          <h5>{props.message}</h5>
        </div>
      )}
    </div>
  ) : (
    <div className="message">
      <div className="message__avatar">
        <Avatar src={props.userSrc} />
        <h5>{props.time}</h5>
      </div>
      <div className="message__content">
        <h5>{props.message}</h5>
      </div>
    </div>
  );
}

export default Message;
