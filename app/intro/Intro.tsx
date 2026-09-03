import { animate, createScope, createTimer, onScroll } from "animejs";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router";
import { findLast, zip } from "remeda";

const totalSeconds = 5;

export function LoadingBar({ timer }: { timer: number }) {
	const totalBars = 18;
	// bar should update at 0, 25%, 75%, and 100% of the total seconds/completion.
	const updatePercentages = [0, 0.25, 0.5, 0.75, 1];
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

export function LoadingScreen({ timer }: { timer: number }) {
	return (
		<div
			className="flex flex-col gap-15 h-screen w-screen items-center justify-center transition-opacity duration-500"
			style={{ opacity: timer >= totalSeconds ? 0 : 1 }}
		>
			<p className="font-mono text-white text-2xl text-shadow text-center w-1/2">
				Trigger warning: This interactive article contains
				<br />
				mentions of sexual harassment
			</p>
			<LoadingBar timer={timer} />
		</div>
	);
}

export function IntroText({ enableLogin }: { enableLogin: () => void }) {
	// TODO: functions to enable/disable pointer events
	const root = useRef<HTMLElement>(null);
	const scope = useRef<ReturnType<typeof createScope> | null>(null);
	useEffect(() => {
		scope.current = createScope({ root }).add(() => {
			animate("#intro-text", {
				opacity: [0, 1],
			});
			animate("#intro-text-p1", {
				opacity: [0, 1],
				duration: 500,
				autoplay: onScroll({
					target: "#intro-text-cont",
					enter: { target: "top", container: "top" },
					leave: { target: "top+=100vh", container: "top" },
					sync: "play reverse play reset",
				}),
			});
			animate("#intro-text-p2", {
				opacity: [0, 1],
				duration: 500,
				autoplay: onScroll({
					target: "#intro-text-cont",
					enter: { target: "top+=120vh", container: "top" },
					leave: { target: "top+=220vh", container: "top" },
					sync: "play reverse play reset",
				}),
			});
			animate("#intro-chevron", {
				opacity: [1, 0],
				duration: 500,
				autoplay: onScroll({
					target: "#intro-text-cont",
					enter: { target: "top+=120vh", container: "top" },
					leave: { target: "top+=240vh", container: "top" },
					onLeave: enableLogin,
					sync: "play pause reverse reset",
				}),
			});
		});

		return () => scope.current?.revert();
	}, [enableLogin]);

	const paragraphStyle =
		"w-3/5 font-sans font-medium leading-[145%] text-4xl col-span-full row-span-full text-white font-bold text-center retro-text-shadow opacity-0";
	const linkStyle = "text-white underline";
	return (
		<section
			ref={root}
			id="intro-text"
			className="w-full w-max-screen h-[360vh] overflow-x-clip"
		>
			<section
				id="intro-text-cont"
				className="sticky top-0 grid grid-cols-1 grid-rows-1 place-items-center h-screen w-full"
			>
				<p id="intro-text-p1" className={paragraphStyle} style={{ opacity: 0 }}>
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
				<p id="intro-text-p2" className={paragraphStyle} style={{ opacity: 0 }}>
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
				<div
					id="intro-chevron"
					className="text-white align-self-end relative bottom-30"
				>
					<FaChevronDown size={48} />
				</div>
			</section>
		</section>
	);
}

function LoginScreen() {
	const root = useRef<HTMLElement>(null);
	const scope = useRef<ReturnType<typeof createScope> | null>(null);
	useEffect(() => {
		scope.current = createScope({ root }).add(() => {
			animate("#intro-login", {
				opacity: [0, 1],
				duration: 500,
			});
		});

		return () => scope.current?.revert();
	}, []);

	return (
		<section
			ref={root}
			id="intro-login"
			className="w-full h-screen flex items-center justify-center py-[20vh]"
		>
			<section className="w-full h-full bg-contain bg-center bg-[url('/intro/login/bg.svg')] flex flex-col items-center justify-center py-10 gap-4">
				<img
					alt="Profile"
					src="/intro/login/profilepic.svg"
					className="w-[15%]"
				/>
				<p className="font-mono text-white uppercase text-lg">Guest User</p>
				<Link
					to="/desktop"
					className="font-mono text-white uppercase text-lg px-5 py-2 mt-5 border-[rgba(47, 79, 130, 0.25)] border-t border-l gradient-btn"
				>
					Log In
				</Link>
			</section>
		</section>
	);
}

export default function Intro() {
	const [time, setTime] = useState(0);
	const [showIntroText, setShowIntroText] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const enableLogin = useCallback(() => setShowLogin(true), []);

	useEffect(() => {
		createTimer({
			duration: 1000,
			loop: totalSeconds,
			onLoop: () => setTime(time + 1),
		}).then(() => setShowIntroText(true));

		// reset flag to remove starting popups
		localStorage.removeItem("alreadyVisit");
	}, [time]);

	return (
		<>
			{/* scroll container */}
			<section className="w-screen min-h-screen">
				<div className="radial-bg fixed inset-0 size-screen" />
				{/* container for animations */}
				<section className="bg-transparent w-screen min-h-screen relative grid grid-cols-1 grid-rows-1 place-items-center">
					{!showIntroText && <LoadingScreen timer={time} />}
					{showIntroText && !showLogin && (
						<IntroText enableLogin={enableLogin} />
					)}
					{showLogin && <LoginScreen />}
				</section>
			</section>
		</>
	);
}
