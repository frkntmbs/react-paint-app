import Canvas from "./components/Canvas";
import Tools from "./components/Tools";
import Window from "./components/Window";

export default function App() {
	return (
		<div className="bg-slate-900">
			<div className="container mx-auto">
				<Window title="React Paint App">
					<Canvas />
					<Tools />
				</Window>
			</div>
		</div>
	);
}
