import { createTimeline, onScroll, stagger } from "animejs";
import { useEffect } from "react";
import PersonCard from "~/components/PersonCard";

function StepContainer({ title, desc }: { title: string; desc: string }) {
	return (
		<article className="w-[30%] flex flex-col items-center md: gap-5 md:gap-7 three-step">
			<img src="/files/public-reckonings/Check.svg" alt="Check" />
			<div className="flex items-center justify-center h-10 md:h-15">
				<h3 className="text-white font-medium text-3xl text-center h-10 md:h-15">
				{title}
			</h3>
			</div>
			<section className="w-[30vw] flex items-center justify-center p-10 h-60 rounded-2xl border-white border-3">
				<p className="text-white font-medium text-2xl text-center ">{desc}</p>
			</section>
		</article>
	);
}

function ThreeStepFramework() {
	const steps = [
		{
			title: "Submission of reports",
			desc: "UODI complies all formal and informal reports from complainants.",
		},
		{
			title: "Preliminary investigation",
			desc: "UODI acquires evidence and responses from both parties.",
		},
		{
			title: "Hearing process",
			desc: "UODI also conducts further deliberations for decision-making.",
		},
	];
	useEffect(() => {
		const tl = createTimeline({
			autoplay: true,
			delay: 750,
		});
		tl.add("#three-step-framework", {
			opacity: [0, 1],
			duration: 750,
		})
			.add(
				".three-step",
				{
					opacity: [0, 1],
					y: [20, 0],
					duration: 750,
					delay: stagger(500),
				},
				"<<+=200",
			)
			.init();
	}, []);
	return (
		<section className="mt-10 w-[70%]" id="three-step-framework">
			<h2 className="w-full text-center uppercase text-4xl text-white font-bold">
				Three-Step Framework
			</h2>
			<section className="w-full flex flex-col md:flex-row gap-15  mt-10 mb-20">
				{steps.map(({ title, desc }) => (
					<StepContainer key={title} title={title} desc={desc} />
				))}
			</section>
		</section>
	);
}

export default function PublicReckonings() {
	return (
		<main id="public-reckonings" className="file-main">
			<h1>Public Reckonings</h1>
			<p>
				In accordance with the{" "}
				<a href="https://www.officialgazette.gov.ph/1995/02/14/republic-act-no-7877/">
					Anti-Sexual Harassment Act
				</a>{" "}
				and the{" "}
				<a href="https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html">
					Safe Spaces Act of 2019
				</a>
				, the University issued a 2020 memorandum outlining the{" "}
				<a href="http://www.ateneo.edu/codeofdecorum">Code of Decorum</a> on
				sexual harassment and other forms of sexual misconduct. Notably, this
				policy establishes formal procedures for addressing sexual harassment
				complaints.
			</p>
			<p>
				To ensure due process, the Code{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf">
					envisions
				</a>{" "}
				a three-step framework for handling complaints and conducting
				investigations: submission of formal and informal reports, preliminary
				investigations to acquire evidence and responses from both parties, and
				a hearing process followed by deliberations for decision-making.
			</p>
			<ThreeStepFramework />
			<p>
				Consequently,{" "}
				<a href="https://www.ateneo.edu/central/policies/code-of-decorum">
					Section 37.3
				</a>{" "}
				of the University Code and Rules states that the UODI and the University
				President shall make an effort to reach a decision within 10 days from
				the responses from both parties.
			</p>
			<p>
				Since the establishment of this three-step framework in 2020, the
				University has followed it as standard procedure when addressing{" "}
				<a href="https://www.ateneo.edu/document/2022/07/26/uodi-report-2021-2022-26-july-2022">
					cases
				</a>{" "}
				of sexual harassment.
			</p>
			<div className="w-[60%]">
				<PersonCard
					name="JADE PRINCIPE"
					desc={
						"However, no such formal framework was in place during the time of former Philosophy professor Jade Principe, who faced sexual harassment cases in 2016 for breaching professional boundaries, sending inappropriate messages, and extending date invitations to his student."
					}
				/>
			</div>
			<p>
				The case was initially classified as a disciplinary matter despite the
				reported misconduct,{" "}
				<a href="https://theguidon.com/2020/03/alumni-come-forward-about-sexual-harassment-cases-against-philosophy-professor/">
					resulting
				</a>{" "}
				in only a “strong reprimand” that allowed Principe to continue teaching
				the following year. Principe’s case, along with{" "}
				<a href="https://theguidon.com/2021/01/philosophy-professor-with-sexual-harassment-allegations-no-longer-connected-to-the-university/">
					other
				</a>{" "}
				cases handled in earlier years, prompted the University to continue
				refining its policies and procedures.
			</p>
			<p>
				While the University seeks to maintain clear and technical processes
				when addressing possible sanctions, Escarez also underscores that each
				step must be anchored on the <strong>“do no harm”</strong> principle,
				ensuring that the safety, dignity, and well-being of those who come
				forward with reports are honored.
			</p>
			<p>
				In developing the University procedures, Escarez notes that the
				Committee on Decorum and Investigation (CODI) incorporated the 2019 Safe
				Spaces Act to broaden protections by including gender-based
				discrimination and harassment, expanding the CODI’s scope beyond the
				earlier Republic Act 7877.
			</p>
			<p>
				Beyond formal campus proceedings, attention also shifted to a broader
				range of complaints emerging across campus life. For instance, concerns
				involving student organization{" "}
				<a href="https://www.facebook.com/ADMUFW/posts/414564330376996">
					decorum
				</a>{" "}
				have repeatedly surfaced through informal channels such as social media{" "}
				<a href="https://www.facebook.com/ADMUFW/posts/414564277043668T">
					platforms
				</a>
				.
			</p>
			<p>
				Apart from informal channels, community-based advocacy efforts, such as{" "}
				<a href="https://timesupateneo.org/">Times Up Ateneo</a> (TUA) and the
				#MeToo{" "}
				<a href="https://www.spot.ph/newsfeatures/culture/75358/ateneo-essay-by-leloy-claudio-a1946-20181005">
					movement
				</a>
				, have also been initiated in response to concerns about sexual
				violence. Since October 2019, TUA has{" "}
				<a href="https://timesupateneo.org/october-2019-protest/">engaged</a>{" "}
				with the University administration by publishing{" "}
				<a href="https://timesupateneo.org/category/statements/">statements</a>{" "}
				regarding institutional responses to sexual violence.
			</p>
			<p>
				Additionally, TUA has provided{" "}
				<a href="https://timesupateneo.org/about/">support</a> systems for
				survivors and advocates while conducting community care activities, such
				as focused group discussions, reading groups, and writing workshops.
			</p>
			<p>
				The pattern of informal complaints suggests barriers within formal
				reporting, including limited awareness of procedures, uncertainty about
				institutional response, and the difficulty of navigating official
				channels. The prevalence of informal complaints underscores these gaps
				in accessibility and confidence in the reporting process.
			</p>
		</main>
	);
}
