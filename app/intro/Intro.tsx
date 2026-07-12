import { createTimer } from "animejs";
import { useEffect, useState } from "react";
import { findLast, zip } from "remeda";

const totalSeconds = 10;

export function LoadingBar({ timer }: { timer: number }) {
	const totalBars = 18;
	// bar should update at 0, 25%, 75%, and 100% of the total seconds/completion.
	const updatePercentages = [0, 0.25, 0.75, 1];
	const updateTimes = updatePercentages.map((percent) =>
		Math.floor(totalSeconds * percent),
	);
	const updateCounts = updatePercentages.map((percent) =>
		Math.floor(totalBars * percent),
	);

	const updateTimeCounts = Object.fromEntries(zip(updateTimes, updateCounts));
	const timeIndex = findLast(updateTimes, (time) => time <= timer);
	const numberOfBarsPresent = timeIndex ? updateTimeCounts[timeIndex] : 0;

	return (
		<div
			className={`w-[40vw] h-[8vh] border-4 border-white grid grid-rows-1 gap-2 p-2`}
			style={{ gridTemplateColumns: `repeat(${totalBars}, minmax(0,1fr))` }}
		>
			{Array.from(
				{ length: 18 },
				(_, i) =>
					i + 1 <= numberOfBarsPresent && (
						<div key={i} className="bg-white w-full h-full" />
					),
			)}
		</div>
	);
}

export function LoadingScreen() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		createTimer({
			duration: 1000,
			loop: true,
			onLoop: () => setTime(time + 1),
		});
	}, [time]);

	return (
		<div
			className="flex flex-col gap-15 h-screen w-screen items-center justify-center transition-opacity duration-500"
			style={{ opacity: time >= totalSeconds ? 0 : 1 }}
		>
			<p className="font-mono text-white text-2xl text-shadow text-center w-1/2">
				Trigger warning: This interactive article contains
				<br />
				mentions of sexual harassment
			</p>
			<LoadingBar timer={time} />
		</div>
	);
}

export function IntroText() {
	const paragraphStyle =
		"w-3/5 font-sans font-medium leading-[145%] text-4xl col-span-full row-span-full text-white font-bold text-center retro-text-shadow";
	const linkStyle = "text-white underline";
	return (
		<section className="w-full h-[200vh] overflow-y-auto">
			<section className="fixed inset-0 grid grid-cols-1 grid-rows-1 place-items-center h-screen w-screen">
				<p className={paragraphStyle}>
					IN RECENT years, the University has expanded policies, offices, and
					student{" "}
					<a
						href="https://www.ateneo.edu/mission/hcw/genderrelated-services"
						className={linkStyle}
					>
						support systems
					</a>{" "}
					aimed at making campus spaces more inclusive through adopting
					grievance mechanisms and gender focused initiatives and guidelines.
				</p>
				<p className={paragraphStyle}>
					While the Ateneo{" "}
					<a href="https://www.ateneo.edu/central/policies/code-of-decorum">
						commits
					</a>{" "}
					to building safe spaces for all students, victims navigating sexual
					harassment{" "}
					<a href="https://www.ateneo.edu/central/policies/code-of-decorum">
						cases
					</a>{" "}
					encounter lengthy procedures that often fail to deliver timely justice
					or safety.
				</p>
			</section>
		</section>
	);
}

export default function Intro() {
	return (
		<>
			{/* scroll container */}
			<section className="w-screen min-h-screen overflow-x-clip">
				{/* container for animations */}
				<section className="radial-bg fixed inset-0 w-screen h-screen grid grid-cols-1 grid-rows-1 place-items-center">
					{/* <LoadingScreen /> */}
					<IntroText />
				</section>
			</section>
		</>
	);
}
