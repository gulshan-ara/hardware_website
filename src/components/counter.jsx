import React, { useState, useEffect } from "react";

const Counter = ({ title, number, bgColor, textColor }) => {
  const [countingNumber, setCountingNumber] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountingNumber((prevNumber) => (prevNumber < number ? prevNumber + 1 : number));
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<div style={{ backgroundColor: bgColor, textAlign: 'center', padding: "20px", borderRadius: 10}}>
			<p style={{ fontSize: 30, fontWeight: 800, color: textColor}}>{countingNumber}</p>
			<p style={{ fontSize: 20, fontWeight: 500, color: textColor }}>{title}</p>
		</div>
	);
};

export default Counter;
