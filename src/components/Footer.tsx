import { Link, useLocation } from "react-router-dom";

const footerLinks = [
	{ id: "services", label: "Usługi" },
	{ id: "work", label: "Portfolio" },
	{ id: "about", label: "O nas" },
	{ id: "contact", label: "Kontakt" },
];

const footerServices = [
	"Strony internetowe",
	"E-commerce",
	"Social Media",
	"Google Ads",
	"Facebook Ads",
	"SEO",
];

export function Footer() {
	const location = useLocation();

	const scrollToSection = (id: string) => {
		if (location.pathname !== "/") {
			// If not on home page, navigate first
			window.location.href = `/#${id}`;
		} else {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="section-padding py-16 md:py-20 border-t border-white/10 mx-auto max-w-7xl">
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
				{/* Brand */}
				<div className="space-y-4">
					<Link
						to="/"
						className="text-2xl font-display font-semibold mb-4 block hover:opacity-80 transition-opacity"
					>
						AdFuse
					</Link>
					<p className="text-sm text-white/60 leading-relaxed">
						Profesjonalne usługi marketingowe dla nowoczesnych marek. Budujemy
						kampanie, które przynoszą rezultaty.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
						Nawigacja
					</h3>
					<nav className="flex flex-col gap-3">
						{footerLinks.map((link) => (
							<button
								key={link.id}
								type="button"
								onClick={() => scrollToSection(link.id)}
								className="text-sm text-white/60 hover:text-primary-400 transition-colors text-left"
							>
								{link.label}
							</button>
						))}
					</nav>
				</div>

				{/* Services */}
				<div>
					<h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
						Usługi
					</h3>
					<ul className="flex flex-col gap-3">
						{footerServices.map((service) => (
							<li key={service}>
								<span className="text-sm text-white/60">{service}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
						Kontakt
					</h3>
					<div className="flex flex-col gap-3">
						<a
							href="mailto:adfusegroup@gmail.com"
							className="text-sm text-white/60 hover:text-primary-400 transition-colors"
						>
							adfusegroup@gmail.com
						</a>
						<a
							href="tel:+48662921107"
							className="text-sm text-white/60 hover:text-primary-400 transition-colors"
						>
							+48 662 921 107
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="text-sm text-white/40">
					© {new Date().getFullYear()} AdFuse Marketing. Wszystkie prawa
					zastrzeżone.
				</div>
				<div className="flex gap-6 text-sm text-white/40">
					<Link to="/sitemap" className="hover:text-white/60 transition-colors">
						Mapa strony
					</Link>
					<button
						type="button"
						className="hover:text-white/60 transition-colors"
					>
						Polityka prywatności
					</button>
					<button
						type="button"
						className="hover:text-white/60 transition-colors"
					>
						Regulamin
					</button>
				</div>
			</div>
		</footer>
	);
}
