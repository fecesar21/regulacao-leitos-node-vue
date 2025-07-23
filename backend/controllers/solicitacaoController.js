const { Solicitacao } = require('../models');

exports.criarSolicitacao = async (req, res) => {
  const { paciente_nome, tipo_leito, justificativa, unidade_origem_id, unidade_destino_id } = req.body;
  try {
    const nova = await Solicitacao.create({
      paciente_nome, tipo_leito, justificativa,
      unidade_origem_id, unidade_destino_id,
      usuario_id: req.user.id
    });
    res.json(nova);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar solicitação' });
  }
};

exports.responderSolicitacao = async (req, res) => {
  const { id } = req.params;
  const { status, observacao } = req.body;
  try {
    const solicitacao = await Solicitacao.findByPk(id);
    if (!solicitacao) return res.status(404).json({ error: 'Solicitação não encontrada' });
    solicitacao.status = status;
    solicitacao.observacao = observacao;
    await solicitacao.save();
    res.json(solicitacao);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao responder solicitação' });
  }
};

exports.listarSolicitacoes = async (req, res) => {
  try {
    const lista = await Solicitacao.findAll();
    res.json(lista);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao listar solicitações' });
  }
};
