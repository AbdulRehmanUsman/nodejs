import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',    // your db user
  password: 'password', // your db password
  database: 'accounts_management', // your db name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;