import React from "react";
import { Modal } from "@mui/material";

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
interface EditCommentModalProps {
  editCommentModalIsOpen: boolean;
  closeUpdateModal: () => void;
  commentInfo: Comment;
  handleUpdate: (comment: Comment) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditCommentModal = (props: EditCommentModalProps) => {
  const {
    editCommentModalIsOpen,
    closeUpdateModal,
    commentInfo: comment,
    handleUpdate,
    handleInputChange,
  } = props;

  return (
    <Modal
      open={editCommentModalIsOpen}
      onClose={closeUpdateModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="editComment">
        <p
          style={{
            paddingLeft: "20px",
            paddingTop: "35px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Update comment
        </p>
        <div id="editCommentFlex">
          <p>Message:</p>
          <input
            onChange={handleInputChange}
            name="message"
            placeholder={comment?.message}
          />
        </div>
        <button onClick={() => handleUpdate(comment)}>Update</button>
        <button onClick={closeUpdateModal}>Cancel</button>
      </div>
    </Modal>
  );
};
