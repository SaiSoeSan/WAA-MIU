import {useParams} from "react-router-dom";
import {blogPosts} from "../DB/db";
import {ChangeEvent, useEffect, useRef, useState} from "react";

const EditPost = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    useEffect(() => {
        const findPost = blogPosts.find(post => post.id === parseInt(id ?? '', 10));
        if(findPost){
            setTitle(findPost.title);
            setDescription(findPost.description)
        }
    }, []);




    const titleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const descriptionChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const sumbitHandler = () => {
        console.log(title);
        console.log(description)
        //update post
    }

    return (
        <>
            Title : <input type="text" onChange={titleChangeHandler} value={title} /><br/>
            Description : <textarea onChange={descriptionChangeHandler} value={description} /> <br/>
            <button onClick={sumbitHandler}>Update</button>
        </>
    )
}

export default EditPost;