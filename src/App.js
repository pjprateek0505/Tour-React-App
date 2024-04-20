import React,{useState} from "react";
import data from './data';
import Tours from "./components/Tours";
import Shimmer from "./components/Shimmer";

const App = () => {

  const [tours,setTours] = useState(data)

  function removeTour (id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className = "referesh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Referesh
        </button>
      </div>
      // <Shimmer/>
    );
  }
  return (
    <div className ="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
