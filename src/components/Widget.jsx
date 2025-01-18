import classes from "../styles/widget.module.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: (
          <PersonOutlineIcon
            className={classes.icon}
            style={{ backgroundColor: "#ffa5a5", color: "crimson" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See All Orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={classes.icon}
            style={{ backgroundColor: "rgb(255, 238, 146)", color: "#b5b507" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={classes.icon}
            style={{ backgroundColor: "rgb(134, 244, 87)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className={classes.icon}
            style={{ backgroundColor: "rgb(214, 157, 251)", color: "purple" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.counter}>{data.isMoney && "$"}</div>
        <div className={classes.link}>{data.link}</div>
      </div>
      <div className={classes.right}>
        <div className={`${classes.percentage} ${classes.positive}`}>
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
