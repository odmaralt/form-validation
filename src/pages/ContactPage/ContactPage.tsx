import "./ContactPage.css";
import React from "react";
import { Name } from "../../components/Form-Inputs";
import { Header, Footer } from "../../components";
import { Button2 } from "../../components/Form-Inputs";
import { Email } from "../../components/Form-Inputs";
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
        <Header whiteFont={true} user={user} />
        <div id="contactDiv">
          <p id="title">Contact Us</p>
          <Name handleChange={handleInputChange} />
          <Email handleChange={handleInputChange} />
          <input id="howWeCanHelp" placeholder="How can we help you?"></input>
          <Button2 text={"Submit"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
