import logo from './logo.svg';
import './App.css';
import Row from "./Row";
// import {a,b} from "./Row";
//  destructuring
// {a:{}, b:{}}
function App() {
  // console.log(a,b);
  return (
    <div className="App">
        <Row title="Netflix orignals" name="x"/>
        <Row title="Movies" name="y"/>
        <Row title="Tv Shows" name="z"/>
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