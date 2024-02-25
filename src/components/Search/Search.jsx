// close button 
// search button 
// input 
// click event on both the buttons 
// you need to do an api call 
// state variable onchange of the input 
import {useState, useContext} from "react";
import { useSearch } from "../../context/SearchContext";
import './Search.css';

function Search() {
  const {search, flag, query, setFlag, setQuery,setResults} = useSearch();
  

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const cancelSearch = () => {
    setQuery('');
    setFlag(!flag);
    setResults([]);
  }

  const handleSubmit = () => {
    if(query) {
      search();
    }
  }

  return(
    <div className="search-form">
      <input 
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies"
        className="search-input"
      />
      {flag && <button type="button" className="cancel-button" onClick={cancelSearch}>X</button>}
      {!flag && <button type="button" className="search-button" onClick={handleSubmit}>search</button>}
    </div>
  )
}

export default Search;
