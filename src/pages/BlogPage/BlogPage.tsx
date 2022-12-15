import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SearchBar, BlogCard, Footer } from "../../components";
import { blogPostInfoArray } from "../../data";
import "./BlogPage.css";
interface IBlog {
  user: boolean | undefined;
}
export const Blog: React.FC<IBlog> = ({ user }) => {
  const [searchBar, setSearchBar] = useState("");
  const [blogPosts, setBlogPosts] = useState(blogPostInfoArray);

  const handleSearch = () => {
    if (searchBar.length === 1) {
      setBlogPosts(blogPosts);
    } else {
      setBlogPosts(
        blogPosts.filter((blog) => {
          return blog.title.toLowerCase().includes(searchBar.toLowerCase());
        })
      );
    }
  };

  const handleSearchBar = (value: string) => {
    setSearchBar(value);
    handleSearch();
  };
  // declare navigate and it is equal to usenavigate
  // what is useNavigate
  // declare handle blog click and it is function that takes id and uses navigate that takes sservicess and id in tick quotes
  const navigate = useNavigate();
  const handleBlogClick = (id: string) => {
    navigate(`/services/${id}`);
  };
  return (
    <div>
      <Header whiteFont={true} user={user} />
      <div id="searchAndTitle">
        <p id="blogPosts">Blog posts</p>
        <SearchBar searchBar={searchBar} handleSearchBar={handleSearchBar} />
      </div>

      <p id="blogParagraph">
        Our latest updates and blogs about managing your team
      </p>
      <div id="blogSpacing">
        {blogPosts.map((blog) => {
          return <BlogCard key={blog.id} {...blog} onClick={handleBlogClick} />;
          // blog card onclick is handleBlogClick
          // its key equals object blogs id
        })}
      </div>
      <Footer />
    </div>
  );
};
