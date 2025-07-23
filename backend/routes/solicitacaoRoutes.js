const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { criarSolicitacao, responderSolicitacao, listarSolicitacoes } = require('../controllers/solicitacaoController');

router.post('/', auth, criarSolicitacao);
router.put('/:id', auth, responderSolicitacao);
router.get('/', auth, listarSolicitacoes);

module.exports = router;
