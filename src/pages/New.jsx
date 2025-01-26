import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

import classes from "../styles/new.module.css";

function New() {
  return (
    <div className={classes.new}>
      <SideBar />
      <div className={classes.new_container}>
        <NavBar />
        <div className={classes.top}>
          <h1>Add new User</h1>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="no-image"
            />
          </div>
          <div className={classes.right}>
            <form className={classes.form}>
              <div className="form_input">
                <label htmlFor="file" className={classes.choose_img}>
                  Image: <DriveFolderUploadIcon className={classes.no_image} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className={classes.form_input}>
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className={classes.form_input}>
                <label>Name and surname</label>
                <input type="text" placeholder="john doe" />
              </div>
              <div className={classes.form_input}>
                <label>Email</label>
                <input type="email" placeholder="example@.com" />
              </div>
              <div className={classes.form_input}>
                <label>Phone number</label>
                <input type="text" placeholder="+ 123 456 789" />
              </div>
              <div className={classes.form_input}>
                <label>Password</label>
                <input type="password" />
              </div>
              <div className={classes.form_input}>
                <label>Adress</label>
                <input type="text" placeholder="Vazha pshavela 135" />
              </div>
              <div className={classes.form_input}>
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button className={classes.send_btn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
