"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(booksList) {
    Library.validateBookList(booksList);
    this.#books = booksList;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    Library.bookExistValidation(this.#books, title);
    this.#books.push(title);
  }

  removeBook(title) {
    Library.bookNotExistValidation(this.#books, title);
    this.#books = this.#books.filter((el) => el !== title);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  static validateBookList(bookList) {
    const booksSet = new Set(bookList);
    if (booksSet.size !== bookList.length) {
      throw new Error("Представленный массив содержит дубликаты!");
    }
  }

  static bookExistValidation(bookList, book) {
    if (bookList.indexOf(book) !== -1) {
      throw new Error("Такая книга есть в списке!");
    }
  }

  static bookNotExistValidation(bookList, book) {
    if (bookList.indexOf(book) === -1) {
      throw new Error("Такой книги нет в списке!");
    }
  }
}

const bookList1 = ["Книга 1", "Книга 2", "Книга 3", "Книга 4", "Книга 1"];
const bookList2 = ["Книга 1", "Книга 2", "Книга 3", "Книга 4", "Книга 5"];

// const library1 = new Library(bookList1); //Error: Представленный массив содержит дубликаты!
const library2 = new Library(bookList2);
console.log(library2.allBooks);

library2.addBook("Книга 6");
// library2.addBook("Книга 5"); //Error: Такая книга есть в списке!
console.log(library2.allBooks);

library2.removeBook("Книга 2");
// library2.removeBook("Книга 7"); //Error: Такой книги нет в списке!
console.log(library2.allBooks);

console.log(library2.hasBook("Книга 1"));
console.log(library2.hasBook("Книга 2"));
