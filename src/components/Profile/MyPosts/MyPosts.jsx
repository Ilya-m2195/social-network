import Style from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

let postArrayData = [
  {
    message: 'hi',
    likes: 10,
  },
  {
    message: 'This is my second post',
    likes: 12,
  }
]

const MyPosts = () => {
  return (
    <div className={Style.container}>My posts
      <NewPost />
      <Post massage={postArrayData[0].message} likes={postArrayData[0].likes} />
      <Post massage={postArrayData[1].message} likes={postArrayData[1].likes} />
      <Post />
    </div>
  )
}

export default MyPosts;