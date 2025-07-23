const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res) => {
  const { nome, email, senha, perfil } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  try {
    const user = await User.create({ nome, email, senha: hash, perfil });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário, email já existente' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(senha, user.senha))) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: user.id, perfil: user.perfil, nome: user.nome }, process.env.JWT_SECRET);
  res.json({ token });
};
