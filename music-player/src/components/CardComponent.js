import React from 'react'
import '../App.css'
import coldplay from '../images/coldplay.jpg'
import panda from '../images/panda.jpg'
import imagine from '../images/imagine.jpg'
class CardComponent extends React.Component{
  
    render(){
        return(
        <React.Fragment>
             <div className="imgHover" > 
                    <img src={coldplay} alt="Logo" height="200" width="300" />
                    <img src={panda} alt="Logo" height="200" width="300" style={{margin : '0 35px'}} />
                    <img src={imagine} alt="Logo" height="200" width="300" />             
             </div>
        </React.Fragment>
        );
    }

}
export default CardComponent;