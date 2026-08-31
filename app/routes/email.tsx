export default function Email() {
	const folders = ["Inbox", "Drafts", "Sent", "Spam", "Trash"];

	return (
		<div className="flex h-screen gap-0 gradient-white pt-15">
			<aside className="w-70">
				<div className="bg-linear-to-r from-[#dcecff] to-[#4968ff] w-full py-4 px-1 shadow-[inset_3px_0px_0px_0px_rgba(0,0,0,0.3)]" />
				<div className="h-full border-r-5 border-[rgba(0,0,0,0.3)] shadow-[inset_-10px_0_0_0_rgba(0,0,0,0.1)] box-border">
					<nav className="p-0 border-b-0">
						{folders.map((folder) => (
							<h1
								key={folder}
								className="w-full px-3 pl-23 py-3 text-2xl font-mono font-semibold text-[rgba(22,27,63,0.5)] border-b"
							>
								{folder}
							</h1>
						))}
					</nav>
				</div>
			</aside>
			<main className="flex-1 overflow-auto">
				<p>Place Holder</p>
			</main>
		</div>
	);
}
