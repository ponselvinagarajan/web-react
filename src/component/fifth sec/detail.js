import './detail.css'

import { IoFilterOutline } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa";
import { FcRating } from "react-icons/fc";



function Detail(){
    return(
         <div>
            <section id="data1">
                <div className='container'>
                    <div className='row'>
                        <h1 className='head'>Restaurants with online food delivery in Chennai</h1>
                        <div className='nav_item'>
                            <li className='nav1'>
                                <ul>Filter <IoFilterOutline /></ul>
                                <ul>SortBy<FaAngleDown /></ul>
                                <ul>Fast delivery</ul>
                                <ul>New ON Swiggy</ul>
                                <ul>Rating 4+</ul>
                                <ul>Pure Veg</ul>
                                <ul>Offers</ul>
                                <ul>Rs300-Rs600</ul>
                                <ul>Less than Rs-300</ul>

                            </li>

                        </div>
                        <div className='nav2'>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/grill.webp' alt='grill'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/grill.webp' alt='grill'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/grill.webp' alt='grill'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/grill.webp' alt='grill'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                        </div>
                        <div className='nav3'>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/Biriyani.webp' alt='Biriyani'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/Biriyani.webp' alt='Biriyani'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/Biriyani.webp' alt='Biriyani'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                            <div className='col4'>
                                <div className='img_2'>
                                    <img src='./image/Biriyani.webp' alt='Biriyani'/>
                                </div>
                                <div className='data5'>
                                    <h3><FcRating />4.8 .30 mins</h3>
                                    <h3>Moonlight Takeaway</h3>
                                    <p>North Indian, Chinese</p>
                                    <p>Perungudi</p>
                                </div>
                            </div>
                        </div>
                        <div className='data6'>
                            <div className='col6'>
                                <h1>
                                For better experience,download the Swiggy app now
                                </h1>
                            </div>
                            <div className='data7'>
                                <div className='col6'>
                                    <img src='./image/app_store.png' alt='app_store'/>
                                </div>
                                <div className='col6'>
                                    <img src='./image/play_store.png' alt='play_store'/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
         </div>
    )
}
export default Detail;