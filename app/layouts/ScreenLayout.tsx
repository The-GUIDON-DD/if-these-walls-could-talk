import { Outlet } from "react-router";

export default function ScreenLayout() {
	const fullScreenLayer =
		"pointer-events-none bg-center w-full h-full fixed inset-0";
	return (
		<main className="w-screen min-h-screen">
			<div className="w-full min-h-screen fixed inset-0">
				<Outlet />
			</div>
			<div
				className={`${fullScreenLayer} bg-cover bg-[url('/screen-layout/texture.svg')]`}
			/>
			<div
				className={`${fullScreenLayer} bg-cover bg-no-repeat bg-[url('/screen-layout/ScreenBorder.svg')] border-[#010414] border-18`}
			/>
		</main>
	);
}
