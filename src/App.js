import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import Footer from "./components/footer";
import ContactUs from "./pages/contact";
import Home from "./pages/home";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
