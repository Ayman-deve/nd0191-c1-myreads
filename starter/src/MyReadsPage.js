import React from 'react'
import ListOfShelves from './components/ListOfShelves'


// Stateless functional component is used as we are using only render method.
const MyReadsPage = () => {
    return(
        <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
            </div>
           <ListOfShelves/>
        </div>
    )
}

export default MyReadsPage