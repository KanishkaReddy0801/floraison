import footer from '../assets/footer.jpeg'
import { useRef,useEffect } from 'react';
import './Css/footer.css'

export default function Footer() {

    const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) { // Check if divRef.current is not null or undefined
        const divElement = divRef.current;
        const rect = divElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;

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
            <div className='contact-container'>
                <img src={footer}></img>
                <div className='contact'>
                <h2>Ready to get started?</h2>
                <h5>start@floraison.in</h5>
                <button>Contact Us</button>
                </div>
            </div>
            <div className='footer-container'>
                <div className='footer-content' ref={divRef}>
                <div className='footer-contact'>
                    <h5>Contact Us</h5>
                    <h6>Floraison India Strategic Consulting Pvt Ltd</h6>
                    <p>185/7, 2nd Floor, Chandra Plaza <br/>
                        8th F Main Road, 26th Cross <br/>
                        Chandra Plaza, Jayanagar 3rd Block <br/>
                        Banglore - 560011, Karnataka, India <br/>
                        Phone: 91-80-26538257 <br/>
                        Email: start@floraison.in</p>    
                </div>
                <div className='footer-services'>
                    <h5>
                        Our Services
                    </h5>
                    <ul>
                        <li><a>India Entry Strategies</a></li>
                        <li><a>India Subsidiary</a></li>
                        <li><a>Subsidiary Support</a></li>
                        <li><a>India PEO Services</a></li>
                        <li><a>Small Business Support</a></li>
                    </ul>
                </div>
                <div className='footer-aboutus'>
                    <h5>
                        About Us
                    </h5>
                    <ul>
                        <li><a>Our Company</a></li>
                        <li><a>Our Leadership</a></li>
                        <li><a>Our Execution</a></li>
                        <li><a>Local Expertise</a></li>
                        <li><a>Work With Us</a></li>
                    </ul>
                </div>
                <div className='footer-others'>
                    <h5>
                        Others
                    </h5>
                    <ul>
                        <li><a>Resource Centre</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Disclaimer</a></li>
                    </ul>
                </div>
                </div>
                <p className='copyrgt'>Copyright (c) 2023 Floraison India Strategic Consulting Pvt Ltd, Bamglore, India. All Rights Reserved.</p>
            </div>
        </>
    )
}