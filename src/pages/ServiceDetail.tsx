import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import Particles from "../components/Particles";

export function ServiceDetail() {
	const { serviceName } = useParams<{ serviceName: string }>();
	const service = services.find((s) => s.id === serviceName);

	if (!service) {
		return (
			<div className="min-h-screen bg-dark-950 text-white">
				<Navigation />
				<div className="section-padding py-32 mx-auto max-w-7xl text-center">
					<h1 className="text-4xl font-display font-bold mb-4">
						Usługa nie znaleziona
					</h1>
					<p className="text-white/60 mb-8">
						Przepraszamy, ale ta usługa nie istnieje.
					</p>
					<Link to="/">
						<Button>Wróć do strony głównej</Button>
					</Link>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-dark-950 text-white relative">
			<Navigation />
			<div className="absolute inset-0 w-full h-full pointer-events-none">
				<Particles
					particleColors={["#ffffff", "#ffffff"]}
					particleCount={500}
					particleSpread={10}
					speed={0.05}
					particleBaseSize={40}
					moveParticlesOnHover={true}
					alphaParticles={false}
					disableRotation={false}
					className=""
				/>
			</div>
			<div className=" relative z-10">
				{/* Hero Section */}
				<section className="section-padding py-16 md:py-24">
					<div className="mx-auto max-w-6xl">
						<div className="ml-8">
							<Link
								to="/"
								className="inline-flex hover:cursor-pointer items-center gap-2 text-sm text-white/60 hover:text-primary-400 transition-colors mb-8"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="Strzałka wstecz"
								>
									<title>Strzałka wstecz</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</svg>
								Powrót
							</Link>
						</div>
						<div className="text-center mb-16">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-balance">
								{service.title}
							</h1>
							{service.subtitle && (
								<p className="text-xl md:text-2xl text-primary-400 font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
									{service.subtitle}
								</p>
							)}
							<p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
								{service.description}
							</p>
						</div>

						{/* Images Gallery */}
						{service.images && service.images.length > 0 && (
							<div
								className={`grid gap-6 mb-16 xl:mx-32 ${
									service.images.length === 1
										? "grid-cols-1 max-w-4xl mx-auto"
										: "grid-cols-1 md:grid-cols-2"
								}`}
							>
								{service.images.map((image) => (
									<div
										key={image}
										className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-dark-800 shadow-2xl group"
									>
										<img
											src={image}
											alt={`${service.title} - ilustracja usługi`}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
											loading="lazy"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 via-dark-950/10 to-transparent" />
									</div>
								))}
							</div>
						)}
					</div>
				</section>

				{/* Detailed Description Section */}
				<section className="section-padding pb-16">
					<div className="mx-auto max-w-4xl">
						{/* Intro */}
						{service.intro && service.intro.length > 0 && (
							<div className="space-y-6 mb-16">
								{service.intro.map((paragraph, index) => (
									<p
										key={`intro-${index}`}
										className="text-lg md:text-xl text-white/90 leading-relaxed"
									>
										{paragraph}
									</p>
								))}
							</div>
						)}

						{/* Sections Grid */}
						<div className="space-y-16">
							{/* Dla kogo */}
							{service.forWho && service.forWho.length > 0 && (
								<div>
									<div className="flex items-center gap-3 mb-6">
										<h2 className="text-2xl md:text-3xl font-display font-bold text-white">
											Dla kogo?
										</h2>
									</div>
									<ul className="space-y-4">
										{service.forWho.map((item, index) => (
											<li
												key={`forWho-${index}`}
												className="flex items-start gap-4 pl-4 border-primary-500/30"
											>
												<span className="text-primary-400 mt-1.5 text-xl leading-none">
													•
												</span>
												<span className="text-base md:text-lg text-white/80 leading-relaxed flex-1">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Co robimy */}
							{service.whatWeDo && service.whatWeDo.length > 0 && (
								<div>
									<div className="flex items-center gap-3 mb-6">
										<h2 className="text-2xl md:text-3xl font-display font-bold text-white">
											Co robimy?
										</h2>
									</div>
									<ul className="space-y-4">
										{service.whatWeDo.map((item, index) => (
											<li
												key={`whatWeDo-${index}`}
												className="flex items-start gap-4 pl-4  border-primary-500/30"
											>
												<span className="text-primary-400 mt-1.5 text-xl leading-none">
													•
												</span>
												<span className="text-base md:text-lg text-white/80 leading-relaxed flex-1">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Jak pracujemy */}
							{service.howWeWork && service.howWeWork.length > 0 && (
								<div>
									<div className="flex items-center gap-3 mb-6">
										<h2 className="text-2xl md:text-3xl font-display font-bold text-white">
											Jak pracujemy?
										</h2>
									</div>
									<ul className="space-y-4">
										{service.howWeWork.map((item, index) => (
											<li
												key={`howWeWork-${index}`}
												className="flex items-start gap-4 pl-4  border-primary-500/30"
											>
												<span className="text-primary-400 mt-1.5 text-xl leading-none">
													•
												</span>
												<span className="text-base md:text-lg text-white/80 leading-relaxed flex-1">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Co dostajesz */}
							{service.whatYouGet && service.whatYouGet.length > 0 && (
								<div>
									<div className="flex items-center gap-3 mb-6">
										<h2 className="text-2xl md:text-3xl font-display font-bold text-white">
											Co dostajesz?
										</h2>
									</div>
									<ul className="space-y-4">
										{service.whatYouGet.map((item, index) => (
											<li
												key={`whatYouGet-${index}`}
												className="flex items-start gap-4 pl-4 border-primary-500/30"
											>
												<span className="text-primary-400 mt-1.5 text-xl leading-none">
													•
												</span>
												<span className="text-base md:text-lg text-white/80 leading-relaxed flex-1">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="section-padding py-16">
					<div className="mx-auto max-w-4xl">
						<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 md:p-12 text-center">
							<h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
								Zainteresowany tą usługą?
							</h2>
							<p className="text-white/70 mb-8 text-lg">
								Skontaktuj się z nami, aby omówić szczegóły współpracy
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link to="/#contact">
									<Button>Skontaktuj się</Button>
								</Link>
								<Link to="/#services">
									<Button variant="ghost">Zobacz inne usługi</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
