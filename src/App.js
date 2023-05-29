import logo from './logo.svg';
import './App.css';
import  Car from './Car';

function App() {
  let a = 12;
  let b = 13;
  return (
    <div className="App">
    hi 1 {a+b}
    <Car/>
    <Car/>
    <Car/>
    </div>
  );
}

export default App;
