import { Outlet } from "react-router";

export function ScreenLayout() {
	const fullScreenLayer =
		"pointer-events-none bg-center bg-cover w-full h-full fixed inset-0";
	return (
		<main className="w-screen min-h-screen">
			<div className="radial-bg w-full min-h-screen fixed inset-0">
				<Outlet />
			</div>
			<div
				className={`${fullScreenLayer} bg-[url('/screen-layout/Screen Border.svg')]`}
			/>
			<div
				className={`${fullScreenLayer} bg-[url('/screen-layout/texture.svg')]`}
			/>
		</main>
	);
}
