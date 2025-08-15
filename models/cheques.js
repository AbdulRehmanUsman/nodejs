import db from './db.js';

export async function addCheque({ ledger_id, cheque_number, amount, date }) {
  const [result] = await db.query(
    "INSERT INTO cheques (ledger_id, cheque_number, amount, date, status) VALUES (?, ?, ?, ?, ?)",
    [ledger_id, cheque_number, amount, date, 'pending']
  );
  return result.insertId;
}

export async function getAllCheques() {
  const [rows] = await db.query("SELECT * FROM cheques");
  return rows;
}

export async function markCleared(cheque_id) {
  await db.query("UPDATE cheques SET status='cleared' WHERE id=?", [cheque_id]);
}