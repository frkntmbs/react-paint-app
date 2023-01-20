import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Canvas() {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const { color, penSize, brush } = useSelector((state) => state.canvas);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		const context = canvas.getContext("2d");
		contextRef.current = context;
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.strokeStyle = color;
		context.lineCap = brush;
		context.lineWidth = penSize;
	}, [color, penSize, brush]);

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
		setIsDrawing(true);
	};

	const finishDrawing = () => {
		contextRef.current.closePath();
		setIsDrawing(false);
	};

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.lineTo(offsetX, offsetY);
		contextRef.current.stroke();
	};

	return <canvas className="h-[60vh] w-full" onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef} />;
}
