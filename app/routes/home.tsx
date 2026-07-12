import Intro from "~/intro/Intro";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta() {
	return [
		{ title: "If these walls could talk" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <Intro />;
}
