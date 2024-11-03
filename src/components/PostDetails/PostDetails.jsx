import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { userId, title, body } = postDetails;

    const postDetailsStyl  = {
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '8px',
    }
    return (
        <div style={postDetailsStyl}>
            <h1>post details here</h1>  
            <p>{userId}</p>            
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails; 