const library = [];

function addBook(isbn, title, author, year) {
 
    for (let i = 0; i < library.length; i++) {
        if (library[i][0] === isbn) {
            console.log('The Book with this ISBN exist');
            return;
        }
    }

    library.push([isbn, title, author, year]);
}

function findBook(isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][0] === isbn) {
            return i; 
        }
    }
    return -1; 
}

function printLibrary() {
    console.log('isbn;title;author;year');
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].join(';'));
    }
}

while (true) {
    const inputDate = prompt('Enter book data separate by ";"');
    if (!inputDate) {
        break;
    }

    const [isbn, title, author, year] = inputDate.split(';');
    addBook(isbn, title, author, year);
}

printLibrary();

const searchIsbn = prompt('Enter ISBN for a search Book:');
if (searchIsbn) {
    const index = findBook(searchIsbn);
    if (index !== -1) {
        console.log('Book found:');
        console.log(`isbn: ${library[index][0]}`);
        console.log(`title: ${library[index][1]}`);
        console.log(`author: ${library[index][2]}`);
        console.log(`year: ${library[index][3]}`);
    } else {
        console.log('The Book with this ISBN not exist');
    }
}
