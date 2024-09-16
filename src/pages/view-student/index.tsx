import React from "react";
import Layout from "../../Layout";
import { Typography } from "@mui/material";
import StudentsTable from "../../Modules/View/components/StudentsTable";

const ViewStudent = () => {
  return (
    <Layout>
      <Typography variant="h5"> View Students </Typography>

      {/* View Student */}
      <StudentsTable />
    </Layout>
  );
};

export default ViewStudent;
