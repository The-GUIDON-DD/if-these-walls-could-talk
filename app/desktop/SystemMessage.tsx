import type { ReactNode } from "react";
import { AboutContent } from "./AboutContent";

export type PopupWindowKey = "System Message" | "Files" | "About";

export type DesktopIconConfig = {
    imageName: string;
    label: string;
    link?: string;
    popupKey?: PopupWindowKey;
};

export const DESKTOP_ICONS: DesktopIconConfig[] = [
    { imageName: "files.svg", label: "Files", popupKey: "Files" },
    { imageName: "email.svg", label: "Email", link: "/email" },
    { imageName: "about.svg", label: "About", popupKey: "About" },
];

export const POPUP_CONTENTS: Record<PopupWindowKey, (onOk: () => void) => ReactNode> = {
    "System Message": (onOk) => (
        <div className="w-full h-full flex flex-col items-center pt-[34px] gap-[22px] box-border">
            <p className="font-['Chivo_Mono'] font-medium text-[22.44px] leading-none text-[#161B3F] text-center select-none">
                Select Files to proceed
            </p>

            <button
                type="button"
                onClick={onOk}
                className="w-[323px] h-[51px] py-[10px] px-[32px] border-r-[3px] border-b-[3px] border-[#1E3293]/50 shadow-[inset_3px_3px_0px_0px_rgba(255,255,255,0.25)] font-['Chivo_Mono'] font-medium text-[26px] leading-none text-[#161B3F] cursor-pointer active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center select-none"
            >
                OK
            </button>
        </div>
    ),
    Files: () => (
        <div className="p-4 text-[#161B3F] font-['Chivo_Mono'] text-sm leading-6 bg-[#F8FBFF] h-full">
            <ul className="list-disc list-inside space-y-2">
                <li>Public Reckonings</li>
                <li>Codes and Complaints</li>
                <li>Procedure Hesitation</li>
                <li>Journey Ahead</li>
            </ul>
        </div>
    ),
    About: (onOk) => <AboutContent onOk={onOk} />,
};