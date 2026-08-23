import { Link, redirect } from "react-router";
import { FILES_LIST } from "~/utils/constants";
import { MenuBar } from "./MenuBar";

function getNextFile(fileName: string) {
	const curFileIndex = FILES_LIST.findIndex(({ id }) => fileName === id);
	if (curFileIndex === -1) {
		return "";
	}
	if (curFileIndex === FILES_LIST.length - 1) {
		return FILES_LIST[0].id;
	}
	return FILES_LIST[curFileIndex + 1].id;
}

function getPrevFile(fileName: string) {
	const curFileIndex = FILES_LIST.findIndex(({ id }) => fileName === id);
	if (curFileIndex === -1) {
		return "";
	}
	if (curFileIndex === 0) {
		return FILES_LIST[FILES_LIST.length - 1].id;
	}
	return FILES_LIST[curFileIndex - 1].id;
}

export default function BrowserBar({ fileName }: { fileName: string }) {
	const browserBarClass =
		"bg-[#B1BFED] px-[12vw] py-2 flex border-t-4 border-[#7988c9]";
	const buttonClass =
		"p-2 bg-[#bacbff,_rgba(0,0,0,0.1)] border-t-3 border-l-3 border-[rgba(30,50,147,0.5)]";
	return (
		<header className="w-full flex flex-col items-stretch">
			<MenuBar title="Files" />
			<section className={`${browserBarClass} h-15`}>
				<section className="flex h-full items-stretch gap-1">
					<Link to={getPrevFile(fileName)} className={buttonClass}>
						<img
							alt="Back"
							className="w-full h-full -scale-x-100"
							src="/browserbar/arrow.svg"
						/>
					</Link>
					<Link to={getNextFile(fileName)} className={buttonClass}>
						<img
							alt="Next"
							className="w-full h-full"
							src="/browserbar/arrow.svg"
						/>
					</Link>
				</section>
				<section className="flex grow items-stretch">
					<div className={buttonClass}>
						<img
							alt="Expand"
							className="w-full h-full"
							src="/browserbar/expand.svg"
						/>
					</div>
					<section className="flex items-center pl-4 text-xl font-medium grow bg-[#d3deff] border-3 border-b-0 border-[rgba(30,50,147,0.5)]">
						<p>Files/{fileName}.txt</p>
					</section>
				</section>
			</section>
			<section
				className={`${browserBarClass} items-center text-lg font-semibold leading-[150%] text-[rgb(22,27,63,0.6)] gap-8 h-14`}
			>
				<p>File</p>
				<p>View</p>
				<p>Tools</p>
				<p>Help</p>
			</section>
		</header>
	);
}
