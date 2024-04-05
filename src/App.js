import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route exact path="/hardware_website" element={<Home />} />
				<Route path="/hardware_website/contact-us" element={<ContactUs />} />
				<Route path="/hardware_website/disclaimer" element={<Disclaimer />}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
