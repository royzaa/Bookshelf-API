const { addBook } = require('./kriteria/kriteria_1');
const { getAllThisBooks } = require('./kriteria/kriteria_2_&_optional');
const { getBookDetails } = require('./kriteria/kriteria_3');
const { editBook } = require('./kriteria/kriteria_4');
const { deleteBook } = require('./kriteria/kriteria_5');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/{books?}',
    handler: getAllThisBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookDetails,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
