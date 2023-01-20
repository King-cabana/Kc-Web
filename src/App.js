import { Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoPage from "./pages/noPage/NoPage";
import ContactUs from "./pages/contactUs/ContactUs";
import "./App.css";
import Waitlist from "./pages/waitlist/WaitlistForm";
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
import ContactInfo from "./event/budgetInventory/ContactInfo";


function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/waitlist" element={<Waitlist />} />
          {/* Budget createEvent Route */}
          <Route path="/budget" element={<Budget />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contactInfo" element={<ContactInfo />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/test" element={<Test />} />

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
          {/* <Route
            path="/event/create"
            element={
              <Sidebar>
                <CreateEvent />
              </Sidebar>
            }
          /> */}

          {/* noEvent in dashboard route */}
          <Route
            path="/event/noEvent"
            element={
              <Sidebar>
                <EmptyEvent />
              </Sidebar>
            }
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
        </Routes>
      </>
    </>
  );
}

export default App;
