const thisBooks = require('../books');

// display book details
function getBookDetails(request, h) {
  const { id } = request.params;

  const book = thisBooks.filter((i) => i.id === id)[0];

  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;
}

module.exports = { getBookDetails };
