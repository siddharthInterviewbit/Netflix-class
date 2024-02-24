import axios from "./axios";
import {useState, useEffect} from "react";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl}){
  // let response = [];
  let [movies, setMovies] = useState([]);
  // console.log(requests.fetchTrending);
  useEffect(()=> {
    axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      // response = data;
      setMovies(response.data.results);
    })
  }, [])
  
  
  // api call using fetch or axios 
  // ajax call 
  // aysn
  // promise 
  // then 
  
  
  return (
    <div className="row">
    <h2>
      {title}
    </h2>
    
    <div className="row_posters">
    {          
      movies.map((item) => {
        return (
          <img    
          className= "row_poster"
          src={`${base_url}${item.poster_path}`}
          />)
        })}
        </div>
        
        </div>
        )
      }
      
      // export let a = 10;
      // export let b = 20;
      
      //these exports which are named exports are exported as an object
      
      export default Row;
      // default export in a file can only be one 
      
      
      // two types of exports 
      // Default 
      // Named exports
      
      // state variable
      // that once set would cause a rerender of your react application
      // how to create this state variable
      
      // useState hook
      // useState(default value)
      // returns [stateVar, setterMethod];
      
      // useEffect
      // useEffect(function, [])
      // useEffect(function)
      // useEffect(function, [movies])
      
      // movies = 1
      // movies = 2
      // prev movies == cur movies false
      // state variable to check the change of them
      // lifecycle of a component 
      // component when it is rendered for the first time mounting
      // component is rendered again and again after that it is know rerendering
      
// assignment
      // add youtube trailer on click 
      // map on the app.js for rows
      // poster size for the first row to be bigger and rest to be smaller
