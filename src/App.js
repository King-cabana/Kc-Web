import { Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoPage from "./pages/noPage/NoPage";
import ContactUs from "./pages/contactUs/ContactUs";
import "./App.css";
import Waitlist from "./pages/waitlist/WaitlistForm";
import SecondCreateEvent from "./components/createEvent/SecondCreateEvent";
import FirstCreateEvent from "./components/createEvent/FirstCreateEvent";
import Sidebar from "./event/Dashboard/Sidebar";
import DashboardHome from "./event/pages/DashboardHome";
import CreateEvent from "./event/pages/CreateEvent"
import SponsorEvent from "./event/pages/SponsorEvent";
import EventHistory from "./event/pages/EventHistory"
import EventAnalytics from "./event/pages/EventAnalytics"
import Settings from "./event/pages/Settings"
import TimeLineEvent from "./components/createEvent/TimeLineEvent";


function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/firstCreateEvent" element={<FirstCreateEvent />} />
          <Route path="/secondCreateEvent" element={<SecondCreateEvent />} />
          <Route path="/timeLineEvent" element={<TimeLineEvent />} />
          
          <Route path="/home" element={<Sidebar> <DashboardHome /> </Sidebar>} />
          <Route path="/event/create" element={<Sidebar> <CreateEvent /> </Sidebar>} />
          <Route path="/event/sponsor" element={<Sidebar> <SponsorEvent /> </Sidebar>} />
          <Route path="/report/eventhistory" element={<Sidebar> <EventHistory /> </Sidebar>} />
          <Route path="/report/eventanalytics" element={<Sidebar> <EventAnalytics /> </Sidebar>} />
          <Route path="/settings" element={<Sidebar> <Settings /> </Sidebar>} />
        </Routes>
      </>
    </>

  );
}

export default App;
