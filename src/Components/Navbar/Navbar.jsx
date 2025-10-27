import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useState, useEffect } from "react";

export default function Navbar() {

  const location = useLocation();
  
  const [isScrolledPast40, setIsScrolledPast40] = useState(false);

  // 2. دالة التعامل مع حدث التمرير
  const handleScroll = () => {
    // الحصول على قيمة التمرير العمودي (vertical scroll position)
    const scrollPosition = window.scrollY;

    // الشرط: إذا كان التمرير 40 بكسل أو أكثر
    if (scrollPosition >= 40) {
      // قم بتحديث الحالة فقط إذا لم تكن قد تحققت بالفعل
      if (!isScrolledPast40) {
        setIsScrolledPast40(true);
        console.log('✅ الشرط تحقق: تم التمرير 40 بكسل للأسفل أو أكثر.');
      }
    } else {
      // قم بتحديث الحالة فقط إذا كانت قد تحققت سابقاً والآن عادت للصفر
      if (isScrolledPast40) {
        setIsScrolledPast40(false);
        console.log('❌ الشرط لم يعد محققاً: التمرير أقل من 40 بكسل.');
      }
    }
  };

  // 3. استخدام useEffect لإضافة وإزالة مستمع الحدث
  useEffect(() => {
    // إضافة مستمع لحدث 'scroll' عند تحميل المكون
    window.addEventListener('scroll', handleScroll);

    // دالة التنظيف (Cleanup Function)
    // مهمة جداً: لإزالة مستمع الحدث عند إزالة المكون (unmounting) لتجنب تسرب الذاكرة
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolledPast40]); // نضع isScrolledPast40 كـ dependency لتجنب مشاكل الـ closure في الدالة handleScroll


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
      <img src="/Logo.svg" alt="" />
      <ul className="links">
        <li className="link"><Link to={'/'} className={activ === 0 ? 'activlinkfornav' : ''}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'} className={activ === 1 ? 'activlinkfornav' : ''}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ === 2 ? 'activlinkfornav' : ''}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ === 3 ? 'activlinkfornav' : ''}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ === 4 ? 'activlinkfornav' : ''}>Contact Us</Link></li>
      </ul>
    </nav>
    
    <nav>
      <div className="NavForMobilemain" style={{backgroundColor :`${isScrolledPast40 ? '#ffffffb6' : ''}`}}>
        <img src="/Logored.svg" alt="Logo" />
        <img src="/Frame18.svg" alt="togel-icone" onClick={() => settogle(!togle)}/>
      </div>
    </nav>
    <nav className="NavForMobile" style={{transform: `translateX(${togle ? '100vw' : '0vw'})`}}>
      <div className="Top">
        <img src="/Logored.svg" alt="Logo" />
        <img src="/cross1.svg" alt="close"  onClick={() => settogle(true)}/>
      </div>
      <ul className="linkss">
        <li className="link"><Link to={'/'}  className={activ === 0 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Home</Link></li>
        <li className="link"><Link to={'/AboutUs'}  className={activ === 1 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>About Us</Link></li>
        <li className="link"><Link to={'/Courses'}  className={activ === 2 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Courses</Link></li>
        <li className="link"><Link to={'/HelpCenter'}  className={activ === 3 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Help Center</Link></li>
        <li className="link"><Link to={'/ContactUs'}  className={activ === 4 ? 'activlinkfornav' : ''} onClick={handleMobileLinkClick}>Contact Us</Link></li>
      </ul>
      <span>x</span>
    </nav>
    </>
  );
}