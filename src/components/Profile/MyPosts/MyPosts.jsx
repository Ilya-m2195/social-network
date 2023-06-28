import Style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {

  let postsElements = props.profilePage.map(post => <Post message={post.message} likes={post.likes} />);

  let addPost = () => {
    props.addPost();
  }

  let changeTextPost = (event) => {
    let text = event.target.value;
    props.changeTextPost(text);
  }

  return (
    <div className={Style.container}>My posts
       <div className={Style.container}>
      <h3>New post</h3>
      <textarea onChange={changeTextPost} placeholder='text of new post' value={props.newTextPost}></textarea>
      <button onClick={addPost} className={Style.btn}>new post</button>
    </div>
      {postsElements};
    </div>
  )
}


export default MyPosts;