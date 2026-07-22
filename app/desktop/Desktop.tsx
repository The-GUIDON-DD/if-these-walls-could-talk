import { type ReactNode, useState } from "react";
import { Link } from "react-router";
import { PopupWindow } from "~/components/PopupWindow";
import { DESKTOP_ICONS, POPUP_CONTENTS } from "./popupWindowData";

function DesktopIcon({
	imagePath,
	label,
	link,
	onClick,
}: {
	imagePath: string;
	label: string;
	link?: string;
	onClick?: () => void;
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
	const [activePopup, setActivePopup] = useState<string | null>(
		"System Message",
	);
	const icons = [
		{ imageName: "files.svg", label: "Files", popupKey: "Files" },
		{ imageName: "email.svg", label: "Email", link: "/email" },
		{ imageName: "about.svg", label: "About", popupKey: "About" },
	];
	return (
		<section className="h-screen w-screen bg-[url('/desktop/wallpaper.png')] bg-cover bg-center relative">
			<section className="w-1/10 h-3/5 top-1/6 right-[8vw] absolute flex flex-col items-center justify-center gap-8">
				{icons.map(({ imageName, label, link, popupKey }) => (
					<DesktopIcon
						key={label}
						imagePath={`${desktopImagePath}/${imageName}`}
						label={label}
						link={link}
						onClick={popupKey ? () => setActivePopup(popupKey) : undefined}
					/>
				))}
			</section>
			<PopupWindow
				title={activePopup ?? ""}
				isOpen={!!activePopup}
				closeAction={() => setActivePopup(null)}
			>
				{activePopup
					? POPUP_CONTENTS[activePopup](() => setActivePopup("Files"))
					: null}
			</PopupWindow>
		</section>
	);
}
