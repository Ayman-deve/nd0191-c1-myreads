import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from './components/Book'
import * as BooksAPI from './BooksAPI'

function SearchPage({ books, newBookShelf, shelf }) {

    const [q, setQ] = useState("");
    const [results, setResults] = useState([]);


    const updateQuery = (q) => {
        setQ(q);
        handleBooksSearch(q);
      };
    


    const handleBooksSearch = useCallback((q) => {
    if (q) {
        BooksAPI.search(q).then((results) => {
            // get matched books wirh our search param
        results.error ? setResults([]) : setResults(results);
        });
    } else {
        setResults([]);
    }
    }, []);

    
    
    useEffect(() => {
    handleBooksSearch();
    }, [q, handleBooksSearch]);
    
    
    return(
        <div className="search-books">

            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    <input
                         type="text"
                         value={q}
                         onChange={(e) => updateQuery(e.target.value)}
                         placeholder="Search by title or author"/>
                    </div>
            </div>

            <div className="search-books-results">
          <ol className="books-grid">
              {/* maping the filtered boxes */}
          {q && results.map((results) => {
              books.map((book) => book.id === results.id ? (shelf = book.shelf) : '');
              return (
                <li key={results.id}>
                  <Book
                    book={results}
                    shelf={shelf}
                    newBookShelf={newBookShelf}
                    handleBooksSearch={handleBooksSearch}
                  />
                </li> 
              );
            })}
          </ol>
        </div>



        </div>
    )
   
}

export default SearchPage