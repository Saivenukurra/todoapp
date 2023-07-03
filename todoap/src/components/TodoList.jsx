import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CancelIcon from "@mui/icons-material/Cancel";
import InputBox from "./InputBox";
import CButton from "./CButton";
const TodoList = ({
  title,
  id,
  status,
  handleToggle,
  handleDelete,
  editTask,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(title);

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
          <InputBox value={editTitle} onChange={setEditTitle} />
          <CButton onClick={closeEdit}>
            <CancelIcon fontSize="medium" />
          </CButton>
        </div>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h5">
          {status ? "Completed" : "Not Completed"}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <CButton onClick={() => handleToggle(id)}>Toggle</CButton>
      </Grid>
      <Grid item xs={2}>
        <CButton onClick={() => handleDelete(id)}>Delete</CButton>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <CButton onClick={openEdit}>
          <EditNoteIcon fontSize="large" color="gray" />
        </CButton>
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
        <CButton onClick={() => handleToggle(id)}>Toggle</CButton>
      </Grid>
      <Grid item xs={2}>
        <CButton onClick={() => handleDelete(id)}>Delete</CButton>
      </Grid>
    </Grid>
  );
};

export { TodoList };
