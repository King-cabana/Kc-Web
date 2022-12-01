import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoPage from "./pages/noPage/NoPage";
import GoToTop from "./GoToTop";
import "./App.css";
import Waitlist from "./pages/waitlist/WaitlistForm";

function App() {
  return (
=======
import Home from './pages/landingPage/Home'
import NoPage from './pages/noPage/NoPage'
import GoToTop from "./GoToTop"
import './App.css'
import Waitlist from "./pages/waitlist/WaitlistForm";




function App() {
  return (

>>>>>>> 7c163be40e987619518f65372e1d5b47c936dee2
    <BrowserRouter>
      <>
        <GoToTop />
      </>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        {/* <Route path="/organizers" element={<Organizers />} /> */}
        {/* <Route path="/contactUs" element={<ContactUs />} /> */}
<<<<<<< HEAD
        <Route path="/aboutUs" element={<AboutUs />} />
=======
        {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
>>>>>>> 7c163be40e987619518f65372e1d5b47c936dee2
        {/* <Route path="/logIn" element={<SignIn />} /> */}
        {/* <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/resetPasswordNew" element={<ResetSignIn/>} />
          <Route path="/resetSuccessful" element={<ResetSuccessful/>} />
          <Route path="/eventreportupload" element={<EventReport/>} />
          <Route path="/eventcategories" element={<EventCategories/>} />
          <Route path="/continue" element={<ContinueModal/>} />
          <Route path='/eventmanagement' element={<Event/>} />
          <Route path="/verifyOtp" element={<VerifyOTP/>} /> */}
<<<<<<< HEAD
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
=======
          <Route path="/waitlist" element={<Waitlist/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  )

>>>>>>> 7c163be40e987619518f65372e1d5b47c936dee2
}

export default App;
