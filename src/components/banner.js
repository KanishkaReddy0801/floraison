import banner from "../assets/banner.jpg"


export default function Banner () {
    return (
        <div className="container">
            <div className="bannerContainer">
                <img src={banner}></img>
            </div>
            <div className="navs">
                <nav>
                    <ul style={{listStyle:'none', display:'flex', background:'black',height:'4rem',alignItems:'center',width:'60%',margin:0, padding:0,position:'absolute',bottom:'0.01rem'}}>
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