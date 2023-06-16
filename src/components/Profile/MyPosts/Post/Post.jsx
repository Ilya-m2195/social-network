import Style from './Post.module.css'
const Post = (props) => {
    return (
        <div className={Style.post}>
            {props.massage}
            <div>
                <span>{`likes - ${props.likes}`}</span>
            </div>
        </div>


    )
}

Post.defaultProps = {massage: 'some massage', likes: 'infinity' }

export default Post;