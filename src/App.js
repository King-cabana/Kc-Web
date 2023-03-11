import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";

import NoPage from "./pages/noPage/NoPage";

//Authentication

import VerifyEmail from "./authentication/signup/VerifyEmail";
import SignUpSuccess from "./authentication/signup/SignUpSuccess";
import ResetPassword from "./authentication/signIn/ResetPassword";
import ForgotPassword from "./authentication/forgotPassword/ForgotPassword";
import ForgotPasswordOtp from "./authentication/forgotPassword/ForgotPasswordOtp";
import ResetPasswordSuccess from "./authentication/signIn/ResetPasswordSuccess";

// import SecondCreateEvent from "./event/createEvent/SecondCreateEvent";
import FirstCreateEvent from "./event/createEvent/FirstCreateEvent";
import Sidebar from "./event/Dashboard/Sidebar";
// import DashboardHome from "./event/pages/DashboardHome";
import Event from "./event/pages/Event";
import EmptyEvent from "./event/pages/NoEvent";
import SponsorEvent from "./event/pages/SponsorEvent";
import EventHistory from "./event/pages/EventHistory";
import EventAnalytics from "./event/pages/EventAnalytics";
import Settings from "./event/pages/Settings";

// import CreateEvent from "./event/pages/CreateEvent";
import LoadingScreen from "./LoadingScreen";

// Budget createEvent form
// import ContactInfo from "./event/createEvent/ContactInfo";
// import TimeLineEvent from "./event/createEvent/TimeLineEvent";
import DefineAudience from "./event/pages/DefineAudience";
import Budget from "./event/budgetInventory/Budget";
import Inventory from "./event/budgetInventory/Inventory";
import EventPlanPreview from "./event/eventPlanPreview/EventPlanPreview";
import Submitted from "./event/budgetInventory/Submitted";

// Set Up Profile
import CreateProfile from "./profile/createProfile/CreateProfile";
import ManageProfile from "./profile/manageProfile/ManageProfile";
import OrganiserProfile from "./profile/organiserProfile/OrganiserProfile";
import SocialProfile from "./profile/socialProfile/SocialProfile";
import EditOrganiserProfile from "./profile/EditOrganiserProfile/EditOrganiserProfile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/landingPage/Home"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
// const Waitlist = lazy(() => import("./pages/waitlist/WaitlistForm"));
const Signup = lazy(() => import("./authentication/signup/SignUp"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const DashboardHome = lazy(() => import("./event/pages/DashboardHome"));
const SignIn = lazy(() => import("./authentication/signIn/SignIn"))
const CreateEvent = lazy(() => import("./event/pages/CreateEvent"))


function App() {

  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <ToastContainer />
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            {/* <Route path="/waitlist" element={<Waitlist />} /> */}
            <Route path="/defineAudience" element={<DefineAudience />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/eventPlanPreview" element={<EventPlanPreview />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/manageProfile" element={<ManageProfile />} />
            <Route path="/organizerProfile" element={<OrganiserProfile />} />
            <Route path="/socialProfile" element={<SocialProfile />} />
            <Route
              path="/organiserProfile/home/edit"
              element={<EditOrganiserProfile />}
            />
            <Route path="*" element={<NoPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/forgotpassword-otp-verification"
              element={<ForgotPasswordOtp />}
            />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="/resetpasswordsuccess"
              element={<ResetPasswordSuccess />}
            />
            <Route path="signupsuccess" element={<SignUpSuccess />} />
            <Route path="verifyemail" element={<VerifyEmail />} />
            <Route path="/createevent/:name/:number" element={<CreateEvent />} />

           <Route
              path="/dashboard"
              element={
                <Sidebar>
                  <DashboardHome />
                </Sidebar>
              }
            />
            
            <Route
              path="/event/create"
              element={
                <Sidebar>
                  <DashboardHome />
                </Sidebar>
              }
            />
            <Route
              path="/event/noEvent"
              element={
                <Sidebar>
                  <EmptyEvent />
                </Sidebar>
              }
            />
            <Route
              path="/event/history"
              element={
                <Sidebar>
                  <SponsorEvent />
                </Sidebar>
              }
            />
            <Route
              path="/sponsor/proposal"
              element={
                <Sidebar>
                  <EventHistory />
                </Sidebar>
              }
            />
            <Route
              path="/sponsor/matching"
              element={
                <Sidebar>
                  <EventAnalytics />
                </Sidebar>
              }
            />
            <Route
              path="/settings"
              element={
                <Sidebar>
                  <Settings />
                </Sidebar>
              }
            />
            <Route path="/firstCreateEvent" element={<FirstCreateEvent />} />
            {/* <Route path="/secondCreateEvent" element={<SecondCreateEvent />} />
            <Route path="/contactInfo" element={<ContactInfo />} />
            <Route path="/timeLineEvent" element={<TimeLineEvent />} /> */}
            <Route
              path="/home"
              element={
                <Sidebar>
                  {" "}
                  <DashboardHome />{" "}
                </Sidebar>
              }
            />
            <Route
              path="/event/create"
              element={
                <Sidebar>
                  {" "}
                  <Event />{" "}
                </Sidebar>
              }
            />
            <Route
              path="/event/sponsor"
              element={
                <Sidebar>
                  {" "}
                  <SponsorEvent />{" "}
                </Sidebar>
              }
            />
            <Route
              path="/report/eventhistory"
              element={
                <Sidebar>
                  {" "}
                  <EventHistory />{" "}
                </Sidebar>
              }
            />
            <Route
              path="/report/eventanalytics"
              element={
                <Sidebar>
                  {" "}
                  <EventAnalytics />{" "}
                </Sidebar>
              }
            />
            <Route
              path="/settings"
              element={
                <Sidebar>
                  {" "}
                  <Settings />{" "}
                </Sidebar>
              }
            />
          </Routes>
        </>
      </>
    </Suspense>
  );
}

export default App;
