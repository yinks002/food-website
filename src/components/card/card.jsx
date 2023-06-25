import React from "react";
import './card.css'


const Card = ({data,addToCart})=>{



    const buy = ()=>{
        alert("click on Add to cart to proceed to buy this product")
    }
    return(
        <>
        
       <div className="container">
        
       <div className="overall">
       
       
            {data.map((datas)=>{
                return(
                    <>
                    
            <div className="card">
            <img src={datas.img} alt="error"/>
            <div className="intro">
                <h1>{datas.title}</h1>
                <p>{datas.description}
                </p>
                <button 
                onClick={buy}
                href="#">#{datas.price}</button>

        <button
        onClick={()=> addToCart(datas)}

        >Add to cart</button>
                
            </div>
           
           
        </div>
        
                    
                    </>
                )
            })}
       </div>
    </div>
        
        
        </>
    )
}

export default Card;