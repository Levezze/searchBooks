const searchInput = document.getElementById("search-bar");

// Click handler for search button
const captureSearchValue = () => {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    return searchValue;
  })
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => { captureSearchValue() })

// searchInput.addEventListener("input", (event) => {
//   const searchValue = event.target.value;
//   console.log(searchValue)
// });

// Filter books based on search input
const filterBooks = () => {

};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = () => {

};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {

}

// Grab search button from the DOM


// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });