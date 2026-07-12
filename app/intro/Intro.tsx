export function LoadingBar({ timer }: { timer: number }) {
	return <></>;
}

export function LoadingScreen() {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<p className="font-mono text-white text-xl text-shadow text-center w-1/2">
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
