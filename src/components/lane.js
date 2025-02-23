import React from "react";
import TodoItem from "./todoItem";
import { useDrop } from "react-dnd";


const Lane = ({ title, todos, onMoveTodo, onEditTodo, onDeleteTodo }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TODO",
    drop: (item) => onMoveTodo(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`lane ${isOver ? "highlight" : ""}`}>
      <h2>{title}</h2>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />)}
    </div>
  );
};

export default Lane;
