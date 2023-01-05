import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoPage from "./pages/noPage/NoPage";
import ContactUs from "./pages/contactUs/ContactUs";
import GoToTop from "./GoToTop";
import "./App.css";
import Waitlist from "./pages/waitlist/WaitlistForm";

///////////////////////////////////

// import Welcome from "./Welcome";

//////////////////////////////////
import NoEvent from "./event/noEvent/NoEvent";
import Event from "./event/Event";
import Settings from "./event/Settings";
import EventHome from "./event/eventHome/EventHome";
import Report from "./event/Report";

function App() {
  return (
    // <>
    <>
      <>
        <GoToTop />
      </>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </>
      <>
        <Event />
      </>
      <>
        <Routes>
          <Route path="/noEvent" element={<NoEvent />} />
          {/* <Route path="/Welcome" element={<Welcome />} /> */}
          <Route path="/eventHome" element={<EventHome />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </>

    // <Routes>
    //   <Route path="/" element={<Home />}></Route>
    //   {/* <Route path="/sponsors" element={<Sponsors />} /> */}
    //   {/* <Route path="/organizers" element={<Organizers />} /> */}
    //   <Route path="/contactUs" element={<ContactUs />} />
    //   {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
    //   {/* <Route path="/contactUs" element={<ContactUs />} /> */}
    //   <Route path="/aboutUs" element={<AboutUs />} />
    //   {/* <Route path="/logIn" element={<SignIn />} /> */}
    //   {/* <Route path="/forgotPassword" element={<ForgotPassword />} />
    //     <Route path="/resetPassword" element={<ResetPassword />} />
    //     <Route path="/resetPasswordNew" element={<ResetSignIn/>} />
    //     <Route path="/resetSuccessful" element={<ResetSuccessful/>} />
    //     <Route path="/eventreportupload" element={<EventReport/>} />
    //     <Route path="/eventcategories" element={<EventCategories/>} />
    //     <Route path="/continue" element={<ContinueModal/>} />
    //     <Route path='/eventmanagement' element={<Event/>} />
    //     <Route path="/verifyOtp" element={<VerifyOTP/>} /> */}

    //   <Route path="/waitlist" element={<Waitlist />} />
    //   <Route path="/event" element={<Event />}>

    //   </Route>
    //   <Route path="*" element={<NoPage />} />
    // </Routes>

    // </>
  );
}

export default App;
