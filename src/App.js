import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Blog from "./pages/BlogPage/BlogPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignInPage/SignIn";
// import { blogPostInfoArray } from "./data";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SignUpForm from "./pages/SignUp/SignUp";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import ContactPage from "./pages/ContactPage/ContactPage";
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
        <div>
          <Routes>
            <Route
              path="/"
              element={<LandingPage user={user} setUser={setUser} />}
            />

            <Route path="/products" element={<ProductsPage />} />
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/users" element={<UsersPage user={user} />} />

            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
