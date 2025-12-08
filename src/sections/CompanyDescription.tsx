import MetaBalls from "../components/MetaBalls";
import { SectionTitle } from "../components/SectionTitle";

export function CompanyDescription() {
	return (
		<section
			id="about"
			className="section-padding py-12 md:py-16 mx-auto max-w-7xl"
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}

				<div className="text-center mb-16 md:mb-20">
					<div className="inline-flex items-center gap-3 mb-6">
						<div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
						<span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em]">
							O nas
						</span>
						<div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
					</div>
					<SectionTitle>Wielkie Projety</SectionTitle>
				</div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
					{/* Left - Description */}
					<div className="space-y-6">
						<div className="space-y-4">
							<p className="text-lg md:text-xl text-white/90 leading-relaxed">
								Jesteśmy zespołem strategów, kreatywnych i technologów, którzy
								łączą analizę danych z kreatywnością. Specjalizujemy się w
								tworzeniu kompleksowych rozwiązań marketingowych, które
								przynoszą realne rezultaty biznesowe.
							</p>
							<p className="text-base md:text-lg text-white/75 leading-relaxed">
								Od strategii marki po implementację techniczną — oferujemy pełen
								zakres usług, które pomagają firmom budować silną obecność
								online i osiągać cele biznesowe. Nasze podejście opiera się na
								głębokim zrozumieniu potrzeb klienta i wykorzystaniu najnowszych
								technologii.
							</p>
						</div>
					</div>

					{/* Right - Statistics Grid */}
					<div className=" hidden lg:flex justify-center items-center h-full w-full border border-white/10 rounded-2xl p-4 bg-gradient-to-br from-orange-900/10  to-dark-950/10">
						<MetaBalls
							color="#ed731e"
							cursorBallColor="#ed731e"
							cursorBallSize={2}
							ballCount={9}
							animationSize={30}
							enableMouseInteraction={true}
							enableTransparency={true}
							hoverSmoothness={0.05}
							clumpFactor={1}
							speed={0.2}
						/>
					</div>
				</div>

				{/* Values/Features */}
				<div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 mb-4">
							<svg
								className="w-6 h-6 text-primary-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Strategia oparta na danych</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-display font-semibold text-white mb-2">
							Strategia oparta na danych
						</h3>
						<p className="text-sm text-white/70 leading-relaxed">
							Analizujemy, planujemy i optymalizujemy dla maksymalnych
							rezultatów.
						</p>
					</div>
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 mb-4">
							<svg
								className="w-6 h-6 text-primary-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Nowoczesne technologie</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-display font-semibold text-white mb-2">
							Nowoczesne technologie
						</h3>
						<p className="text-sm text-white/70 leading-relaxed">
							Wykorzystujemy najnowsze narzędzia i rozwiązania technologiczne.
						</p>
					</div>
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 mb-4">
							<svg
								className="w-6 h-6 text-primary-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Zespół ekspertów</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-display font-semibold text-white mb-2">
							Zespół ekspertów
						</h3>
						<p className="text-sm text-white/70 leading-relaxed">
							Doświadczeni specjaliści z różnych dziedzin marketingu.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
