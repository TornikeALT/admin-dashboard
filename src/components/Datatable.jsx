import { DataGrid } from "@mui/x-data-grid";
import { userColumns, users } from "../dummydata/data";
import "../styles/datatable.css";

function Datatable() {
  const paginationModel = { page: 0, pageSize: 5 };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell_action">
            <span className="view_btn">View</span>
            <span className="delete_btn">Delete</span>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={users}
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
