import React, { useState } from 'react';
 
const CreatePost = props => {
    const [post, setPost] = useState('');

    const handlePost = event => {
        event.preventDefault();
        setPost(event.target.value)
    }
    return ( 
        <form onSubmit={handlePost}>
            <div>
                <label htmlFor="">Posts</label>
                <input type="text" />
            </div>
            <button type='post'>POST</button>
        </form>
            );
    }
  
    <form action=""></form>
    export default CreatePost;pro
    