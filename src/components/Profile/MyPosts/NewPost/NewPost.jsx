import React from 'react';
import Style from './NewPost.module.css'
import { addPostActionCreator, changeTextPostActionCreator } from '../../../../redux/profile-reducer';

const NewPost = props => {

  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    newPost.current.value = '';
  }

  let changeTextPost = () => {
    let text = newPost.current.value;
    props.dispatch(changeTextPostActionCreator(text))
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