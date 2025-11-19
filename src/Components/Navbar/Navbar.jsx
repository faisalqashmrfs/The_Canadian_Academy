import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useState, useEffect } from "react";

export default function Navbar() {

  const location = useLocation();
  
  const [isScrolledPast40, setIsScrolledPast40] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 40) {
      if (!isScrolledPast40) {
        setIsScrolledPast40(true);
      }
    } else {
      if (isScrolledPast40) {
        setIsScrolledPast40(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolledPast40]); 


  const [activ , setactiv] = useState(() => {
    const savedActiv = localStorage.getItem('activeNavLink');
    return savedActiv !== null ? parseInt(savedActiv, 10) : 0;
  });
  const [togle , settogle] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);


  useEffect(() => {
    const currentPath = location.pathname;

    const getActiveIndex = (path) => {
      if (path === '/') return 0;
      if (path === '/AboutUs') return 1;
      if (path === '/Courses') return 2;
      if (path === '/HelpCenter') return 3;
      if (path === '/ContactUs') return 4;
      if (path === '/Certificate') return 5;
      return activ; 
    };

    const newIndex = getActiveIndex(currentPath);
    
    setactiv(newIndex);
    localStorage.setItem('activeNavLink', newIndex.toString());
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); 

  
  const handleMobileLinkClick = () => {
    settogle(true); 

  };
  
  return (
    <>
    <nav className="navbarAcademy">
      <Link to={'/'} className={activ === 0 ? 'activlinkfornav' : ''}><img src="/Logo.svg" alt="" /></Link>
      <ul className="links">
        <li className="link"><Link to={'/'} className={activ === 0 ? 'activlinkfornav' : ''}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'} className={activ === 1 ? 'activlinkfornav' : ''}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ === 2 ? 'activlinkfornav' : ''}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ === 3 ? 'activlinkfornav' : ''}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ === 4 ? 'activlinkfornav' : ''}>Contact Us</Link></li>
        <li className="link"><Link to={'/Certificate'}  className={activ === 5 ? 'activlinkfornav' : ''}>Certificate</Link></li>
      </ul>
    </nav>
    
    <nav>
      <div className="NavForMobilemain" style={{backgroundColor :`${isScrolledPast40 ? '#ffffffb6' : ''}`}}>
        <Link to={'/'} className={activ === 0 ? 'activlinkfornav' : ''}><img src="/Logored.svg" alt="Logo" /></Link>
        <img src="/Frame18.svg" alt="togel-icone" onClick={() => settogle(!togle)}/>
      </div>
    </nav>
    <nav className="NavForMobile" style={{transform: `translateX(${togle ? '100vw' : '0vw'})`}}>
      <div className="Top">
        <Link to={'/'}  onClick={handleMobileLinkClick} className={activ === 0 ? 'activlinkfornav' : ''}><img src="/Logored.svg" alt="Logo" /></Link>
        <img src="/cross1.svg" alt="close"  onClick={() => settogle(true)}/>
      </div>
      <ul className="linkss">
        <li className="link"><Link to={'/'}  className={activ === 0 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'}  className={activ === 1 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ === 2 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ === 3 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ === 4 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Contact Us</Link></li>
                <li className="link"><Link to={'/Certificate'}  className={activ === 5 ? 'activlinkfornav' : ''}>Certificate</Link></li>
      </ul>
      <span>x</span>
    </nav>
    </>
  );
}



