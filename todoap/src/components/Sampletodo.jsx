import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

function Sampletodo() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="outlined" endIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
  );
}
export default Sampletodo;


import React from "react";
import { TextField, Modal, Box, Grid, Button, Typography } from "@mui/material";

const TodoList = ({
  title,
  id,
  status,
  handleToggle,
  handleDelete,
  editTask,
  handleAdd
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [title, setTitle] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              variant="outlined"
              label="Add Something"
              size="small"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button variant="outlined" onClick={() => handleAdd(title)}>
              ADD
            </Button>
          </Box>
        </Modal>
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
          Delete Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export { TodoList };
