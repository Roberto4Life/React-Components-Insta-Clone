//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("I am props", props);
  
  return (
    <div className="posts-container-wrapper">
      {props.post.map( p => (
        // <div className="box">
        <Post className="box"
          key={p.profileImg}
          post={p}
        />
        // </div>
      ))}
    </div>
  );
};

export default PostsPage;

