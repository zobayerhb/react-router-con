import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>            
            <p>This is the home components</p>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;