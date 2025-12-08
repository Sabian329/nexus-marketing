import { SectionTitle } from "../components/SectionTitle";
import MagicBento from "../components/MagicBento";

export function BentoSection() {
	return (
		<section className="section-padding py-12 md:py-16 mx-auto max-w-7xl">
			<div className="max-w-7xl mx-auto">
				<SectionTitle subtitle="Nasze kluczowe obszary działania">
					Co oferujemy
				</SectionTitle>
				<div className="flex justify-center">
					<MagicBento
						textAutoHide={true}
						enableStars={true}
						enableSpotlight={true}
						enableBorderGlow={true}
						enableTilt={true}
						enableMagnetism={true}
						clickEffect={true}
						spotlightRadius={300}
						particleCount={12}
						glowColor="237, 115, 30"
					/>
				</div>
			</div>
		</section>
	);
}
