import { type ReactNode, useEffect, useRef, useState } from "react";

type AboutContentProps = {
	onOk?: () => void;
};

export function AboutContent({ onOk }: AboutContentProps): ReactNode {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [thumbTop, setThumbTop] = useState(0);
	const [thumbHeight, setThumbHeight] = useState(116.32);

	const handleScroll = () => {
		if (!contentRef.current || !trackRef.current) return;
		const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
		const trackHeight = trackRef.current.clientHeight;
		const scrollableHeight = scrollHeight - clientHeight;

		if (scrollableHeight > 0) {
			const calculatedThumbHeight = Math.max(
				60,
				(clientHeight / scrollHeight) * trackHeight,
			);
			setThumbHeight(calculatedThumbHeight);

			const maxThumbTop = trackHeight - calculatedThumbHeight;
			const newThumbTop = (scrollTop / scrollableHeight) * maxThumbTop;
			setThumbTop(newThumbTop);
		}
	};

	useEffect(handleScroll, []);

	return (
		<div className="w-full h-full p-[2em] box-border">
			<div className="w-full h-full bg-[#F3F5FF] box-border border-r-[3px] border-b-[3px] border-white/50 shadow-[-4px_-4px_0_rgba(0,0,0,0.25)] relative overflow-hidden flex">
				<div
					ref={contentRef}
					onScroll={handleScroll}
					className="flex-1 overflow-y-auto py-[2.325em] pl-[3.305em] pr-[5.305em] font-['Chivo_Mono'] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
				>
					<h1 className="font-['Chivo_Mono'] font-bold text-3xl leading-none text-[#161B3F] mb-[0.75em]">
						If these walls could talk: <br />
						Evaluating safe spaces on campus
					</h1>

					<p className="font-['Chivo_Mono'] font-medium text-xl leading-none text-[#1A1A2E] mb-[0.75em]">
						Former University Office on Decorum and Investigation (UODI)
						Co-Chairperson Socorro Escarez states that the University envisions
						the concept of{" "}
						<a
							href="https://www.ateneo.edu/central/gender/ugdo/laws"
							className="text-[#3B52D4] underline decoration-[#3B52D4] hover:opacity-80"
						>
							safe spaces
						</a>{" "}
						as the “pre-requisite condition” for building a culture of trust,
						respect, and inclusion. She emphasizes that safe spaces require a{" "}
						<a
							href="https://www.ateneo.edu/central/policies/code-of-decorum"
							className="text-[#3B52D4] underline decoration-[#3B52D4] hover:opacity-80"
						>
							zero-tolerance policy
						</a>{" "}
						against all forms of sexual and gender-based violence and
						discrimination.
					</p>

					<p className="font-['Chivo_Mono'] font-medium text-xl leading-none text-[#1A1A2E] mb-[0.75em]">
						As the University continues to uphold{" "}
						<a
							href="https://www.ateneo.edu/central/gender/ugdo/laws"
							className="text-[#3B52D4] underline decoration-[#3B52D4] hover:opacity-80"
						>
							safe spaces
						</a>{" "}
						within the academe, there remains a need to examine whether current
						procedures and student experiences reflect the values safe spaces
						are meant to uphold.
					</p>

					<div className="my-[1em] text-xl text-[#1A1A2E]">{/* /// */}</div>

					<div className="space-y-[0.75em] text-[#1A1A2E] text-xl leading-none">
						<div>
							<p className="font-semibold text-black">Article by</p>
							<p>Maxiene A. Barrion</p>
							<p>Nathaniel Gabriel Escueta</p>
							<p>Kayla Kagaoan</p>
						</div>

						<div>
							<p className="font-semibold text-black">With reports by</p>
							<p>Hailey Karingal</p>
							<p>Sab Mercado</p>
							<p>Camille Dominique (Mon) Salipsip</p>
						</div>

						<div>
							<p className="font-semibold text-black">Interactive by</p>
							<p>Diego Andal</p>
							<p>Devin Avenida</p>
							<p>Helena Leaño</p>
							<p className="italic text-gray-500">Developer</p>
						</div>
					</div>
				</div>

				{/* Custom Scrollbar Track */}
				<div
					ref={trackRef}
					className="w-[2em] absolute top-0 bottom-0 right-0 bg-[#F3F5FF] border-4 border-[#04040A1A] box-border pointer-events-none"
				>
					{/* Scroll Thumb */}
					<div
						className="w-[1.54em] bg-[#F3F5FF] border-t-4 border-l-4 border-white shadow-[4px_4px_0_#1D264040] absolute left-1/2 -translate-x-1/2 box-border"
						style={{
							height: `${thumbHeight}px`,
							top: `${thumbTop}px`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
