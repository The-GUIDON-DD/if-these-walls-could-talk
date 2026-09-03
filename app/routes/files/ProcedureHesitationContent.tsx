import { type ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import PersonCard from "~/components/PersonCard";
import { InteractiveEye } from "../../components/InteractiveEye";

export default function ProcedureHesitationContent(): ReactNode {
	const navigate = useNavigate();
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<main id="procedure-hesitation" className="file-main">
			<h1> Between procedure and hesitation </h1>

			
			<p>
				Taking the step to report is only the beginning. Once a complaint is
				filed, many survivors confront a deeper challenge: the hesitation to
				continue pursuing the complaint. This does not come from weakness but
				reflects the emotional and practical weight of entering a process that
				can feel overwhelming.
			</p>
			<p>
				In her work at the UGH, Ofreneo often sees how filing a formal
				complaint carries significant personal implications that survivors
				carefully consider before deciding how to proceed. She emphasizes that
				readiness cannot be imposed by institutions and should instead come
				from the survivors themselves. Building on this, Ofreneo notes that
				the pace of reporting is closely tied to a survivor’s sense of safety
				and trust in the process itself. While some may feel prepared to act
				immediately, others need time to rebuild confidence in the system and
				in the support structures around them. Respecting this pace, she
				notes, is part of the University’s responsibility to care.
			</p>
			<p>
				As survivors weigh their options, many first turn to{" "}
				<a
					href="https://www.facebook.com/share/p/1CURsnxbhM/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					peer-led support
				</a>
				. The{" "}
				<a
					href="https://www.facebook.com/SangguCASMV"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					Commission on Anti-Sexual Misconduct and Violence
				</a>{" "}
				(CASMV), a student-led body under the Sanggunian, provides peer-level
				assistance through its{" "}
				<a
					href="https://www.facebook.com/share/p/1CURsnxbhM/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					trained
				</a>{" "}
				first responders. These volunteers listen to disclosures, offer
				initial guidance, and help connect survivors to the appropriate
				University offices, making the first step toward reporting feel more
				accessible.
			</p>
			<div className="w-full bg-[#F5FF64] text-[#000000] p-[20px] md:pt-[36px] md:pb-[36px] md:px-[63px] border-r-[4px] border-b-[4px] border-[#000000] shadow-[inset_4px_4px_0px_#FFFFFF] font-sans mb-10">
				<div className="text-black m-0 text-2xl font-medium text-justify">
					Within the conversation sessions held with responders, Escarez
					explains that the principle of{" "}
					<a
						href="https://learn.childhood.org.au/empowered-consent/#:~:text=Affirmative%20consent%20moves%20us%20away%20from%20the,be%20enthusiastic%2C%20clear%2C%20and%20an%20ongoing%20yes"
						target="_blank"
						rel="noopener noreferrer"
						className="underline !text-[#000000]"
					>
						empowered consent
					</a>{" "}
					ensures survivors decide for themselves whether to file a formal
					complaint, pause the process, or pursue other forms of support. For
					her, keeping these decisions with the survivor helps prevent
					additional harm and allows them to engage with the process in ways
					that feel safe.
				</div>
			</div>
			<p>
				However, even with these mechanisms, societal attitudes continue to
				shape how survivors experience the process. Broader societal
				attitudes, such as{" "}
				<a
					href="https://www.sace.ca/learn/victim-blaming/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					victim blaming
				</a>{" "}
				and {""}
				<a
					href="https://www.cameleon-association.org/contexte-aux-philippines/?lang=en"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					rape culture
				</a>{" "}
				remain strong deterrents, discouraging many from speaking out despite
				available support.
			</p>
		

			<div className="relative w-[80%] min-w-[600px] h-[350px] flex items-center justify-center my-12">
				<div className="relative flex flex-col items-center">
					<div
						className="w-[153.49px] h-[153.49px] relative z-1 rounded-full shadow-[0px_6px_0px_rgba(22,27,63,0.3)]"
						style={{
							background: "linear-gradient(180deg, #C2CCFF 0%, #8593DC 100%)",
						}}
					/>
					<div
						className="w-[180.54px] h-[250.19px] rounded-full -mt-10 shadow-[0px_6px_0px_rgba(22,27,63,0.3)]"
						style={{
							background: "linear-gradient(180deg, #C2CCFF 0%, #8593DC 100%)",
						}}
					/>
				</div>

				<InteractiveEye
					direction="left"
					width="272.52px"
					height="124.61px"
					className="left-[2%] top-[5%]"
					style={{ transform: "rotate(-3.32deg)" }}
				/>
				<InteractiveEye
					direction="left"
					width="188.71px"
					height="86.74px"
					className="left-[5%] bottom-[5%]"
					style={{ transform: "rotate(-16.33deg)" }}
				/>
				<InteractiveEye
					direction="right"
					width="188.71px"
					height="86.74px"
					className="right-[5%] top-[5%]"
					style={{ transform: "rotate(-16.33deg)" }}
				/>
				<InteractiveEye
					direction="right"
					width="272.52px"
					height="124.61px"
					className="right-[2%] bottom-[5%]"
					style={{ transform: "rotate(-3.32deg)" }}
				/>
			</div>
			
			<p>
				Escarez explains that a survivor's immediate environment plays a significant
				role in this hesitation. She explains that conversations around sexual
				misconduct remain taboo in many Filipino households, particularly among older
				generations, making disclosure difficult even within one's own family. In some
				cases, she acknowledges that these experiences are minimized, with
				responsibility shifting onto the victim, which further discourages individuals
				from coming forward.
			</p>
			<p>
				Within this context, Ofreneo frequently encounters doubts that shape
				survivors' decisions. She asks,
			</p>

			<div className="w-full max-w-[961px] bg-[#BACBFF] text-[#161B3F] p-4 md:py-4 md:px-6 border-t-[4px] border-l-[4px] border-[#1E3293]/50 border-r-[4px] border-b-[4px] border-[#1E3293] shadow-[4px_4px_0px_rgba(0,0,0,0.25)] font-sans mb-10">
				<div className="flex flex-col border border-[#1E3293]/30 bg-[#F4F7FF] shadow-md">
					<div
						onMouseEnter={() => setHoveredIndex(0)}
						className={`p-4 font-semibold text-xl flex items-center justify-between cursor-pointer ${
							hoveredIndex === 0 || hoveredIndex === null ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
						}`}
					>
						<span>"Will there be support?"</span>
					</div>
					<div
						onMouseEnter={() => setHoveredIndex(1)}
						className={`p-4 border-t border-[#1E3293]/20 font-semibold text-xl flex items-center justify-between cursor-pointer ${
							hoveredIndex === 1 ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
						}`}
					>
						<span>"Will they be believed?"</span>
					</div>
					<div
						onMouseEnter={() => setHoveredIndex(2)}
						className={`p-4 border-t border-[#1E3293]/20 font-semibold text-xl flex items-center justify-between cursor-pointer ${
							hoveredIndex === 2 ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
						}`}
					>
						<span>"Will they be further shamed or stigmatized?"</span>
					</div>
				</div>
				<div className="text-[#161B3F] text-2xl font-medium mt-6">
					These questions, she adds, weigh heavily on those considering whether to come forward.
				</div>
			</div>
			<p>
				Despite laws like the{" "}
				<a
					href="https://www.ombudsman.gov.ph/GAD/Laws%20and%20Mandates/IRR-of-RA-11313-Safe-Spaces-Act.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					Safe Spaces Act of 2019
				</a>
				, reports from the Philippine Commission on Women{" "}
				<a
					href="https://www.gmanetwork.com/news/topstories/nation/929640/pcw-violence-against-women/story/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					show
				</a>
				{" "}that stigma and disbelief remain among the main reasons survivors choose not to report. Legal protections may exist, but the{" "}
				<a
					href="https://www.thelancet.com/journals/lanwpc/article/PIIS2666-6065(22)00086-4/fulltext"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					social climate
				</a>
				{" "}still dictates who feels safe enough to use them.
			</p>
			<p>
				Within institutional settings, this tension is also reflected in how
				accountability is framed by the University. Approaches that prioritize
				rehabilitation are intended to address harmful behavior, but when they are
				perceived as operating without clear consequences, survivors may question
				whether justice is truly being served.
			</p>
			<p>
				For Selena, hesitation was shaped by these concerns about accountability. She
				recalled her father asking what would happen to the student who had harassed
				her. "They told [my father] that the Ateneo isn't the kind of institution
				that likes to punish its students," she says, referring to the administrators
				handling her case.
			</p>
			<PersonCard
				name="SELENA"
				desc='According to her, administrators explained that the University believes in giving second chances and providing therapy to reform behaviour. Her father, she adds, was uneasy at the thought that the person who harmed her might remain on campus "just hoping to change."'
			/>
			<p>
				In response, the University has begun strengthening its existing systems for
				care and accountability. Through the UGH, faculty and staff{" "}
				<a
					href="https://www.ateneo.edu/news/2024/05/23/ugdo-bulletin-january-april-2024#:~:text=New%20Formats%20in%20Gender%20Sensitivity%20Training%20and%20Onboarding&text=The%20University%20Gender%20and%20Development%20Office%20released%20UGDO%20memo%20no,take%20this%20module%20via%20INTACT)"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					undergo
				</a>
				{" "}regular gender-sensitivity training, while procedures for accompaniment continue to be reviewed and refined based on student needs.
			</p>
			<p>
				Alongside these efforts, Ofreneo shares that the administration has initiated
				a review of the Code and Rules on Sexual Misconduct to ensure that current
				policies remain relevant to the community's needs.
			</p>
			<p>
				Still, rather than relying on policy alone, Ofreneo emphasizes that creating a
				safe Ateneo requires shared responsibility. She highlights that every member
				of the community plays a role in challenging harmful behavior, supporting
				survivors, and maintaining boundaries that protect others.
			</p>
			<p>
				With this, the University's commitment to safe spaces must therefore be
				reflected not only in written protocols but also in daily practice. Mutual
				respect, active awareness, and consistent care form the groundwork of an
				environment where survivors can step forward without fear.
			</p>
		</main>
	);
}
