# React Kanban App

## 🚀 How to Run the Project Locally

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/balbir1999/react-kanban-app.git
```
Navigate into the project folder:
```sh
cd react-kanban-app
```

### 2️⃣ Install Dependencies
Ensure you have **Node.js (v16+)** installed, then run:
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
This will start the app at `http://localhost:3000/`.

---

## 💡 Approach Taken

### **1️⃣ Component-Based Architecture**
- Used **React functional components** and **React Hooks** for better state management.
- Structured components in a modular way to enhance reusability and maintainability.

### **2️⃣ State Management**
- Implemented **React Context API** for managing the Kanban board state globally.

### **3️⃣ Drag and Drop Functionality**
- Integrated **react-beautiful-dnd** for smooth task movement between different board columns.

---

## 🔍 Trade-offs & Possible Improvements

### ✅ **What Works Well**
✔ Smooth drag-and-drop interactions.  
✔ Lightweight and efficient state management.  
✔ Responsive UI using Material-UI.  

### ❌ **Potential Improvements**
- **Persistent Data**: The state resets on page refresh. Adding **local storage or backend API** can improve usability.
- **User Authentication**: Implement authentication using Firebase or OAuth.
- **Advanced Filtering & Sorting**: Introduce labels, priorities, and a search feature.
- **Unit Testing**: Add Jest/React Testing Library tests for better reliability.
- **Improve UI** : Add material UI and tailwind css for better UI

---

## 📜 License
This project is open-source under the [MIT License](LICENSE).

## 🙌 Contributing
Feel free to fork the repo and submit PRs for enhancements! 🎉

