import React from 'react'
import { Link } from 'react-router-dom'



const OpenSearch = (props) => {
    const {currentBooks} = props
    console.log('search Menu Opened !!!!')
    return (
        <div className='open-search'>
               <Link to={{
                   pathname:'/search',
                   state: {
                       booksFromHomepage: currentBooks
                       }}}/>
        </div>
    )
}

export default OpenSearch