import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import { theme } from "./Theme";
import React from "react";
import "./ProductsPage.css";

const Product = ({
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
      {selectedBox === post.id && (
        <div>
          <div>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="neutral"
                style={{ marginLeft: "75px", marginRight: "15px" }}
                onClick={(e) => handleDeleteModalOpen(e, post)}
                className="productsButton"
              >
                Delete
              </Button>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="neutral"
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
