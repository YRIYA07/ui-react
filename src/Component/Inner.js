import { Chip, Divider, IconButton } from "@material-ui/core";
import {
  Add,
  ArrowDropDown,
  CallOutlined,
  InsertEmoticon,
  Link,
  Menu,
  MoreHoriz,
  NotificationsNone,
  PersonAdd,
  Search,
  Send,
  StarBorder,
  VideocamOutlined,
} from "@material-ui/icons";
import React from "react";
import Feed from "./Feed";
import people from "../UserData";
import Message from "./Message";
import "../CSS/Inner.css";
import Number from "./Number";


function Inner(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const inboxField=[
    {
      name:"All",
      label:11
    },
    {
      name:"Message",
      label:99
    }
  ]

  const [contactImage, setContactImage] = React.useState(
    "https://media.istockphoto.com/photos/wise-bald-happy-man-posing-for-a-photo-picture-id157433378?k=6&m=157433378&s=612x612&w=0&h=zp6-lXhLKZNytLyosqwiRON0h4SnXZWszpZ41uwcOAY="
  );

  const [contactName, setContactName] = React.useState("Matt Thompson");
  const [contactCity, setContactCity] = React.useState("Cape Town , RSA");
  const [userMessage, setUserMessage] = React.useState(0);
  const changeContactInfo = (e, name, id, city) => {
    setContactImage(e);
    setContactName(name);
    setUserMessage(id);
    setContactCity(city);
  };
  return (
    <div className="inner">
      <div className="part__1">
        <div className="part__1__row menu__row">
          <Menu className="menu__icon" size="large" />
        </div>
        <div style={{marginTop:'18px'}} className="part__1__row">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
            alt=""
          />
        </div>
        <div className="part__1__row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
            alt=""
          />
        </div>
        <div className="part__1__row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
            alt=""
          />
        </div>
        <div className="part__1__row">
          <img
            src="https://i.pinimg.com/originals/9a/d4/fa/9ad4fafc0de3b0adf413e3f3bdbd30e7.png"
            alt=""
          />
        </div>
        <div className="part__1__row">
          <Add className="icon" size="large" />
        </div>
      </div>
      <div className="part__2">
        <div className="part__2__header">
          <h2>Inbox</h2>
          <PersonAdd />
        </div>
        <div className="part__2__main">
          {
            inboxField.map((item)=>{
              return (
              <Number name={item.name} label={ item.label}/>
              )
            })
            
          }
          


          {/* <div className="part__2__main__row">
            <h5>All</h5>
            <Chip label="89" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Messages</h5>
            <Chip label="11" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Unread</h5>
            <Chip label="4" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Important</h5>
            <Chip label="1" size="small" />
          </div>
          <Divider />
          <div className="part__2__main__row">
            <h5>Teams</h5>
            <Chip label="2" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Groups</h5>
            <Chip label="4" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Channels</h5>
            <Chip label="2" size="small" />
          </div>
          <div className="part__2__main__row">
            <h5>Locations</h5>
          </div>
          <div className="part__2__main__row">
            <h5>Media</h5>
            <Chip label="88" size="small" />
          </div> */}
          <Divider />
          <div className="part__2__main__row">
            <h5>Help</h5>
          </div>
          <div className="part__2__main__row">
            <h5>Settings</h5>
          </div>
        </div>
      </div>
      <div className="part__3">
        <div className="part__3__header">
          <div className="part__3__header__search">
            <Search />
            <input type="text" placeholder="Search" onChange={handleChange} />
          </div>
        </div>
        <div className="part__3__main">
          {searchResults.map((item) => {
            return (
              <Feed
                active={item.active}
                clicked={() =>
                  changeContactInfo(item.image, item.name, item.id, item.city)
                }
                name={item.name}
                message={item.message}
                src={item.image}
                lastMessage={item.lastMessage}
              />
            );
          })}
        </div>
      </div>
      <div className="part__4">
        <div className="example">
          <div className="part__4__header">
            <div className="part__4__header__text">
              <strong>{contactName}</strong> <span>is typing...</span>
            </div>
            <div className="part__4__header__buttons">
              <StarBorder fontSize="small" />
              <CallOutlined fontSize="small" />
              <VideocamOutlined fontSize="small" />
            </div>
          </div>
          <div className="part__4__main">
            {people[userMessage].messages.map((m) => {
              return (
                <Message
                  me={m.me}
                  userSrc={!m.me ? contactImage : props.src}
                  time={m.time}
                  message={m.message}
                  image={m.image}
                />
              );
            })}
          </div>
        </div>
        <div className="part__4__footer">
          <Link fontSize="small" />
          <input type="text" placeholder="Type your message..." />
          <InsertEmoticon fontSize="small" />
          <IconButton className="part__4__footer__send__button">
            <Send />
          </IconButton>
        </div>
      </div>
      <div className="part__5">
        <div className="part__5__header">
          <NotificationsNone size="small" />
          <div className="part__5__header__username">
            <h5>Johan Horn</h5>
            <ArrowDropDown />
          </div>
        </div>
        <div className="part__5__top__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
            alt=""
          />
          <MoreHoriz />
        </div>
        <div className="part__5__user__info">
          <img src={contactImage} alt="" />
          <h2>{contactName}</h2>
          <h6>{contactCity}</h6>
        </div>
        <Divider />
        <div className="part__5__user__info__2">
          {people[userMessage].userContactInfo.map((info) => {
            return (
              <div className="part__5__user__info__2__row">
                <h3>{info.title}</h3>
                <h3>{info.info}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inner;
