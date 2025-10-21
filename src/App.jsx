import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Courses from './Pages/Courses/Courses';
import Admission from './Pages/Admission/Admission';
import ContactUs from './Pages/ContactUs/ContactUs';
import HelpCenter from './Pages/HelpCenter/HelpCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import CourseDetailsPage from './Components/CourseDetails';
import Footer from './Components/Footer/Footer';
import Inroll from './Pages/Inroll/Inroll';

function App() {

  const location = useLocation();
  const hideNavbar =
    location.pathname === '/Inroll'

  return (
    <main className='UltraSection'>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        <Route path="/Inroll/:id" element={<Inroll />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;