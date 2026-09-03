import { useEffect, useRef, useState } from "react";

type EmailItem = {
	id: number;
	subject: string;
	content: string;
	isRead: boolean;
};

function EmailDetailPopup({ email }: { email: EmailItem }) {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [thumbTop, setThumbTop] = useState(0);
	const [thumbHeight, setThumbHeight] = useState(116.32);

	const handleScroll = () => {
		if (!contentRef.current || !trackRef.current) return;
		const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
		const trackHeight = trackRef.current.clientHeight;
		const scrollableHeight = scrollHeight - clientHeight;

		if (scrollableHeight > 0) {
			const calculatedThumbHeight = Math.max(
				60,
				(clientHeight / scrollHeight) * trackHeight,
			);
			setThumbHeight(calculatedThumbHeight);

			const maxThumbTop = trackHeight - calculatedThumbHeight;
			const newThumbTop = (scrollTop / scrollableHeight) * maxThumbTop;
			setThumbTop(newThumbTop);
		}
	};

	useEffect(() => {
		handleScroll();
	});

	return (
		<div className="h-full w-full p-[2em]">
			<div className="relative flex h-full w-full overflow-hidden  border-white/50 shadow-[-4px_-4px_0_rgba(0,0,0,0.25)]">
				<div
					ref={contentRef}
					onScroll={handleScroll}
					className="flex-1 overflow-y-auto py-[2.325em] pl-[3.305em] pr-[5.305em] font-mono[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
				>
					<h2 className="mb-[0.75em] font-mono text-4xl font-bold leading-none text-[#161B3F]">
						{email.subject}
					</h2>
					<p
						className="whitespace-pre-line font-mono text-xl leading-relaxed text-[#1A1A2E] email-content"
						dangerouslySetInnerHTML={{ __html: email.content }}
					/>
				</div>

				<div
					ref={trackRef}
					className="pointer-events-none absolute bottom-0 right-0 top-0 w-[2em] border-4 border-[#04040A1A] gradient-white box-border"
				>
					<div
						className="absolute left-1/2 box-border w-[1.54em] -translate-x-1/2 border-l-4 border-t-4 border-white gradient-white shadow-[4px_4px_0_#1D264040]"
						style={{
							height: `${thumbHeight}px`,
							top: `${thumbTop}px`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default function Email() {
	const [emails, setEmails] = useState<EmailItem[]>([
		{
			id: 1,
			subject: "The Weight of the Process",
			content:
				"For many survivors of sexual misconduct, the decision to report is not only an administrative step, but also an act of courage meant to reclaim safety and affirm the truth of their case. Yet, this decision also brings them into a system that can feel heavy and difficult to navigate—all while already carrying significant emotional strain.\n \nAccording to Ofreneo, the University introduces its sexual misconduct protocols to students through orientations, online guidelines, and policies on creating safe spaces outlined in the Ateneo <a href='https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf'>Code of Decorum and Administrative Rules</a>. Notably, many of these protocols are integrated within the systems of the Ateneo curriculum itself.\n \nOne such example is the <a href='https://drive.google.com/file/d/1h8QsHpiDPYnIjJ1nTmW71Mceww-3JF-a/view'>Introduction to Ateneo Culture and Traditions</a>, a required course for all incoming Atenean freshmen. Through this course, students are introduced to the processes for filing a complaint and the offices involved in handling sexual misconduct cases.\n \nHowever, Ofreneo reflects that exposure does not always translate into understanding. As a relatively young office established in <a href='https://www.ateneo.edu/news/2021/12/04/creation-loyola-schools-gender-hub-provision-support-assistance-cases-sexual'>2019</a>, the UGH remains uncertain about how well students retain or comprehend these procedures after their initial introduction, particularly once orientations are over.\n \nIn light of this, sexual misconduct survivors Selena* and Mary* share that they would not have known how to file a report without guidance from friends. Their experiences point to a wider lack of awareness among students about where and how to report sexual misconduct.",
			isRead: false,
		},
		{
			id: 2,
			subject: "Selena",
			content:
				"This inaccessibility and information gap affect not only how cases progress, but also whether students feel able to report at all. Within this context, the act of speaking up can reopen wounds that survivors are still trying to heal. In particular, Selena reveals how a system intended to ensure fairness can also become emotionally demanding.\n\nSelena recalls filing her report just a day after experiencing harassment from a fellow student. After her blockmate connected her to the Office of Student Affairs (OSA), she hoped that the office would provide clarity on how to proceed with her case and how the University would handle it. Yet, what began as an act of courage soon turned into weeks of frustration.\n\nThe people I was dealing with could never give me a sure answer. I had to be extremely specific with everything that happened, and even with the amount of evidence I had, it felt like it still wasn’t enough,” she admits. In particular, she cited her experience with the OSA, the UGH, and the Office of Student Discipline.\n\nMoving between multiple offices required Selena to recount the same painful experience multiple times. While each office explained its individual role, she was left doubtful about the overall status of her case and what outcomes to expect. “I just feel like I’m in a very gray area,” she reflects. “I don’t even know if the guy that did [the harassment] to me is gonna get any form of punishment.",
			isRead: false,
		},
		{
			id: 3,
			subject: "Prolonged Proceedings",
			content:
				"Across different stages of the process in reporting a sexual harassment case, Ofreneo explains that repeatedly revisiting incidents in an unsafe and uncontrolled environment can risk <a href='https://psycnet.apa.org/record/2010-09708-008'>retraumatizing</a> survivors and intensifying the psychological weight they carry.\n\nIn this sense, Ofreneo acknowledges that the challenge of recounting such experiences is not only procedural, but deeply personal. “We always say care first,” she emphasizes, underscoring the UGH’s principle to prioritize survivors’ psychological well-being at every step of the reporting process.\n\nAs part of this care-first approach, the UGH assigns trained case companions to accompany survivors throughout the process. These companions, all part of the UGH, provide stability at moments when survivors may feel most vulnerable.\n\nHowever, as cases move through documentation and review, the pace of bureaucracy often lags behind the urgency of care. For student complainants, the drawn-out process becomes another layer of strain.\n\nIn this light, Escarez admits that many cases extend well beyond the 10-day <a href='https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf'>decision</a> period.\n\nAlthough established measures protect fairness, they often prolong proceedings, leaving complainants waiting for clarity that can take months to arrive.",
			isRead: false,
		},
		{
			id: 4,
			subject: "Mary",
			content:
				"Some survivors, like Mary, eventually decide to withdraw their complaints.\n\nMary filed her report during her freshman year, hopeful that speaking up would finally bring certainty about how her case was progressing and whether any action would be taken. However, that hope faded when updates from University offices stopped arriving.\n\n“After I filed [my report], I didn’t receive any more updates,” she recalls. “It felt like a cliffhanger. I never really heard back from them again.”\n\nSimilar to Mary’s case, several complainants in recent years have either <a href='https://www.ateneo.edu/sites/default/files/2023-08/UODI%20Report%20December%202022%20to%20May%202023%20FINAL.pdf'>withdrawn</a> their cases or retained their reports at the informal level. Ofreneo adds that the reasons for these may vary—from confidentiality concerns to emotional fatigue—and that this pattern points to a shared sense of weariness among those navigating the system.\n\nBehind these numbers are students balancing academics, recovery, and the weight of a process that demands repeated vulnerability. In the end, many find it easier to step back than to keep reliving what happened.\n\n“It was good that I got to let it out, but after that, nothing happened, so I just moved on,” Mary remarks, referring to her decision to stop pursuing her report.",
			isRead: false,
		},
	]);

	const folders = ["Inbox", "Drafts", "Sent", "Spam", "Trash"];
	const [selectedEmail, setSelectedEmail] = useState<EmailItem | null>(null);

	const markAsRead = (id: number) => {
		setEmails((currentEmails) =>
			currentEmails.map((email) =>
				email.id === id ? { ...email, isRead: true } : email,
			),
		);
	};

	const openEmail = (email: EmailItem) => {
		markAsRead(email.id);
		setSelectedEmail(email);
	};

	return (
		<>
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
								onClick={() => openEmail(email)}
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
										${email.isRead ? "text-[rgba(22,27,63,0.55)] font-medium" : "text-[#161b3f]"}`}
									>
										{email.subject}
									</h3>
								</div>
								<div className="w-[35%] min-w-0 shrink-0">
									<p
										className={`text-lg block w-full whitespace-nowrap overflow-hidden text-ellipsis ${
											email.isRead ? "text-gray-400" : "text-gray-500"
										} email-content`}
										dangerouslySetInnerHTML={{ __html: email.content }}
									/>
								</div>
							</button>
						))}
					</nav>
				</main>
			</div>

			{selectedEmail && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label={selectedEmail.subject}
					onClick={() => setSelectedEmail(null)}
					className="fixed inset-0 z-50 flex items-center justify-center bg-[#161b3f]/30 p-8"
				>
					<div
						onClick={(event) => event.stopPropagation()}
						className="h-[min(640px,calc(100vh-4rem))] w-[min(900px,calc(100vw-4rem))] gradient-white shadow-[8px_8px_0_rgba(22,27,63,0.25) p-]"
					>
						<header className="flex h-16 items-center justify-between  border-b-0 bg-linear-to-r from-[#c9e6ff] to-[#4968ff] px-5">
							<button
								type="button"
								onClick={() => setSelectedEmail(null)}
								aria-label="Close email"
								className="font-mono text-3xl font-bold leading-none text-[#161b3f]"
							>
								×
							</button>
						</header>

						<div className="h-[calc(100%-4rem)]">
							<EmailDetailPopup email={selectedEmail} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
