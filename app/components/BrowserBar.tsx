import { useNavigate } from "react-router";
import { MenuBar } from "./MenuBar";

type BrowserBarProps = {
    fileName: string;
    onBack?: () => void;
    onForward?: () => void;
    closeAction?: () => void;
};

export default function BrowserBar({ fileName, onBack, onForward, closeAction }: BrowserBarProps) {
    const navigate = useNavigate();
    const handleBack = onBack ?? (() => navigate(-1));
    const handleClose = closeAction ?? (() => navigate("/desktop"));
    const browserBarClass =
        "bg-[#B1BFED] px-[12vw] py-2 flex border-t-4 border-[#7988c9]";
    const buttonClass =
        "p-2 bg-[#bacbff,_rgba(0,0,0,0.1)] border-t-3 border-l-3 border-[rgba(30,50,147,0.5)] cursor-pointer";

    return (
        <header className="w-full flex flex-col items-stretch">
            <MenuBar title="Files" closeAction={handleClose} />
            <section className={`${browserBarClass} h-15`}>
                <section className="flex h-full items-stretch gap-1">
                    <button type="button" onClick={handleBack} className={buttonClass}>
                        <img
                            alt="Back"
                            className="w-full h-full -scale-x-100"
                            src="/browserbar/arrow.svg"
                        />
                    </button>
                    <button type="button" onClick={onForward} className={buttonClass}>
                        <img
                            alt="Next"
                            className="w-full h-full"
                            src="/browserbar/arrow.svg"
                        />
                    </button>
                </section>
                <section className="flex grow items-stretch">
                    <div className={buttonClass}>
                        <img
                            alt="Expand"
                            className="w-full h-full"
                            src="/browserbar/expand.svg"
                        />
                    </div>
                    <section className="flex items-center pl-4 text-xl font-medium grow bg-[#d3deff] border-3 border-b-0 border-[rgba(30,50,147,0.5)]">
                        <p>Files/{fileName}</p>
                    </section>
                </section>
            </section>
            <section
                className={`${browserBarClass} items-center text-lg font-semibold leading-[150%] text-[rgb(22,27,63,0.6)] gap-8 h-14`}
            >
                <p>File</p>
                <p>View</p>
                <p>Tools</p>
                <p>Help</p>
            </section>
        </header>
    );
}