import React from 'react';
import Style from './NewPost.module.css'
const NewPost = props => {

  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    props.addPost(text);
  }

  return (
    <div className={Style.container}>
      <h3>New post</h3>
      <textarea ref={newPost} placeholder='text of new post'></textarea>
      <button onClick={addPost} className={Style.btn}>new post</button>
    </div>
  )
}

export default NewPost;