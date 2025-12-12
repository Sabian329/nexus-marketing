import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { services } from "../data/services";

export function SitemapPage() {
	return (
		<div className="min-h-screen bg-dark-950 text-white">
			<Navigation />
			<div className="pt-20">
				<section className="section-padding py-16 md:py-24">
					<div className="mx-auto max-w-4xl">
						<h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-center">
							Mapa strony
						</h1>
						<p className="text-xl text-white/70 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
							Znajdź wszystkie strony i usługi dostępne na naszej stronie
						</p>

						<div className="space-y-12">
							{/* Main Pages */}
							<div>
								<h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-white/10 pb-3">
									Główne strony
								</h2>
								<ul className="space-y-3">
									<li>
										<Link
											to="/"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											Strona główna
										</Link>
									</li>
									<li>
										<Link
											to="/#services"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											Usługi
										</Link>
									</li>
									<li>
										<Link
											to="/#work"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											Portfolio
										</Link>
									</li>
									<li>
										<Link
											to="/#about"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											O nas
										</Link>
									</li>
									<li>
										<Link
											to="/#contact"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											Kontakt
										</Link>
									</li>
								</ul>
							</div>

							{/* Services */}
							<div>
								<h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-white/10 pb-3">
									Usługi
								</h2>
								<ul className="space-y-3">
									{services.map((service) => (
										<li key={service.id}>
											<Link
												to={`/services/${service.id}`}
												className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
											>
												<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
												{service.title}
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* XML Sitemap */}
							<div>
								<h2 className="text-2xl font-display font-bold mb-6 text-white border-b border-white/10 pb-3">
									XML Sitemap
								</h2>
								<ul className="space-y-3">
									<li>
										<a
											href="/sitemap.xml"
											target="_blank"
											rel="noopener noreferrer"
											className="text-white/80 hover:text-primary-400 transition-colors flex items-center gap-2 group"
										>
											<span className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											sitemap.xml
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<title>Otwórz w nowej karcie</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
