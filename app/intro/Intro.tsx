import { createTimer } from "animejs";
import { useEffect, useState } from "react";
import { findLast, zip } from "remeda";

const totalSeconds = 15;

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
			loop: totalSeconds,
			onLoop: () => setTime(time + 1),
		});
	}, [time]);

	return (
		<div className="flex flex-col gap-15 h-screen w-screen items-center justify-center">
			<p className="font-mono text-white text-2xl text-shadow text-center w-1/2">
				Trigger warning: This interactive article contains
				<br />
				mentions of sexual harassment
			</p>
			<LoadingBar timer={time} />
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
