const thisBooks = require('../books');

// kriteria 2 + optional
function getAllThisBooks(request, h) {
  let booksData = [];
  const booksReturn = [];
  const { reading } = request.query;
  const { finished } = request.query;
  const { name } = request.query;

  // reading logic
  if (reading === '1') {
    console.log('query masuk');
    booksData = thisBooks.filter((book) => book.reading);
  } else if (reading === '0') {
    booksData = thisBooks.filter((book) => !book.reading);
  } else if (finished === '1') {
    console.log('query masuk');
    booksData = thisBooks.filter((book) => book.finished);
  } else if (finished === '0') {
    booksData = thisBooks.filter((book) => !book.finished);
  } else if (name !== undefined) {
    booksData = thisBooks.filter((book) => book.name.toLowerCase().includes(`${name}`.toLowerCase()));
  } else { booksData = thisBooks; }

  booksData.forEach(
    (_, index) => {
      booksReturn.push({
        id: thisBooks[index].id,
        name: thisBooks[index].name,
        publisher: thisBooks[index].publisher,
      });
    },
  );

  const books = booksReturn.length > 0 ? booksReturn : thisBooks;

  const response = h.response({
    status: 'success',
    data: {
      books,
    },
  });

  return response;
}

module.exports = { getAllThisBooks };
