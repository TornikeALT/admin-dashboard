import classes from "../styles/sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <span className={classes.admin}>admin</span>
      </div>
      <hr className={classes.hr} />
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <li>
            <DashboardIcon className={classes.icon} />
            <span>Dashboard</span>
          </li>
          <p className={classes.title}>LIST</p>
          <li>
            <PersonOutlineOutlinedIcon className={classes.icon} />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className={classes.icon} />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className={classes.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={classes.icon} />
            <span>Delivery</span>
          </li>
          <p className={classes.title}>USEFULL</p>
          <li>
            <AssessmentIcon className={classes.icon} />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className={classes.icon} />
            <span>Notifications</span>
          </li>
          <p className={classes.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className={classes.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className={classes.icon} />
            <span>Logs</span>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <AccountBoxIcon className={classes.icon} />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className={classes.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <div className={classes.option_one}></div>
        <div className={classes.option_two}></div>
      </div>
    </div>
  );
}

export default SideBar;
