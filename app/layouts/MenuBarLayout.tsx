import { Outlet } from "react-router";
import { capitalize, dropWhile, join, pipe, takeWhile } from "remeda";
import { MenuBar } from "../components/MenuBar";
import type { Route } from "./+types/menubar-layout";

export default function MenuBarLayout({ matches }: Route.ComponentProps) {
	// get pathname from matches (last match)
	// take only parent route (drop initial slash and take until next slash)
	const routePath = matches[matches.length - 1].pathname;
	const routeName = pipe(
		routePath.split(""),
		dropWhile((c) => c === "/"),
		takeWhile((c) => c !== "/"),
		join(""),
		capitalize(),
	);
	return (
		<>
			<Outlet />
			<div className="w-screen fixed top-4 z-20 pointer-events-auto">
				<MenuBar title={routeName} />
			</div>
		</>
	);
}
