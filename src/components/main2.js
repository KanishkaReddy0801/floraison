import '../App.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import main21 from '../assets/main21.jpeg'
import main22 from '../assets/main22.jpeg'
import main23 from '../assets/main23.jpeg'
import main24 from '../assets/main24.jpeg'

export default function Main2() {
    return(
        <>
      <div className="main-container">
        <div className="main-image">
          <img src={main21} alt="" />
        </div>
        <div className="main-content">
          <h2>Finding perfect growth story for our global and domestic clients</h2>
          <p>
          Floraison is a strategic and business consulting company founded in 2002 and is based out of Bangalore, India. 
          Since our inception, we have helped more than 300 global companies to create successful businesses in India under 
          our India Entry Strategies and have nurtured the aspirations of more than 200 domestic entrepreneurs with our Small Business Support.
          </p>
          <a href='https://www.floraison.in/our-company/'><FaAngleDoubleRight className='arrow'/> Know more about us</a>
        </div>
      </div>
      <div className="main-container">
        <div className="main-content">
          <h2>Benefit from our visionary leadership and astute planning</h2>
          <p>
          We share a common vision to constantly influence, lead & simplify the way our global & domestic clients  
          setup and do their business in India. For us, every client engagement is unique and needs careful & smart
           planning. We lead every engagement with a sense of purpose, responsibility and ownership, to help you achieve your objectives and goals.
          </p>
          <a href='https://www.floraison.in/our-leadership/'><FaAngleDoubleRight className='arrow'/> Meet our leadership team</a>
        </div>
        <div className="main-image">
          <img src={main22} alt="" />
        </div>
      </div>
      <div className="main-container">
        <div className="main-image">
          <img src={main23} alt="" />
        </div>
        <div className="main-content">
          <h2>Each engagement is managed by single point of contact</h2>
          <p>
          We have dedicated in-house experts in each of our service offering and they all work together in focussed groups. 
          We always start by analysing a client engagement from several points of view. This multidisciplinary approach is a 
          major benefit for our clients as they get the best of expertise & experience. A customised team is created for large 
          or complex engagement and this team is led by a single point of contact.
          </p>
          <a href='https://www.floraison.in/our-execution/'><FaAngleDoubleRight className='arrow'/> See how we do this</a>
        </div>
      </div>
      <div className="main-container">
        <div className="main-content">
          <h2>Our unmatched experience and local expertise will guide you throughout</h2>
          <p>
          India is a diverse country and to many it represents a sub-continent – many nations rolled into one! 
          Our several man years of combined local experience and expertise will help you navigate through various 
          complex situations and put you on the definite path of success in the Indian market.
          </p>
          <a href='https://www.floraison.in/local-expertise/'><FaAngleDoubleRight className='arrow'/> Learn how this benifits you</a>
        </div>
        <div className="main-image">
          <img src={main24} alt="" />
        </div>
      </div>
        </>
    )
}