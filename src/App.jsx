import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Overview from "./pages/Overview";
import Message from "./pages/Message";
import Mentors from "./pages/Mentors";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="border fixed w-1/6 min-h-screen">
          <SideBar />
        </div>

        <div className="ml-[16.67%] w-5/6">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/message" element={<Message />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
