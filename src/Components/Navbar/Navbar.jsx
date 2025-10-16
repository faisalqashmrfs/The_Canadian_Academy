import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

export default function Navbar() {

  const [activ , setactiv] = useState(0)

  const [togle , settogle] = useState(true)

  return (
    <>
    <nav className="navbarAcademy">
      <img src="/Logo.svg" alt="" />
      <ul className="links">
        <li className="link"><Link to={'/'} className={activ == 0 ? 'activlinkfornav' : ''} onClick={() => setactiv(0)}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'} className={activ == 1 ? 'activlinkfornav' : ''} onClick={() => setactiv(1)}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ == 2 ? 'activlinkfornav' : ''} onClick={() => setactiv(2)}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ == 3 ? 'activlinkfornav' : ''} onClick={() => setactiv(3)}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ == 4 ? 'activlinkfornav' : ''} onClick={() => setactiv(4)}>Contact Us</Link></li>
      </ul>
    </nav>
    <nav>
      <div className="NavForMobilemain">
        <img src="/Logored.svg" alt="Logo" />
        <img src="/Frame18.svg" alt="togel-icone" onClick={() => settogle(!togle)}/>
      </div>
    </nav>
    <nav className="NavForMobile" style={{transform: `translateX(${togle ? '100vw' : '0vw'})`}}>
      <div className="Top">
        <img src="/Logored.svg" alt="Logo" />
        <img src="/cross1.svg" alt="close"  onClick={() => settogle(!togle)}/>
      </div>
      <ul className="linkss">
        <li className="link"><Link to={'/'}  className={activ == 0 ? 'activlinkfornav' : ''} onClick={() => (setactiv(0) , settogle(!togle))}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'}  className={activ == 1 ? 'activlinkfornav' : ''} onClick={() => (setactiv(1) , settogle(!togle))}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ == 2 ? 'activlinkfornav' : ''} onClick={() => (setactiv(2) , settogle(!togle))}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ == 3 ? 'activlinkfornav' : ''} onClick={() => (setactiv(3) , settogle(!togle))}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ == 4 ? 'activlinkfornav' : ''} onClick={() => (setactiv(4) , settogle(!togle))}>Contact Us</Link></li>
      </ul>
      <span>x</span>
    </nav>
    </>
  );
}