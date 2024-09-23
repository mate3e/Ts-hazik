class book {
    title: string;
    id: number;
    author: string;
    price: number;
    constructor(title: string, id: number, author: string, price: number) {
        this.title = title;
        this.id = id;
        this.author = author;
        this.price = price;
    }
}

export interface ILibrary {
    addBook(book: book): void;
    removeBook(id: number): void;
    findBookById(id: number): book;
    listAllBooks(): book[];
}

class library {
    books: book[] = [];
    addBook(book: book) {
        this.books.push(book);
    }
    removeBook(id: number) {
        let index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
    getBookById(id: number) {
        return this.books.find((book) => book.id === id);
    }
    listAllBooks() {
        return this.books;
    }
}
/* test */

class user {
    name: string;
    userId: number;
    email: string;
    constructor(name: string, userId: number, email: string) {
        this.name = name;
        this.userId = userId;
        this.email = email;
    }
    borrowBook(library: library, bookId: number) {
     
    }
}