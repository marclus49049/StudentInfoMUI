import React from "react";
import Layout from "../../Layout";
import { Typography } from "@mui/material";
import AddStudentFrom from "../../Modules/Add/components/AddStudentFrom";

const AddStudent = () => {
  return (
    <Layout>
      <Typography variant="h5"> Add Student </Typography>

      {/* Add Student Form */}
      <AddStudentFrom />
    </Layout>
  );
};

export default AddStudent;
