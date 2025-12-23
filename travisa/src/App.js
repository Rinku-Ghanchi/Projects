import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Services from "./Website/Pages/Services";
import NotFound from "./Website/Pages/NotFound";
import Contact from "./Website/Pages/Contact";
import Feature from "./Website/Pages/Feature";
import Countries from "./Website/Pages/Countries";
import Testimonial from "./Website/Pages/Testimonial";
import Training from "./Website/Pages/Training";
import Dashboard from "./Admin/Apages/Dashboard";
import ServicesManages from "./Admin/Apages/ServicesManages";
import CountriesData from "./Admin/Apages/CountriesData";
import TrainingManage from "./Admin/Apages/TrainingManage";
import WorldWideBranch from "./Admin/Apages/WorldWideBranch";
import FeedbackManage from "./Admin/Apages/FeedbackManage";
import FeatureManage from "./Admin/Apages/FeatureManage";
import AddServicesData from "./Admin/Apages/AddServicesData";
import { ToastContainer } from 'react-toastify';
import AddTrainingData from "./Admin/Apages/AddTrainingData";
import AddFeatureData from "./Admin/Apages/AddFeatureData";
import AddBranchesData from "./Admin/Apages/AddBranchesData";
import Registration from "./Website/Pages/Registration";
import Login from "./Website/Pages/Login";
import ProfileData from "./Website/Pages/ProfileData";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/training" element={<Training />} />
          <Route path="/branchdata" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileData />} />
          <Route path="*" element={<NotFound />} />

          {/* This is Admin Panel */}
          <Route path="/dashborad" element={<Dashboard />} />
          <Route path="/servicesManage" element={<ServicesManages />} />
          <Route path="/Countriesdata" element={<CountriesData />} />
          <Route path="/trainingdata" element={<TrainingManage />} />
          <Route path="/branches" element={<WorldWideBranch />} />
          <Route path="/features" element={<FeatureManage />} />
          <Route path="/feedback" element={<FeedbackManage />} />
          <Route path="/addservice" element={<AddServicesData />} />
          <Route path="/addtraining" element={<AddTrainingData />} />
          <Route path="/addfeature" element={<AddFeatureData />} />
          <Route path="/addbranches" element={<AddBranchesData />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
