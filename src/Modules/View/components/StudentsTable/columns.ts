import { GridColDef } from "@mui/x-data-grid";
import { AddFromLocalData } from "../../../../context/StudentContext";

export const columns: GridColDef<AddFromLocalData>[] = [
  { field: "_id", headerName: "ID", width: 120 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 200,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "guardianName",
    headerName: "Guardian Name",
    width: 200,
  },
  {
    field: "dateOfBirth",
    headerName: "DOB",
    width: 120,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 120,
  },
  {
    field: "mobileNumber",
    headerName: "Mobile Number",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "state",
    headerName: "State",
    width: 150,
  },
];
