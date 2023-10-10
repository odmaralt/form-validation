/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PostsPage } from "./pages/PostsPage";
import { Blog } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { LandingPage } from "./pages/LandingPage";
import { SignIn } from "./pages/SignInPage";
import { SignUpForm } from "./pages/SignUp";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import CreatedAccountBox from "./pages/SignUp/CreatedAccount/CreatedAccountBox";
import { MyPostsPage } from "./pages/MyPostsPage/MyPostsPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { MyPostPage } from "./pages/MyPostPage/MyPostPage";
import { useUserProvider } from "./provider/UserProvider";

function App() {
  const { user } = useUserProvider();

  return (
    <div>
      <BrowserRouter>
        <div>
          {user && (
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/posts" element={<PostsPage user={user} />} />
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

              <Route path="/myPosts" element={<MyPostsPage />} />
              <Route path="/posts/:postId" element={<PostPage user={user} />} />
              <Route
                path="/myPosts/:postId"
                element={<MyPostPage user={user} />}
              />
            </Routes>
          )}

          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUpForm />} />
]            <Route path="/success-page" element={<CreatedAccountBox />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
