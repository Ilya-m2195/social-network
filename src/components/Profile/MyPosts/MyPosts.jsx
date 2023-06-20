import Style from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {

let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes} />)

  return (
    <div className={Style.container}>My posts
      <NewPost addPost={props.addPost}/>
      {postsElements};
    </div>
  )
}

export default MyPosts;