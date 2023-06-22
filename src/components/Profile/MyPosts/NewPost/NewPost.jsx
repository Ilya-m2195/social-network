import React from 'react';
import Style from './NewPost.module.css'
const NewPost = props => {

  let newPost = React.createRef();

  let addPost = () => {

    props.addPost();

  }

  let changeTextPost= () => {
    let text = newPost.current.value;
    props.changeTextPost(text)
    debugger

  }

  return (
    <div className={Style.container}>
      <h3>New post</h3>
      <textarea ref={newPost} onChange={changeTextPost} placeholder='text of new post' value={props.newTextPost}></textarea>
      <button onClick={addPost} className={Style.btn}>new post</button>
    </div>
  )
}

export default NewPost;