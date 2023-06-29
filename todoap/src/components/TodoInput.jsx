import React from "react";
import { TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TodoInput = ({ handleAdd }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <TextField
        variant="outlined"
        label="Add Something"
        size="small"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="outlined" onClick={() => handleAdd(title)}>
        ADD
      </Button>
    </div>
  );
};

export { TodoInput };
