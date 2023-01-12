const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  const contatos = await Contato.searchContact();
  res.render('index' , { contatos });
};