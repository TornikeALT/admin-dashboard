import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import classes from "../styles/home.module.css";
import Widget from "../components/Widget";
import Features from "../components/Features";
import Charts from "../components/Charts";
import Tables from "../components/Tables";

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
        <div className={classes.charts}>
          <Features />
          <Charts />
        </div>
        <div className={classes.list_container}>
          <div className={classes.list_title}>Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default Home;
