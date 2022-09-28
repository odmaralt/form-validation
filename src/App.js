import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/Sign-In";
import SignUpForm from "./components/SignUp/Sign-Up";

function App() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div>
      {signIn && <SignIn setSignIn={setSignIn} />}
      {!signIn && <SignUpForm setSignIn={setSignIn} />}
    </div>
  );
}

export default App;
