interface ServiceCardProps {
	title: string;
	description: string;
	index: number;
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
	return (
		<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:from-white/10 hover:via-white/8 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1">
			{/* Gradient overlay on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

			{/* Decorative corner accent */}
			<div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

			{/* Content */}
			<div className="relative z-10">
				{/* Number indicator */}
				<div className="mb-6 flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-sm font-display font-bold text-primary-400 transition-all duration-300 group-hover:bg-primary-500/20 group-hover:text-primary-300">
						{String(index + 1).padStart(2, "0")}
					</div>
					<div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
				</div>

				<h3 className="mb-4 text-2xl font-display font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary-400">
					{title}
				</h3>
				<p className="text-base leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/80">
					{description}
				</p>
			</div>

			{/* Bottom border accent */}
			<div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary-500 to-transparent transition-all duration-500 group-hover:w-full" />
		</div>
	);
}
