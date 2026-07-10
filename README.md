<div align="center">

# 🌸 She Can Foundation — Contact Form

### Full Stack Web Application | Internship Task Submission

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Made with ❤](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square)

*A full-stack contact form built for the **She Can Foundation Full Stack Development Internship task** — going beyond the core requirement to demonstrate database integration, authentication, APIs, and responsive design.*

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#️-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [How It Works](#-how-it-works)
- [Author](#-author)

---

## 📋 About the Project

The task asked for a simple webpage with a form **(Name, Email, Message, Submit)** that displays *"Form Submitted Successfully"* after submission.

That core requirement is fully met ✅ — and this project goes further, implementing **every optional bonus feature** listed in the task brief:

<div align="center">

| Requirement | Status |
|:---|:---:|
| Basic Contact Form | ✅ |
| Database Integration | ✅ |
| Authentication | ✅ |
| Admin Panel | ✅ |
| REST APIs | ✅ |
| Form Validation | ✅ |
| Responsive Design | ✅ |
| Backend Features | ✅ |

</div>

---

## ✨ Features

### 🖊️ Contact Form
A clean, branded form (`index.html`) with **Name**, **Email**, and **Message** fields. On submit, data is validated, sent to the backend, stored in the database, and a **"Form Submitted Successfully"** confirmation is shown.

### ✅ Form Validation
- **Frontend** — instant inline error messages for empty fields or invalid email format
- **Backend** — independent server-side re-validation, since frontend checks can always be bypassed

### 🔌 Backend + REST APIs
Built with **Node.js + Express**, exposing clean REST endpoints for form submission, admin authentication, and data retrieval.

### 🗄️ Database Integration
Every submission is permanently stored in a **SQLite** database (`submissions.db`) via `better-sqlite3` — real persistence, not just an on-screen message.

### 🔐 Authentication + Admin Panel
A protected `admin.html` page where the foundation's admin can view all submissions:
- **Register** — create a personal admin account (first-time setup)
- **Login** — authenticate and receive a session token
- Passwords are **hashed with bcryptjs** — never stored in plain text

### 📱 Responsive Design
Flexbox layouts + mobile breakpoints ensure the form and admin panel look great on any screen size.

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---|:---|
| **Backend** | Node.js, Express.js |
| **Database** | SQLite (`better-sqlite3`) |
| **Authentication** | bcryptjs (password hashing) + token-based sessions |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |

</div>

---

## 🗂️ Project Structure

```
she-can-foundation-form/
│
├── 📄 server.js              # Express backend — routes, API logic, DB queries
├── 📄 package.json           # Project dependencies & scripts
├── 📄 .gitignore
├── 📄 README.md
│
└── 📁 public/
    ├── 🌐 index.html         # Main contact form
    ├── 🔐 admin.html         # Admin panel (register / login / view submissions)
    ├── 🎨 style.css          # Styling (responsive, branded theme)
    └── ⚙️ script.js          # Frontend logic & validation
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start
```

### Usage

| Page | URL |
|:---|:---|
| 📝 Contact Form | `http://localhost:3000` |
| 🔐 Admin Panel | `http://localhost:3000/admin.html` |

> **First time using the Admin Panel?**
> Click **"Register as admin"**, create your own username & password, then log in with those credentials to view all submissions.

---

## 🔌 API Reference

| Method | Endpoint | Description |
|:---:|:---|:---|
| `POST` | `/api/contact` | Submit a new contact form entry |
| `GET` | `/api/contact` | Retrieve all submissions *(requires admin token)* |
| `POST` | `/api/admin/register` | Create a new admin account |
| `POST` | `/api/admin/login` | Log in and receive a session token |
| `POST` | `/api/admin/logout` | Invalidate the current session token |

<details>
<summary><b>📤 Example Request — Submitting the Form</b></summary>

```json
POST /api/contact
Content-Type: application/json

{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "message": "Great initiative! Excited to be part of this."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form Submitted Successfully",
  "id": 1
}
```

</details>

---

## ⚙️ How It Works

```
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│   Browser    │───────▶│   Express    │───────▶│   SQLite     │
│ (HTML/CSS/JS)│  POST  │   Server     │ INSERT │   Database   │
│              │◀───────│  (server.js) │◀───────│(submissions) │
└──────────────┘  JSON  └──────────────┘  Rows  └──────────────┘
```

1. User fills the form → frontend validates instantly
2. Data is sent via `fetch()` to `POST /api/contact`
3. Server re-validates, then inserts into the SQLite database
4. Server responds → **"Form Submitted Successfully"** is displayed
5. Admin logs in via `admin.html` → views all stored submissions securely

---

<div align="center">

## 👩‍💻 Author

**Shalini Aligeti**
Java Full Stack Developer | AI Integration Engineer

*Built for the She Can Foundation Full Stack Development Internship*

---

⭐ *If you found this project helpful, consider giving it a star!*

</div>
