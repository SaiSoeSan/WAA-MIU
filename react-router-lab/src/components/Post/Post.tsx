import {Outlet} from "react-router-dom";

const Post = () => {
    return (
        <>
            <h1>Posts</h1>
            <Outlet/>
        </>
    )
}
export default Post;