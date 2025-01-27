import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, users } from "../dummydata/data";
import "../styles/datatable.css";
import { useState } from "react";

function Datatable() {
  const paginationModel = { page: 0, pageSize: 5 };
  const [data, setData] = useState(users);

  const handleUserDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell_action">
            <Link to="/users/test">
              <span className="view_btn">View</span>
            </Link>
            <span
              className="delete_btn"
              onClick={() => handleUserDelete(params.row.id)}
            >
              Delete
            </span>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable_title">
        Add new User
        <Link to="/users/new">Add New</Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}

export default Datatable;
