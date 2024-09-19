import React,{useState} from "react";
import data from "./data";
import Tours from "./Component/Tours";

const App = () => {

  const [tour,setTour] = useState(data);

  function removeCard(id){
    
    const newTours = tour.filter(tours => tours.id !== id);
    setTour(newTours);

  }

  if(tour.length===0){
    return(
     <div className="no-tour-left">
      <h4 className="noTour">No Tours Found</h4>
      <button className="refreshbtn" onClick={()=> setTour(data)}>Refresh</button>
     </div>
    );
  }
 
  return (

    <div className="wrapper">
       
      <Tours tours={tour} removeC = {removeCard}  />

    </div>


  )


};

export default App;
