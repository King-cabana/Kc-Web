import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import NoPage from "./pages/noPage/NoPage";
import LoadingScreen from "./LoadingScreen";
import Sidebar from "./event/Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Event from "./event/pages/Event";
import SponsorEvent from "./event/pages/SponsorEvent";
import EventHistory from "./event/pages/EventHistory";
import Settings from "./event/pages/Settings";
import Messaging from "./event/pages/Messaging";
import Notifications from "./event/pages/Notifications";
import VendorsMgt from "./event/pages/VendorsMgt";
import AttendeesMgt from "./event/pages/AttendeesMgt";

import EventPlanPreview from "./event/eventPlanPreview/EventPlanPreview";
import Submitted from "./event/budgetInventory/Submitted";

// Set Up Profile
import CreateProfile from "./profile/createProfile/CreateProfile";
import ManageProfile from "./profile/manageProfile/ManageProfile";
import OrganiserProfile from "./profile/organiserProfile/OrganiserProfile";
import SocialProfile from "./profile/socialProfile/SocialProfile";
import EditOrganiserProfile from "./profile/EditOrganiserProfile/EditOrganiserProfile";

// Proposal
import EmptyProposal from "./proposal/NoProposal/EmptyProposal";
import Proposal from "./proposal/Proposal";
import ProposalPreview from "./proposal/proposalPreview/ProposalPreview";
import Generated from "./proposal/Generated";
import ProposalBuildup from "./proposal/proposalBuildup/ProposalBuildup";

import "react-toastify/dist/ReactToastify.css";
import GuestRegistration from "./event/guestRegistration/GuestRegistration";
import Registered from "./event/guestRegistration/Registered";
import GuestContact from "./event/guestRegistration/GuestContact";
import VerifyEmail from "./authentication/signup/VerifyEmail";
import Analytics from "./event/pages/Analytics";

//Authentication
const Signup = lazy(() => import("./authentication/signup/SignUp"));
const SignIn = lazy(() => import("./authentication/signIn/SignIn"));
const ForgotPassword = lazy(() =>
  import("./authentication/forgotPassword/ForgotPassword")
);
const SignUpSuccess = lazy(() => "./authentication/signup/SignUpSuccess");
const ResetPassword = lazy(() => "./authentication/signIn/ResetPassword");
const ForgotPasswordOtp = lazy(
  () => "./authentication/forgotPassword/ForgotPasswordOtp"
);
const ResetPasswordSuccess = lazy(
  () => "./authentication/signIn/ResetPasswordSuccess"
);

//pages
const Home = lazy(() => import("./pages/landingPage/Home"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const DashboardHome = lazy(() => import("./event/pages/DashboardHome"));

//Event Creation
const CreateEvent = lazy(() => import("./event/pages/CreateEvent"));
const GuestView = lazy(() => import("./event/guestRegistration/GuestView"));
const ViewDraftEvent = lazy(() =>
  import("./event/eventPlanning/ViewDraftEvent")
);
const ViewCompletedEvent = lazy(() =>
  import("./event/eventPlanning/ViewCompletedEvent")
);

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
            {/* <Route path="/planning/viewEvent" element={<EventPlanning />} /> */}
            <Route path="/guest" element={<GuestRegistration />} />

            {/* <Route path="/event/proposal" element={<Proposal />} /> */}
            <Route
              path="/event/proposal/proposal-buildup/proposal-preview/:id"
              element={<ProposalPreview />}
            />
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
              path="/event/no-proposal"
              element={
                <Sidebar>
                  <EmptyProposal />
                </Sidebar>
              }
            />
            <Route
              path="/event/proposal"
              element={
                <Sidebar>
                  <Proposal />
                </Sidebar>
              }
            />
            <Route
              path="/event/proposal/proposal-buildup/:id"
              element={
                <Sidebar>
                  <ProposalBuildup />
                </Sidebar>
              }
            />
            <Route
              path="/event/history"
              element={
                <Sidebar>
                  <EventHistory />
                </Sidebar>
              }
            />
            <Route
              path="/sponsor/proposal"
              element={
                <Sidebar>
                  <SponsorEvent />
                </Sidebar>
              }
            />
            <Route
              path="/sponsor/matching"
              element={
                <Sidebar>
                  <Analytics />
                </Sidebar>
              }
            />

            <Route
              path="/vendorsmanagement"
              element={
                <Sidebar>
                  <VendorsMgt />
                </Sidebar>
              }
            />
            <Route
              path="/attendeesmanagement"
              element={
                <Sidebar>
                  <AttendeesMgt />
                </Sidebar>
              }
            />
            <Route
              path="/analytics"
              element={
                <Sidebar>
                  <Analytics />
                </Sidebar>
              }
            />
            <Route
              path="/messaging"
              element={
                <Sidebar>
                  <Messaging />
                </Sidebar>
              }
            />
            <Route
              path="/notifications"
              element={
                <Sidebar>
                  <Notifications />
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
            <Route path="/proposal-generated" element={<Generated />} />

            <Route
              path="/event/planning"
              element={
                <Sidebar>
                  <Event />
                </Sidebar>
              }
            />
            <Route
              path="/event/planning/view-draft-event/:id"
              element={<ViewDraftEvent />}
            />
            <Route
              path="/event/planning/view-completed-event/:id"
              element={<ViewCompletedEvent />}
            />
            <Route
              path="/event/sponsor"
              element={
                <Sidebar>
                  <SponsorEvent />
                </Sidebar>
              }
            />
            <Route
              path="/report/eventhistory"
              element={
                <Sidebar>
                  <EventHistory />
                </Sidebar>
              }
            />
            <Route
              path="/report/eventanalytics"
              element={
                <Sidebar>
                  <Analytics />
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
