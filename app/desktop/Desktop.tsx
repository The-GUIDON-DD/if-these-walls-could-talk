import { useState } from "react";
import { Link } from "react-router";
import { PopupWindow } from "../components/PopupWindow";
import {
	DESKTOP_ICONS,
	POPUP_CONTENTS,
	type PopupWindowKey,
} from "./desktopConfig";
import { FilesContent } from "./FilesContent";

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
	const iconContent = (
		<>
			<img alt={label} src={imagePath} />
			<p className="font-mono text-center text-shadow-[0_3px_3px_black] text-white text-lg tracking-wide">
				{label}
			</p>
		</>
	);

	if (link) {
		return (
			<Link to={link} className="w-[70%] flex flex-col items-stretch">
				{iconContent}
			</Link>
		);
	}

	if (onClick) {
		return (
			<button
				type="button"
				onClick={onClick}
				className="w-[70%] flex flex-col items-stretch text-left focus:outline-none focus:ring-2 focus:ring-white/60"
			>
				{iconContent}
			</button>
		);
	}

	return (
		<div className="w-[70%] flex flex-col items-stretch">{iconContent}</div>
	);
}

export default function Desktop() {
	const desktopImagePath = "/desktop";
	const [showSystemMessage, setShowSystemMessage] = useState(true);
	const [showAbout, setShowAbout] = useState(true);
	const [activePopup, setActivePopup] = useState<PopupWindowKey | null>(null);

	const openPopup = (popupKey?: PopupWindowKey) => {
		if (!popupKey) return;
		if (popupKey === "About") {
			setShowAbout(true);
			setShowSystemMessage(false);
			setActivePopup(null);
			return;
		}
		if (popupKey === "System Message") {
			setShowSystemMessage(true);
			setShowAbout(false);
			setActivePopup(null);
			return;
		}
		if (popupKey === "Files") {
			setShowAbout(false);
			setShowSystemMessage(false);
			setActivePopup(popupKey);
			return;
		}
		setActivePopup(popupKey);
	};

	const closeActivePopup = () => {
		setActivePopup(null);
	};

	return (
		<section className="h-screen w-screen bg-[url('/desktop/wallpaper.png')] bg-cover bg-center relative">
			<section className="w-1/10 h-3/5 top-1/6 right-[8vw] absolute flex flex-col items-center justify-center gap-8">
				{DESKTOP_ICONS.map(({ imageName, label, link, popupKey }) => (
					<DesktopIcon
						key={label}
						imagePath={`${desktopImagePath}/${imageName}`}
						label={label}
						link={link}
						onClick={popupKey ? () => openPopup(popupKey) : undefined}
					/>
				))}
			</section>

			{showSystemMessage && (
				<PopupWindow
					title="System Message"
					isOpen
					closeAction={() => {
						setShowSystemMessage(false);
					}}
					zIndex={40}
					width={399}
					height={230}
				>
					{POPUP_CONTENTS["System Message"](() => {
						setShowSystemMessage(false);
					})}
				</PopupWindow>
			)}

			{showAbout && (
				<PopupWindow
					title="About"
					isOpen
					closeAction={() => {
						setShowAbout(false);
					}}
					zIndex={45}
					width={889}
					height={622}
				>
					{POPUP_CONTENTS["About"](() => {
						setShowAbout(false);
					})}
				</PopupWindow>
			)}

			{activePopup === "Email" && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="relative flex aspect-[366/599] w-[72vw] max-w-[365px] p-3 flex-col overflow-hidden gradient-white shadow-[inset_-8px_-8px_0_0_rgba(0,0,0,0.2)]">
						<div className="flex h-[60px] shrink-0 items-center justify-between bg-linear-to-r from-[#dcecff] to-[#4968ff] pl-6">
							<span />
							<button
								type="button"
								onClick={closeActivePopup}
								aria-label="Close Mail"
								title="Close Mail"
								className="flex px-5 aspect-square items-center justify-center text-4xl text-white"
							>
								×
							</button>
						</div>
						<div className="min-h-0 flex-1">{POPUP_CONTENTS.Email()}</div>
					</div>
				</div>
			)}

			{activePopup &&
				activePopup !== "About" &&
				activePopup !== "System Message" &&
				activePopup !== "Email" && (
					<PopupWindow
						title={activePopup}
						isOpen
						closeAction={closeActivePopup}
						zIndex={50}
						width={1001}
						height={541}
					>
						{POPUP_CONTENTS[activePopup as PopupWindowKey]?.(() =>
							setActivePopup("Files"),
						)}
					</PopupWindow>
				)}
		</section>
	);
}
