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
  
    // Generate a unique local ID
    const localId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 31;
  
    const newTodo = {
      id: localId, // Assign a unique local ID
      todo: title,
      status: "Pending",
    };
  
    setTodos((prevTodos) => [...prevTodos, newTodo]); 
    try {
      const savedTodo = await addTodo(title); 
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === localId ? { ...todo, id: savedTodo.id } : todo
        )
      );
    } catch (error) {
      console.error("Error syncing todo:", error);
    }
  };
  
  

  const handleEditTodo = async (id, newTitle) => {
    if (!id || !newTitle) return;
  
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: newTitle } : todo
      )
    ); 
  
    if (id <= 30) { // Only send update for backend-synced tasks
      try {
        await editTodo(id, newTitle);
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }
  };
  

  const handleMoveTodo = async (id, newStatus) => {
    if (!id || !newStatus) return;
  
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    ); 
  
    if (id <= 30) { 
      try {
        await updateTodoStatus(id, newStatus);
      } catch (error) {
        console.error("Error updating status:", error);
      }
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
    todos={todos.filter((todo) => todo.status === status)} // Ensure correct filtering
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
