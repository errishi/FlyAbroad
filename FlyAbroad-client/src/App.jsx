import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Footer from './Components/Footer';
import Career from './Pages/Career';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import LoginForm from './Components/Auth/LoginForm';
import Courses from './Pages/Courses'
import NotFound from './Pages/NotFound';
import Universites from './Pages/Universites'
import ScrollToTop from './Components/ScrollToTop';


const App = () => {
  const [currentAuth, setCurrentAuth] = useState(false);
  return (
    <>
    {currentAuth ? <LoginForm setCurrentAuth={setCurrentAuth} /> : <></>}
    <ScrollToTop />
    <div>
      <Navbar setCurrentAuth={setCurrentAuth} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses setCurrentAuth={setCurrentAuth} />} />
        <Route path='/university' element={<Universites />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App;

