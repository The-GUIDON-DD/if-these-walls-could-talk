import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./layouts/ScreenLayout.tsx", [
		index("routes/home.tsx"),
		layout("./layouts/DesktopLayout.tsx", [
			route("desktop", "./desktop/Desktop.tsx"),
			...prefix("files", [
				layout("./layouts/BrowserBarLayout.tsx", [
					route("public-reckonings", "routes/files/public-reckonings.tsx"),
					route(
						"codes-and-complaints",
						"routes/files/codes-and-complaints.tsx",
					),
                    route("procedure-hesitation", "routes/files/ProcedureHesitationContent.tsx"),
				]),
			]),
		]),
	]),
] satisfies RouteConfig;