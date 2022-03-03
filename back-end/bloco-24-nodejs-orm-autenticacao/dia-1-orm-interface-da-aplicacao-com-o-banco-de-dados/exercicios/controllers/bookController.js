const { Book } = require('../models');

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();
    if(!books) return res.status(400).json({ message: "nenhum livro encontrado" });
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ where: { id }});
    if(!book) return res.status(404).json({ message: "livro não encontrado" });
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado'});
  }
};

const createNewBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const outwriteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const outwritedBook = await Book.update({ title, author, pageQuantity }, { where: { id }});
    return res.status(201).json(outwritedBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook);

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { getAllBooks, getBookById, createNewBook, outwriteBook, deleteBook};
