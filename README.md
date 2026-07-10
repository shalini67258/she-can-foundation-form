# She Can Foundation — Contact Form (Full Stack)

A full-stack contact form web application built for the **She Can Foundation
Full Stack Development Internship task**.

## 📋 About This Project

The task asked for a simple webpage with a form (Name, Email, Message,
Submit button) that shows "Form Submitted Successfully" after submission.
That core requirement is fully met — but this project also goes further and
implements all the optional bonus features listed in the task:

- ✅ Database Integration
- ✅ Authentication
- ✅ Admin Panel
- ✅ APIs
- ✅ Form Validation
- ✅ Responsive Design
- ✅ Backend Features

## ✨ Features Explained

**1. Contact Form (`index.html`)**
The main page visitors see. It has Name, Email, and Message fields with a
Submit button. When submitted, the data is validated and sent to the
backend API, saved to the database, and the user sees a
"Form Submitted Successfully" message.

**2. Form Validation**
- Frontend: instant error messages if a field is empty or the email format
  is invalid — before anything is sent to the server.
- Backend: the server independently re-validates every field, since a
  frontend check alone can always be bypassed.

**3. Backend + APIs (`server.js`)**
A Node.js + Express server that exposes REST API endpoints:
- `POST /api/contact` — submit a new form entry
- `GET /api/contact` — fetch all submissions (admin only)
- `POST /api/admin/register` — create an admin account
- `POST /api/admin/login` — log in and receive a session token
- `POST /api/admin/logout` — end the admin session

**4. Database Integration**
Every submission is saved permanently in a SQLite database
(`submissions.db`) using the `better-sqlite3` library — not just displayed
and forgotten.

**5. Admin Panel + Authentication (`admin.html`)**
A separate, protected page (not visible/usable by regular visitors) where
the foundation's admin can view all form submissions.
- **Register**: the first time, an admin creates their own username +
  password. Passwords are never stored in plain text — they're hashed with
  `bcryptjs`.
- **Login**: after registering, the admin logs in and receives a temporary
  session token, which is required to view the submissions list.
- This proves real authentication is in place — random visitors can't see
  who filled out the form.

**6. Responsive Design**
The CSS uses flexible layouts and a mobile breakpoint so the form and
admin panel both work well on phone and desktop screens.

## 🗂️ Project Structure
she-can-foundation-form/
├── server.js          # Express backend (API + serves frontend)
├── package.json
├── public/
│   ├── index.html      # Main contact form
│   ├── admin.html       # Admin panel (register/login/view submissions)
│   ├── style.css
│   └── script.js
└── README.md

## 🚀 How to Run Locally

1. **Install dependencies**
```bash
   npm install
```

2. **Start the server**
```bash
   npm start
```

3. **Open in browser**
   - Form: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin.html
     - First time: click "Register as admin" and create your own username/password
     - Then log in with those same credentials to view submissions

## 🔌 API Endpoints

| Method | Endpoint                | Description                                   |
|--------|--------------------------|------------------------------------------------|
| POST   | `/api/contact`           | Submit a new form entry                        |
| GET    | `/api/contact`           | Get all submissions (needs admin token header)  |
| POST   | `/api/admin/register`    | Create a new admin account                      |
| POST   | `/api/admin/login`       | Log in, returns a session token                 |
| POST   | `/api/admin/logout`      | Invalidate the current session token            |

### Example: submitting the form
```json
POST /api/contact
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "message": "Great initiative!"
}
```

## 🛠️ Tech Stack

- **Backend:** Node.js + Express (REST API)
- **Database:** SQLite via `better-sqlite3`
- **Authentication:** `bcryptjs` for password hashing + token-based sessions
- **Frontend:** HTML, CSS, vanilla JavaScript

## 📌 Note

This project was built for the She Can Foundation Full Stack Development
Internship task. It intentionally keeps the core requirement simple and
clear (a working form with a success message) while additionally
demonstrating database integration, form validation, a working REST API,
an authenticated admin panel, and responsive design — covering every bonus
category listed in the task description.
