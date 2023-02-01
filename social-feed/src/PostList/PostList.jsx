import React, { useState } from "react";
import Post from "../components/Post/Post";

const PostList = (props) => {
  const postList = props.posts.map((post) => <Post data={post} />);

  return <div>{postList}</div>;
  
};

export default PostList;
