import { IoMdClose } from "react-icons/io";

type MenuBarProps = {
	title: string;
	closeAction?: () => void;
};

export function MenuBar({ title, closeAction }: MenuBarProps) {
	return (
		<div className="gradient-window-bar-blue text-white w-full h-[5vh] flex items-center px-50 text-2xl font-mono">
			<p className="grow">{title}</p>
			<div className="border-l-2 border-gray-300 w-[5%] h-full flex items-center justify-center">
				<p className="text-center">_</p>
			</div>
			<button
				type="button"
				onClick={closeAction}
				className="border-l-2 border-r-2 border-gray-300 w-[5%] h-full flex items-center justify-center"
			>
				<IoMdClose />
			</button>
		</div>
	);
}
