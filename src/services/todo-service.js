import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

// ✅ Fetch all todos
export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data.todos.map(todo => ({
    ...todo,
    status: todo.completed ? "Completed" : "Pending",
  }));
};

// ✅ Add a new todo
export const addTodo = async (title) => {
  const response = await axios.post(`${API_URL}/add`, {
    todo: title,
    completed: false,
    userId: 1, 
  });
  return { ...response.data, status: "Pending" };
};


// ✅ Edit a todo (update title)
export const editTodo = async (id, updatedTitle) => {
  try {
    // ✅ First, check if the todo exists
    const checkTodo = await axios.get(`https://dummyjson.com/todos/${id}`);
    
    if (!checkTodo.data) {
      console.error(`❌ Todo with ID ${id} does not exist.`);
      return null;
    }

    // ✅ Send the update request
    const response = await axios.put(`https://dummyjson.com/todos/${id}`, { 
      todo: updatedTitle 
    });

    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error editing todo:", error.response?.data || error.message);
    return null; 
  }
};


// ✅ Update status (move between lanes)
export const updateTodoStatus = async (id, newStatus) => {
  const completed = newStatus === "Completed";
  const response = await axios.put(`${API_URL}/${id}`, { completed });
  return { ...response.data, status: newStatus };
};

// ✅ Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error("Error deleting todo:", error.response?.data || error.message);
    return null;
  }
};
