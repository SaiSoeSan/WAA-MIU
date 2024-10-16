
import {useNavigate, useParams} from "react-router-dom";
import {blogPosts} from "../DB/db";

const PostDetail = () => {
    const {slug} = useParams();
    const navigate = useNavigate();

    const findPost = blogPosts.find(post => post.id === parseInt(slug ?? '', 10));
    if (!findPost) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }


    const {id,description,title} = findPost;

    const editHandler = () => {
        navigate(`/posts/${id}/edit`)
    }

    return (
        <>
            <h3>Post Detail</h3>

            <div style={{padding: 20}}>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={editHandler} >Edit</button>
            </div>
        </>

    )
}
export default PostDetail;