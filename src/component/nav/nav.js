import "./nav.css"
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaLifeRing } from "react-icons/fa";
import { MdPerson2 } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";





// import React from 'react'

function NavList(){
    return(
        <div>
            <section id="NavList" >
                <div className="navitem">
                    <div className="container">
                        <div className="row">
                            <div className="col2">
                                <div className="Logo" >
                                    <img src="./image/logo.png" alt="logo"/>

                                </div>

                            </div>
                            <div className="col3">
                            <p className="item1">
                                       <b>other</b>thoraipakkam,chennai<span><FaAngleDown/></span>

                                    </p> 

                             </div>
                             <div className="col6">
                                <div className="icon_sec">
                                    <div className="icon1">
                                        <h3><IoSearch /> Search</h3>
                                        </div>    
                                    <div className="icon1">
                                        <h3><BiSolidOffer />Offer</h3>
                                    </div>
                                    <div className="icon1">
                                        <h3><FaLifeRing />Help</h3>
                                    </div>
                                    <div className="icon1">
                                        <h3><MdPerson2 />Ponselvi</h3>
                                    </div>
                                    <div className="icon1">
                                        <h3><FiShoppingCart />Cart</h3>
                                        </div> 
                             </div>
                             </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>

    )
}
export default NavList 