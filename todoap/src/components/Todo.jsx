import React from "react";
import { v4 as uuid } from "uuid";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { Stack, Button } from "@mui/material";

// CRUD

// Creation , Reading, Updation , Deletion

const Todo = () => {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  // list  -

  // [
  // {title : 'Eat', status : false, id: 1},
  // {title:'sleep', status: false, id:2 },
  // ]

  const handleAdd = (title) => {
    const payload = {
      title: title,
      status: false,
      id: uuid(),
    };
    setData([...data, payload]);
  };

  const handleToggle = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    // [{title : 'Eat', id: 1, status: true}, {title:'sleep', status: false, id:2}]
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <Stack spacing={3}>
      <TodoInput handleAdd={handleAdd} />
      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Only unfinished tasks" : "Show All Tasks"}
      </Button>
      {data
        .filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <TodoList
            key={item.id}
            {...item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </Stack>
  );
};

export { Todo };
