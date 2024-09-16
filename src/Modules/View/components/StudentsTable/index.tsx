import React, { useContext } from "react";
import {
  StudentContext,
  StudentContextType,
} from "../../../../context/StudentContext";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { Box } from "@mui/material";

function StudentsTable() {
  // Context
  const { studentData } = useContext<StudentContextType>(StudentContext) || {};

  return (
    <Box sx={{ height: "auto", padding: "20px 0px", overflow: "auto" }}>
      <DataGrid
        rows={studentData || []}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0, minHeight: "400px" }}
        getRowId={(data) => data?._id}
      />
    </Box>
  );
}

export default StudentsTable;
