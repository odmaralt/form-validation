import {Header} from "../../components";
import { useParams } from "react-router-dom";
import { blogPostInfoArray } from "../../data";
import "./ArticlePage.css";
import BlogManAvatar from "../../components/Icons/BlogManAvatar";
import BlogAvatar from "../../components/Icons/BlogAvatar";
export const ArticlePage = (user) => {
  const params = useParams();
  // what is useParams ?
  // declare params it equals useparams

  const selectedPost = blogPostInfoArray.filter((blog) => {
    // selectedPost is equal to filter the array and it takes blog
    return blog.id === params.id;
    // return the blog id and it equals params id
    // it filters the arrays that equal the one that is clicked
  });
  return (
    <div>
      <Header user={user} whiteFont={true} />
      <div id="articleTitle">{selectedPost[0].title} </div>
      <div id="articleAvatarDiv">
        <BlogAvatar id="blogPic" />
        <p>Shedrack eze</p>
        <p>|</p>
        <p>2nd January, 2022</p>
      </div>
      <img
        id="articleImage"
        alt="img"
        height={"450px"}
        width={"860px"}
        src={selectedPost[0].imgSrc}
      />
      <p id="articleParagraph">
        If you’re thinking of starting a blog of your own, but just don’t have a
        clue on what to blog about, then fear not! In this article, I have
        included a whole load of blog examples from a wide variety of different
        niches, all run on different blogging platforms like WordPress, Joomla!
        and Drupal. Since the beginning of the internet, millions and millions
        and millions of blogs have been created. Many have died due to lost
        interest or their owners giving up on the idea, while others have
        thrived and continue to grow, making money and earning their owners a
        steady income. It’s a constant evolution of content that keeps people
        coming back for more, especially if these blogs contact highly
        resourceful material that people find useful and interesting. Each
        example listed in this blog post are all different in some way and all
        bring something unique to their readers & subscribers. I want to show
        you what is possible and how you can take inspiration from them and
        create an awesome blog of your own. Some of these blogs make over $100k
        a month, others are just a hobby for their owners, but all have the same
        purpose at their core… the love of writing and sharing information. Some
        of these blogs make over $100k a month, others are just a hobby for
        their owners, but all have the same purpose at their core… the love of
        writing and Some of these blogs make over $100k a month, others are just
        a hobby for their owners, but all have the same purpose at their core…
        the love of writing and sharing information. Some of these blogs make
        over $100k a month, others are just a hobby for their owners, but all
        have the same purpose at their core… the love of writing and sharing
        information.
      </p>
      <div id="writtenByDiv">
        <BlogAvatar />
        <div>
          <p id="writtenBy">Written by</p>
          <p id="writtenByName">Shedrak Eze</p>
          <p id="personTitle">CEO Team App</p>
        </div>
      </div>

      <div id="commentDiv">
        <p id="joinConvo">Join the conversation</p>
        <div id="commment">
          <BlogManAvatar />
          <input id="commentInput" placeholder="Comments"></input>
        </div>
      </div>
    </div>
  );
};
