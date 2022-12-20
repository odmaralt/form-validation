import React from "react";
import { Team } from "./Icons/Team";
export const Footer = () => {
  return (
    <footer id="footer">
      <div id="allColumns">
        <div className="columns">
          <Team id="teamIcon2" /> <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="columns">
          <p className="firstP">Use Cases</p>
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
        </div>
        <div className="columns">
          <p className="firstP">Explore</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why I Love Figma</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why I Love Figma</p>
        </div>
        <div className="columns">
          <p className="firstP">Resources</p> <p>Community Resources Hub</p>
          <p>Support</p> <p>Education</p>
          <p>Community Resources Hub</p>
          <p>Support</p> <p>Education</p>
        </div>
        <div>
          <h1 id="subscribe">Subscribe to our newsletter</h1>
          <input id="footerInput" placeholder="Email"></input>
        </div>
      </div>
    </footer>
  );
};
