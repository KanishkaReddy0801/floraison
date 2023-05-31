import '../App.css';
import main11 from '../assets/main11.jpeg'
import main12 from '../assets/main12.jpeg'
import { useRef,useEffect } from 'react';
import './Css/main.css'


export default function Main() {

  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) { // Check if divRef.current is not null or undefined
        const divElement = divRef.current;
        const rect = divElement.getBoundingClientRect();
        const isVisible = rect.top <window.innerHeight;

        if (isVisible) {
          divElement.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <>
      <div className="main-containe1" ref={divRef} >
        <div className="main-content" >
          <h2>If you aren’t doing business in India, it’s time to re-think!</h2>
          <p>
            Enter the Indian markets NOW. India’s journey on the path of economic reforms has transformed it to one of the world’s fastest growing economies. Its large, young & growing population is its best asset. Sectors like IT and ITES, Retail, Ecommerce, Manufacturing, Pharma and Healthcare, R&D and so many other sectors are projected to provide serious growth opportunities to global and Indian companies who are doing business in India.
          </p>
        </div>
        <div className="main-image">
          <img src={main11} alt="" />
        </div>
      </div>
      <div className="main-containe2">
        <div className="main-image">
          <img src={main12} alt="" />
        </div>
        <div className="main-content">
          <h2>Your journey into India starts by choosing the right partner</h2>
          <p>
          Your journey into India, of course, starts with engaging and supported by the right partner – who has the capability and resolve to guide you throughout. The choice of a strategic consulting firm offering holistic professional services, can make a huge difference to the business of a global organization. Increasingly, more than ever before, global organizations need to carefully engage local firms that have expertise of handling global companies and managing their growth, with a proactive consulting approach, which would mitigate all possible risks.
          </p>
        </div>
      </div>
    </>
    )
}