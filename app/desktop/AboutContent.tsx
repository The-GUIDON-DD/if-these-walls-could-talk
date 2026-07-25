import type { ReactNode } from "react";

type AboutContentProps = {
    onOk?: () => void;
};

export function AboutContent({ onOk }: AboutContentProps): ReactNode {
    return (
        <div
            className="relative mx-auto p-6 box-border"
            style={{
                width: 889,
                height: 562,
                background: "#BACBFF",
                borderTop: "4px solid rgba(30,50,147,0.5)",
                borderLeft: "4px solid rgba(30,50,147,0.5)",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: 839.76,
                    height: 502.34,
                    top: 29.67,
                    left: 24.44,
                    position: "absolute",
                    background: "#F3F5FF",
                    boxSizing: "border-box",
                    borderRight: "3px solid rgba(255,255,255,0.5)",
                    borderBottom: "3px solid rgba(255,255,255,0.5)",
                    boxShadow: "-4px -4px 0 0 rgba(0,0,0,0.25)",
                    overflow: "hidden",
                }}
            >
                <div className="h-full" />
            </div>
        </div>
    );
}