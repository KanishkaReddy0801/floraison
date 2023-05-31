import './App.css';
import { useEffect, useRef } from 'react'
import Banner from './components/banner';
import Card from './components/card';
import Menu from './components/menu';
import Main from './components/main';
import Main2 from './components/main2';
import card1 from './assets/card1.webp'
import card2 from './assets/card2.webp'
import card3 from './assets/card3.webp'
import card4 from './assets/card4.webp'
import card5 from './assets/card5.webp'
import Footer from './components/footer';
import Carousel from './components/carousel';
import crsl1 from './assets/crsl1.jpeg'
import crsl2 from './assets/crsl2.jpeg'
import crsl3 from './assets/crsl3.jpeg'
import '../src/components/Css/carousel.css'
// import autoAnimate from "@formkit/auto-animate";


function App() {
  const cards = [crsl1, crsl2, crsl3, crsl2];
  // const parentRef = useRef();

  // useEffect(() => {
  //   if (parentRef.current) {
  //     autoAnimate(parentRef.current);
  //   }
  // }, [parentRef]);

  const headingRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headingRect = headingRef.current.getBoundingClientRect();
      const carouselRect = carouselRef.current.getBoundingClientRect();
      const isVisibleHeading = headingRect.top < window.innerHeight;
      const isVisibleCarousel = carouselRect.top < window.innerHeight;

      if (isVisibleHeading) {
        headingRef.current.classList.add('animate-top');
      } else {
        headingRef.current.classList.remove('animate-top');
      }

      if (isVisibleCarousel) {
        carouselRef.current.classList.add('animate-bottom');
      } else {
        carouselRef.current.classList.remove('animate-bottom');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Menu/>
      <Banner />
      <h1 className='main-heading' >
        Your Gateway to India
      </h1>
      <p className='subhead' >
        Expand your global business and enter the Indian markets NOW!
      </p>
      <Main />
      <h1 className='main2-heading' >
      Explore our Service Suite
      </h1>
      <p className='subhead2' >
      Share your plans with us and help us customise a workable strategy for your effective entry into India. <br/>
Go beyond your current needs and experience our holistic range of services tailored for you
      </p>

      <div style={{display:'flex',gap:'1.5rem',padding:"0 10rem",flexWrap:"wrap",justifyContent:"center"}} >
            <Card 
                heading={"India Entry Strategies"} 
                link='https://www.floraison.in/india-entry-strategies/'
                para="It's our mission to promote and formulate the entry of global organizations into the Indian markets
                 through well thought out & structured strategies which include India Subsidary & India PEO options" 
                image={card1}
            />
            <Card 
                heading={"India Subsidary"} 
                link='https://www.floraison.in/india-subsidiary/'
                para="Setting up & operating your own India subsidiary is a great way to access India on permanent long-term
                 basis. India subsidiary has been considered by several global companies operating in India" 
                image={card2}
            />
            <Card 
                heading={"Subsidiary Support"} 
                link='https://www.floraison.in/subsidiary-support/'
                para="While you handle your core business, our professionals from bookkeeping, tax, compliance, payroll, HR & business
                 support services, each month under a professional engagement" 
                image={card3}
            />
            <Card 
                heading={"India PEO Services"} 
                link='https://www.floraison.in/india-peo-services/'
                para="Simplify your global expansion plan and commence hiring your talent in India without the need to form your legal
                 entity. Engage our PEO services & get access to employees who you've always wanted to work with" 
                image={card4}
            />
            <Card 
                heading={"Small Business Support"} 
                link='https://www.floraison.in/small-business-support/'
                para="We aspire to cultivate the spirit of entrepreneurship among potential domestic entrepreneurs & to help them start
                 their dream venture & support them to stabilize & grow their business and achieve success" 
                image={card5}
            />
      </div>
          <Main2 />
          <h1 className="main3-heading" ref={headingRef}>
        Download our ePublications
      </h1>
      <div className="carousel-container" ref={carouselRef}>
        <Carousel cards={cards} />
      </div>
        <Footer />
    </div>
  );
}

export default App;