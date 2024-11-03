import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const loadDetails = useLoaderData();
    const {name, email, website} = loadDetails;
    return (
        <div>
            <p>User details part</p>            
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;