import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Charts from "../components/Charts";
import Tables from "../components/Tables";

import classes from "../styles/single.module.css";

function Single() {
  return (
    <div className={classes.single}>
      <SideBar />
      <div className={classes.single_container}>
        <NavBar />
        <div className={classes.top}>
          <div className={classes.left}>
            <div className={classes.edit_btn}>Edit</div>
            <h1 className={classes.title}>Information</h1>
            <div className={classes.item}>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className={classes.avatar}
              />
              <div className="details">
                <h2 className={classes.details_title}>Jane Doe</h2>
                <div className={classes.details_item}>
                  <span className={classes.item_key}>Email:</span>
                  <span className={classes.item_value}> janeDoe@gmail.com</span>
                </div>
                <div className={classes.details_item}>
                  <span className={classes.item_key}>Phone:</span>
                  <span className={classes.item_value}>+ 123 456 789</span>
                </div>
                <div className={classes.details_item}>
                  <span className={classes.item_key}>Adress:</span>
                  <span className={classes.item_value}>Vazha pshavela 134</span>
                </div>
                <div className={classes.details_item}>
                  <span className={classes.item_key}>Country:</span>
                  <span className={classes.item_value}>Georgia</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <Charts aspect={3 / 1} title="Users Spening last 6 months" />
          </div>
        </div>
        <div className={classes.bottom}>
          <h2 className={classes.title}>Last Transaction</h2>
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default Single;
