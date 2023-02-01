import PostList from "./PostList/PostList";
import React, { useState } from "react";
import Post from "./components/Post/Post";
import CreatePostForm from "./components/CreatePostForm"

function App() {
  const [posts, setPosts] = useState([
    
  function createPostForm(post){
    let tempPosts = [Post,   post]
    setPosts(tempPosts)
}]);



  return (
    <div id="App">
      <CreatePostForm post={createPostForm}/>
      <PostList posts={posts} />

    </div>
  );
}

export default App;
