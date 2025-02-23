import React, { useEffect, useState } from "react";
import Lane from "./lane";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  getTodos,
  addTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
} from "../services/todo-service";
import "../styles/kanbanboard.css"; // Import styles

const KanbanBoard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    const title = prompt("Enter task title:");
    if (!title) return;

    const newTodo = await addTodo(title);
    const localId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 31;

    setTodos([...todos, { id: localId, todo: newTodo.todo, status: "Pending" }]);
  };

  const handleEditTodo = async (id, newTitle) => {
    if (!id || !newTitle) return;

    let updatedTodo = id <= 30 ? await editTodo(id, newTitle) : { id, todo: newTitle };

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, todo: updatedTodo.todo } : todo))
    );
  };

  const handleMoveTodo = async (id, newStatus) => {
    if (!id || !newStatus) return;

    try {
      const updatedTodo = await updateTodoStatus(id, newStatus);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error moving todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    if (!id) return;

    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="kanban-container">
        <header className="kanban-header">
          <h1>Kanban Board</h1>
          <button className="add-btn" onClick={handleAddTodo}>➕ Add Task</button>
        </header>

        <div className="kanban-board">
          {["Pending", "In Progress", "Completed"].map((status) => (
            <Lane
              key={status}
              title={status}
              todos={todos.filter((todo) => todo.status === status)}
              onMoveTodo={handleMoveTodo}
              onEditTodo={handleEditTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
