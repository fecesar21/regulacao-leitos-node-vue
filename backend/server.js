require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDB } = require('./models');
const authRoutes = require('./routes/authRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/solicitacoes', solicitacaoRoutes);

const PORT = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
