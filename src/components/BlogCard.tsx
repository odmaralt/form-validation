import React from "react";

interface IBlogCard {
  imgSrc: string;
  title: string;
  subTitle: string;
  name: string;
  date: string;
  avatar: JSX.Element;
  id: string;
  onClick: (id: string) => void;
}
export const BlogCard: React.FC<IBlogCard> = ({
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
