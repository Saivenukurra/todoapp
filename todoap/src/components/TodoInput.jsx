import React from "react";
import { TextField, Button } from "@mui/material";

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
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => {
          handleAdd(title);
          setTitle("");
        }}
      >
        ADD
      </Button>
    </div>
  );
};

export { TodoInput };
