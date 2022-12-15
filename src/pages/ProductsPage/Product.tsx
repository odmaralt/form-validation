import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import { Theme } from "./Theme";
import React from "react";
import "./ProductsPage.css";

type Post = {
  id: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  image: string;
  text: string;
  likes: number;
  tags: string[];
};

interface ProductProps {
  post: Post;
  key: string;
  handleClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
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
const Product: React.FC<ProductProps> = ({
  post,
  handleClick,
  selectedBox,
  handleDeleteModalOpen,
  handleUpdateModalOpen,
}) => {
  return (
    <div key={post.id}>
      <div id="productsDivs" onClick={(e) => handleClick(e, post.id)}>
        <div id="productName">
          <h1>
            {post.owner.firstName} {post.owner.lastName}
          </h1>
        </div>
        <img
          id="productImages"
          width={"100%"}
          height={"180px"}
          src={post.image}
          alt="dog"
        />
        <h2> {post.text}</h2>

        <h2>{post.likes} likes</h2>
        <h3>{post.tags}</h3>
      </div>
      {selectedBox && selectedBox.id === post.id && (
        <div>
          <div>
            <ThemeProvider theme={Theme}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "75px", marginRight: "15px" }}
                onClick={(e) => handleDeleteModalOpen(e, post)}
                className="productsButton"
              >
                Delete
              </Button>
            </ThemeProvider>

            <ThemeProvider theme={Theme}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleUpdateModalOpen(e, post)}
                className="productsButton"
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
