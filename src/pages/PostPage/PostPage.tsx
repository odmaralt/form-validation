/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import "./PostPage.css";
import axios from "axios";
import { useParams } from "react-router";
import { useUserProvider } from "../../provider/UserProvider";
interface IPostPage {
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
  ownerId: string;
  postId: string;
}
const fetchPostData = async (postId: string) => {
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

export const PostPage: React.FC<IPostPage> = ({ user }) => {
  const [data, setData] = useState<{
    image: string;
    ownerId: string;
    text: string;
    title: string;
  }>();

  const [commentData, setCommentData] = useState<
    Array<{
      _id: string;
      message: string;
      ownerId: string;
      postId: string;
    }>
  >();
  const { userId } = useUserProvider();

  const { postId } = useParams() as { postId: string };
  const initialValues = {
    message: "",
    postId: postId,
    ownerId: userId,
  };
  useEffect(() => {
    fetchPostData(postId)
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
  const [formValues, setFormValues] = useState<object>(initialValues); // formvalues takes initial values
  const createComment = async (comments: object) => {
    return await axios.post("http://localhost:5454/comments", comments, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleCreateButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); //  prevents page from refreshing after every change
    const values = {
      ...formValues,
    };

    //  form values tags converts string into array by splitting it by the commas
    await createComment(values)
      .then((response) => {
        setTimeout(() => {
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
  return (
    <div id="postPage">
      <Header whiteFont />
      <div id="post">
        <div id="postDivs">
          <div id="postName">
            <h1>{data?.title}</h1>
          </div>
          <img
            id="postImages"
            width={"86%"}
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
          <button onClick={(e) => handleCreateButton(e)}>Post</button>{" "}
        </div>
        <div id="allTheCommentsDiv">
          {commentData?.map((comment: Comment) => (
            <div id="eachCommentDiv" key={comment._id}>
              {comment.message}
            </div>
          ))}
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};
