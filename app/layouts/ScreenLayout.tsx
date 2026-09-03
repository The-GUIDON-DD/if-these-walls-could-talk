import { Outlet } from "react-router";

export default function ScreenLayout() {
	const fullScreenLayer =
		"pointer-events-none bg-center bg-cover w-full h-full fixed inset-0 z-50";
	return (
		<main className="w-screen max-w-screen min-h-screen overflow-x-clip">
			<audio src="/audio/bg-hum.mp3" autoPlay={true} loop={true} />
			<div className="w-full min-h-screen">
				<Outlet />
			</div>
			<div
				className={`${fullScreenLayer} bg-[url('/screen-layout/texture1.svg')] mix-blend-soft-light opacity-25`}
			/>
			<div
				className={`${fullScreenLayer} bg-[url('/screen-layout/texture2.svg')] opacity-10`}
			/>
			<div
				className={`${fullScreenLayer} bg-no-repeat bg-[url('/screen-layout/ScreenBorder.svg')] border-[#010414] border-18`}
			/>
		</main>
	);
}
