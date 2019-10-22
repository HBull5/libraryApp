const books = [];

const getInput = () => {
    let title = document.getElementById("book");
    let author = document.getElementById("author");
    let ISBN = document.getElementById("ISBN");
    let newEntry = new Entry(title.value, author.value, ISBN.value);
    books.push(newEntry);
    title.value = "";
    author.value = "";
    ISBN.value = "";
    Entry.display();
}

class Entry {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    static display() {
        let table = document.getElementById("tbody");
        table.innerHTML = "";
        books.forEach((obj) => {
            // would like to reformulate this to not be some nasty string
            table.innerHTML += `<tr><td>${obj.title}</td><td>${obj.author}</td><td>${obj.ISBN}</td></tr>`;
        });
    }
}
