import type { ReactNode } from "react";

type AboutContentProps = {
    onOk?: () => void;
};

export function AboutContent({ onOk }: AboutContentProps): ReactNode {
    return (
        <div className="w-full h-full p-6 box-border">
            <div className="w-full h-full bg-[#F3F5FF] box-border border-r-[3px] border-b-[3px] border-white/50 shadow-[-4px_-4px_0_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="h-full" />
            </div>
        </div>
    );
}