import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const loadDetails = useLoaderData();
  const { name, email, website } = loadDetails;
  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>User details part</p>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
      <button onClick={handleUserDetails}>previous</button>
    </div>
  );
};

export default UserDetails;
