import React,{useState} from "react";

const Card = ({id,name,info,image,price,cardRemove}) =>{

 const [readmore,setReadMore] = useState(false);
 const description = readmore ? info : `${info.substring(0,200)}....`;

 function readMoreHandler(){
    setReadMore(!readmore);
 }

 return (

    <div className="card-container">
    
    <img src={image} className="city-img" alt={"not found"} />

    <div className="tour-info">

    <div className="tour-price">₹ {price}</div>
    <h4 className="tour-city">{name}</h4>
    <div className="tour-desc">
        {description}
        <span className="read-more-less" onClick={readMoreHandler}>
            {readmore ? 'show less' : 'read more'}
        </span>
    </div>
      
    </div>
    
     <button className="notInt" onClick={()=> cardRemove(id) }>
        Not Interested
     </button>
 
    </div>


 )


}



export default Card;