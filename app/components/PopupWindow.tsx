import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

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

    const handleClose = (e?: MouseEvent) => {
        /*
         * Prevent clicks originating inside the popup from bubbling up to the
         * backdrop and trigger handleClose again. 
         */
        e?.stopPropagation();
        closeAction();
    };

    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex }}>
            {/* Backdrop receives clicks to close */}
            <div
                className="fixed inset-0 bg-black/20"
                onClick={handleClose}
            />

            <div
                ref={containerRef}
                className="relative flex flex-col shadow-[0_8px_0px_rgba(0,0,0,0.25)] overflow-hidden select-none box-border"
                style={{ width: width, height: height, zIndex: zIndex + 1 }}
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
                            onClick={(e) => handleClose(e)}
                            aria-label="Close"
                            title="Close"
                            className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-xl cursor-pointer active:bg-white/10 pointer-events-auto"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div ref={contentRef} className="flex-1 relative z-0 bg-[#c2ccff] border-t-[4px] border-l-[4px] border-[#1E3293]/50 box-border overflow-hidden">{children}</div>
            </div>
        </div>
    );
}