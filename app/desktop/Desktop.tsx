import { Link } from "react-router";

function DesktopIcon({
	imagePath,
	label,
	link,
}: {
	imagePath: string;
	label: string;
	link?: string;
}) {
	if (link) {
		return (
			<Link to={link} className="w-[70%] flex flex-col items-stretch">
				<img alt={label} src={imagePath} />
				<p className="font-mono text-center text-shadow-[0_3px_3px_black] text-white text-lg tracking-wide">
					{label}
				</p>
			</Link>
		);
	}

	return (
		<div className="w-[70%] flex flex-col items-stretch">
			<img alt={label} src={imagePath} />
			<p className="font-mono text-center text-shadow-[0_3px_3px_black] text-white text-lg tracking-wide">
				{label}
			</p>
		</div>
	);
}

export default function Desktop() {
	const desktopImagePath = "/desktop";
	const icons = [
		{ imageName: "files.svg", label: "Files" },
		{ imageName: "email.svg", label: "Email", link: "/email" },
		{ imageName: "about.svg", label: "About" },
	];
	return (
		<section className="h-screen w-screen bg-[url('/desktop/wallpaper.png')] bg-cover bg-center relative">
			<section className="w-1/10 h-3/5 top-1/6 right-[8vw] absolute flex flex-col items-center justify-center gap-8">
				{icons.map(({ imageName, label, link }) => (
					<DesktopIcon
						key={label}
						imagePath={`${desktopImagePath}/${imageName}`}
						label={label}
						link={link}
					/>
				))}
			</section>
		</section>
	);
}
