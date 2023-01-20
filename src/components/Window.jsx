import React from "react";

export default function Window({ title, children }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="bg-white rounded-lg w-full">
				<div className="flex items-center justify-between px-4 py-2 bg-slate-700 rounded-t-lg">
					<div className="text-lg font-semibold text-white">{title}</div>
					<div className="flex items-center space-x-2">
						<button className="w-3 h-3 bg-green-500 rounded-full" />
						<button className="w-3 h-3 bg-yellow-500 rounded-full" />
						<button className="w-3 h-3 bg-red-500 rounded-full" />
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
