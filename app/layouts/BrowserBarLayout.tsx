import { Outlet } from "react-router";
import { last } from "remeda";
import BrowserBar from "../components/BrowserBar";
import type { Route } from "./+types/menubar-layout";

export default function BrowserBarLayout({ matches }: Route.ComponentProps) {
	const routePath = last(matches).pathname;
	const fileName = last(routePath.split("/"));

	return (
		<>
			<main className="w-screen relative top-[2vh]">
				<BrowserBar fileName={fileName} />
				{/* content section */}
				<section className="min-h-screen text-white flex flex-col text-center items-stretchpx-1/6 pt-20 bg-[#060e24]">
					<Outlet />
				</section>
			</main>
			<div className="w-screen pointer-events-none h-70 bg-linear-to-t from-[#060e24] to-transparent fixed bottom-[5vh]" />
		</>
	);
}
