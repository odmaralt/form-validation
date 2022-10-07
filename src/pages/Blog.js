import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { blogPostInfoArray } from "../data";
import "./Blog.css";

const BlogCard = ({
  imgSrc,
  title,
  subTitle,
  name,
  date,
  avatar,
  id,
  onClick,
}) => {
  return (
    <div
      id="blogDivs"
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      style={{ cursor: "pointer" }}
    >
      <img
        id="imagePeopleTalking"
        alt="meetings"
        height={"147px"}
        width={"300px"}
        src={imgSrc}
      />
      <p className="blogHeader">{title}</p>
      <p className="blogParagraphs">{subTitle}</p>
      <div id="avatarDiv">
        {avatar}
        <p>{name}</p>
        <p>|</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

const Blog = ({ user }) => {
  // declare navigate and it is equal to usenavigate
  // what is useNavigate
  // declare handle blog click and it is function that takes id and uses navigate that takes sservicess and id in tick quotes
  const navigate = useNavigate();
  const handleBlogClick = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div>
      <Header whiteFont={true} user={user} />
      <p id="blogPosts">Blog posts</p>
      <p id="blogParagraph">
        Our latest updates and blogs about managing your team
      </p>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          width: "90vw",
        }}
      >
        {blogPostInfoArray.map((blog) => {
          return <BlogCard key={blog.id} {...blog} onClick={handleBlogClick} />;
          // blog card onclick is handleBlogClick
          // its key equals object blogs id
        })}
      </div>
    </div>
  );
};
export default Blog;
