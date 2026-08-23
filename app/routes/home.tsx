import Intro from "~/intro/Intro";

export function meta() {
	return [
		{ title: "If these walls could talk" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <Intro />;
}
