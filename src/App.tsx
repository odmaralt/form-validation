/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductsPage } from "./pages/ProductsPage";
import { Blog } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { LandingPage } from "./pages/LandingPage";
import { SignIn } from "./pages/SignInPage";
import { SignUpForm } from "./pages/SignUp";
import { ArticlePage } from "./pages/ArticlePage";
import { UsersPage } from "./pages/UsersPage/UsersPage";

function App() {
  const [user, setUser] = useState<boolean>();
  const PostPage = () => {
    // postpage is function  that takes nothing
    // after selectedpost return the div
    // its going to have an object selectedPost its index 0 and the title
    return <ArticlePage user={user} />;
  };
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

            <Route path="/products" element={<ProductsPage user={user} />} />
            <Route
              path="/services"
              element={
                <div id="blogDiv">
                  <Blog user={user} />
                </div>
              }
            />
            {/* routes path is services the elements div id is blogdiv and inside the div is Blog where user equals user  /}
            <Route path="/services/:id" element={<PostPage />} />
            {/ the next routes path is services colon id, the element is the post page function we have  */}
            <Route path="/contact" element={<ContactPage user={user} />} />
            <Route path="/users" element={<UsersPage user={user} />} />

            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
            <Route
              path="/sign-up"
              element={<SignUpForm setSignIn={setUser} />}
            />
            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
