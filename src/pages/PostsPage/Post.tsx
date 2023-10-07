import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import { Theme } from "./Theme";
import React from "react";
import "./PostsPage.css";
import { useUserProvider } from "../../provider/UserProvider";

interface Post {
  _id: string;
  image: string;
  text: string;
  title: string;
  ownerId: string;
}

interface PostProps {
  post: Post;
  key: string;
  handleClick: (id: string) => void;
  selectedBox: Post | undefined;
  handleDeleteModalOpen: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: Post
  ) => void;
  handleUpdateModalOpen: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: Post
  ) => void;
}
const Product: React.FC<PostProps> = ({
  post,
  handleClick,
  key,
  selectedBox,
  handleDeleteModalOpen,
  handleUpdateModalOpen,
}) => {
  return (
    <div key={post._id}>
      <div id="postsDivs" onClick={() => handleClick(post._id)}>
        <div id="postName">
          <h1>{post.title}</h1>
        </div>
        <img
          id="postImages"
          width={"86%"}
          height={"180px"}
          src={post.image}
          alt="dog"
        />
        <div id="textDiv">{post.text}</div>
      </div>
      {selectedBox != null && selectedBox._id === post._id && (
        <div>
          <div>
            <ThemeProvider theme={Theme}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "75px", marginRight: "15px" }}
                onClick={(e) => handleDeleteModalOpen(e, post)}
                className="postsButton"
              >
                Delete
              </Button>
            </ThemeProvider>

            <ThemeProvider theme={Theme}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleUpdateModalOpen(e, post)}
                className="postsButton"
              >
                Update
              </Button>
            </ThemeProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
