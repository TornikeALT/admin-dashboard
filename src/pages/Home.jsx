import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import classes from "../styles/home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <SideBar />
      <div className={classes.container}>
        <Navbar />
        content
      </div>
    </div>
  );
}

export default Home;
