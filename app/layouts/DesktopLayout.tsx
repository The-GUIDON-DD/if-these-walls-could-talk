import { Outlet } from "react-router";
import Taskbar from "~/components/Taskbar";

export default function DesktopLayout() {
	return (
		<>
			<Outlet />
			<div className="w-screen fixed bottom-4">
				<Taskbar />
			</div>
		</>
	);
}
