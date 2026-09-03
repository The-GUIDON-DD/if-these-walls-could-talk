import { useState } from "react";
import { Link } from "react-router";
import { FILES_LIST } from "~/utils/constants";
import { MenuBar } from "./MenuBar";

const browserBarClass =
	"bg-[#B1BFED] px-[12vw] py-2 flex border-t-4 border-[#7988c9]";
const buttonClass =
	"p-2 bg-[#bacbff,_rgba(0,0,0,0.1)] border-t-3 border-l-3 border-[rgba(30,50,147,0.5)]";

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

function getOtherFiles(fileName: string) {
	return FILES_LIST.filter(({ id }) => fileName !== id);
}

function AddressBar({ fileName }: { fileName: string }) {
	const otherFiles = getOtherFiles(fileName);
	const currentFile = FILES_LIST.find(({ id }) => id === fileName);
	const fileList = [currentFile, ...otherFiles];
	const [selectedFile, setSelectedFile] = useState(-1);
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<section className="flex grow items-stretch h-full">
			<button
				type="button"
				onClick={() => {
					setIsExpanded(!isExpanded);
					setSelectedFile(-1);
				}}
				className={`${buttonClass} w-10`}
			>
				<img
					alt="Expand"
					className="w-full h-full"
					src="/browserbar/expand.svg"
					style={{ transform: isExpanded ? "scaleY(-1)" : "" }}
				/>
			</button>
			<section
				className="h-min w-full grow bg-[#d3deff]  border-3 border-b-0 border-[rgba(30,50,147,0.5)] flex flex-col gap-0"
				onKeyDown={(event) => {
					if (event.key === "ArrowDown") {
						setSelectedFile((selectedFile + 1) % fileList.length);
					} else if (event.key === "ArrowUp") {
						setSelectedFile((selectedFile - 1) % fileList.length);
					}
				}}
			>
				{isExpanded ? (
					fileList.map(({ id, fileName }, ix) => (
						<Link
							key={id}
							to={`/files/${id}`}
							className="flex h-10 w-full items-center pl-4 text-xl font-medium"
							style={
								selectedFile === ix
									? {
											background: "#154fff",
											color: "#c2ccff",
											boxShadow: "inset 3px 3px 0 rgba(30,50,147,0.5)",
										}
									: {}
							}
							onMouseOver={() => setSelectedFile(ix)}
						>
							<p>Files/{fileName}</p>
						</Link>
					))
				) : (
					<section className="flex h-10 w-full items-center pl-4 text-xl font-medium">
						<p>Files/{currentFile.fileName}</p>
					</section>
				)}
			</section>
		</section>
	);
}

export default function BrowserBar({ fileName }: { fileName: string }) {
	return (
		<header className="w-full flex flex-col items-stretch">
			<MenuBar title="Files" />
			<section className={`${browserBarClass} h-15 gap-2`}>
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
				<AddressBar fileName={fileName} />
			</section>
			{/*
			<section
				className={`${browserBarClass} items-center text-lg font-semibold leading-[150%] text-[rgb(22,27,63,0.6)] gap-8 h-14`}
			>
				<p>File</p>
				<p>View</p>
				<p>Tools</p>
				<p>Help</p>
			</section>
      */}
		</header>
	);
}
