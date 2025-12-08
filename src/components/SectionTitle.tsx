import type { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	subtitle?: string;
	className?: string;
}

export function SectionTitle({
	children,
	subtitle,
	className = "",
}: SectionTitleProps) {
	// Split by spaces and handle line breaks
	const words = typeof children === "string" ? children.split(" ") : [children];
	let wordIndex = 0;

	return (
		<div className={`text-center mb-20 ${className}`}>
			<h2 className="relative inline-block text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
				{/* Multiple glow layers for depth - reduced intensity */}
				<span
					className="absolute inset-0 blur-3xl opacity-15"
					style={{
						background:
							"radial-gradient(circle at 50% 50%, rgba(237,115,30,0.4) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)",
					}}
				/>
				<span
					className="absolute inset-0 blur-2xl opacity-10"
					style={{
						background:
							"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, rgba(237,115,30,0.2) 50%, transparent 80%)",
					}}
				/>
				<span className="relative z-10">
					{words.map((word, index, array) => {
						const isEven = wordIndex % 2 === 0;
						const wordKey = `${word}-${wordIndex}`;
						wordIndex++;

						return (
							<span key={wordKey}>
								<span
									className={`inline-block transition-all duration-300 ${
										isEven
											? "text-gradient bg-gradient-to-r from-white via-white/90 to-white/70"
											: "text-gradient-orange bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"
									} bg-clip-text text-transparent`}
									style={{
										filter: isEven
											? "drop-shadow(0 0 15px rgba(255,255,255,0.25)) drop-shadow(0 0 30px rgba(255,255,255,0.1))"
											: "drop-shadow(0 0 15px rgba(237,115,30,0.3)) drop-shadow(0 0 30px rgba(237,115,30,0.15))",
										textShadow: isEven
											? "0 0 20px rgba(255,255,255,0.2)"
											: "0 0 20px rgba(237,115,30,0.25)",
									}}
								>
									{word}
								</span>
								{index < array.length - 1 && " "}
							</span>
						);
					})}
				</span>
			</h2>
			{subtitle && (
				<p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
					{subtitle}
				</p>
			)}
		</div>
	);
}
