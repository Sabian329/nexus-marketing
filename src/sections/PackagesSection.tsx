import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";

const tiers = [
	{
		name: "Basic",
		id: "tier-basic",
		description: "Wszystko czego potrzebujesz, aby zacząć.",
		price: "2 500",
		featured: false,
	},
	{
		name: "Standard",
		id: "tier-standard",
		description: "Większa elastyczność i możliwości.",
		price: "5 000",
		featured: true,
	},
	{
		name: "Pro",
		id: "tier-pro",
		description: "Pełny pakiet dla rozwijającego się biznesu.",
		price: "8 500",
		featured: false,
	},
];

const sections = [
	{
		name: "Social Media",
		features: [
			{
				name: "Social Media Management",
				tiers: { Basic: true, Standard: true, Pro: true },
			},
			{
				name: "Liczba postów/miesiąc",
				tiers: { Basic: "5", Standard: "10", Pro: "15" },
			},
			{
				name: "Planowanie treści",
				tiers: { Basic: true, Standard: true, Pro: true },
			},
			{
				name: "Grafiki reklamowe",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
		],
	},
	{
		name: "Strona internetowa",
		features: [
			{
				name: "Podstawowa strona",
				tiers: { Basic: true, Standard: false, Pro: false },
			},
			{
				name: "Optymalizacja strony",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
			{
				name: "Nowoczesna strona",
				tiers: { Basic: false, Standard: false, Pro: true },
			},
			{
				name: "Analityka i optymalizacja",
				tiers: { Basic: false, Standard: false, Pro: true },
			},
		],
	},
	{
		name: "Reklamy",
		features: [
			{
				name: "Facebook Ads",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
			{
				name: "Google Ads",
				tiers: { Basic: false, Standard: false, Pro: true },
			},
			{
				name: "Optymalizacja kampanii",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
		],
	},
	{
		name: "Wsparcie",
		features: [
			{
				name: "Raport miesięczny",
				tiers: { Basic: true, Standard: true, Pro: true },
			},
			{
				name: "Wsparcie email",
				tiers: { Basic: true, Standard: true, Pro: true },
			},
			{
				name: "Wsparcie telefon",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
			{
				name: "Wsparcie 24/7",
				tiers: { Basic: false, Standard: false, Pro: true },
			},
			{
				name: "Konsultacje strategiczne",
				tiers: { Basic: false, Standard: true, Pro: true },
			},
			{
				name: "Priorytetowe wsparcie",
				tiers: { Basic: false, Standard: false, Pro: true },
			},
		],
	},
];

function classNames(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}

export function PackagesSection() {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<section
			id="packages"
			className="section-padding py-12 md:py-16 mx-auto max-w-7xl"
		>
			<div className="flow-root">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 mb-16">
						<SectionTitle subtitle="Wybierz pakiet dopasowany do Twoich potrzeb">
							Pakiety usług e-marketingu
						</SectionTitle>
					</div>

					{/* Pricing Cards */}
					<div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{tiers.map((tier) => (
							<div
								key={tier.id}
								data-featured={tier.featured ? "true" : undefined}
								className={classNames(
									tier.featured
										? "z-10 bg-gradient-to-br from-primary-500/20 via-white/10 to-white/5 border-2 border-primary-500/50 shadow-xl shadow-primary-500/20"
										: "bg-white/5 border border-white/10",
									"group/tier relative rounded-2xl p-8 transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1",
								)}
							>
								{/* Popular badge */}
								{tier.featured && (
									<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold uppercase tracking-wider">
										Popularne
									</div>
								)}

								{/* Gradient overlay on hover for featured */}
								{tier.featured && (
									<div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
								)}

								<div className="relative z-10">
									<h3
										id={`tier-${tier.id}`}
										className={classNames(
											"text-white",
											"text-xl font-display font-bold mb-2 text-center",
										)}
									>
										{tier.name}
									</h3>
									<p className="text-white/70 text-sm mb-6 text-center">
										{tier.description}
									</p>
									<div className="flex items-center justify-center gap-x-2 mb-6">
										<p className="text-4xl font-display font-bold text-primary-400">
											{tier.price}
										</p>
										<div className="text-sm">
											<p className="text-white/60">PLN</p>
											<p className="text-white/60">/miesiąc</p>
										</div>
									</div>
									<Button
										variant={tier.featured ? "primary" : "ghost"}
										className="w-full mb-6"
									>
										Wybierz pakiet
									</Button>
									<div className="mt-6">
										<ul
											role="list"
											className="space-y-3 border-t border-white/10 pt-4 text-white"
										>
											{sections[0].features.slice(0, 2).map((feature) => (
												<li key={feature.name} className="flex gap-x-3">
													<CheckIcon
														aria-hidden="true"
														className={classNames(
															tier.featured
																? "text-primary-400"
																: "text-primary-400",
															"h-5 w-5 flex-none mt-0.5",
														)}
													/>
													<span className="text-sm">{feature.name}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Bottom border accent for featured */}
								{tier.featured && (
									<div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
								)}
							</div>
						))}
					</div>

					{/* Show Details Button */}
					<div className="flex justify-center mt-12">
						<Button
							variant="ghost"
							onClick={() => setShowDetails(!showDetails)}
						>
							{showDetails ? "Ukryj szczegóły" : "Pokaż więcej szczegółów"}
						</Button>
					</div>
				</div>
			</div>

			{/* Feature Comparison Table */}
			{showDetails && (
				<div className="relative bg-dark-950 lg:pt-14 mt-12">
					<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
						{/* Feature comparison (lg+) */}
						<section
							aria-labelledby="comparison-heading"
							className="hidden lg:block"
						>
							<h2 id="comparison-heading" className="sr-only">
								Porównanie funkcji
							</h2>

							<div className="grid grid-cols-4 gap-x-8 border-t border-white/10 before:block">
								{tiers.map((tier) => (
									<div key={tier.id} aria-hidden="true" className="-mt-px">
										<div
											className={classNames(
												tier.featured
													? "border-primary-500"
													: "border-transparent",
												"border-t-2 pt-10",
											)}
										>
											<p
												className={classNames(
													tier.featured ? "text-primary-400" : "text-white",
													"text-sm/6 font-semibold",
												)}
											>
												{tier.name}
											</p>
											<p className="mt-1 text-sm/6 text-white/60">
												{tier.description}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="-mt-6 space-y-16">
								{sections.map((section) => (
									<div key={section.name}>
										<h3 className="text-sm/6 font-semibold text-white">
											{section.name}
										</h3>
										<div className="relative -mx-8 mt-10">
											<div
												aria-hidden="true"
												className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
											>
												<div className="size-full rounded-lg bg-white/5" />
												<div className="size-full rounded-lg bg-white/5" />
												<div className="size-full rounded-lg bg-white/5" />
											</div>

											<table className="relative w-full border-separate border-spacing-x-8">
												<thead>
													<tr className="text-left">
														<th scope="col">
															<span className="sr-only">Funkcja</span>
														</th>
														{tiers.map((tier) => (
															<th key={tier.id} scope="col">
																<span className="sr-only">{tier.name}</span>
															</th>
														))}
													</tr>
												</thead>
												<tbody>
													{section.features.map((feature, featureIdx) => (
														<tr key={feature.name}>
															<th
																scope="row"
																className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-white"
															>
																{feature.name}
																{featureIdx !== section.features.length - 1 ? (
																	<div className="absolute inset-x-8 mt-3 h-px bg-white/10" />
																) : null}
															</th>
															{tiers.map((tier) => (
																<td
																	key={tier.id}
																	className="relative w-1/4 px-4 py-0 text-center"
																>
																	<span className="relative size-full py-3">
																		{typeof feature.tiers[
																			tier.name as keyof typeof feature.tiers
																		] === "string" ? (
																			<span
																				className={classNames(
																					tier.featured
																						? "font-semibold text-primary-400"
																						: "text-white",
																					"text-sm/6",
																				)}
																			>
																				{
																					feature.tiers[
																						tier.name as keyof typeof feature.tiers
																					]
																				}
																			</span>
																		) : (
																			<>
																				{feature.tiers[
																					tier.name as keyof typeof feature.tiers
																				] === true ? (
																					<CheckIcon
																						aria-hidden="true"
																						className="mx-auto size-5 text-primary-400"
																					/>
																				) : (
																					<XMarkIcon
																						aria-hidden="true"
																						className="mx-auto size-5 text-white/20"
																					/>
																				)}
																				<span className="sr-only">
																					{feature.tiers[
																						tier.name as keyof typeof feature.tiers
																					] === true
																						? "Tak"
																						: "Nie"}
																				</span>
																			</>
																		)}
																	</span>
																</td>
															))}
														</tr>
													))}
												</tbody>
											</table>

											{/* Fake card borders */}
											<div
												aria-hidden="true"
												className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
											>
												{tiers.map((tier) => (
													<div
														key={tier.id}
														className={classNames(
															tier.featured
																? "ring-2 ring-primary-500"
																: "ring-1 ring-white/10",
															"rounded-lg",
														)}
													/>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Feature comparison (mobile) */}
						<section
							aria-labelledby="mobile-comparison-heading"
							className="lg:hidden"
						>
							<h2 id="mobile-comparison-heading" className="sr-only">
								Porównanie funkcji
							</h2>

							<div className="mx-auto max-w-2xl space-y-16">
								{tiers.map((tier) => (
									<div key={tier.id} className="border-t border-white/10">
										<div
											className={classNames(
												tier.featured
													? "border-primary-500"
													: "border-transparent",
												"-mt-px w-72 border-t-2 pt-10 md:w-80",
											)}
										>
											<h3
												className={classNames(
													tier.featured ? "text-primary-400" : "text-white",
													"text-sm/6 font-semibold",
												)}
											>
												{tier.name}
											</h3>
											<p className="mt-1 text-sm/6 text-white/60">
												{tier.description}
											</p>
										</div>

										<div className="mt-10 space-y-10">
											{sections.map((section) => (
												<div key={section.name}>
													<h4 className="text-sm/6 font-semibold text-white">
														{section.name}
													</h4>
													<div className="relative mt-6">
														<div
															aria-hidden="true"
															className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white/5 shadow-sm sm:block"
														/>

														<div
															className={classNames(
																tier.featured
																	? "ring-2 ring-primary-500"
																	: "ring-1 ring-white/10",
																"relative rounded-lg bg-white/5 shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0",
															)}
														>
															<dl className="divide-y divide-white/10 text-sm/6">
																{section.features.map((feature) => (
																	<div
																		key={feature.name}
																		className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
																	>
																		<dt className="pr-4 text-white/60">
																			{feature.name}
																		</dt>
																		<dd className="flex items-center justify-end sm:justify-center sm:px-4">
																			{typeof feature.tiers[
																				tier.name as keyof typeof feature.tiers
																			] === "string" ? (
																				<span
																					className={classNames(
																						tier.featured
																							? "font-semibold text-primary-400"
																							: "text-white",
																					)}
																				>
																					{
																						feature.tiers[
																							tier.name as keyof typeof feature.tiers
																						]
																					}
																				</span>
																			) : (
																				<>
																					{feature.tiers[
																						tier.name as keyof typeof feature.tiers
																					] === true ? (
																						<CheckIcon
																							aria-hidden="true"
																							className="mx-auto size-5 text-primary-400"
																						/>
																					) : (
																						<XMarkIcon
																							aria-hidden="true"
																							className="mx-auto size-5 text-white/20"
																						/>
																					)}
																					<span className="sr-only">
																						{feature.tiers[
																							tier.name as keyof typeof feature.tiers
																						] === true
																							? "Tak"
																							: "Nie"}
																					</span>
																				</>
																			)}
																		</dd>
																	</div>
																))}
															</dl>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>
			)}
		</section>
	);
}
