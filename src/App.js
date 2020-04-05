import React, { Component } from 'react';

import BOOK_DATA from './book-data';
import { BookList } from './components/book-list/book-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
    constructor() {
      super();
      this.state = {
          books: BOOK_DATA,
          searchField: ''
      }
    }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
    
  render() {
    const {books, searchField} = this.state;
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(searchField.toLowerCase()) 
      ) 
    return (
          <div className='App'>
                <h1>FUN BOOK CLUB</h1>
                <SearchBox 
                  placeholder = 'search books'
                  handleChange = { this.handleChange }
                />
                <BookList books={filteredBooks} />     
          </div>
        );
      }
  }


export default App;
