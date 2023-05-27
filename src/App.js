import './App.css';
import Banner from './components/banner';
import Card from './components/card';
import Menu from './components/menu';
import Main from './components/main';
import Main2 from './components/main2';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <h1 className='main-heading'>
        Your Gateway to India
      </h1>
      <p className='subhead'>
        Expand your global business and enter the Indian markets NOW!
      </p>
      <Main/>
      <h1 className='main2-heading'>
      Explore our Service Suite
      </h1>
      <p className='subhead2'>
      Share your plans with us and help us customise a workable strategy for your effective entry into India. <br/>
Go beyond your current needs and experience our holistic range of services tailored for you
      </p>

      <div style={{display:'flex',gap:'1.5rem',padding:"0 10rem",flexWrap:"wrap",justifyContent:"center"}}>
            <Card 
                heading={"India Entry Strategies"} 
                link='https://www.floraison.in/india-entry-strategies/'
                para="It's our mission to promote and formulate the entry of global organizations into the Indian markets
                 through well thought out & structured strategies which include India Subsidary & India PEO options" 
                image="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-1-1536x756.webp"
            />
            <Card 
                heading={"India Subsidary"} 
                link='https://www.floraison.in/india-subsidiary/'
                para="Setting up & operating your own India subsidiary is a great way to access India on permanent long-term
                 basis. India subsidiary has been considered by several global companies operating in India" 
                image="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-2-1536x1025.webp"
            />
            <Card 
                heading={"Subsidiary Support"} 
                link='https://www.floraison.in/subsidiary-support/'
                para="While you handle your core business, our professionals from bookkeeping, tax, compliance, payroll, HR & business
                 support services, each month under a professional engagement" 
                image="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-3.webp"
            />
            <Card 
                heading={"India PEO Services"} 
                link='https://www.floraison.in/india-peo-services/'
                para="Simplify your global expansion plan and commence hiring your talent in India without the need to form your legal
                 entity. Engage our PEO services & get access to employees who you've always wanted to work with" 
                image="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-4-1536x1024.webp"
            />
            <Card 
                heading={"Small Business Support"} 
                link='https://www.floraison.in/small-business-support/'
                para="We aspire to cultivate the spirit of entrepreneurship among potential domestic entrepreneurs & to help them start
                 their dream venture & support them to stabilize & grow their business and achieve success" 
                image="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-5-1536x1024.webp"
            />
      </div>
          <Main2/>
      
    </div>
  );
}

export default App;