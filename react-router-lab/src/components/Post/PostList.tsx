import {blogPosts} from "../DB/db";
import {Link} from 'react-router-dom'

const PostList = () => {
    return (
        <>
            <ul>
                {
                    blogPosts.map(({id,title}) => (
                        <li key={id}>
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default PostList;