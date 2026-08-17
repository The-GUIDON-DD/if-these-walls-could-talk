import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./layouts/ScreenLayout.tsx", [
		index("routes/home.tsx"),
		layout("./layouts/DesktopLayout.tsx", [
			route("desktop", "./desktop/Desktop.tsx", [
				route("files/procedure-hesitation", "./desktop/files/ProcedureHesitationContent.tsx"),
			]),
		]),
	]),
] satisfies RouteConfig;
