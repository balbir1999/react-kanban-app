import React, { useState } from "react";
import { useDrag } from "react-dnd";

const TodoItem = ({ todo, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.todo);

  const [{ isDragging }, drag] = useDrag({
    type: "TODO",
    item: () => {
      return { id: todo.id, status: todo.status };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  

  const handleSave = () => {
    if (newTitle.trim()) {
      onEditTodo(todo.id, newTitle);
    }
    setIsEditing(false);
  };

  return (
    <div ref={drag} className={`todo-item ${isDragging ? "dragging" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <div>
          <span onDoubleClick={() => setIsEditing(true)}>{todo.todo}</span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={() => onDeleteTodo(todo.id)}>🗑️</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
