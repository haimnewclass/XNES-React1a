import logo from './logo.svg';
import './App.css';
import  Car from './Car';
import House from './House';
import InputSample from './InputSample';
import PropsSample from './PropsSample'
import Dots from './Dots';
import MapSample from './MapSample';

function App() {


 let ItemWasAdded=(x)=>
  {
    console.log(x);
  }


  let a = 12;
  let b = 13;
  return (
    <div className="App">

<MapSample/>

<Dots></Dots>

    hi 1 {a+b}
<InputSample />
<hr/>
<PropsSample Description="bla bla bla" Size="13" onAddItem={ItemWasAdded} />
<PropsSample Description="la la la land" Size="34"  aaa="12333" />
    <House/>
    <hr/>
    <Car/>
    <Car/>
    <Car/>
    </div>
  );
}

export default App;
