import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as d3 from "d3";
import { useEffect, useMemo } from "react";

function PieChart() {
	useEffect(() => {
		const chart = am4core.create("pie-chart", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0;

		chart.data = [
			{
				category: "Major",
				count: 6,
			},
			{
				category: "Moderate",
				count: 2,
			},
			{
				category: "Major",
				count: 1,
			},
		];

		chart.innerRadius = am4core.percent(0);
		chart.depth = 30;

		const series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "count";
		series.dataFields.category = "category";
		series.colors.step = 1;

		return () => {
			chart.dispose();
		};
	}, []);

	return <div id="pie-chart" style={{ width: "100%", height: 500 }} />;
}
const data = [
	{
		timePeriod: "Oct. 2019 to\nJune 2021",
		party: "complainant",
		male: 6,
		female: 6,
	},
	{
		timePeriod: "Oct. 2019 to\nJune 2021",
		party: "respondent",
		male: 8,
		female: 4,
	},
	{
		timePeriod: "June 2021 to Nov. 2021;\nDec. 2021 to May 2022",
		party: "complainant",
		male: 4,
		female: 24,
	},
	{
		timePeriod: "June 2021 to Nov. 2021;\nDec. 2021 to May 2022",
		party: "respondent",
		male: 12,
		female: 13,
	},
	{
		timePeriod: "June 2022 to\nNov. 2022",
		party: "complainant",
		male: 0,
		female: 1,
	},
	{
		timePeriod: "June 2022 to\nNov. 2022",
		party: "respondent",
		male: 1,
		female: 0,
	},
	{
		timePeriod: "Dec.2022 to\nMay 2023",
		party: "complainant",
		male: 1,
		female: 2,
	},
	{
		timePeriod: "Dec.2022 to\nMay 2023",
		party: "respondent",
		male: 3,
		female: 0,
	},
];

function BarGraph() {
	const width = 860;
	const height = 460;
	const margin = { x: 40, top: 10, bottom: 80 };
	const innerW = width - margin.x * 2;
	const innerH = height - margin.top - margin.bottom;
	const genderColors = { male: "#668af5", female: "#cd6cc3" };
	const { series, x0, x1, y } = useMemo(() => {
		const x0 = d3
			.scaleBand()
			.domain(new Set(data.map((d) => d.timePeriod)))
			.range([0, innerW])
			.paddingInner(0.2); // time period scale
		const x1 = d3
			.scaleBand()
			.domain(["complainant", "respondent"])
			.range([0, x0.bandwidth()])
			.padding(0.1); // scale for party
		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.male + d.female)])
			.nice()
			.range([innerH, 0]); // y-scale for counts

		const series = d3.stack().keys(["male", "female"])(data);
		return { series, x0, x1, y };
	}, [innerH, innerW]);

	const yTicks = y.ticks(6);

	return (
		<div
			style={{ minWidth: width, minHeight: height }}
			className="flex items-center justify-center font-mono"
		>
			<svg width={width} height={height}>
				{/* tick lines */}
				<g transform={`translate(${margin.x},${margin.top})`}>
					{yTicks.map((t) => (
						<g key={t}>
							<line x1={0} x2={innerW} y1={y(t)} y2={y(t)} stroke="#1e293b" />
							<text
								x={-8}
								y={y(t)}
								dy="0.32em"
								textAnchor="end"
								fontSize={10}
								fill="#94a3b8"
							>
								{t}
							</text>
						</g>
					))}
					{/* stacked bars per gender */}
					{series.map((layer) => (
						<g key={layer.key} fill={genderColors[layer.key]}>
							{layer.map((d, i) => (
								<rect
									key={i}
									x={x0(d.data.timePeriod) + x1(d.data.party)}
									y={y(d[1])}
									height={y(d[0]) - y(d[1])}
									width={x1.bandwidth()}
								/>
							))}
						</g>
					))}
				</g>
				{data.map((d) =>
					["complainant", "respondent"].map((party) => (
						<text
							key={`${d.timePeriod}-${party}`}
							x={x0(d.timePeriod) + x1(party) + x1.bandwidth() / 2 + margin.x}
							y={innerH + 24}
							textAnchor="middle"
							fontSize={10}
							fontWeight="semibold"
							fill="#ffffff"
						>
							{`${party.toUpperCase()}`}
						</text>
					)),
				)}
				{data.map((d) => (
					<text
						key={d.timePeriod}
						x={x0(d.timePeriod) + x0.bandwidth() / 2 + margin.x}
						y={innerH + 50}
						textAnchor="middle"
						fontSize={10}
						fill="#c2ccff"
					>
						{d.timePeriod.split("\n").map((line, i) => (
							<tspan
								key={i}
								x={x0(d.timePeriod) + x0.bandwidth() / 2 + margin.x}
								dy={12 * i}
							>
								{line}
							</tspan>
						))}
					</text>
				))}
			</svg>
		</div>
	);
}

