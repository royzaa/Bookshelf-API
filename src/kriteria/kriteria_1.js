const { nanoid } = require('nanoid');
const books = require('../books');

function addBook(request, h) {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(13);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  // const reading = readPage !== 0 && !(readPage > pageCount);
  const finished = readPage === pageCount;

  const newBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    id,
    insertedAt,
    updatedAt,
    finished,
    reading,
  };

  // error empty name
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // error readPage greater than pageCount
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  books.push(newBook);

  const isAdded = books.filter((book) => book.id === id).length === 1;

  // success
  if (isAdded) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  // general error
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
}

module.exports = { addBook };
