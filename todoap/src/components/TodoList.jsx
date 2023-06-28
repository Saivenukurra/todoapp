import React from "react";
import { Grid, Button, Typography } from "@mui/material";

const TodoList = ({ title, id, status, handleToggle, handleDelete }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">
          {status ? "Completed" : "Not Completed"}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleToggle(id)}>
          Update Todo
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleDelete(id)}>
          Delete Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export { TodoList };
