import React from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CancelIcon from "@mui/icons-material/Cancel";
const TodoList = ({
  title,
  id,
  status,
  handleToggle,
  handleDelete,
  editTask,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState("");

  const openEdit = () => {
    setEdit(true);
  };
  const closeEdit = () => {
    setEdit(false);
  };
  return edit ? (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button
          variant="outlined"
          onClick={() => {
            editTask(id, editTitle);
            setEdit(false);
          }}
        >
          Update
        </Button>
      </Grid>
      <Grid item xs={3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <Button variant="outlined" onClick={closeEdit}>
            <CancelIcon fontSize="medium" />
          </Button>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5">
          {status ? "Completed" : "Not Completed"}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleToggle(id)}>
          Toggle
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button onClick={openEdit}>
          <EditNoteIcon fontSize="large" color="gray" />
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5">
          {status ? "Completed" : "Not Completed"}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleToggle(id)}>
          Toggle
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export { TodoList };
