import { Button } from "./Button";
import ColorBends from "./ColorBends";
import GlassSurface from "./GlassSurface";
import StarBorder from "./StarBorder";

export function Hero() {
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	const titleText = "Tworzymy marki które poruszają";
	const words = titleText.split(" ");

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			{/* Base gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />

			{/* ColorBends background */}
			<ColorBends
				colors={["#ed731e", "#f19143", "#ffffff"]}
				rotation={10}
				speed={0.1}
				scale={0.4}
				frequency={2}
				warpStrength={1}
				mouseInfluence={1}
				parallax={0.2}
				noise={1}
				transparent
			/>

			<div className="relative z-10 section-padding mx-auto max-w-7xl text-center">
				<h1 className="relative text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-balance animate-fade-in-up">
					<span className="relative z-10 inline-block">
						{words.map((word, index) => {
							const isEven = index % 2 === 0;
							const wordKey = `hero-${word}-${index}`;

							return (
								<span key={wordKey}>
									<span
										className={`inline-block transition-all duration-300 ${
											isEven ? "text-white" : "text-primary-400"
										}`}
										style={{
											textShadow: isEven
												? "0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3)"
												: "0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(237,115,30,0.4)",
											filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.8))",
										}}
									>
										{word}
									</span>
									{index < words.length - 1 && " "}
									{word === "marki" && <br />}
								</span>
							);
						})}
					</span>
				</h1>

				<p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto text-balance animate-fade-in-up-delay font-medium">
					Strategia, kreatywność i technologia w jednym miejscu.
					<br />
					Budujemy kampanie, które zmieniają biznes.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
					<Button
						onClick={() => scrollToSection("contact")}
						className="text-sm w-52"
					>
						Rozpocznijmy projekt
					</Button>
					<Button
						variant="ghost"
						onClick={() => scrollToSection("work")}
						className="text-sm w-52"
					>
						Zobacz portfolio
					</Button>
				</div>
			</div>
		</section>
	);
}
