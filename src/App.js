import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";

// import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoPage from "./pages/noPage/NoPage";
import ContactUs from "./pages/contactUs/ContactUs";

//Authentication
import Signup from "./authentication/signup/SignUp";
import SignIn from "./authentication/signIn/SignIn";
import VerifyEmail from "./authentication/signup/VerifyEmail";
import SignUpSuccess from "./authentication/signup/SignUpSuccess";
import ResetPassword from "./authentication/signIn/ResetPassword";

import SecondCreateEvent from "./event/createEvent/SecondCreateEvent";
import FirstCreateEvent from "./event/createEvent/FirstCreateEvent";
import Sidebar from "./event/Dashboard/Sidebar";
import DashboardHome from "./event/pages/DashboardHome";
import CreateEvent from "./event/pages/CreateEvent";


import EmptyEvent from "./event/pages/NoEvent";
import SponsorEvent from "./event/pages/SponsorEvent";
import EventHistory from "./event/pages/EventHistory";
import EventAnalytics from "./event/pages/EventAnalytics";
import Settings from "./event/pages/Settings";

import Test from "./event/pages/Test";

// Budget createEvent form
import Budget from "./event/budgetInventory/Budget";
import Inventory from "./event/budgetInventory/Inventory";
import ContactInfo from "./event/createEvent/ContactInfo";

import TimeLineEvent from "./event/createEvent/TimeLineEvent";
import Submitted from "./event/budgetInventory/Submitted";

// Set Up Profile
import CreateProfile from "./profile/createProfile/CreateProfile";
import ManageProfile from "./profile/manageProfile/ManageProfile";
import OrganiserProfile from "./profile/organiserProfile/OrganiserProfile";
import SocialProfile from "./profile/socialProfile/SocialProfile";
import ResetPasswordSuccess from "./authentication/signIn/ResetPasswordSuccess";
import LoadingScreen from "./LoadingScreen";
import EventPlanning from "./event/eventPlanning/EventPlanning";
import GuestRegistration from "./event/guestRegistration/GuestRegistration";

const Home = lazy(() => import("./pages/landingPage/Home"));
const Waitlist = lazy(() => import("./pages/waitlist/WaitlistForm"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/manageProfile" element={<ManageProfile />} />
            <Route path="/organiserProfile" element={<OrganiserProfile />} />
            <Route path="/socialProfile" element={<SocialProfile />} />

            <Route path="*" element={<NoPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="/resetpasswordsuccess"
              element={<ResetPasswordSuccess />}
            />
            <Route path="/planning" element={<EventPlanning />} />
            <Route path="/guest" element={<GuestRegistration />} />
            <Route path="signupsuccess" element={<SignUpSuccess />} />
            <Route path="verifyemail" element={<VerifyEmail />} />

            <Route path="/test" element={<Test />} />

            <Route
              path="/dashboard"
              element={
                <Sidebar>
                  <DashboardHome />
                </Sidebar>}/>
            <Route
              path="/event/create"
              element={
                <Sidebar>
                  <DashboardHome />
                </Sidebar>}/>
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

            <Route path="/settings" element={<Sidebar>Shola</Sidebar>} />

            <Route path="/firstCreateEvent" element={<FirstCreateEvent />} />
            <Route path="/secondCreateEvent" element={<SecondCreateEvent />} />
            <Route path="/contactInfo" element={<ContactInfo />} />
            <Route path="/timeLineEvent" element={<TimeLineEvent />} />

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
                  <CreateEvent />{" "}
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
