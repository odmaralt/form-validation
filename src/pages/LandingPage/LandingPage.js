import React from "react";
import Header from "../../components/Header";
import Calendar3 from "../../components/Icons/Calendar3";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import Event from "../../components/Icons/Event";
import Event2 from "../../components/Icons/Event2";
import Event3 from "../../components/Icons/Event3";
import { MeetingsIcon } from "../../components/Icons/MeetingsIcon";
import Star from "../../components/Icons/Star";
import "./LandingPage.css";

const LandingPage = ({ user, setUser }) => {
  return (
    <div>
      <div id="firstPage">
        {/* <p className="title">Hello {user.email}!</p> */}
        <Header user={user} />
        <h1 id="collab">Instant collaborations for remote teams</h1>
        <h1 id="allInOne">
          All in one for your remote team chats, collaboration and track
          projects
        </h1>
        <div id="inputAndButtonDiv">
          <input id="inputs" placeholder="Email"></input>
          <button id="buttons">Get early access</button>
        </div>
      </div>
      <div id="secondPage">
        <div id="page2">
          <h2 className="header">Your Hub for teamwork </h2>
          <p className="paragraph">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.{" "}
          </p>
          <p className="learnMore">Learn more</p>
          <div id="page2Meeting">
            <MeetingsIcon id="meetingIcon" />
            <div id="iconPositions">
              <Event id="eventIcon" />
            </div>
            <div>
              <CalendarIcon id="calendarIcon" />
            </div>
          </div>
        </div>
      </div>
      <div id="thirdPage">
        <div id="display:flex">
          <img
            alt="woman holding ipad"
            id="img3"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <Event2 id="event2" />
          <Event3 id="event3" />
        </div>
        <div id="simpleTask">
          <h1 className="header">Simple task management</h1>
          <p className="paragraph">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <p className="learnMore">Learn more</p>
        </div>
      </div>
      <div id="fourthPage">
        <div>
          <h1 className="header">Scheduling that actually works</h1>
          <p className="paragraph">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <p className="learnMore">Learn more</p>
        </div>{" "}
        <div>
          <Calendar3 id="calendar3" />
          <img
            alt="man laughing"
            id="img4"
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>
      <div id="fifthPage">
        <h1 id="lastHeader">What people say about us</h1>
        <div id="five">
          <div className="boxes" id="firstReview">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
          <div className="boxes">
            {" "}
            <Star className="stars" />{" "}
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <div className="reviewPersons">
              <img
                className="reviewImg"
                alt="person"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              />
              <p className="reviewNames">Eleanor Pena</p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
