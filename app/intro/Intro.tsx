export function LoadingBar({ timer }: { timer: number }) {}

export default function Intro() {
	return (
		<>
			{/* scroll container */}
			<section className="w-screen min-h-screen overflow-x-clip overflow-y-auto">
				{/* container for animations */}
				<section className="radial-bg w-screen h-screen grid grid-cols-1 grid-rows-1 place-items-center"></section>
			</section>
		</>
	);
}
