// She Can Foundation - Contact Form Backend
// Simple full-stack app: Express + SQLite (better-sqlite3)

const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple password to protect the admin panel API (bonus: "Authentication")
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'shecan123';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Database setup (bonus: "Database Integration") ----------
const db = new Database(path.join(__dirname, 'submissions.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TEXT NOT NULL
  )
`);

// ---------- Helpers ----------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------- API Routes (bonus: "APIs" + "Form Validation") ----------

// POST /api/contact - submit the form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  // Backend validation (never trust the client)
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Name is required.' });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'A valid email is required.' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message is required.' });
  }

  const stmt = db.prepare(
    'INSERT INTO submissions (name, email, message, submitted_at) VALUES (?, ?, ?, ?)'
  );
  const info = stmt.run(name.trim(), email.trim(), message.trim(), new Date().toISOString());

  return res.status(201).json({
    success: true,
    message: 'Form Submitted Successfully',
    id: info.lastInsertRowid,
  });
});

// GET /api/contact - list all submissions (protected, bonus: "Admin Panel")
app.get('/api/contact', (req, res) => {
  const password = req.headers['x-admin-password'];
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, error: 'Unauthorized. Admin password required.' });
  }
  const rows = db.prepare('SELECT * FROM submissions ORDER BY id DESC').all();
  res.json({ success: true, count: rows.length, data: rows });
});

app.listen(PORT, () => {
  console.log(`She Can Foundation server running at http://localhost:${PORT}`);
});
