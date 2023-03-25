const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
];

const sortBooks = books.sort((a, b) => {
  return a.year - b.year;
});

const heroList = document.querySelector(".hero__list");

const specialBooks = sortBooks.map((element) => {
  return ` <li class="hero__item">
  <h1 class="hero__item-title">${element.title}</h1>
  <h2 class="hero__item-author">${element.author}</h2>
  <p class="hero__item-year">${element.year}</p>
  <h3 class="hero__item-genre">${element.genre}</h3>
</li> `;
});

heroList.innerHTML = specialBooks.join("");
