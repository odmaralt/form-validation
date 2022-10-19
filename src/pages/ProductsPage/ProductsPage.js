import React, { useEffect, useState } from "react";
import "./ProductsPage.css";
import Header from "../../components/Header";
import axios from "axios";
import Modal from "react-modal";
import DeleteModal from "../../components/DeleteModal";
import UpdateModal from "../../components/UpdateModal";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0991f1",
      darker: "#053e85",
    },
    neutral: {
      main: " rgb(255, 180, 221)",
      contrastText: "#fff",
    },
  },
});

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openUpdateModal() {
    setUpdateModalIsOpen(true);
  }

  function closeUpdateModal() {
    setUpdateModalIsOpen(false);
  }

  const [selectedBox, setSelectedBox] = useState();
  const [deleteBox, setDeleteBox] = useState();
  const [updateBox, setUpdateBox] = useState();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyapi.io/data/v1/post?limit=20", {
        headers: { "app-id": "6347516f7580f73d9c69995c   " },
      })
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, [200]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setSelectedBox(id);
    setIsActive((current) => !current);
  };
  const handleDeleteModalOpen = (e, post) => {
    e.preventDefault();
    setDeleteBox(post);
    openModal();
  };
  const handleUpdateModalOpen = (e, post) => {
    e.preventDefault();
    setUpdateBox(post);
    openUpdateModal();
  };

  return (
    <div id="productsPage">
      <Header />
      {loading && <div>...Loading</div>}
      <div id="wholeProductDiv">
        {!loading &&
          data.length > 1 &&
          data?.map((post) => {
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
                          style={{marginLeft:"75px", marginRight:"15px"}}
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
          })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DeleteModal deleteBox={deleteBox} closeModal={closeModal} />
      </Modal>
      <Modal
        isOpen={updateModalIsOpen}
        onRequestClose={closeUpdateModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <UpdateModal
          updateBox={updateBox}
          closeUpdateModal={closeUpdateModal}
        />
      </Modal>
    </div>
  );
};
export default ProductsPage;
