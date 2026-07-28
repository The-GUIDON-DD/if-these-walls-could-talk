import type { ReactNode } from "react";

type PopupWindowProps = {
    title: string;
    isOpen: boolean;
    closeAction: () => void;
    children: ReactNode;
    width?: number;
    height?: number;
    zIndex?: number;
};

export function PopupWindow({
    title,
    isOpen,
    closeAction,
    children,
    width = 398,
    height = 230,
    zIndex = 50,
}: PopupWindowProps) {
    if (!isOpen) return null;

    const handleClose = (e?: React.MouseEvent) => {
        // stop propagation where applicable and call the parent close action
        if (e && typeof e.stopPropagation === "function") e.stopPropagation();
        console.log("PopupWindow handleClose:", title);
        closeAction();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex }}>
            {/* Backdrop receives clicks to close */}
            <div
                className="absolute inset-0 bg-black/20"
                onClick={handleClose}
            />

            <div
                className="relative flex flex-col shadow-[0_2px_2px_rgba(0,0,0,0.5)] overflow-hidden select-none box-border"
                style={{ minWidth: width, minHeight: height, zIndex: zIndex + 1 }}
                onClick={(event) => event.stopPropagation()}
            >
                {/* Fixed header height to match close button */}
                <div className="relative w-full h-[60px] bg-gradient-to-r from-[#161B3F] to-[#1E3293] flex items-center justify-between pl-4 box-border" style={{ zIndex: zIndex + 2 }}>

                    <span className="font-mono font-medium text-lg text-white tracking-wide">
                        {title}
                    </span>

                    <div className="flex items-center h-full">
                        <div className="px-6 h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-xl">
                            _
                        </div>
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleClose(e); }}
                            aria-label="Close"
                            title="Close"
                            className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-xl cursor-pointer active:bg-white/10 pointer-events-auto"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative z-0">{children}</div>
            </div>
        </div>
    );
}