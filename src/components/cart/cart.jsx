import './cart.css'

import { useState } from 'react'
const Cart = ({myCart,setMyCart})=>{
    
    
    
    const [handleNumber, setHandleNumber] = useState(0);
    const [price, setPrice] = useState('');
    const handleDelete = (id)=>{
        const newCart = myCart.filter((cartedFood)=>{
            return id !== cartedFood.id;
        })
        setMyCart(newCart);
        
    }

    const handleChange = (id)=>{
        myCart.filter((cart)=>{
            if (cart.id==id){
                setHandleNumber((prevcount)=> prevcount+ 1)
            }
        })
       
    }

   
    // const [cartedData,setCartedData] = useState();
    return(
        <>
       
      <div className="cart">
      <article>
        <div>
       {myCart.map((cater)=>{
            console.log(cater.title)
             return(
            
            <div className="carta" >
             <div className="cart_box" >
            <div className="cart_img">
            <img src={cater.img} alt="error" />
            <h1
            style={{color: "white"}}
            >{cater.title}</h1>
             </div>
        
                

                    <div>
                <button
                onClick={()=>handleChange(cater.id)}
                >+</button>

                <h3
                style={{color:"white"}}
                >{handleNumber}</h3>
                <button
                onClick=
                {
                    
                    ()=>setHandleNumber((prevcount)=> prevcount - 1)}
                >-</button>
                </div>

                <div>
                    <span>{cater.price}</span>
                    <button onClick={()=> handleDelete(cater.id)}>Remove</button>
                </div>
                </div>
                </div>
                
               
            
        )
       })};
       </div>

       {myCart.length > 0 ? (
        
            <div className="total">
            <span>Total price of your cart is #{handleNumber}</span>
        <span></span>
        </div>
        
       ):(
        <h1
        style={{color:"white"}}
        >you have no carts available...........</h1>
       )
    }
        
      </article>
      </div>
        </>
    )
}

export default Cart;