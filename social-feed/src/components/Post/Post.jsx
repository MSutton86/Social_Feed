import React from 'react';
const Post = (props) => {
    return (      <div>
        <h4>{props.data.author}</h4>
        <p>{props.data.body}</p>
      </div> );
}
 
export default Post;