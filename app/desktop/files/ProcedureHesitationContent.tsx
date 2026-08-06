import { useState, type ReactNode } from "react";
import { FileNavigationBar } from "./FileNavigationBar";

type ProcedureHesitationContentProps = {
    onClose?: () => void;
};

export function ProcedureHesitationContent({ onClose }: ProcedureHesitationContentProps): ReactNode {
    const [currentFile, setCurrentFile] = useState("Files/Procedure_hesitation.txt");

    return (
        <div className="w-full h-full flex flex-col font-['Chivo_Mono'] select-none bg-[#0B1021] text-white overflow-hidden relative">
            {/* Reusable Navigation & Title Bar Component */}
            <FileNavigationBar
                currentFile={currentFile}
                onClose={onClose}
                onSelectFile={(file) => setCurrentFile(file)}
            />

            {/* Document Content */}
            <div className="flex-1 p-8 md:p-16 overflow-y-auto flex flex-col items-center justify-start text-center">
                <div className="max-w-3xl space-y-8 my-auto">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#BACBFF] leading-tight">
                        Between procedure and hesitation
                    </h1>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300 font-sans text-left">
                        <p>
                            Taking the step to report is only the beginning. Once a complaint is filed, many survivors confront a deeper challenge: the hesitation to continue pursuing the complaint. This does not come from weakness but reflects the emotional and practical weight of entering a process that can feel overwhelming.
                        </p>
                        <p>
                            In her work at the UGH, Ofreneo often sees how filing a formal complaint carries significant personal implications that survivors carefully consider before deciding how to proceed. She emphasizes that readiness cannot be imposed by...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}