import { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "../components/Button";
import { services } from "../data/services";

const INITIAL_DISPLAY_COUNT = 6;

export function ServicesSection() {
	const [showAll, setShowAll] = useState(false);
	const displayedServices = showAll
		? services
		: services.slice(0, INITIAL_DISPLAY_COUNT);
	const hasMore = services.length > INITIAL_DISPLAY_COUNT;

	return (
		<section
			id="services"
			className="relative section-padding py-12 md:py-16 mx-auto max-w-7xl"
		>
			{/* Background blur effect */}
			<div className="absolute inset-0 bg-dark-950/30 backdrop-blur-[2px] pointer-events-none" />
			<div className="relative z-10">
				<SectionTitle subtitle="Strony www i kampanie reklamowe które generują leady i sprzedaż">
				Co Robimy
			</SectionTitle>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
					{displayedServices.map((service, index) => (
						<ServiceCard
							key={service.id}
							id={service.id}
							title={service.title}
							description={service.description}
							index={index}
						/>
					))}
				</div>
				{hasMore && (
					<div className="flex justify-center mt-8">
						<Button variant="ghost" onClick={() => setShowAll(!showAll)}>
							{showAll ? "Pokaż mniej" : "Pokaż więcej"}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
