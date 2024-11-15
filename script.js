// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document.getElementById("search-bar");
  return searchInput.value;
};

// Test //
// const searchInput = document.getElementById("search-bar");
// const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", () => { captureSearchValue(searchInput) })

// Filter books based on search input
const filterBooks = (searchValue, books) => {
  const booksFlattened = flattenObjectValuesIntoArray(books);
  let filteredBooks = [];
  for (i = 0; i < books.length; i++) {
    if (booksFlattened[i].includes(searchValue)) {
      filteredBooks.push(books[i])
    }
  }
  return filteredBooks;
};

// Test //
// const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", () => {
//   const searchValue = captureSearchValue(searchInput);
//   console.log(filterBooks(searchValue, books));
//   console.log(searchValue);
// });
  
// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (filteredBooks) => {
  let htmlBooks = []
  filteredBooks.forEach(book => {
    htmlBooks.push(structureBookAsHtml(book));
  });
  return htmlBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, books);
  const htmlBooks = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(htmlBooks);
}

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });