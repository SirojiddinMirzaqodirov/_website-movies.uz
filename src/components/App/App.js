import React, { Component } from 'react';
import './App.css';
import AppInfo from '../App-info/App-info';
import SearchPanel from '../Search-panel/Search-panel';
import AppFilter from '../App-filter/App-filter';
import MovieList from '../Movie-list/Movie-list';
import MovieAddForm from '../Movie-add-form/Movie-add-form';


class App extends Component {
  render() {
    return (
      <div className="app font-monospace">
        <div className='content'>
          <AppInfo/>
          <div className='search-panel'>
            <SearchPanel/>
            <AppFilter/>
          </div>
          <MovieList/>
          <MovieAddForm/>
        </div>
      </div>
    );
  }
}

export default App;
