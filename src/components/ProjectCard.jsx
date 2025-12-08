export function ProjectCard({ title, category, description, results, order, image }) {
	return (
		<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 md:p-12 shadow-xl">
			{/* Static background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-primary-500/0 to-transparent" />

			{/* Static decorative corner elements */}
			<div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-primary-500/15 to-transparent blur-3xl" />
			<div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-white/5 to-transparent blur-2xl" />

			<div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
				{/* Image section */}
				<div className={`${order % 2 === 1 ? "md:order-2" : ""}`}>
					<div className="relative aspect-video rounded-2xl border border-white/10 overflow-hidden bg-dark-800 shadow-2xl">
						{image ? (
							<>
								<img
									src={image}
									alt={title}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
								{/* Static image overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-dark-950/10 to-transparent" />
							</>
						) : (
							<div className="w-full h-full bg-gradient-to-br from-primary-500/20 via-primary-500/10 to-dark-800 flex items-center justify-center">
								<div className="text-6xl font-display font-bold text-white/10">
									{String(order + 1).padStart(2, "0")}
								</div>
							</div>
						)}
						{/* Project number badge */}
						<div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-sm font-display font-bold text-white border border-white/20 shadow-lg">
							{String(order + 1).padStart(2, "0")}
						</div>
						{/* Category tag on image */}
						<div className="absolute top-4 right-4 px-3 py-1.5 bg-primary-500/20 backdrop-blur-sm rounded-full border border-primary-500/30">
							<span className="text-xs font-medium text-primary-300 uppercase tracking-wider">
								{category.split(" ")[0]}
							</span>
						</div>
					</div>
				</div>

				{/* Content section */}
				<div className={`${order % 2 === 1 ? "md:order-1" : ""}`}>
					{/* Category badge */}
					<div className="inline-flex items-center gap-3 mb-6">
						<div className="h-px w-12 bg-gradient-to-r from-primary-500 via-primary-400 to-transparent" />
						<span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
							{category}
						</span>
					</div>

					<h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight text-white">
						{title}
					</h3>

					<p className="text-lg md:text-xl text-white/75 mb-8 leading-relaxed">{description}</p>

					{/* Results section - more detailed */}
					<div className="space-y-4">
						<div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-500/10 to-primary-500/5 rounded-xl border border-primary-500/20 backdrop-blur-sm">
							<div className="flex-shrink-0 mt-0.5">
								<svg
									className="h-5 w-5 text-primary-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Wyniki"
								>
									<title>Wyniki</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<div>
								<div className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-1">
									Wyniki projektu
								</div>
								<div className="text-base font-medium text-white">{results}</div>
							</div>
						</div>

						{/* Additional info badges */}
						<div className="flex flex-wrap gap-2">
							<div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs text-white/70">
								Case Study
							</div>
							<div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs text-white/70">
								{order === 0 ? "2024" : order === 1 ? "2023" : "2022"}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Static bottom accent line */}
			<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-primary-500 via-primary-400 to-transparent opacity-30" />
		</div>
	);
}
