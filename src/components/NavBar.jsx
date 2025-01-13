import classes from "../styles/navbar.module.css";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <LanguageIcon />
            English
          </div>
          <div className={classes.item}>
            <DarkModeOutlinedIcon />
          </div>
          <div className={classes.item}>
            <FullscreenIcon />
          </div>
          <div className={classes.item}>
            <NotificationsNoneOutlinedIcon />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <ChatBubbleOutlineOutlinedIcon />
            <div className={classes.counter}>2</div>
          </div>
          <div className={classes.item}>
            <FormatListBulletedIcon />
          </div>
          <div className={classes.item}>
            <img
              src="https://images.pexels.com/photos/29371349/pexels-photo-29371349/free-photo-of-fashionable-man-in-orange-shirt-outdoors.jpeg"
              alt="avatar"
              className={classes.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
