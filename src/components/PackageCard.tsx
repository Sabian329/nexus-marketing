import { Button } from "./Button";

interface PackageCardProps {
	name: string;
	price: string;
	features: string[];
	popular?: boolean;
}

export function PackageCard({
	name,
	price,
	features,
	popular = false,
}: PackageCardProps) {
	return (
		<div
			className={`group relative overflow-hidden rounded-2xl border ${
				popular
					? "border-primary-500/50 bg-gradient-to-br from-primary-500/10 via-white/5 to-transparent"
					: "border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent"
			} backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1`}
		>
			{/* Popular badge */}
			{popular && (
				<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold uppercase tracking-wider">
					Popularne
				</div>
			)}

			{/* Gradient overlay on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

			{/* Content */}
			<div className="relative z-10">
				<h3 className="text-2xl font-display font-bold text-white mb-2">
					{name}
				</h3>
				<div className="mb-6">
					<span className="text-4xl font-display font-bold text-primary-400">
						{price}
					</span>
					<span className="text-white/60 text-sm ml-2">/miesiąc</span>
				</div>

				{/* Features list */}
				<ul className="space-y-3 mb-8">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start gap-3">
							<svg
								className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Check</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span className="text-white/80 text-sm leading-relaxed">
								{feature}
							</span>
						</li>
					))}
				</ul>

				<Button variant={popular ? "primary" : "ghost"} className="w-full">
					Wybierz pakiet
				</Button>
			</div>

			{/* Bottom border accent */}
			<div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary-500 to-transparent transition-all duration-500 group-hover:w-full" />
		</div>
	);
}
