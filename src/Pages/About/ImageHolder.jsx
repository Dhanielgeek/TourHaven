import React from 'react'

const ImageHolder = (props) => {
  return (
   <div className='Cards' >
   <div className="CardUp">
   <img src={props.image} alt="" className='img'/> 
   </div>
   <div className="CardDown">
    <p>{props.Name} <br/> <span style={{fontWeight:"700",color:"#fb8500"}}>
    {props.stack}
      </span> </p>
   </div>  
   </div>
  )
}

export default ImageHolder
