import { createTimeline, onScroll, stagger } from "animejs";
import { useEffect } from "react";

function StepContainer({ title, desc }: { title: string; desc: string }) {
	return (
		<article className="grow flex flex-col items-center md: gap-5 md:gap-10 three-step">
			<img src="/files/public-reckonings/Check.svg" alt="Check" />
			<h3 className="text-white font-medium text-3xl text-center  h-10 md:h-20">
				{title}
			</h3>
			<section className="w-full flex items-center justify-center p-10 h-70 rounded-2xl border-white border-3">
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
			autoplay: onScroll({
				target: "#public-reckonings",
				enter: "start top+=50vh",
				leave: "start bottom+=100vh",
			}),
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
				"<+=200",
			)
			.init();
	}, []);
	return (
		<section className="mt-10" id="three-step-framework">
			<h2 className="w-full text-center uppercase text-4xl text-white font-bold">
				Three-Step Framework
			</h2>
			<section className="w-full flex flex-col md:flex-row gap-15 my-25">
				{steps.map(({ title, desc }) => (
					<StepContainer key={title} title={title} desc={desc} />
				))}
			</section>
		</section>
	);
}

function PersonGraphic() {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 314 314"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Person</title>
			<rect width="313.049" height="313.049" fill="#BACBFF" />
			<path
				d="M118.568 140.738C108.044 130.213 102.781 117.561 102.781 102.782C102.781 88.0027 108.044 75.3507 118.568 64.8261C129.093 54.3014 141.745 49.0391 156.524 49.0391C171.304 49.0391 183.956 54.3014 194.48 64.8261C205.005 75.3507 210.267 88.0027 210.267 102.782C210.267 117.561 205.005 130.213 194.48 140.738C183.956 151.263 171.304 156.525 156.524 156.525C141.745 156.525 129.093 151.263 118.568 140.738ZM49.0383 264.011V226.391C49.0383 218.777 51 211.782 54.9232 205.404C58.8464 199.027 64.0505 194.154 70.5355 190.786C84.4191 183.844 98.5266 178.64 112.858 175.174C127.19 171.707 141.745 169.97 156.524 169.961C171.304 169.952 185.859 171.689 200.19 175.174C214.522 178.658 228.629 183.862 242.513 190.786C249.007 194.145 254.216 199.018 258.139 205.404C262.062 211.791 264.019 218.786 264.01 226.391V264.011H49.0383Z"
				fill="url(#paint0_linear_355_2008)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_355_2008"
					x1="156.524"
					y1="49.0391"
					x2="156.524"
					y2="264.011"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#0827C0" />
					<stop offset="1" stopColor="#4968FF" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function PersonCard({ name, desc }: { name: string; desc: string }) {
	return (
		<div className="w-full my-15 p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center text-left bg-[linear-gradient(90deg,#6D91FE_0%,rgba(15,26,79,0.1)_100%)]">
			<div className="w-[40%] md:w-[35%] aspect-square bg-[#BACBFF] border border-[#6D91FE]/30 flex items-center justify-center">
				<PersonGraphic />
			</div>
			<div className="flex flex-col text-left space-y-4 flex-1">
				<h2 className="text-3xl md:text-2xl font-bold tracking-[0.15em] text-white font-['Chivo_Mono'] uppercase">
					{name}
				</h2>
				<p className="text-base md:text-lg leading-relaxed text-white font-sans">
					{desc}
				</p>
			</div>
		</div>
	);
}

export default function PublicReckonings() {
	// move to own constants file
	const P_CLASS = "mb-10";

	return (
		<main
			id="public-reckonings"
			className="w-full flex flex-col items-stretch mb-50"
		>
			<h1 className="text-center mt-30 mb-20">Public Reckonings</h1>
			<p className={P_CLASS}>
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
			<p className={P_CLASS}>
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
			<p className={P_CLASS}>
				Consequently,{" "}
				<a href="https://www.ateneo.edu/central/policies/code-of-decorum">
					Section 37.3
				</a>{" "}
				of the University Code and Rules states that the UODI and the University
				President shall make an effort to reach a decision within 10 days from
				the responses from both parties.
			</p>
			<p className={P_CLASS}>
				Since the establishment of this three-step framework in 2020, the
				University has followed it as standard procedure when addressing{" "}
				<a href="https://www.ateneo.edu/document/2022/07/26/uodi-report-2021-2022-26-july-2022">
					cases
				</a>{" "}
				of sexual harassment.
			</p>
			<PersonCard
				name="JADE PRINCIPE"
				desc={
					"However, no such formal framework was in place during the time of former Philosophy professor Jade Principe, who faced sexual harassment cases in 2016 for breaching professional boundaries, sending inappropriate messages, and extending date invitations to his student."
				}
			/>
			<p className={P_CLASS}>
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
			<p className={P_CLASS}>
				While the University seeks to maintain clear and technical processes
				when addressing possible sanctions, Escarez also underscores that each
				step must be anchored on the <strong>“do no harm”</strong> principle,
				ensuring that the safety, dignity, and well-being of those who come
				forward with reports are honored.
			</p>
			<p className={P_CLASS}>
				In developing the University procedures, Escarez notes that the
				Committee on Decorum and Investigation (CODI) incorporated the 2019 Safe
				Spaces Act to broaden protections by including gender-based
				discrimination and harassment, expanding the CODI’s scope beyond the
				earlier Republic Act 7877.
			</p>
			<p className={P_CLASS}>
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
			<p className={P_CLASS}>
				Apart from informal channels, community-based advocacy efforts, such as
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
			<p className={P_CLASS}>
				Additionally, TUA has provided{" "}
				<a href="https://timesupateneo.org/about/">support</a> systems for
				survivors and advocates while conducting community care activities, such
				as focused group discussions, reading groups, and writing workshops.
			</p>
			<p className={P_CLASS}>
				The pattern of informal complaints suggests barriers within formal
				reporting, including limited awareness of procedures, uncertainty about
				institutional response, and the difficulty of navigating official
				channels. The prevalence of informal complaints underscores these gaps
				in accessibility and confidence in the reporting process.
			</p>
		</main>
	);
}
