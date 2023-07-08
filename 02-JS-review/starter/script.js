const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
}

const books = getBooks();
const book = getBook(3);

//Destruturing object
const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

//Destructuring array and Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, "\n", secondaryGenre, "\n", otherGenres);

//Spread operator for arrays
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

//Spread for objects
const updatedBook = {
  //pages: 1210 gets overwritten by pages property of book
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210, //overwrites pages property of book
};
console.log(updatedBook);

//template literals
const summary = `${title} is a ${pages}-pages long book, which was written by ${author} and published in ${
  publicationDate.split("-")[0]
}.`;
console.log(summary);

//ternary operator
const bookPages = pages > 1000 ? "over a thousand" : "less than thausand";
console.log(`The book has ${bookPages} pages.`);
console.log(
  `The book has ${
    book.hasMovieAdaptation ? "" : "not"
  } been adapted as a movie.`
);

//Arrow functions
(year) => year.split("-")[0];
//Function declration
function getYear(year) {
  return year.split("-")[0];
}
//Function Expression Arrow
const toYear = (year) => year.split("-")[0];
//Function expression return
const tYear = (year) => {
  return year.split("-")[0];
};

//Short circuiting

console.log(true && "some value");
console.log(false && "some value");
console.log("truthy" && "some value");
console.log(null && "some value"); // falsy: '', 0, null, undefined, NaN

console.log(true || "some value");
console.log(false || "some value");
console.log("truthy" || "some value");
console.log(null || "some value");

// return false for all falsy values
const countWrong = book.reviews.librarything?.reviewsCount || "no data";
countWrong;

//return false only for null and undefined
const countCorrect = book.reviews.librarything?.reviewsCount ?? "no data";
countCorrect;

//optional chaining
const allReviewsCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

console.log(allReviewsCount(book));

//Map
[1, 2, 3, 4, 5].map((el) => el * 2);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: allReviewsCount(book),
}));
essentialData;

//Filter
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//Reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

arr = [3, 7, 1, 9, 5];
sortedArr = arr.slice().sort((a, b) => a - b); //ascending
sortedArr;
arr;

//Sort
const sortedBooksByPages = books.slice().sort((a, b) => b.pages - a.pages); //descending
sortedBooksByPages;

//Immutable arrays
const newbook = {
  id: 6,
  title: "New book",
  author: "Angel",
};
const addBook = [...books, newbook];
addBook;

const deleteBoook = addBook.filter((book) => book.id !== 6);
deleteBoook;

const updateBook = deleteBoook.map((book) =>
  book.id === 1 ? { ...book, pages: 1000 } : book
);
updateBook;

//Promises

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

//Async await
async function fetchURL(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

const users = fetchURL("https://jsonplaceholder.typicode.com/todos/1");
console.log(users);
