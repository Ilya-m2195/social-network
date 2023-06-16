import Style from './NewPost.module.css'
const NewPost = () => {
  return (
    <div className={Style.container}>
      <h3>New post</h3>
      <textarea placeholder='text of new post'></textarea>
      <button className={Style.btn}>new post</button>
    </div>
  )
}

export default NewPost;