import Style from './Post.module.css'
const Post = props => {
    return (
        <div className={Style.post}>
            {props.message}
            <div>
                <span>{`likes - ${props.likes}`}</span>
            </div>
        </div>
    )
}

Post.defaultProps = {message: 'empty massage', likes: 'infinity' }

export default Post;