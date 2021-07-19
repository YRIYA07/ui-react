import { Avatar, Badge } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import "../CSS/Feed.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#777",
    right: 40,
    top: 10,
    border: `4px solid #222`,
  },
}))(Badge);
const ActiveStyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "rgb(60, 241, 60)",
    right: 40,
    top: 10,
    border: `4px solid #222`,
  },
}))(Badge);

function Feed(props) {
  return (
    <div className="feed" onClick={props.clicked}>
      {props.active ? (
        <ActiveStyledBadge badgeContent={""}>
          <Avatar src={props.src} className="feed__avatar" />
        </ActiveStyledBadge>
      ) : (
        <StyledBadge badgeContent={""}>
          <Avatar src={props.src} className="feed__avatar" />
        </StyledBadge>
      )}

      <div className="feed__info">
        <div className="feed__info__row1">
          <h4>{props.name}</h4>
          <h6>{props.message}</h6>
        </div>
        <div className="feed__info__row2">
          <MoreHoriz />
          <h3 style={{color:'#666'}}>{props.lastMessage}</h3>
        </div>
      </div>
    </div>
  );
}

export default Feed;
