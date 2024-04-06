import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer";
import Privacy from "./pages/privacy";
import Career from "./pages/career";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route exact path="/hardware_website" element={<Home />} />
				<Route path="/hardware_website/contact-us" element={<ContactUs />} />
				<Route path="/hardware_website/disclaimer" element={<Disclaimer />}/>
				<Route path="/hardware_website/privacy-policy" element={<Privacy />}/>
				<Route path="/hardware_website/career" element={<Career />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
