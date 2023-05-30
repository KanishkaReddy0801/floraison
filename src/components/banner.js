import banner from "../assets/banner.jpg"
import './Css/banner.css'
import { useRef, useEffect } from "react";


export default function Banner () {


        const imageRef = useRef(null);

        useEffect(() => {
          if (imageRef.current) {
            imageRef.current.classList.add('move-top-to-bottom');
          }
        }, []);
    return (
        <div className="container" ref={imageRef}>
            <div className="bannerContainer ">
                <img src={banner}  ></img>
            </div>
            <div className="navs">
                <nav>
                    <ul>
                        <li><a href="https://www.floraison.in/india-entry-strategies/">India Entry Strategies</a></li>
                        <li><a href="https://www.floraison.in/india-subsidiary/">India Subsidiary</a></li>
                        <li><a href="https://www.floraison.in/subsidiary-support/">Subsidiary Support</a></li>
                        <li><a href="https://www.floraison.in/india-peo-services/">India PEO Services</a></li>
                        <li><a href="https://www.floraison.in/small-business-support/">Small Business Support</a></li>
                    </ul>
                </nav>
            </div>
             </div>
    )
}