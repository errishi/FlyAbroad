import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Footer from './Components/Footer';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import AuthPage from './Components/Auth/Authpage';
import Courses from './Pages/Courses'
import NotFound from './Pages/NotFound';
import Universites from './Pages/Universites'
import ScrollToTop from './Components/ScrollToTop';
import FeedbackPopUp from './Components/Home/FeedbackPopUp';
import ApplyNow from './Pages/applynow';
import UniversityDetails from './Components/Home/UniversityDetails';
import BlogDetails from './Components/Blog/BlogDetails';
import Blogs from './Pages/Blogs';
import ProtectedRoutes from './Pages/Protectedroutes';
import Verify from './Pages/Verify';
import VerifyEmail from './Pages/VerifyEmail';
import Signup from './Components/Auth/Authpage';
import OAuthRedirect from './Pages/OAuthRedirect';
import ChangePassword from './Pages/ChangePassword';
import ForgetPassword from './Pages/ForgetPassword';
import VerifyOTP from './Pages/VerifyOTP';



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
    {currentAuth ? <AuthPage setCurrentAuth={setCurrentAuth} /> : <></>}
    {readFeedback ? <FeedbackPopUp setReadFeedback={setReadFeedback} title={feedbackData.title} userName={feedbackData.name} description={feedbackData.description} /> : <></>}
    <ScrollToTop />
    <div>
      <Navbar setCurrentAuth={setCurrentAuth} />
      <Routes>
        <Route path='/' element={<Home sendData={handleFeedbackData} setReadFeedback={setReadFeedback} setCurrentAuth={setCurrentAuth} />} />        
        <Route path='/about' element={<About />} />
        <Route path='/ProtectedRoutes' element={<ProtectedRoutes />} />
        <Route path='/signup' element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path='/oauth-redirect' element={<OAuthRedirect />} />
        <Route path='/career' element={<Career />} />
        <Route path='/verify' element={<VerifyEmail />} />
        <Route path='/verify/:token' element={<Verify />} />
        <Route path='/oauth-redirect' element={<OAuthRedirect />} />
        <Route path='/Authpage' element={<AuthPage />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/change-password/:email' element={<ChangePassword />} />
        <Route path='/verify-otp/:email' element={<VerifyOTP />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses setCurrentAuth={setCurrentAuth} />} />
        <Route path='/apply' element={<ApplyNow />} />
        <Route path='/university' element={<Universites />} />
        <Route path={'/university/:id'} element={<UniversityDetails />} />
        <Route path='/*' element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App;

