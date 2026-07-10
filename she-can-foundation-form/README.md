# She Can Foundation — Contact Form (Full Stack)

A simple full-stack contact form built for the She Can Foundation internship task.

## ✨ Features

- **Frontend:** HTML, CSS, JavaScript — Name, Email, Message fields + Submit button
- **"Form Submitted Successfully"** message shown after submit
- **Form Validation** — both frontend (instant feedback) and backend (server-side, never trusts the client)
- **Backend Features / APIs** — Express REST API (`POST /api/contact`, `GET /api/contact`)
- **Database Integration** — SQLite (via `better-sqlite3`), data persists in `submissions.db`
- **Admin Panel** — `admin.html` page to view all submissions
- **Authentication** — Admin panel protected by a password (`x-admin-password` header)
- **Responsive Design** — works on mobile and desktop

## 🗂️ Project Structure

```
she-can-foundation-form/
├── server.js          # Express backend (API + serves frontend)
├── package.json
├── public/
│   ├── index.html      # Main contact form
│   ├── admin.html       # Admin panel (view submissions)
│   ├── style.css
│   └── script.js
└── README.md
```

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
     - Default admin password: `shecan123`
     (You can change it by setting the `ADMIN_PASSWORD` environment variable.)

## 🔌 API Endpoints

| Method | Endpoint         | Description                          |
|--------|------------------|---------------------------------------|
| POST   | `/api/contact`   | Submit a new form entry               |
| GET    | `/api/contact`   | Get all submissions (needs admin password header) |

### Example POST request body
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "message": "Great initiative!"
}
```

## 🛠️ Tech Stack

- Node.js + Express (backend, REST API)
- SQLite via better-sqlite3 (database)
- HTML, CSS, vanilla JavaScript (frontend)

## 📌 Note

This project was built for the She Can Foundation Full Stack Development Internship task.
It intentionally keeps things simple and clear while including bonus features
(database, validation, admin panel, authentication, and responsive design).
