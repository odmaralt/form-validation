import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
// import { auth } from "./firebase";
import Blog from "./pages/BlogPage/BlogPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignInPage/SignIn";
// import { blogPostInfoArray } from "./data";
import Header from "./components/Header";
import SignUpForm from "./pages/SignUp/SignUp";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
const PostPage = () => {
  // postpage is function  that takes nothing

  // after selectedpost return the div
  // its going to have an object selectedPost its index 0 and the title
  return <ArticlePage />;
};

function App() {
  const [user, setUser] = useState();
  // if (auth.onAuthStateChanged) {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }
  return (
    <div>
      <BrowserRouter>
        {user && (
          <div>
            <Routes>
              <Route
                path="/"
                element={<LandingPage user={user} setUser={setUser} />}
              />
              <Route
                path="/products"
                element={
                  <div>
                    {" "}
                    <Header />
                    <p>hello from Product page</p>
                  </div>
                }
              />
              <Route
                path="/services"
                element={
                  <div id="blogDiv">
                    <Blog user={user} />
                  </div>
                }
              />
              {/* routes path is services the elements div id is blogdiv and inside the div is Blog where user equals user  */}
              <Route path="/services/:id" element={<PostPage />} />
              {/* the next routes path is services colon id, the element is the post page function we have  */}
              <Route
                path="/contact"
                element={
                  <div>
                    <Header />
                    <p>hello from contact page</p>
                  </div>
                }
              />
            </Routes>
            <Footer />
          </div>
        )}
        {!user && (
          <Routes>
            <Route path="/" element={<SignIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
