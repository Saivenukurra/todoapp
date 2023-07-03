import React from "react";
import { Button } from "@mui/material";
import InputBox from "./InputBox";

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
      <InputBox value={title} onChange={setTitle} />
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
