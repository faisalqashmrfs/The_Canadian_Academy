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

  // ✅ إخفاء الـ Navbar في صفحات التسجيل
  const hideNavbar =
    location.pathname === '/Inroll' ||
    location.pathname === '/enroll-alt' ||
    location.pathname === '/enroll-final' ||
    location.pathname === '/enroll-summary';

  return (
    <main className='UltraSection'>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/Inroll" element={<Inroll />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;