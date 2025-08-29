import { Grid, Box } from "@mui/material";
import Navbar from "./Components/User/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/User/Footer/Footer";
import Report from "./Components/User/pages/Report";

import "./App.css";
import LoginForm from "./Components/User/Login/Login";
import SignUpForm from "./Components/User/Login/Signin";
import Screen from "./Components/User/pages/homecontent/Homepage";
import Contact from "./Components/User/pages/Contact";   // ✅ Correct import
import Services from "./Components/User/pages/Services";
import About from "./Components/User/pages/About/About";
import Doctor from "./Components/User/pages/Doctor/Doctor";
import PrivateRoutes from "./Privateroutes";
import Form from "./Components/User/pages/Doctor/Form";
import Doctorlogin from "./Components/User/Login/Doctorlogin";

import { useState } from "react";
import Dashboard from "./Components/Admin/Dashboard";
import PagenotFound from "./Components/User/pages/PagenotFound";
import Appointment from "./Components/User/pages/Doctor/Appointment";
import Room from "./Components/User/pages/Doctor/Room";
import DDashboard from "./Components/Doctor/Dashboard";
import UserProfile from "./Components/User/pages/userProfile";

import AmbulanceBooking from "./Components/User/pages/Ambulance";

function App() {
  const [is_admin, setIsAdmin] = useState(localStorage.getItem("is_admin"));
  const [is_doctor, setIsdoctor] = useState(localStorage.getItem("is_doctor"));

  return (
    <Grid container>
      {is_doctor ? (
        <Grid item xs={12}>
          <DDashboard />
        </Grid>
      ) : is_admin === "true" ? (
        <Grid item xs={12}>
          <Dashboard />
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Navbar sx={{ backgroundColor: "#acb2bd" }} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ minHeight: "80vh", backgroundColor: "#dcfcec" }}
          >
            <Box>
              <Routes>
                <Route path="/" element={<Screen />} />
                <Route path="/contact" element={<Contact />} />   {/* ✅ Fixed */}
                <Route path="/SignUp" element={<SignUpForm />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctor" element={<Doctor />} />

                <Route path="/login" element={<LoginForm />} />
                <Route path="/doctorlogin" element={<Doctorlogin />} />

                {/* Private routes */}
                <Route element={<PrivateRoutes />}>
                  <Route path="/form/:id" element={<Form />} />
                  <Route path="/appointment" element={<Appointment />} />
                  <Route path="/room/:roomID" element={<Room />} />
                  <Route path="/ambulance-booking" element={<AmbulanceBooking />} />
                  <Route path="/report/:id" element={<Report />} />
                  <Route path="/userprofile" element={<UserProfile />} />
                </Route>

                <Route path="*" element={<PagenotFound />} />
              </Routes>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ height: "10vh" }}>
            <Footer />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
