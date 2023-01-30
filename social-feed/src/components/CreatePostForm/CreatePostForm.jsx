import React, { useState } from 'react';
 
const CreatePost = props => {
    const [post, createPost] = useState('');

    const handlePost = event => {
        createPost(event.target.value)
    }
    return ( 
        <form action="">
            <div>
                <input type="text" />
            </div>
            <button type='post'></button>
        </form>
            );
    }
  
    <form action=""></form>
    export default CreatePost;pro
    