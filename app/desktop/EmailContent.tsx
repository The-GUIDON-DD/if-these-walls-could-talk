import { Link } from "react-router";

export function EmailContent() {
	return (
		<div className="h-full overflow-auto bg-linear-to-b from-[#eef0ff] to-[#c2ccff] px-[9%] py-[7%] font-['Chivo_Mono'] text-[#161b3f]">
			<h1 className="text-center font-sans text-6xl font-black italic leading-none text-[#0827c0] text-shadow-[4px_5px_0_#7d829f] [-webkit-text-stroke:2px_#eef0ff]">
				Welcome!
			</h1>
			<p className="mt-[5%] text-center text-lg font-bold text-[#7d829f]">
				Click on a user to proceed
			</p>
			<div className="mt-[8%] min-h-[55%] border-[6px] border-[#7d829f] bg-[#d0d9f3] shadow-[6px_6px_0_#eef0ff]">
				<Link
					to="/email"
					className="flex w-full items-center gap-[5%] border-b-4 border-[#eef0ff] bg-[#c2ccff] p-[6%] text-left hover:bg-[#b5c4f5] focus:outline-none focus:ring-4 focus:ring-[#3f56cd]"
				>
					<span className="flex aspect-square w-[24%] shrink-0 items-center justify-center border-4 border-[#1e3293] bg-linear-to-b from-[#243eaa] to-[#161b3f] p-[3%] shadow-[4px_4px_0_#7d829f]">
						<svg viewBox="0 0 100 100" role="img" aria-label="User">
							<circle cx="50" cy="31" r="18" fill="#8ea7ff" />
							<path
								d="M16 83c0-17 15-28 34-28s34 11 34 28v5H16z"
								fill="#4968ff"
							/>
						</svg>
					</span>
					<span className="border-4 border-l-white border-t-white border-r-[rgba(0, 0, 0, 0.25)] border-b-[rgba(0, 0, 0, 0.25)] bg-[#d0d9f3] px-8 py-4 text-3xl font-bold text-[#161b3f]">
						Guest
					</span>
				</Link>
			</div>
		</div>
	);
}
