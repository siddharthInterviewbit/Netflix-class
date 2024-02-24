import logo from './logo.svg';
import './App.css';
import Row from "./Row";
import requests from './requests';
// import {a,b} from "./Row";
//  destructuring
// {a:{}, b:{}}

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />    
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

