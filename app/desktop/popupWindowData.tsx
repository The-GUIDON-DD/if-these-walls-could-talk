import type { ReactNode } from "react";

export type DesktopIconConfig = {
	imageName: string;
	label: string;
	link?: string;
	popupKey?: string;
};

export const DESKTOP_ICONS: DesktopIconConfig[] = [
	{ imageName: "files.svg", label: "Files", popupKey: "Files" },
	{ imageName: "email.svg", label: "Email", link: "/email" },
	{ imageName: "about.svg", label: "About", popupKey: "About" },
];

export const POPUP_CONTENTS: Record<string, (onOk: () => void) => ReactNode> = {
	"System Message": (onOk) => (
		<div className="w-[399px] h-[170px] bg-[#BACBFF] border-t-[4px] border-l-[4px] border-[#1E3293]/50 flex flex-col items-center pt-[34px] gap-[22px] box-border">
			<p className="font-['Chivo_Mono'] font-medium text-[22.44px] leading-none text-[#161B3F] text-center select-none">
				Select Files to proceed
			</p>

			<button
				type="button"
				onClick={onOk}
				className="w-[323px] h-[51px] py-[10px] px-[32px] bg-[#BACBFF] border-r-[3px] border-b-[3px] border-[#1E3293]/50 shadow-[inset_3px_3px_0px_0px_rgba(255,255,255,0.25)] font-['Chivo_Mono'] font-medium text-[26px] leading-none text-[#161B3F] cursor-pointer active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center select-none"
			>
				OK
			</button>
		</div>
	),
	Files: () => <p>Files content goes here...</p>,
	About: () => <p>About content goes here...</p>,
};
