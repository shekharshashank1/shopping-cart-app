'use strict'

export function getAllBooks() {
	return {
		type: 'GET_BOOKS',
		payload: {
					books: [{
						id: 1,
						title: 'book title 1',
						description: 'book description 1',
						price: 100
					}, {
						id: 2,
						title: 'book title 2 ',
						description: 'book description 2',
						price: 200
					}]
		}
	}
}

export function postBooks(book) {
	return {
		type: 'POST_BOOK',
		payload: book
	}
};

export function deleteBook(id) {
	return {
		type: 'DELETE_BOOK',
		payload: {id: id}
	}
};

export function updateBook(book) {
	return {
		type: 'UPDATE_BOOK',
		payload: book
	}
};