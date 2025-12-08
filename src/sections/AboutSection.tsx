import { SectionTitle } from "../components/SectionTitle";

export function AboutSection() {
	return (
		<section
			id="about"
			className="section-padding py-12 md:py-16 mx-auto max-w-7xl"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 md:mb-20">
					<SectionTitle>Wierzymy w marketing który ma znaczenie</SectionTitle>
					<p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 text-balance max-w-3xl mx-auto">
						Jesteśmy zespołem strategów, kreatywnych i analityków, którzy łączą
						dane z emocjami. Tworzymy kampanie, które nie tylko wyglądają
						dobrze, ale przede wszystkim przynoszą realne rezultaty biznesowe.
					</p>
				</div>

				{/* Mission Statement */}
				<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 md:p-12">
					<div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
					<div className="relative z-10">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-px w-12 bg-gradient-to-r from-primary-500 to-transparent" />
							<span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em]">
								Nasza misja
							</span>
						</div>
						<h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
							Budujemy marki, które inspirują i przynoszą rezultaty
						</h3>
						<p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
							Wierzymy, że skuteczny marketing to połączenie głębokiej analizy
							danych, kreatywnego myślenia i strategicznego podejścia. Każdy
							projekt traktujemy indywidualnie, dostosowując rozwiązania do
							unikalnych potrzeb naszych klientów.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
