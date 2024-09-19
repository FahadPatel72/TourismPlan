import Card from "./Card";


const Tours = (props) =>{

    function removeCard(id){
        console.log(id);
        props.removeC(id);
    }

    return (
    <div className="start-tour">

    <div className="tour-name"><h2>Plan With Patel</h2></div>
   
    <div className="main-card">
     {
        props.tours.map((tour)=>{
            return <Card className="indCard" key={tour.id} {...tour} cardRemove = {removeCard} />
        })
     }
    </div>
     
    </div>
    );



}















export default Tours;

