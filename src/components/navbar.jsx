import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<section className="logo-section">
				<img src="./assets/images/logo.png" alt="Logo" />
			</section>
			<section className="links-section">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact Us</a>
					</li>
					<li>
						<a href="#">Products</a>
					</li>
					<li>
						<a href="#">Events</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Media</a>
					</li>
				</ul>
			</section>
		</nav>
	);
};

// CSS styles
const styles = `
.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    color: white;
}

.logo-section img {
    width: 100px; /* Adjust the width of the logo */
    height: auto; /* Maintain aspect ratio */
}

.links-section ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.links-section ul li {
    display: inline-block;
    margin-left: 25px; 
		padding-right: 25px;
		border-right: 2px solid grey;
}

.links-section ul li a {
    color: black;
    text-decoration: none;
		font-size: 18px;
		font-weight: bold;
}

.links-section ul li a:hover {
    text-decoration: underline;
}
`;

// Inject the styles into the document
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
