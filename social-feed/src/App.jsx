import PostList from "./PostList/PostList";
import React, { useState } from "react";
import Post from "./components/Post/Post";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm"

function App() {
  const [posts, setPosts] = useState([
    {
      "author":""
      "body":""
    }
  ]);
  
  function createNewPost(post){
    let tempPosts = [...posts,   post]
    setPosts(tempPosts)



  return (
    <div id="App">
      <CreatePostForm createNewPost={createNewPost}/>
      <PostList posts={posts} />

    </div>
  );
}

export default App;
