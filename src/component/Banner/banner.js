import './banner.css'
function Banner(){
    return(
        <div>
            <section id="Banner">
                <div className="container">
                    <div className="row">
                        <h1>Best Offer For You</h1>
                        <div className='banner_img'>
                        <div className="col6">
                            <div className="image1">
                                <img src="./image/image_1.webp" alt="image_1"/>
                            </div>
                        </div>
                        <div className="col6">
                            <div className="image2">
                                <img src="./image/image_2.webp" alt="image_2"/>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Banner;