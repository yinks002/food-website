import './navbar.css'

const Navbar = ({setTurn, turn})=>{
    return(
        <>
        <nav>
        <div className="nav_box">
            <span 
            onClick={()=> setTurn(!turn)}
            className="my_shop">
                Food Hub
            </span>
            <div className="cart">
                <span>
                    <i 
                   
                    className="fas fa-cart-plus"></i>
                </span>
                <span onClick={()=> setTurn(!turn)}>0</span>
            </div>
        </div>
        </nav>
        
        </>



    )
}

export default Navbar;