import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Datatable from "../components/Datatable";

import classes from "../styles/list.module.css";

function List() {
  return (
    <div className={classes.list}>
      <SideBar />
      <div className={classes.list_container}>
        <NavBar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
