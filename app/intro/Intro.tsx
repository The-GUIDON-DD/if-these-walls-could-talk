import { useEffect } from "react";
import { findLast, zip } from "remeda";

export function LoadingBar({ timer }: { timer: number }) {
	const totalSeconds = 30;
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
			className={`w-[40vw] h-[8vh] border-[4px] border-white grid grid-cols-${totalBars} grid-rows-1 gap-2 p-2`}
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
	useEffect(() => {}, []);
	return (
		<div className="flex flex-col gap-15 h-screen w-screen items-center justify-center">
			<p className="font-mono text-white text-2xl text-shadow text-center w-1/2">
				Trigger warning: This interactive article contains
				<br />
				mentions of sexual harassment
			</p>
			<LoadingBar timer={0} />
		</div>
	);
}

export default function Intro() {
	return (
		<>
			{/* scroll container */}
			<section className="w-screen min-h-screen overflow-x-clip overflow-y-auto">
				{/* container for animations */}
				<section className="radial-bg w-screen h-screen grid grid-cols-1 grid-rows-1 place-items-center">
					<LoadingScreen />
				</section>
			</section>
		</>
	);
}
