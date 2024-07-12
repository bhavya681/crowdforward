import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import ManageCampaigns from "./components/ManageCampaigns";
import NewsPage from "./pages/NewsPage";
import Bookmarks from "./components/Bookmarks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Campaigns from "./pages/Campaigns";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen font-sans text-white">
        <Navbar />
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/manage-campaign/:id" element={<ManageCampaigns />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/bookmark" element={<Bookmarks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
