import "./ContactPage.css";
import React from "react";
import { Name } from "../../components/Form-Inputs";
import { Header } from "../../components";
import { Button } from "../../components/Form-Inputs";
import { Email } from "../../components/Form-Inputs";
const ContactPage = (user) => {
  return (
    <div id="contactPage">
      <Header whiteFont={false} user={user} />
      <div id="contactDiv">
        <p id="title">Contact Us</p>
        <Name />
        <Email />
        <input id="howWeCanHelp" placeholder="How can we help you?"></input>
        <Button text={"Submit"} />
      </div>
    </div>
  );
};
export default ContactPage;
