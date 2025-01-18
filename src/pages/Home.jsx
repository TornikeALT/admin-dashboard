import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import classes from "../styles/home.module.css";
import Widget from "../components/Widget";

function Home() {
  return (
    <div className={classes.home}>
      <SideBar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
}

export default Home;
