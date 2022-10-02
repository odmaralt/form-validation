const LandingPage = ({ user }) => {
  return (
    <div>
      <div id="firstPage">
        {/* <p className="title">Hello {user.email}!</p> */}
        <div id="navBar">
          <p id="logo">team</p>
          <div id="navBarRight">
            <p>Products</p>
            <p>Services</p>
            <p>Contact</p>
            <p>Log In</p>
            <button id="getAccessButton">Get Access</button>
          </div>
        </div>
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
        <h2 className="header">Your Hub for teamwork </h2>
        <p className="paragraph">
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.{" "}
        </p>
        <a className="learnMore">Learn more</a>
        {/* <img src="/meetings.png" /> */}
      </div>
      <div id="thirdPage">
        <div>
          <img
            id="img3"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div>
          <h1 className="header">Simple task management</h1>
          <p className="paragraph">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className="learnMore">Learn more</a>
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
          <a className="learnMore">Learn more</a>
        </div>{" "}
        <div>
          <img
            id="img4"
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>
      <div id="fifthPage">
        <h1 id="lastHeader">What people say about us</h1>
        <div id="five">
          <div className="boxes">
            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="reviews">
              Give everyone you work with—inside and outside your emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <p className="reviewNames">Amy Klassen</p>
          </div>{" "}
          <div className="boxes">
            {" "}
            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="reviews">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>{" "}
            <p className="reviewNames">Jane Cooper</p>
          </div>{" "}
          <div className="boxes">
            {" "}
            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="reviews">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.{" "}
            </p>{" "}
            <p className="reviewNames">Eleanor Pena</p>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div id="allColumns">
          <div className="columns">
            <p id="logo2">team</p>
            <p>Instagram</p>
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
    </div>
  );
};

export default LandingPage;
