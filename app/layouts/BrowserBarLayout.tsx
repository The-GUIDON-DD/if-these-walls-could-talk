import { Outlet } from "react-router";
import { last } from "remeda";
import BrowserBar from "../components/BrowserBar";
import styles from "../styles/BrowserBarLayout.module.css";
import type { Route } from "./+types/menubar-layout";

export default function BrowserBarLayout({ matches }: Route.ComponentProps) {
	const routePath = last(matches).pathname;
	const fileName = last(routePath.split("/"));

	return (
		<>
			<header className="w-screen top-4 fixed z-20">
				<BrowserBar fileName={fileName} />
			</header>
			{/* content section */}
			<section
				className={`w-screen min-h-screen text-white flex flex-col items-stretchpx-1/6 pt-50 pb-50 bg-[#060e24] ${styles.browser}`}
			>
				<Outlet />
			</section>
			<div className="w-screen pointer-events-none h-70 bg-linear-to-t from-[#060e24] to-transparent fixed bottom-[5vh] z-10" />
		</>
	);
}
