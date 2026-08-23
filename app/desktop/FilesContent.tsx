import { useState, type ReactNode } from "react";

const FILES_LIST = [
    { id: "public-reckonings", label: "Public Reckonings" },
    { id: "codes-and-complaints", label: "Codes and Complaints" },
    { id: "procedure-hesitation", label: "Procedure Hesitation" },
    { id: "journey-ahead", label: "Journey Ahead" },
];

export function FilesContent(): ReactNode {
    const [hoveredId, setHoveredId] = useState<string>("public-reckonings");

    return (
        <div className="relative w-full h-full p-6 font-['Chivo_Mono'] select-none flex flex-col justify-between">
            <div className="w-full flex-1 bg-[#A7B8E6] border-t-[3px] border-l-[3px] border-[#1E3293]/50 p-6 flex flex-wrap gap-6 justify-center items-center overflow-auto">
                {FILES_LIST.map(({ id, label }) => {
                    const active = hoveredId === id;

                    return (
                        <div
                            key={id}
                            onMouseEnter={() => setHoveredId(id)}
                            className={`flex flex-col items-center p-4 rounded w-[160px] cursor-pointer transition-all outline-none ${
                                active 
                                    ? "bg-[#D0D9F3] border border-[#1E3293]/30 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" 
                                    : "bg-transparent"
                            }`}
                        >
                            <svg
                                width="70"
                                height="88"
                                viewBox="0 0 70 88"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
                            >
                                <path
                                    d="M39.375 30.8V6.6L63.4375 30.8M8.75 0C3.89375 0 0 3.916 0 8.8V79.2C0 81.5339 0.921872 83.7722 2.56282 85.4225C4.20376 87.0729 6.42936 88 8.75 88H61.25C63.5706 88 65.7962 87.0729 67.4372 85.4225C69.0781 83.7722 70 81.5339 70 79.2V26.4L43.75 0H8.75Z"
                                    fill={`url(#gradient-${id})`}
                                />
                                <defs>
                                    <linearGradient
                                        id={`gradient-${id}`}
                                        x1="35"
                                        y1="88"
                                        x2="35"
                                        y2="0"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor={active ? "#1E3293" : "#3D4775"} />
                                        <stop offset="1" stopColor={active ? "#3F56CD" : "#707AA7"} />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span className="text-base text-center leading-snug px-1 text-[#2B3563]">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="w-full h-[32px] mt-4 flex gap-2 text-xs text-[#161B3F]">
                <div className="px-4 flex items-center border-t-[3px] border-l-[3px] border-[#1E3293]/50 bg-[#A7B8E6]">
                    <p className="text-base">{FILES_LIST.length} object(s)</p>
                </div>
                <div className="flex-1 border-t-[3px] border-l-[3px] border-[#1E3293]/50 bg-[#A7B8E6]" />
            </div>
        </div>
    );
}