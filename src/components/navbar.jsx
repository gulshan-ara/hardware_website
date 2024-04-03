import React from "react";
import { Navbar, Nav } from "react-bootstrap";

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
				<Navbar.Brand href="#">
					<img
						src="./assets/images/logo.png"
						alt="Logo"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#" className="nav-link">
							Home
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							About Us
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Products
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Events
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Services
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Media
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Club
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Career
						</Nav.Link>
						<Nav.Link href="#" className="nav-link">
							Contact Us
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
