import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Courses from './Pages/Courses/Courses'
import Admission from './Pages/Admission/Admission'
import ContactUs from './Pages/ContactUs/ContactUs'
import Inroll from './Pages/Inroll/Inroll'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HelpCenter from './Pages/HelpCenter/HelpCenter'

function App() {


  return (
    <>  
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
  h     <Route path='/Courses' element={<Courses />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />
        <Route path='/Admission' element={<Admission />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Inroll' element={<Inroll />} />
      </Routes>
    </>
  )
}

export default App
