import { useState } from "react";

export default function Email() {
	const [emails, setEmails] = useState([
		{
			id: 1,
			subject: "The Weight of the Process",
			preview:
				"For many survivors of sexual misconduct, the decision to report is not only an administrative step, but also an act of courage meant to reclaim safety and affirm the truth of their case. ",
			isRead: false,
		},
		{
			id: 2,
			subject: "Selena",
			preview:
				"This inaccessibility and information gap affect not only how cases progress, but also whether students feel able to report at all.",
			isRead: false,
		},
		{
			id: 3,
			subject: "Prolonged Proceedings",
			preview:
				"Across different stages of the process in reporting a sexual harassment case, Ofreneo explains that repeatedly revisiting incidents in an unsafe and uncontrolled environment can risk retraumatizing survivors and intensifying the psychological weight they carry.",
			isRead: false,
		},
		{
			id: 4,
			subject: "Mary",
			preview:
				"Some survivors, like Mary, eventually decide to withdraw their complaints.",
			isRead: false,
		},
	]);

	const folders = ["Inbox", "Drafts", "Sent", "Spam", "Trash"];

	const markAsRead = (id: number) => {
		setEmails((currentEmails) =>
			currentEmails.map((email) =>
				email.id === id ? { ...email, isRead: true } : email,
			),
		);
	};

	return (
		<div className="flex h-screen gap-0 gradient-white font-mono pt-15">
			<aside className="w-70">
				<div className="bg-linear-to-r from-[#dcecff] to-[#4968ff] w-full py-4 px-1" />
				<div className="h-full border-r-5 border-[rgba(0,0,0,0.3)] shadow-[inset_-10px_0_0_0_rgba(0,0,0,0.1)] box-border">
					<nav className="p-0 border-b-0">
						{folders.map((folder) => (
							<h1
								key={folder}
								className="w-full px-3 pl-23 py-3 text-2xl font-semibold text-[rgba(22,27,63,0.5)] border-b"
							>
								{folder}
							</h1>
						))}
					</nav>
				</div>
			</aside>
			<main className="flex-1 overflow-auto">
				<nav>
					{emails.map((email) => (
						<button
							type="button"
							key={email.id}
							onClick={() => markAsRead(email.id)}
							aria-pressed={email.isRead}
							className={`w-full border-b px-3 border-gray-300 py-4 flex items-center text-left transition-colors 
								${
									email.isRead
										? "bg-[#D0D8FF] text-gray-500"
										: "bg-transparent text-[#161b3f]"
								}`}
						>
							<div className="w-3 h-3 mx-5 border-2 border-[rgba(0,0,0,0.3)]" />
							<div className="w-[45%] min-w-0 shrink-0">
								<h3
									className={`font-bold text-2xl whitespace-nowrap overflow-hidden text-ellipsis 
										${
											email.isRead
												? "text-[rgba(22,27,63,0.55)] font-medium"
												: "text-[#161b3f]"
										}`}
								>
									{email.subject}
								</h3>
							</div>
							<div className="w-[35%] min-w-0 shrink-0">
								<p
									className={`text-lg block w-full whitespace-nowrap overflow-hidden text-ellipsis ${
										email.isRead ? "text-gray-400" : "text-gray-500"
									}`}
								>
									{email.preview}
								</p>
							</div>
						</button>
					))}
				</nav>
			</main>
		</div>
	);
}
