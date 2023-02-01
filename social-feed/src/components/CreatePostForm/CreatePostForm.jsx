import React, { useState } from "react";

const CreatePost = (props) => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");

  const handlePost = (event) => {
    event.preventDefault();
    setPost(event.target.value);
  };
  return (
    <form onSubmit={handlePost}>
      <div>
        <label>Author</label>
        <input
          type=""
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div>
        <label>Posts</label>
        <input
          type=""
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button type="submit">POST</button>
    </form>
  );
};

<form action=""></form>;
export default CreatePost;
pro;
