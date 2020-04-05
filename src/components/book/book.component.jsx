import React from 'react';

import './book.styles.css';
export const Book = props => (
    <div className='card-container'>
         <img alt='book' src={props.book.src} />
        <h2>{ props.book.title }</h2>
        <h4>{props.book.author}</h4>
    </div>);