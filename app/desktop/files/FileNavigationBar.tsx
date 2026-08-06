import { useState, type ReactNode } from "react";

type FileNavigationBarProps = {
    currentFile: string;
    onClose?: () => void;
    onSelectFile?: (fileName: string) => void;
};

const ALL_FILES = [
    "Files/Public_Reckonings.txt",
    "Files/Codes_and_complaints.txt",
    "Files/Procedure_hesitation.txt",
    "Files/Journey_ahead.txt",
];

export function FileNavigationBar({
    currentFile,
    onClose,
    onSelectFile,
}: FileNavigationBarProps): ReactNode {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSelect = (fileName: string) => {
        setDropdownOpen(false);
        if (onSelectFile) {
            onSelectFile(fileName);
        }
    };

    return (
        <div className="w-full flex flex-col font-['Chivo_Mono'] select-none">
            {/* Retro Window Title Bar */}
            <div className="w-full h-[36px] bg-gradient-to-r from-[#161B3F] via-[#1E3293] to-[#161B3F] flex items-center justify-between px-4 border-b border-[#1E3293]/60">
                <span className="text-xs font-bold text-white tracking-wide">Files</span>
                <div className="flex items-center h-full">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-full aspect-square flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-sm cursor-pointer active:bg-white/10 pointer-events-auto"
                        title="Minimize"
                    >
                        <span className="block w-3 h-[2px] bg-white" />
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-full aspect-square flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-xl cursor-pointer active:bg-white/10 pointer-events-auto"
                        title="Close"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Toolbar Area */}
            <div className="bg-[#A7B8E6] text-[#161B3F] p-2 border-b-2 border-[#1E3293]/40 flex flex-col gap-2 relative">
                <div className="flex items-center gap-2">
                    {/* Navigation Buttons with SVG Vectors */}
                    <div className="flex gap-1">
                        <button
                            type="button"
                            onClick={onClose}
                            style={{ width: "38.63px", height: "38.63px" }}
                            className="bg-[#A7B8E6] border-t-[3px] border-l-[3px] border-[#1E3293]/50 hover:bg-[#BACBFF] flex items-center justify-center cursor-pointer shadow-sm active:border-t-0 active:border-l-0"
                            title="Back"
                        >
                            <svg width="16" height="14" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8.33203L8.33203 16.6641H13.332L6.66797 10H20V6.66406H6.66797L13.332 0H8.33203L0 8.33203Z" fill="#0A0D24"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            disabled
                            style={{ width: "38.63px", height: "38.63px" }}
                            className="bg-[#A7B8E6]/60 border-t-[3px] border-l-[3px] border-[#1E3293]/30 flex items-center justify-center opacity-40 cursor-not-allowed"
                            title="Forward"
                        >
                            <svg width="16" height="14" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.33203L11.668 16.6641H6.66797L13.332 10H0V6.66406H13.332L6.66797 0H11.668L20 8.33203Z" fill="#0A0D24"/>
                            </svg>
                        </button>
                    </div>

                    {/* Address Bar with Dropdown Toggle on the Left */}
                    <div className="relative flex-1">
                        <div 
                            style={{ height: "38.63px" }}
                            className="w-full bg-white border-t-[3px] border-l-[3px] border-[#1E3293]/50 text-xs text-[#161B3F] flex items-center shadow-inner overflow-hidden"
                        >
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="h-full px-3 bg-[#A7B8E6] border-r-[2px] border-[#1E3293]/40 flex items-center justify-center text-xs hover:bg-[#BACBFF] cursor-pointer shrink-0"
                            >
                                ▼
                            </button>
                            <span className="truncate px-3 flex-1">{currentFile}</span>
                        </div>

                        {/* Dropdown Options List */}
                        {dropdownOpen && (
                            <div className="absolute left-0 right-0 top-full mt-1 bg-[#A7B8E6] border-2 border-[#1E3293] shadow-lg z-50 flex flex-col">
                                {ALL_FILES.map((file) => (
                                    <button
                                        key={file}
                                        type="button"
                                        onClick={() => handleSelect(file)}
                                        className={`px-3 py-2 text-left text-xs text-[#161B3F] hover:bg-[#1E3293] hover:text-white transition-colors cursor-pointer ${
                                            currentFile === file ? "bg-[#3F56CD] text-white font-bold" : ""
                                        }`}
                                    >
                                        {file}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Menu Options Bar */}
                <div className="flex gap-4 px-2 text-xs font-medium text-[#2B3563]">
                    <span className="cursor-pointer hover:underline">File</span>
                    <span className="cursor-pointer hover:underline">View</span>
                    <span className="cursor-pointer hover:underline">Tools</span>
                    <span className="cursor-pointer hover:underline">Help</span>
                </div>
            </div>
        </div>
    );
}