export function PrismBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			<div
				className="absolute inset-0 opacity-30"
				style={{
					backgroundImage: `
						linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
						linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
					`,
					backgroundSize: "50px 50px",
					animation: "gridMove 20s linear infinite",
				}}
			/>
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `
						repeating-linear-gradient(
							0deg,
							transparent,
							transparent 2px,
							rgba(237, 115, 30, 0.03) 2px,
							rgba(237, 115, 30, 0.03) 4px
						),
						repeating-linear-gradient(
							90deg,
							transparent,
							transparent 2px,
							rgba(237, 115, 30, 0.03) 2px,
							rgba(237, 115, 30, 0.03) 4px
						),
						repeating-linear-gradient(
							45deg,
							transparent,
							transparent 2px,
							rgba(255, 255, 255, 0.03) 2px,
							rgba(255, 255, 255, 0.03) 4px
						),
						repeating-linear-gradient(
							-45deg,
							transparent,
							transparent 2px,
							rgba(255, 255, 255, 0.03) 2px,
							rgba(255, 255, 255, 0.03) 4px
						)
					`,
					backgroundSize: "100px 100px",
					animation: "prismRotate 30s linear infinite",
					transformOrigin: "center center",
				}}
			/>
			<div
				className="absolute inset-0 opacity-10"
				style={{
					background: `
						radial-gradient(circle at 20% 50%, rgba(237, 115, 30, 0.1) 0%, transparent 50%),
						radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
						radial-gradient(circle at 40% 20%, rgba(237, 115, 30, 0.08) 0%, transparent 50%)
					`,
					animation: "prismPulse 15s ease-in-out infinite",
				}}
			/>
		</div>
	);
}
