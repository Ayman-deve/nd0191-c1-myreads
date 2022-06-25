import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import SingleShelfComponent from './SingleShelfComponent'
import OpenSearch from './OpenSearch'

class ListOfShelves extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            })
        })
    }

    onChangeShelf = (book, newShelf) => {
        BooksAPI.update(book,newShelf).then((res) =>{
            console.log('Update response', res)
            book.shelf = newShelf
            var updatedBooks = this.state.books.filter((resultBook) =>resultBook.id !== book.id)
            updatedBooks.push(book)
            this.setState({books: updatedBooks})
        })
    }

    render() {
        const shelvesList = [
            {type: 'currentlyReading', title: 'Currently Reading'},
            {type: 'wantToRead', title: 'Want to Read'},
            {type: 'read', title: 'Read'}
        ]
        return(
            <div>
            <div className='list-books-content'>
                { this.state.books.length > 0 &&
                    <div>
                        { shelvesList.map( (compartment,index) => {
                            const compartmentBooks =this.state.books.filter( (book) =>
                            book.shelf===compartment.type
                         )
                            return(
                                <div className="bookshelf" key={index}>
                                    <h1 className="bookshelf-title">{compartment.title}</h1>
                                        <SingleShelfComponent
                                            key={index}
                                            books={compartmentBooks}
                                            compartmentsList={shelvesList}
                                            onChangeShelf={this.onChangeShelf}
                                        />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <OpenSearch
                currentBooks={this.state.books}
            />
            </div>
        )
    }
}
export default ListOfShelves