import React from 'react';

import { Book } from '../book/book.component';

import './book-list.styles.css'

export const BookList = props => {

   return <div className="card-list">
            {props.books.map(book => (
            <Book key={book.id} book={book} /> 
        ))} 
    </div>; 
};