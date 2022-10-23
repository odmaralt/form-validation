import React from "react";
export const BlogCard = ({
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
      className="blogDivPointer"
      id="blogDivs"
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
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

