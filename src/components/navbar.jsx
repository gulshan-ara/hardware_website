import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
	const styles = `
    .navbar {
      background-color: #ffffff;
      padding: 10px 20px;
    }

    .navbar-brand img {
      width: 100px;
      height: auto;
    }

    .nav-link {
      color: #000000;
      margin-left: 20px;
      font-size: 18px;
    }

    .nav-link:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      .navbar-nav {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }
    }
  `;

	return (
		<>
			<style>{styles}</style>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
						alt="Logo"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/hardware_website" className="nav-link">
							Home
						</Link>
						<Link to="#" className="nav-link">
							About Us
						</Link>
						<Link to="#" className="nav-link">
							Products
						</Link>
						<Link to="#" className="nav-link">
							Services
						</Link>
						<Link to="#" className="nav-link">
							Blog
						</Link>
						<Link to="/hardware_website/career" className="nav-link">
							Career
						</Link>
						<Link to="/hardware_website/contact-us" className="nav-link">
							Contact Us
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
