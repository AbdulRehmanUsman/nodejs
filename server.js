import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import daybookRoutes from './routes/daybook.js';
import ledgerRoutes from './routes/ledger.js';
import chequeRoutes from './routes/cheque.js'; // Corrected line

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/daybook', daybookRoutes);
app.use('/api/ledger', ledgerRoutes);
app.use('/api/cheques', chequeRoutes); // Corrected line

app.get('/', (_req, res) => {
  res.send('Accounts Management System API');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});