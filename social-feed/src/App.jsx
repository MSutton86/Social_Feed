import PostList from "./PostList/PostList";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { author: "Mark Sutton", body: "Hello World" },
    { author: "Ned Flanders", body: "Diddly Doo "},
  ]);



  return (
    <div className="App">
      <PostList posts={posts} />
    
    </div>
  );
}

export default App;
