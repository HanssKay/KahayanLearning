import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";

// Ganti semua komponen course statis dengan ini:
import CoursePage from "./components/Course/CoursePage";
import ForumList from "./pages/forum/ForumList";
import ForumThread from "./pages/forum/ForumThread";
import LaporanPage from "./pages/dashboard/LaporanData";
import Kuesioner from "./pages/kuesioner/Kuesioner";
import Profile from "./pages/auth/Profie";
import SertifikatPage from "./pages/dashboard/SertifikasiPage";
import KuesionerPage from "./pages/kuesioner/Kuesioner";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Navbar hanya muncul di luar dashboard */}
      {!(location.pathname.startsWith("/dashboard")) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Home */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dynamic Course Routes */}
        <Route path="/dashboard/:courseSlug" element={<CoursePage />} />
        <Route path="/dashboard/laporan-data" element={<LaporanPage />} />
        <Route path="/dashboard/kuesioner" element={<KuesionerPage />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/sertifikat" element={<SertifikatPage />} />
        <Route path="/dashboard/:courseSlug/section/:sectionId/forum" element={<ForumList />} />
        <Route path="/dashboard/:courseSlug/sections/:sectionId/forum/:threadId" element={<ForumThread />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
