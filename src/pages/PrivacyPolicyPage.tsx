import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function PrivacyPolicyPage() {
	const [content, setContent] = useState<string>("");
	const [error, setError] = useState<string>("");

	useEffect(() => {
		let isMounted = true;

		fetch("/privacyPolicy.md")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Nie udało się wczytać polityki prywatności.");
				}
				return res.text();
			})
			.then((text) => {
				if (isMounted) {
					setContent(text);
				}
			})
			.catch(() => {
				if (isMounted) {
					setError(
						"Wystąpił błąd podczas wczytywania polityki prywatności. Spróbuj ponownie później.",
					);
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="min-h-screen bg-dark-950 text-white">
			<Navigation />
			<main className="pt-24 pb-16">
				<section className="section-padding mx-auto max-w-4xl">
					{error && (
						<p className="text-red-400 text-sm mb-6 bg-red-500/10 border border-red-500/40 rounded-lg px-4 py-3">
							{error}
						</p>
					)}

					<article className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-primary-400 prose-strong:text-white prose-li:marker:text-primary-400">
						{content && (
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								components={{
									h1: ({ node, ...props }) => (
										<h1
											className="text-3xl md:text-4xl font-display font-bold mt-8 mb-4"
											{...props}
										/>
									),
									h2: ({ node, ...props }) => (
										<h2
											className="text-2xl md:text-3xl font-display font-semibold mt-8 mb-3"
											{...props}
										/>
									),
									h3: ({ node, ...props }) => (
										<h3
											className="text-xl md:text-2xl font-display font-semibold mt-6 mb-2"
											{...props}
										/>
									),
									p: ({ node, ...props }) => (
										<p
											className="text-base md:text-lg text-white/80 leading-relaxed mb-4"
											{...props}
										/>
									),
									ul: ({ node, ...props }) => (
										<ul
											className="list-disc list-inside space-y-1 mb-4"
											{...props}
										/>
									),
									ol: ({ node, ...props }) => (
										<ol
											className="list-decimal list-inside space-y-1 mb-4"
											{...props}
										/>
									),
									li: ({ node, ...props }) => (
										<li
											className="text-base md:text-lg text-white/80 leading-relaxed"
											{...props}
										/>
									),
									a: ({ node, ...props }) => (
										<a
											className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
											target="_blank"
											rel="noreferrer"
											{...props}
										/>
									),
								}}
							>
								{content}
							</ReactMarkdown>
						)}
					</article>
				</section>
			</main>
			<Footer />
		</div>
	);
}
