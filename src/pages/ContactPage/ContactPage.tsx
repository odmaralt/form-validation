import "./ContactPage.css";
import React from "react";
import { Header, Footer, Button2, Email, Name } from "../../components";
interface IContactPage {
  user: boolean | undefined;
}
export const ContactPage: React.FC<IContactPage> = ({ user }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };
  return (
    <div>
      <div id="contactPage">
        <Header whiteFont={true} />
        <div id="contactDiv">
          <p id="title">Contact Us</p>
          <Name placeholder="Name*" handleChange={handleInputChange} />
          <Email handleChange={handleInputChange} />
          <input id="howWeCanHelp" placeholder="How can we help you?"></input>
          <Button2 text={"Submit"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
