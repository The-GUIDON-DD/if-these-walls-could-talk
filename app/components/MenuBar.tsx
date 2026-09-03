import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

type MenuBarProps = {
	title: string;
	closeAction?: () => void;
};

export function MenuBar({ title, closeAction }: MenuBarProps) {
	return (
		<div className="gradient-window-bar-blue text-white w-full h-[5vh] flex items-center justify-between px-[15vw] text-2xl font-mono pointer-events-auto z-100">
			<p>{title}</p>
			<section className="flex h-full">
				{closeAction !== undefined ? (
					<>
						<button
							type="button"
							onClick={closeAction}
							className="border-l-2 border-gray-300 px-6 h-full flex items-center justify-center hover:bg-[rgba(186,203,255,0.1)]"
						>
							<span className="text-center">_</span>
						</button>
						<button
							type="button"
							onClick={closeAction}
							className="border-l-2 border-r-2 border-gray-300 px-6 h-full flex items-center justify-center hover:bg-[rgba(186,203,255,0.1)]"
						>
							<span>
								<IoMdClose />
							</span>
						</button>
					</>
				) : (
					<>
						<Link
							to="/desktop"
							className="border-l-2 border-gray-300 px-6 h-full flex items-center justify-center hover:bg-[rgba(186,203,255,0.1)] hover:no-underline"
						>
							<span className="text-center">_</span>
						</Link>
						<Link
							to="/desktop"
							className="border-l-2 border-r-2 border-gray-300 px-6 h-full flex items-center justify-center hover:bg-[rgba(186,203,255,0.1)]"
						>
							<span>
								<IoMdClose />
							</span>
						</Link>
					</>
				)}
			</section>
		</div>
	);
}
