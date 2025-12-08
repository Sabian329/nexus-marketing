interface StatCardProps {
	number: string;
	label: string;
}

export function StatCard({ number, label }: StatCardProps) {
	return (
		<div className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300">
			<div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 text-gradient-orange">
				{number}
			</div>
			<div className="text-sm md:text-base text-white/70 font-medium">
				{label}
			</div>
		</div>
	);
}
