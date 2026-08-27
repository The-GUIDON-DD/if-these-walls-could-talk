import * as d3 from "d3";

function TestChart() {
	const width = 800;
	const height = 500;
	const marginTop = 30;
	const marginRight = 0;
	const marginBottom = 30;
	const marginLeft = 0;

	const data = [
		{
			timePeriod: "Oct. 2019 to June 2021",
			party: "complainant",
			gender: "male",
			count: 6,
		},
		{
			timePeriod: "Oct. 2019 to June 2021",
			party: "complainant",
			gender: "female",
			count: 6,
		},
		{
			timePeriod: "Oct. 2019 to June 2021",
			party: "respondent",
			gender: "male",
			count: 8,
		},
		{
			timePeriod: "Oct. 2019 to June 2021",
			party: "respondent",
			gender: "female",
			count: 4,
		},
		{
			timePeriod: "June 2021 to Nov. 2021; Dec. 2021 to May 2022",
			party: "complainant",
			gender: "male",
			count: 4,
		},
		{
			timePeriod: "June 2021 to Nov. 2021; Dec. 2021 to May 2022",
			party: "complainant",
			gender: "female",
			count: 24,
		},
		{
			timePeriod: "June 2021 to Nov. 2021; Dec. 2021 to May 2022",
			party: "respondent",
			gender: "male",
			count: 12,
		},
		{
			timePeriod: "June 2021 to Nov. 2021; Dec. 2021 to May 2022",
			party: "respondent",
			gender: "female",
			count: 13,
		},
		{
			timePeriod: "June 2022 to Nov. 2022",
			party: "complainant",
			gender: "male",
			count: 0,
		},
		{
			timePeriod: "June 2022 to Nov. 2022",
			party: "complainant",
			gender: "female",
			count: 1,
		},
		{
			timePeriod: "June 2022 to Nov. 2022",
			party: "respondent",
			gender: "male",
			count: 1,
		},
		{
			timePeriod: "June 2022 to Nov. 2022",
			party: "respondent",
			gender: "female",
			count: 0,
		},
		{
			timePeriod: "Dec.2022 to May 2023",
			party: "complainant",
			gender: "male",
			count: 1,
		},
		{
			timePeriod: "Dec.2022 to May 2023",
			party: "complainant",
			gender: "female",
			count: 2,
		},
		{
			timePeriod: "Dec.2022 to May 2023",
			party: "respondent",
			gender: "male",
			count: 3,
		},
		{
			timePeriod: "Dec.2022 to May 2023",
			party: "respondent",
			gender: "female",
			count: 0,
		},
	];

	// stacked and grouped bar chart
	// grouped by complainant and respondent
	// stacked by gender

	const fx = d3
		.scaleBand()
		.domain(new Set(Object.keys(data)))
		.rangeRound([marginLeft, width - marginRight])
		.paddingInner(0.1);

	const genderCategories = new Set(["male", "female"]);

	const color = d3
		.scaleOrdinal()
		.domain(genderCategories)
		.range(d3.schemeSpectral[genderCategories.size])
		.unknown("#ccc");

	const y = d3
		.scaleLinear()
		.domain([0, 30])
		.nice()
		.rangeRound([height - marginBottom, marginTop]);

	const formatValue = (x) => "test";

	return (
		<svg
			width={width}
			height={height}
			style={{ marginLeft: marginLeft, marginRight: marginRight }}
		></svg>
	);
}
export default function CodesAndComplaints() {
	return (
		<main id="codes-and-complaints" className="file-main">
			<h1>Codes and complaints</h1>
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
