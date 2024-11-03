import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  const { id, title, body } = post;

  const postStyle = {
    border: "2px solid yellow",
    borderRadius: "10px",
    padding: "8px",
    textAlign: "center",
  };

  return (
    <div style={postStyle} className="button-grow">
      <div className="grow-flex-button">
        <span>ID: {id}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>

        <Link to={`/post/${id}`}>
          <button>Show more</button>
        </Link>
    </div>
  );
};

export default Post;
