import { Field, reduxForm } from 'redux-form';
import Style from './MyPosts.module.css'
import Post from './Post/Post';
import { maxLengthCreator, requiredField } from '../../../utils/validators';
import { Textarea } from '../../../common/formsControl/FormsControl';

const NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder='text of new post'
        component={Textarea}
        name='newTextPostsBody'
        validate={[requiredField, maxLengthCreator(10)]}
      />
      <button className={Style.btn}>new post</button>
    </form>
  )
}

const AddNewPostRedux = reduxForm({ form: 'AddNewPostForm' })(NewPostForm);

const MyPosts = props => {

  let postsElements = props.profilePage.map(post => <Post message={post.message} likes={post.likes} key={post.id} />);

  const addNewPost = values => {
    props.addPost(values.newTextPostsBody);
  }

  return (
    <div className={Style.container}>My posts
      <div className={Style.container}>
        <h3>New post</h3>
        <AddNewPostRedux onSubmit={addNewPost} />
      </div>
      {postsElements};
    </div>
  )
}


export default MyPosts;