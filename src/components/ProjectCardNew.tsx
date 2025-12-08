import type { ReactNode } from "react";

interface ProjectCardNewProps {
	title: string;
	description: string;
	results?: string;
	image?: string;
	icon?: ReactNode;
}

export function ProjectCardNew({
	title,
	description,
	results,
	image,
	icon,
}: ProjectCardNewProps) {
	return (
		<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:from-white/10 hover:via-white/8 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1">
			{/* Blurred background image */}
			{image && (
				<div
					className="absolute inset-0 opacity-10 group-hover:opacity-15 blur-3xl scale-150 transition-opacity duration-500"
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			)}

			{/* Gradient overlay on hover */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

			{/* Decorative corner accent */}
			<div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

			{/* Content */}
			<div className="relative z-10">
				{/* Icon */}
				<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 border border-primary-500/30 transition-all duration-300 group-hover:bg-primary-500/30 group-hover:border-primary-500/50">
					{icon || (
						<svg
							className="h-6 w-6 text-primary-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-label="Projekt"
						>
							<title>Projekt</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							/>
						</svg>
					)}
				</div>

				{/* Title */}
				<h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-white transition-colors duration-300 group-hover:text-primary-400">
					{title}
				</h3>

				{/* Description */}
				<p className="text-base leading-relaxed text-white/70 mb-6 transition-colors duration-300 group-hover:text-white/80">
					{description}
				</p>

				{/* Results */}
				{results && (
					<div className="flex items-center gap-2 text-sm text-primary-400 font-medium pt-4 border-t border-white/10">
						<svg
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Wyniki</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
							/>
						</svg>
						{results}
					</div>
				)}

				{/* Bottom border accent */}
				<div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary-500 to-transparent transition-all duration-500 group-hover:w-full" />
			</div>
		</div>
	);
}
