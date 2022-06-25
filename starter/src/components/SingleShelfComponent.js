import React from 'react'
// import PropTypes from 'prop-types'
import Book from './Book' 

// Stateless functional component is used as we are using only render method.
const SingleShelfComponent = (props) => {
    const {compartmentIndex,books,onChangeShelf} = props
    return(
        <div>
            <div className="bookshelf-books" key={compartmentIndex}>
                <ol className="books-grid">
                    {books.map( (book) => (
                        <Book
                            key={book.id}
                            book={book}
                            onChangeShelf={onChangeShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
        )
}


export default SingleShelfComponent