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

export default function PersonCard({
	name,
	desc,
}: {
	name: string;
	desc: string;
}) {
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
