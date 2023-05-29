import logo from './logo.svg';
import './App.css';
import  Car from './Car';
import House from './House';
import InputSample from './InputSample';

function App() {
  let a = 12;
  let b = 13;
  return (
    <div className="App">
    hi 1 {a+b}
<InputSample/>
<hr/>
    <House/>
    <hr/>
    <Car/>
    <Car/>
    <Car/>
    </div>
  );
}

export default App;
