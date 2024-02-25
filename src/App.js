import './App.css';
import Main from "./components/Main";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResults";
import { SearchProvider } from './context/SearchContext';

// import {a,b} from "./Row";
//  destructuring
// {a:{}, b:{}}

function App() {
  // state variable 
  // method to set that state variable
  return (
    <div className="App">
      <SearchProvider>
        <Nav />
        <Main />
        <SearchResults />
      </SearchProvider>
    </div>
  );
}

export default App;


// component in react
// functional components
// it returns html 
// reusable block of code 
// html written in js is known as JSX
// App(a)


//  what is ajax 
// api - is a way for your backend and frontend to talk to each other
// ajax - asyncronus javascript and xml
// fetch 
// axios is a package on top of ajax which gives you a way to do ajax calls on a particular url



// imports work 
// import Row from "./components/Row/Row";
// import Row from "./components/Row/";
// and find a index.js file in it 

