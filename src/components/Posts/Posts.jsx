import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts"

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>This is the users container : {posts.length}</h1>
      <div className="container-sizes">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
