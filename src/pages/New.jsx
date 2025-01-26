import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

import classes from "../styles/new.module.css";
import { useState } from "react";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className={classes.new}>
      <SideBar />
      <div className={classes.new_container}>
        <NavBar />
        <div className={classes.top}>
          <h1>{title}</h1>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="no-image"
            />
          </div>
          <div className={classes.right}>
            <form className={classes.form}>
              <div className="form_input">
                <label htmlFor="file" className={classes.choose_img}>
                  Image: <DriveFolderUploadIcon className={classes.no_image} />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className={classes.form_input} key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              <button className={classes.send_btn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
