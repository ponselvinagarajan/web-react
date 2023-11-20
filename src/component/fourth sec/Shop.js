import './Shop.css'
import { FcRating } from "react-icons/fc";

function Shop(){
    return(
         <div>
            <section id="shop_deatail">
                <div className="container">
                    <div className="row">
                        <h1>Top restaurant chains in Chennai</h1>
                        <div className="detail">
                            <div className="card1">
                                {/* <div className='img2'> */}
                                <img src="./image/kfc.webp" alt="kfc"/>
                                
                                <div className='detail1'>
                                <h3>KFC</h3>
                                <h3><FcRating />4.4 .12 mins</h3>
                                <p>Burgers, Biryani</p>
                                <p>OMR-Perungudi</p>
                                </div>
                            </div>
                            <div className="card2">
                                <img src="./image/pizzas.webp" alt="pizzas"/>
                                <div class="detail1">
                                <h3>PIZZA HUT</h3>
                                <h3><FcRating />3.8 .32 mins</h3>
                                <p>Pizzas</p>
                                <p>Old Mahabalipuram Road OMR</p>
                                </div>
                            </div>
                            <div className="card3">
                                <img src="./image/cola.webp" alt="cola"/>
                                <div className='detail1'>
                                <h3>McDonald's</h3>
                                <h3><FcRating />4.8 .30 mins</h3>
                                <p>Burgers, Beverages</p>
                                <p>Nehru Nagar</p>
                                </div>
                            </div>
 

 
                        </div>
                    </div>
                </div>

            </section>
         </div>
    )
}
export default Shop;