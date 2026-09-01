import { Link } from "react-router";

export function EmailContent() {
	return (
		<div className="h-full overflow-auto bg-linear-to-b from-[#eef0ff] to-[#c2ccff] px-[9%] py-[7%] font-mono">
			<h1 className="text-center font-sans text-6xl font-black italic leading-none text-[rgba(0,46,255,1)] text-shadow-[1px_3px_0_#7d829f] [-webkit-text-stroke:2px_#eef0ff]">
				Welcome!
			</h1>
			<p className="mt-2 text-center text-lg font-semibold font-sans text-[rgba(22,27,62,0.4)]">
				Click on a user to proceed
			</p>
			<div className="mt-[8%] h-[75%] shadow-[3px_3px_0_#eef0ff,inset_3px_3px_0_0_rgba(0,0,0,0.1)]">
				<Link
					to="/email"
					className="flex w-full items-center gap-[5%] border-l-3 border-t-3 border-[rgba(0,0,0,0.3)] bg-[rgba(217,223,255,1)] p-3 text-left shadow-[0_4px_0_0_rgba(255,255,255,0.5)] hover:bg-[#C3C9E5]"
				>
					<svg
						width="80"
						height="80"
						viewBox="0 0 72 72"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_d_375_540)">
							<mask id="path-1-inside-1_375_540" fill="white">
								<path d="M0 0H75.9551V75.9551H0V0Z" />
							</mask>
							<path
								d="M0 0H75.9551V75.9551H0V0Z"
								fill="url(#paint0_linear_375_540)"
							/>
							<path
								d="M0 0V-3H-3V0H0ZM0 0V3H75.9551V0V-3H0V0ZM0 75.9551H3V0H0H-3V75.9551H0Z"
								fill="#C2CCFF"
								mask="url(#path-1-inside-1_375_540)"
							/>
							<path
								d="M29.5298 34.4639C27.1873 32.1214 26.0161 29.3055 26.0161 26.0161C26.0161 22.7267 27.1873 19.9108 29.5298 17.5684C31.8722 15.2259 34.6881 14.0547 37.9775 14.0547C41.2669 14.0547 44.0829 15.2259 46.4253 17.5684C48.7677 19.9108 49.939 22.7267 49.939 26.0161C49.939 29.3055 48.7677 32.1214 46.4253 34.4639C44.0829 36.8063 41.2669 37.9776 37.9775 37.9776C34.6881 37.9776 31.8722 36.8063 29.5298 34.4639ZM14.0547 61.9005V53.5274C14.0547 51.8329 14.4913 50.2759 15.3644 48.8565C16.2376 47.4371 17.3959 46.3526 18.8392 45.603C21.9293 44.058 25.0691 42.8997 28.2589 42.1282C31.4486 41.3567 34.6881 40.9699 37.9775 40.9679C41.2669 40.9659 44.5065 41.3527 47.6962 42.1282C50.8859 42.9037 54.0258 44.062 57.1158 45.603C58.5612 46.3506 59.7204 47.4351 60.5936 48.8565C61.4668 50.2779 61.9024 51.8349 61.9004 53.5274V61.9005H14.0547Z"
								fill="url(#paint1_linear_375_540)"
							/>
						</g>
						<defs>
							<filter
								id="filter0_d_375_540"
								x="0"
								y="0"
								width="78.9551"
								height="77.9551"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dx="3" dy="2" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow_375_540"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_dropShadow_375_540"
									result="shape"
								/>
							</filter>
							<linearGradient
								id="paint0_linear_375_540"
								x1="37.9775"
								y1="75.9551"
								x2="37.9775"
								y2="0"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#161B3F" />
								<stop offset="1" stop-color="#1E3293" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_375_540"
								x1="37.9775"
								y1="14.0547"
								x2="37.9775"
								y2="61.9005"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#ACBAFF" />
								<stop offset="1" stop-color="#4968FF" />
							</linearGradient>
						</defs>
					</svg>
					<span className="w-full shadow-[3px_2px_0_rgba(0,0,0,0.2),inset_3px_3px_0_0_rgba(255,255,255,1)] px-5 py-3 mr-2 text-3xl font-semibold text-[#161b3f]">
						Guess
					</span>
				</Link>
			</div>
		</div>
	);
}
