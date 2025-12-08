import { ProjectCardNew } from "../components/ProjectCardNew";
import { projects } from "../data/projects";
import { SectionTitle } from "../components/SectionTitle";
import Particles from "../components/Particles";

export function WorkSection() {
	return (
		<section
			id="work"
			className="relative section-padding py-12 md:py-16 mx-auto max-w-7xl"
		>
			<div className="absolute w-full h-full">
				<Particles
					particleColors={["#ffffff", "#ffffff"]}
					particleCount={500}
					particleSpread={10}
					speed={0.05}
					particleBaseSize={40}
					moveParticlesOnHover={true}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>
			<SectionTitle subtitle="Zrealizowane projekty, które przyniosły wymierne rezultaty">
				Portfolio
			</SectionTitle>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
				{projects.map((project) => (
					<ProjectCardNew
						key={project.id}
						title={project.title}
						description={project.description}
						results={project.results}
						image={project.image}
					/>
				))}
			</div>

			{/* Additional Services CTA */}
			<div className="max-w-7xl mx-auto">
				<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 md:p-12">
					{/* Background gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent" />

					<div className="relative z-10 text-center">
						<h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
							Potrzebujesz więcej?
						</h3>
						<p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
							Oferujemy również kompleksowe audyty marketingowe, optymalizację
							istniejących kampanii, strategię contentową oraz transformację
							cyfrową marki. Pomagamy trafić do Twojej grupy docelowej i
							przygotowujemy profesjonalne materiały promocyjne.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
								Audyty marketingowe
							</div>
							<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
								Optymalizacja kampanii
							</div>
							<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
								Strategia contentowa
							</div>
							<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
								Transformacja cyfrowa
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