export default function CodesAndComplaints() {
	am4core.useTheme(am4themes_animated);
	return (
		<main id="codes-and-complaints" className="file-main">
			<h1>Codes and complaints</h1>
			<PieChart />
			<p>
				Despite existing barriers in filing sexual harassment reports, Escarez
				assures that the Ateneo commits itself to addressing both{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf">
					formal
				</a>{" "}
				and{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf">
					informal
				</a>{" "}
				complaints with due process. She explains that reports, regardless of
				their nature, undergo the same stages of investigation through the
				Code’s three-step{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf">
					framework
				</a>
				.
			</p>
			<p>
				These complaints are publicized in compliance with{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-01/2020-08-28-ADMU-Code-Decorum-Administrative-Rules-v1.0.pdf">
					Section 25 of the Code of Decorum
				</a>
				, which mandates the UODI to submit and publish semi-annual reports
				outlining a summary of complaints received and processed by their
				office. It includes the general number of formal and informal complaints
				received, alongside the identified degrees of minor, moderate, or major
				infractions.
			</p>
			<p>
				In 2021, the{" "}
				<a href="https://www.ateneo.edu/document/2021/10/01/uodi-semi-annual-report-2021-30-sept-2021#:~:text=In%20compliance%20with%20section%2025.3,Director%2C%20UODI">
					first
				</a>{" "}
				UODI report was released with the inclusion of cases from October 2019
				to June 2021. It uncovered a total of 12 cases, all of which were
				classified as major infractions. Notably, the report showed an equal
				number of complaints filed by male and female parties at the time.
			</p>
			<p>
				The{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2022-08/UODI%20Report%202021-2022%20FINAL.pdf">
					second
				</a>{" "}
				UODI report was later published in July 2022. Under the UODI, 11
				complaints were filed against University employees, while the School
				Office of Decorum and Investigation processed 21 cases against Atenean
				students. Both divisions garnered more female complainants and male
				respondents compared to the preceding report.
			</p>
			<p>
				The following reports from{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2023-02/UODI%20Report%202022%20June%20to%20November.pdf">
					June to November 2022
				</a>{" "}
				and{" "}
				<a href="https://www.ateneo.edu/sites/default/files/2023-08/UODI%20Report%20December%202022%20to%20May%202023%20FINAL.pdf">
					December 2022 to May 2023
				</a>{" "}
				presented a decline in formal complaints, thus introducing statistical
				data on informal complaints and the degrees of infraction that they
				reached. A total of 31 formal and informal cases were outlined across
				both reports.
			</p>
			{/* graph section */}
			<section className="max-w-full overflow-x-auto">
				<section className="w-screen h-60 bg-linear-to-b from-[rgb(97,126,194)] to-[transparent] mb-15 flex flex-col items-center pt-15">
					<h2 className="uppercase text-4xl tracking-wide font-semibold font-mono text-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
						Formal University Codi Cases
					</h2>
					<section className="legend flex gap-6">
						<section className="legend-item flex gap-3 mt-5 items-center">
							<div className="aspect-square w-6 inset-shadow-[-4px_-4px_0px_0px_rgb(255,255,255)] border-l-3 border-t-3 border-[rgba(30,50,147,0.5)] bg-[rgb(156,177,234)]" />
							<span className="text-lg font-mono">Male</span>
						</section>
						<section className="legend-item flex gap-3 mt-5 items-center">
							<div className="aspect-square w-6 inset-shadow-[-4px_-4px_0px_0px_rgb(255,255,255)] border-l-3 border-t-3 border-[rgba(30,50,147,0.5)] bg-[#de65c7]" />
							<span className="text-lg font-mono">Female</span>
						</section>
					</section>
				</section>
				<BarGraph />
			</section>
			<p>
				Notably, the reports also include recommendations for relevant parties,
				such as University employees and students, to actively prevent the
				recurrence of sexual harassment incidents.
			</p>
			<p>
				Notably, the reports also include recommendations for relevant parties,
				such as University employees and students, to actively prevent the
				recurrence of sexual harassment incidents.
			</p>
			<p>
				Nevertheless, initiatives like the semi-annual report can only prove
				effective if they are practiced with consistency. As of writing, the
				UODI has only released a total of four reports and has yet to publish a
				new report since 2023.
			</p>
			<p>
				Across all complaints, the most common plans of action include training
				and onboarding sessions for employees on the{" "}
				<a href="https://www.ateneo.edu/central/policies/code-of-decorum">
					Code and Rules
				</a>{" "}
				and{" "}
				<a href="https://www.ateneo.edu/central/hr/policies/code-discipline">
					Code of Discipline
				</a>
				. Meanwhile, some reports have addressed cultural aspects—such as that
				of{" "}
				<a href="https://carillonregina.com/whats-wrong-with-locker-room-culture/">
					locker room culture
				</a>
				—through{" "}
				<a href="https://www.ateneo.edu/college/co-curriculum">
					formation programs
				</a>{" "}
				that encourage students to report inappropriate behavior.
			</p>
			<p>
				Ofreneo, moreover, shares that while most cases received by the UGH
				involve women experiencing harassment, there are also some complaints
				involving men and members of the LGBTQIA+ community.
			</p>
			<p>
				She also reflects on a recent increase in complaints stemming from
				digital forms of harassment, especially on virtual and anonymized
				platforms. “Students will receive threats that their [private] photos
				and videos will be shared to the public. We can’t identify who is doing
				that harassment. We can’t see if they are within the University,” she
				shares.
			</p>
			<p>
				With these observations, incidents of harassment continuously evolve,
				pervading on- and off-campus. However, the lack of continuity on
				initiatives like UODI’s semi-annual reports opens nuanced discussions on
				maintaining transparency, as well as on properly cultivating trust
				within the Ateneo community. Beyond quantitative reports, the University
				must also be reminded of the real and complex experiences of survivors,
				all of whom must navigate through the intricacies of coping and moving
				forward.
			</p>
		</main>
	);
}
