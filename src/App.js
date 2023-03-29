import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import NoPage from "./pages/noPage/NoPage";
import LoadingScreen from "./LoadingScreen";
import Sidebar from "./event/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Event from "./event/pages/Event";
import EmptyEvent from "./event/pages/NoEvent";
import SponsorEvent from "./event/pages/SponsorEvent";
import EventHistory from "./event/pages/EventHistory";
import EventAnalytics from "./event/pages/EventAnalytics";
import Settings from "./event/pages/Settings";

import EventPlanPreview from "./event/eventPlanPreview/EventPlanPreview";
import Submitted from "./event/budgetInventory/Submitted";

// Set Up Profile
import CreateProfile from "./profile/createProfile/CreateProfile";
import ManageProfile from "./profile/manageProfile/ManageProfile";
import OrganiserProfile from "./profile/organiserProfile/OrganiserProfile";
import SocialProfile from "./profile/socialProfile/SocialProfile";
import EditOrganiserProfile from "./profile/EditOrganiserProfile/EditOrganiserProfile";

import EventPlanning from "./event/eventPlanning/EventPlanning";
import GuestRegistration from "./event/guestRegistration/GuestRegistration";
import Registered from "./event/guestRegistration/Registered";
import GuestContact from "./event/guestRegistration/GuestContact";

//Authentication
const Signup = lazy(() => import("./authentication/signup/SignUp"));
const VerifyEmail = lazy(()=>("./authentication/signup/VerifyEmail"));
const SignIn = lazy(() => import("./authentication/signIn/SignIn"));
const ForgotPassword = lazy(() => import("./authentication/forgotPassword/ForgotPassword"));
const SignUpSuccess = lazy(() =>("./authentication/signup/SignUpSuccess"));
const ResetPassword = lazy(()=>("./authentication/signIn/ResetPassword"));
const ForgotPasswordOtp = lazy(()=>("./authentication/forgotPassword/ForgotPasswordOtp"));
const ResetPasswordSuccess = lazy(()=>("./authentication/signIn/ResetPasswordSuccess"));

//pages
const Home = lazy(() => import("./pages/landingPage/Home"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const DashboardHome = lazy(() => import("./event/pages/DashboardHome"));


//Event Creation
const CreateEvent = lazy(() => import("./event/pages/CreateEvent"));
const GuestView = lazy(() => import("./event/guestRegistration/GuestView"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <ToastContainer />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/eventPlanPreview" element={<EventPlanPreview />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/manageProfile" element={<ManageProfile />} />
            <Route path="/organizerProfile" element={<OrganiserProfile />} />
            <Route path="/socialProfile" element={<SocialProfile />} />
            <Route path="/guestcontact/:id" element={<GuestContact />} />
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
            <Route path="/planning" element={<EventPlanning />} />
            <Route path="/guest" element={<GuestRegistration />} />
            <Route path="/guestView" element={<GuestView />} />
            <Route path="/guestView/:id" element={<GuestView />} />
            <Route path="/registered" element={<Registered />} />
            <Route path="signupsuccess" element={<SignUpSuccess />} />
            <Route path="verifyemail" element={<VerifyEmail />} />
            <Route
              path="/createevent/:name/:number"
              element={<CreateEvent />}
            />

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
