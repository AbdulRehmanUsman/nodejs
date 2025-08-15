import db from './db.jsf';

export async function addExpense({ date, description, amount, category }) {
  const [result] = await db.query(
    "INSERT INTO daybook (date, description, amount, category) VALUES (?, ?, ?, ?)",
    [date, description, amount, category]
  );
  return result.insertId;
}

export async function getExpensesByDate(date) {
  const [rows] = await db.query("SELECT * FROM daybook WHERE date=?", [date]);
  return rows;
}

export async function getExpensesByRange(start, end) {
  const [rows] = await db.query("SELECT * FROM daybook WHERE date BETWEEN ? AND ?", [start, end]);
  return rows;
}

export async function getTotalByDate(date) {
  const [[row]] = await db.query("SELECT SUM(amount) as total FROM daybook WHERE date=?", [date]);
  return row.total || 0;
}