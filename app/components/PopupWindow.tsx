import type { ReactNode } from "react";

type PopupWindowProps = {
	title: string;
	isOpen: boolean;
	closeAction: () => void;
	children: ReactNode;
};

export function PopupWindow({
	title,
	isOpen,
	closeAction,
	children,
}: PopupWindowProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
			<div className="w-[398px] h-[230px] flex flex-col shadow-[0_2px_2px_rgba(0,0,0,0.5)] overflow-hidden select-none">
				<div className="w-full h-[60px] bg-gradient-to-r from-[#161B3F] to-[#1E3293] flex items-center justify-between pl-4">
					<span className="font-['Chivo_Mono'] font-medium text-[20px] text-white tracking-wide">
						{title}
					</span>

					<div className="flex h-full">
						<div className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-[24px]">
							_
						</div>
						<button
							type="button"
							onClick={closeAction}
							className="w-[77px] h-[60px] flex items-center justify-center border-l-2 border-[#BACBFF]/30 text-white font-mono text-[24px] cursor-pointer active:bg-white/10"
						>
							✕
						</button>
					</div>
				</div>

				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
