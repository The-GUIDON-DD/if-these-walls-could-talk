// app/components/InteractiveEye.tsx
import { type ReactNode, useState } from "react";

type EyeProps = {
	className?: string;
	style?: React.CSSProperties;
	direction?: "left" | "right";
	width?: string;
	height?: string;
};

export function InteractiveEye({
	className,
	style,
	direction = "left",
	width = "272.52px",
	height = "124.61px",
}: EyeProps): ReactNode {
	const [isHovered, setIsHovered] = useState(false);

	const numericWidth = parseFloat(width) || 272.52;
	const numericHeight = parseFloat(height) || 124.61;

	const restingSize = Math.max(numericWidth, numericHeight) * 0.7; // Larger when resting/off-center
	const hoverSize = Math.max(numericWidth, numericHeight) * 0.55; // Balanced size when centered in the middle

	const restingOffset = `-${numericWidth * 0.15}px`;

	return (
		<div
			className={`absolute overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${className}`}
			style={{
				width,
				height,
				borderRadius: "50% / 50%",
				backgroundColor: "#D1E8FF",
				...style,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`absolute rounded-full transition-all duration-300 ${
					isHovered ? "bg-[#6082F6]" : "bg-[#161B3F]"
				}`}
				style={{
					width: `${isHovered ? hoverSize : restingSize}px`,
					height: `${isHovered ? hoverSize : restingSize}px`,
					...(isHovered
						? {
								left: "50%",
								top: "50%",
								transform: "translate(-50%, -50%)",
							}
						: {
								top: restingOffset,
								...(direction === "left"
									? { right: restingOffset }
									: { left: restingOffset }),
							}),
				}}
			/>
		</div>
	);
}
