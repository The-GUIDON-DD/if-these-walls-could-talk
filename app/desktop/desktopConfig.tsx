import type { ReactNode } from "react";
import { AboutContent } from "./AboutContent";
import { EmailContent } from "./EmailContent";
import { FilesContent } from "./FilesContent";
import { SystemMessageContent } from "./SystemMessage";

export type PopupWindowKey = "System Message" | "About" | "Files" | "Email";

export type DesktopIconConfig = {
	imageName: string;
	label: string;
	link?: string;
	popupKey?: PopupWindowKey;
};

export const DESKTOP_ICONS: DesktopIconConfig[] = [
	{ imageName: "files.svg", label: "Files", popupKey: "Files" },
	{ imageName: "email.svg", label: "Email", popupKey: "Email" },
	{ imageName: "about.svg", label: "About", popupKey: "About" },
];

export const POPUP_CONTENTS: Record<
	PopupWindowKey,
	(onOk?: () => void) => ReactNode
> = {
	"System Message": (onOk) => <SystemMessageContent onOk={onOk} />,
	About: (onOk) => <AboutContent onOk={onOk} />,
	Files: () => <FilesContent />,
	Email: () => <EmailContent />,
};
