import React, { useEffect, useState } from 'react'
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
import FeedbackPopUp from './Components/Home/FeedbackPopUp';
import ApplyNow from './Pages/applynow';


const App = () => {
  const [currentAuth, setCurrentAuth] = useState(false);
  const [readFeedback, setReadFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);

  const handleFeedbackData = (array) => {
    setFeedbackData(array);
  }

  useEffect(() => {
    if(readFeedback){
      document.body.style.overflow = "hidden"
    }
    return () => {
      if(!readFeedback){
        document.body.style.overflow = "block"
      }
    }
  }, [])
  
  return (
    <>
    {currentAuth ? <LoginForm setCurrentAuth={setCurrentAuth} /> : <></>}
    {readFeedback ? <FeedbackPopUp setReadFeedback={setReadFeedback} title={feedbackData.title} userName={feedbackData.name} description={feedbackData.description} /> : <></>}
    <ScrollToTop />
    <div>
      <Navbar setCurrentAuth={setCurrentAuth} />
      <Routes>
        <Route path='/' element={<Home sendData={handleFeedbackData} setReadFeedback={setReadFeedback} setCurrentAuth={setCurrentAuth} />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses setCurrentAuth={setCurrentAuth} />} />
        <Route path='/apply' element={<ApplyNow />} />
        <Route path='/university' element={<Universites />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App;

