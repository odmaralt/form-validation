/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from "react";
import {
  DeleteModal,
  Footer,
  Header,
  Notification,
  UpdateModal,
} from "../../components";
import "./MyPostPage.css";
import Button from "@mui/material/Button";
import { Theme } from "../PostsPage/Theme";
import { Modal } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import { useParams } from "react-router";
import { useUserProvider } from "../../provider/UserProvider";
import { EditCommentModal } from "./EditComment";
interface IMyPostPage {
  user: boolean | undefined;
}

interface Post {
  _id: string;
  image: string;
  text: string;
  title: string;
  ownerId: string;
}
interface Comment {
  _id: string;
  message: string;
  postId: string;
  ownerId: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

const fetchMyPostData = async (postId: string) => {
  return await axios.get(`http://localhost:5454/posts/${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const fetchCommentData = async (postId: string) => {
  return await axios.get(`http://localhost:5454/posts/${postId}/comments`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const MyPostPage: React.FC<IMyPostPage> = ({ user }) => {
  const { userId } = useUserProvider();
  const { postId } = useParams() as {
    postId: string;
  };
  const initialValues = {
    message: "",
    postId: postId,
    ownerId: userId,
  };

  const [commentData, setCommentData] = useState<
    Array<{
      _id: string;
      message: string;
      postId: string;
      ownerId: {
        _id: string;
        firstName: string;
        lastName: string;
      };
    }>
  >();

  const [deleteModalIsOpen, setDeleteModalIsOpen] =
    React.useState<boolean>(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] =
    React.useState<boolean>(false);
  const [editCommentModalIsOpen, setEditCommentModalIsOpen] =
    React.useState<boolean>(false);
  const [deleteBox, setDeleteBox] = useState<Post>();
  const [updateBox, setUpdateBox] = useState<Post>({
    _id: "",
    text: "",
    title: "",
    ownerId: "",
    image: "",
  });

  const [modalState, setModalState] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const [data, setData] = useState<Post>({
    _id: "",
    text: "",
    title: "",
    ownerId: "",
    image: "",
  });
  const [formValues, setFormValues] = useState<object>(initialValues); // formvalues takes initial values

  const [commentInfo, setCommentInfo] = useState<Comment>({
    _id: "",
    message: "",
    postId: "",
    ownerId: { _id: "", firstName: "", lastName: "" },
  }); // formvalues takes initial values
  const createComment = async (comments: object) => {
    return await axios.post("http://localhost:5454/comments", comments, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    fetchMyPostData(postId)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchCommentData(postId)
      .then((response) => {
        setCommentData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const openDeleteModal = (text: string) => {
    setDeleteModalIsOpen(true);
    setModalState(text);
  };
  const openEditCommentModal = () => {
    setEditCommentModalIsOpen(true);
  };
  const closeEditCommentModal = () => {
    setEditCommentModalIsOpen(false);
  };
  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    openDeleteModal("delete"); // opens create modal
  };
  const handleEditCommentModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    comment: Comment
  ) => {
    e.preventDefault();
    openEditCommentModal();
    setCommentInfo(comment);
  };
  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };
  const handleUpdateModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: Post
  ) => {
    e.preventDefault();
    setUpdateBox(post); // opens specific post clicked to update
    setUpdateModalIsOpen(true); // opens update modal
  };
  const handleCreateButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); //  prevents page from refreshing after every change
    const values = {
      ...formValues,
    };
    await createComment(values)
      .then((response) => {
        setTimeout(() => {
          setCreateSuccess(true);
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      }); //  if theres error, catch it and consolelog err
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleDelete = async (comment: Comment) => {
    await axios
      .delete(`http://localhost:5454/comments/${comment._id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDeleteSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => console.log(err));
  };
  const handleUpdate = async (comment: Comment) => {
    await axios
      .put(`http://localhost:5454/comments/${comment._id}`, formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUpdateSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="myPostPage">
        <Header whiteFont />
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleUpdateModalOpen(e, data)}
            id="updateButton"
          >
            Update
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={Theme}>
          <Button
            variant="contained"
            color="primary"
            id="deleteButton"
            className="postsButton"
            onClick={(e) => handleDeleteModalOpen(e)}
          >
            Delete
          </Button>
        </ThemeProvider>
        <div id="myPost">
          <div id="postDivs">
            <div id="postName">
              <h1>{data?.title}</h1>
            </div>
            <img
              id="postImages"
              width={"100%"}
              height={"180px"}
              src={data?.image}
              alt="city"
            />
            <h2>{data?.text}</h2>
          </div>{" "}
        </div>
        <div id="commentDiv">
          <div id="commment">
            <input
              id="commentInput"
              placeholder="Comment"
              name="message"
              onChange={handleInputChange}
            ></input>
            <button onClick={(e) => handleCreateButton(e)}>Post</button>
          </div>
          <div id="allCommentsDiv">
            <div>
              {commentData?.map((comment: Comment) => (
                <div id="eachCommentDiv" key={comment._id}>
                  <div id="leftComment">
                    <div id="fullName">
                      <b>
                        {comment.ownerId?.firstName} {comment.ownerId?.lastName}
                      </b>
                    </div>

                    <div>{comment.message}</div>
                  </div>

                  {comment.ownerId?._id === userId && (
                    <div id="commentButtonsDiv">
                      <button
                        onClick={(e) => handleEditCommentModalOpen(e, comment)}
                      >
                        Edit
                      </button>{" "}
                      <button onClick={() => handleDelete(comment)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {success && (
        <Notification
          text="You have successfully created a post"
          type="success"
        />
      )}
      {deleteSuccess && (
        <Notification
          text="You have successfully deleted a post"
          type="success"
        />
      )}
      <EditCommentModal
        commentInfo={commentInfo}
        handleUpdate={handleUpdate}
        handleInputChange={handleInputChange}
        editCommentModalIsOpen={editCommentModalIsOpen}
        closeUpdateModal={closeEditCommentModal}
      />

      <DeleteModal
        open={deleteModalIsOpen}
        deleteBox={deleteBox}
        closeModal={closeModal}
        setSuccess={setSuccess}
      />
      <UpdateModal
        updateBox={updateBox}
        open={updateModalIsOpen}
        setUpdateSuccess={setUpdateSuccess}
        closeUpdateModal={closeUpdateModal}
      />
      {updateSuccess && (
        <Notification
          text="You have successfully updated the post"
          type="success"
        />
      )}
      {createSuccess && (
        <Notification
          text="You have successfully created a comment"
          type="success"
        />
      )}
    </>
  );
};
