# 📝 Kanban Board - React Drag & Drop

This is a **Kanban Board** built using **React**, **React DnD (Drag & Drop)**, and **DummyJSON API** to manage tasks dynamically.

🚀 **[Live Demo](https://balbir1999.github.io/react-kanban-app/)** (Deployed via GitHub Pages)

---

## 📌 Features
✅ Drag and drop tasks between "Pending," "In Progress," and "Completed" lanes  
✅ Add, edit, and delete tasks dynamically  
✅ Persistent task management using **DummyJSON API**  
✅ Responsive design for mobile & desktop  

---

## 🛠️ Tech Stack
- **React** (Component-based architecture)
- **React DnD** (Drag & Drop functionality)
- **CSS Modules** (Custom styles)
- **DummyJSON API** (Mock backend for tasks)

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/balbir1999/react-kanban-app.git
cd kanban-board
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the App Locally**
```bash
npm start
```
This starts the app on `http://localhost:3000/`.

---

## 📌 Design Decisions & Patterns Used

### **1️⃣ Component-Based Architecture**
- The application follows a **modular component structure**, making it easier to maintain and scale.
- The main components include:
  - **`KanbanBoard`** – Manages the overall board, fetches tasks, and handles state updates.
  - **`Lane`** – Represents each task status category (Pending, In Progress, Completed).
  - **`TodoItem`** – Represents individual tasks with edit, delete, and drag-and-drop functionality.

### **2️⃣ State Management with Hooks**
- Used **React’s built-in state management** with `useState` and `useEffect`.
- Tasks are **fetched from the DummyJSON API** and stored in local state for efficient updates.
- Optimistic UI updates ensure a **smooth user experience**.

### **3️⃣ Drag-and-Drop Implementation**
- Used **React DnD (HTML5 Backend)** to implement drag-and-drop functionality.
- Each task (`TodoItem`) is assigned a **unique ID** to avoid conflicts while dragging.
- **Drag events update task status**, which is reflected in the UI and backend.

### **4️⃣ API Handling & Data Management**
- Used a **service layer (`todo-service.js`)** to handle API requests, keeping API logic separate from UI.
- When adding a **new task**, a **temporary local ID** is generated to ensure smooth interactions before syncing with the backend.
- **Editing behavior**: Tasks fetched from the API use real IDs, while newly added ones use locally assigned IDs.

### **5️⃣ CSS Styling & Responsive Design**
- The UI is styled using **CSS modules** for better **scalability** and **scoping**.
- **Responsive layout** ensures the Kanban board works well on desktops and mobile devices.

---

## 🚀 Optimizations Applied
✅ **Optimistic UI Updates** – Tasks are updated in the UI first before syncing with the backend.  
✅ **Minimized API Calls** – Only necessary API requests are made to reduce load time.  
✅ **Error Handling** – Try-catch blocks prevent crashes when API requests fail.  
✅ **Efficient State Updates** – Used `map()` and `filter()` methods to modify state instead of recreating the entire list.  

---

## 🚧 Known Limitations
🚨 **Data Persistence Issue** – Newly added tasks are lost on page refresh since they aren't stored in local storage.  
🚨 **No Undo Feature** – Once a task is deleted, there's no way to recover it.  
🚨 **No Authentication** – Any user can modify tasks; security measures are not in place.  
🚨 **Drag Restrictions Missing** – Currently, tasks can be moved freely between lanes, even after completion.  

---

## 💪 Future Enhancements
✅ **Local Storage Support** – Store tasks locally to retain them on page reload.  
✅ **Undo Functionality** – Implement a soft delete mechanism to allow recovery of deleted tasks.  
✅ **Role-Based Access Control** – Implement authentication to restrict task modification.  
✅ **Restricted Drag-and-Drop** – Prevent completed tasks from moving back to previous statuses.  
✅ **Animations & UI Enhancements** – Improve the drag experience with smooth transitions and visual indicators.  

---

## 🚀 Deployment (GitHub Pages)
This project is deployed via **GitHub Pages**.

### **Steps to Deploy**
1. **Install GitHub Pages package**:
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Update `package.json`**:
   ```json
   "homepage": "https://balbir1999.github.io/react-kanban-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. **Run the deployment command**:
   ```bash
   npm run deploy
   ```
4. Go to **GitHub Repo → Settings → Pages**, and set the branch to `gh-pages`.

---

## 🎉 Author
👤 **Your Name**  
🔗 [GitHub](https://github.com/balbir1999) | 📧 balbir110399.kaur@gmail.com

---

## 🐝 License
This project is **MIT licensed**.

