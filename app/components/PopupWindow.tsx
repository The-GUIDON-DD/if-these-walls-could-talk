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

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/20"
            style={{ zIndex }}
            onClick={closeAction}
        >
            <div
                className="flex flex-col shadow-[0_2px_2px_rgba(0,0,0,0.5)] overflow-hidden select-none"
                style={{ width, height }}
                onClick={(event) => event.stopPropagation()}
            >
                {/* Notice relative z-30 on the header bar */}
                <div className="relative z-30 w-full h-[60px] bg-gradient-to-r from-[#161B3F] to-[#1E3293] flex items-center justify-between pl-4">
                    <span className="font-['Chivo_Mono'] font-medium text-[20px] text-white tracking-wide">
                        {title}
                    </span>

                    <div className="flex h-full">
                        <div className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-[24px]">
                            _
                        </div>
                        {/* Notice explicit pointer-events-auto and cursor-pointer */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                closeAction();
                            }}
                            className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-[24px] cursor-pointer active:bg-white/10 pointer-events-auto"
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