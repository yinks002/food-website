import './App.css';
import Card from './components/card/card';
import Navbar  from './components/navbar/navbar';
import Cart from './components/cart/cart';
import { useState } from 'react';

import info from './data';

const App = ()=>{
  const [turn, setTurn] = useState(true);
  const [myCart, setMyCart] = useState([]);
  let cartedData = []
  const [data, setData] = useState(info)

  const addToCart = (datas)=>{
    if(myCart.indexOf(datas) !== -1)return;
    setMyCart([...myCart,datas])
    alert("added to cart")
    
  }


  return (
    <div className="App">
      
      {/* navbar section */}
      <Navbar
      setTurn = {setTurn}
      turn = {turn}
     />

      
      {/* the card section */}
      <section>

        {turn ? (
            <>
            <div className="header">
            <h1>Welcome to food hub</h1>
                <h2 id="texte">
         get our top menu meals below
              </h2>
            </div>
          <Card 
          addToCart = {addToCart}
          data = {data}/>
          </>
        ) : (
          <>
         <Cart 
         cartedData={cartedData}
         myCart = {myCart}
         setMyCart = {setMyCart}
        
         
         />
          </>
        )}
      
      
      </section>

     
    </div>
  );
}
export default App;
