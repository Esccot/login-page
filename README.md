# login-page
# 🔐 Express Login Practice App

This is a simple full-stack login practice project built using **Node.js**, **Express**, and basic **HTML/CSS**.

The purpose of this project is to understand backend fundamentals such as:

- Routing (GET & POST)
- Middleware flow
- Body parsing
- Static file serving
- File path handling (`path.join`, `__dirname`)
- Express request-response lifecycle

---

## 🚀 Features

- Basic Sign-In form
- Basic Sign-Up form
- Password validation (hardcoded for practice)
- Redirect to a Home page on successful login
- Static file serving using `express.static`
- Morgan middleware for request logging
- Body-parser for handling form data

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Morgan
- Body-parser
- HTML
- CSS

---

## 📁 Project Structure
login-page/ │ ├── backend/ │   └── index.js │ └── public/ ├── index.html ├── home.html ├── sign-up.html └── sign-up.css

---

## ⚙️ Installation & Setup

1. Clone the repository:git clone

2. Navigate to backend folder:cd backend

3. Install dependencies:npm install

4. Run the server:node index.js

5. Open in browser:http://localhost:3000

---

## 🔑 Test Login

Password for testing:abhay101

---

## 📌 Note

This project is built for learning purposes and does not include:

- Database integration
- Password hashing
- Sessions or authentication tokens
- Production-level security

Future improvements may include:

- MongoDB or PostgreSQL integration
- bcrypt password hashing
- Session management
- Proper authentication system
- Better UI/UX

---

## 🎯 Purpose

This project was built to deeply understand how:

- Forms interact with backend
- Express handles routes and middleware
- Static files are served
- HTTP methods behave
- Request lifecycle works

---

## 👨‍💻 Author

Abhay Tomar  
Backend Learning Phase 🚀