import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setPenSize, setBrush } from "../redux/canvasSlice";

export default function Tools() {
	const dispatch = useDispatch();
	const { color, penSize, brush } = useSelector((state) => state.canvas);

	const handleSetPenSize = (event) => {
		dispatch(setPenSize(event.target.value));
	};

	const handleSetColor = (color) => {
		dispatch(setColor(color));
	};

	const colorsClass = [
		{ color: "black", class: "bg-black" },
		{ color: "#C2C0BA", class: "bg-[#C2C0BA]" },
		{ color: "#F7050C", class: "bg-[#F7050C]" },
		{ color: "#F7B50C", class: "bg-[#F7B50C]" },
		{ color: "#F7F50C", class: "bg-[#F7F50C]" },
		{ color: "#0CF705", class: "bg-[#0CF705]" },
		{ color: "#0CF7F7", class: "bg-[#0CF7F7]" },
		{ color: "#0C0CF7", class: "bg-[#0C0CF7]" },
		{ color: "#F70CF7", class: "bg-[#F70CF7]" },
		{ color: "white", class: "bg-white" },
	];

	const handleSetBrush = (brush) => {
		dispatch(setBrush(brush));
	};

	return (
		<div className="w-full bg-slate-400 file:border-t-2 border-t-slate-600">
			<div className="flex items-center px-4 py-2 gap-10">
				<div>
					<span className="block text-lg mb-2 text-white">Pen Size</span>
					<input type="range" value={penSize} min="2" max="14" step="2" onChange={handleSetPenSize} />
				</div>
				<div>
					<span className="block text-lg mb-2 text-white">Colors</span>
					<div className="flex items-center space-x-1">
						{colorsClass.map((colorClass, index) => (
							<button key={index} className={`w-4 h-4 rounded-full ${colorClass.class} ${colorClass.color === color ? "ring-2 ring-white" : ""}`} onClick={() => handleSetColor(colorClass.color)} />
						))}
					</div>
				</div>
				<div>
					<span className="block text-lg mb-2 text-white">Brush</span>
					<div className="flex items-center space-x-1">
						<button className={`w-4 h-4 rounded-full bg-black ${brush === "round" ? "ring-2 ring-white" : ""}`} onClick={() => handleSetBrush("round")} />
						<button className={`w-4 h-4 bg-black ${brush === "square" ? "ring-2 ring-white" : ""}`} onClick={() => handleSetBrush("square")} />
					</div>
				</div>
			</div>
		</div>
	);
}
