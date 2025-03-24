import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRotation((prevRotation) => prevRotation + 0.5);
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="app-container">
			<div className="hammer-container">
				{[0, 120, 240].map((angle, index) => (
					<div
						key={index}
						className="mallet-wrapper"
						style={{
							transform: `rotate(${rotation + angle}deg) translateY(-50px)`,
						}}
					>
						<svg
							className="mallet"
							viewBox="0 0 120 120"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* Handle */}
							<rect x="57" y="13" width="6" height="85" fill="#8B4513" />
							{/* Handle details */}
							<line
								x1="59"
								y1="13"
								x2="59"
								y2="98"
								stroke="#A0522D"
								strokeWidth="1"
							/>
							<line
								x1="61"
								y1="13"
								x2="61"
								y2="98"
								stroke="#A0522D"
								strokeWidth="1"
							/>
							{/* Mallet head */}
							<rect
								x="40"
								y="18"
								width="40"
								height="30"
								rx="5"
								fill="#D2B48C"
							/>
							{/* Mallet head details */}
							<line
								x1="45"
								y1="23"
								x2="75"
								y2="23"
								stroke="#A0522D"
								strokeWidth="1"
							/>
							<line
								x1="43"
								y1="33"
								x2="77"
								y2="33"
								stroke="#A0522D"
								strokeWidth="1"
							/>
							<line
								x1="45"
								y1="43"
								x2="75"
								y2="43"
								stroke="#A0522D"
								strokeWidth="1"
							/>
						</svg>
					</div>
				))}
				<div className="centre-dot" />
			</div>
			<div className="coming-soon">
				<h2>Coming soon...</h2>
			</div>
		</div>
	);
}

export default App;
