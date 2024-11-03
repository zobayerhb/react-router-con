import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate(`/user/${id}`);
  };

  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "10px",
    padding: "8px",
  };

  return (
    <div style={userStyle}>
      <h1>{name}</h1>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <button onClick={handleUserDetails}>Show more</button>
    </div>
  );
};

export default User;
