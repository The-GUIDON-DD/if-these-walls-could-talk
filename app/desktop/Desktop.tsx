import { useState } from "react";
import { Link } from "react-router";
import { PopupWindow } from "../components/PopupWindow";
import { FilesContent, ProcedureHesitationContent } from "./files";
import {
    DESKTOP_ICONS,
    POPUP_CONTENTS,
    type PopupWindowKey,
} from "./desktopConfig";

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
                className="w-[70%] flex flex-col items-stretch text-left focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer"
            >
                {iconContent}
            </button>
        );
    }

    return <div className="w-[70%] flex flex-col items-stretch">{iconContent}</div>;
}

export default function Desktop() {
    const desktopImagePath = "/desktop";
    const [showSystemMessage, setShowSystemMessage] = useState(true);
    const [showAbout, setShowAbout] = useState(true);
    const [activePopup, setActivePopup] = useState<PopupWindowKey | null>(null);
    const [isProcedureFullScreen, setIsProcedureFullScreen] = useState(false);

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
        <section className="h-screen w-screen bg-[url('/desktop/wallpaper.png')] bg-cover bg-center relative overflow-hidden">
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
                    closeAction={() => setShowSystemMessage(false)}
                    zIndex={40}
                    width={399}
                    height={230}
                >
                    {POPUP_CONTENTS["System Message"](() => setShowSystemMessage(false))}
                </PopupWindow>
            )}

            {showAbout && (
                <PopupWindow
                    title="About"
                    isOpen
                    closeAction={() => setShowAbout(false)}
                    zIndex={45}
                    width={889}
                    height={622}
                >
                    {POPUP_CONTENTS["About"](() => setShowAbout(false))}
                </PopupWindow>
            )}

            {activePopup && activePopup !== "About" && activePopup !== "System Message" && !isProcedureFullScreen && (
                <PopupWindow
                    title={activePopup}
                    isOpen
                    closeAction={closeActivePopup}
                    zIndex={50}
                    width={1001}  
                    height={541}
                >
                    {activePopup === "Files" ? (
                        <FilesContent 
                            onOpenProcedureHesitation={() => setIsProcedureFullScreen(true)} 
                        />
                    ) : (
                        (POPUP_CONTENTS[activePopup] as any)?.(() => setActivePopup("Files"))
                    )}
                </PopupWindow>
            )}

            {isProcedureFullScreen && (
                <div className="absolute inset-0 z-[100] bg-[#0B1021] flex flex-col w-full h-full">
                    <ProcedureHesitationContent
                        onClose={() => {
                            setIsProcedureFullScreen(false);
                            setActivePopup("Files");
                        }}
                    />
                </div>
            )}
        </section>
    );
}