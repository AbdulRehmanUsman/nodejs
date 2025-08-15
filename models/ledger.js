import db from './db.js';

export async function addEntry({ category, name, type, amount, description, date, cheque_number }) {
  const [result] = await db.query(
    "INSERT INTO ledger (category, name, type, amount, description, date, cheque_number) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [category, name, type, amount, description, date, cheque_number]
  );
  return result.insertId;
}

export async function getEntriesByCategory(category) {
  const [rows] = await db.query("SELECT * FROM ledger WHERE category=?", [category]);
  return rows;
}

export async function getWeeklySummary(category, weekstart, weekend) {
  const [rows] = await db.query(
    "SELECT * FROM ledger WHERE category=? AND date BETWEEN ? AND ?",
    [category, weekstart, weekend]
  );
  return rows;
}

export async function getMonthlySummary(category, monthstart, monthend) {
  const [rows] = await db.query(
    "SELECT * FROM ledger WHERE category=? AND date BETWEEN ? AND ?",
    [category, monthstart, monthend]
  );
  return rows;
}