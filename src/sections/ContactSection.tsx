import { useState } from "react";

import ColorBends from "../components/ColorBends";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		window.location.href = `mailto:adfusegroup@gmail.com?subject=Kontakt z ${formData.company || "strony"}&body=${encodeURIComponent(`Imię: ${formData.name}\nEmail: ${formData.email}\nFirma: ${formData.company}\n\nWiadomość:\n${formData.message}`)}`;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section
			id="contact"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 section-padding"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
			<ColorBends
				colors={["#ed731e", "#f19143", "#ffffff"]}
				rotation={90}
				speed={0.1}
				scale={0.5}
				frequency={4}
				warpStrength={1}
				mouseInfluence={1}
				parallax={4}
				noise={0.1}
				transparent
			/>
			<div className="relative z-10 max-w-7xl mx-auto w-full pb-20">
				<div className="text-center flex flex-col items-center justify-center">
					<SectionTitle subtitle="Porozmawiajmy o Twoim projekcie. Odpowiemy w ciągu 24 godzin.">
						Gotowy na zmianę
					</SectionTitle>
				</div>
				<div className="flex justify-center">
					<div className="bg-black/60 backdrop-blur-xl p-5 rounded-2xl w-[700px] border border-white/30">
						{/* Contact Form */}
						<div>
							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={handleChange}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Imię i nazwisko *"
									/>
								</div>
								<div>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Email *"
									/>
								</div>
								<div>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Firma"
									/>
								</div>
								<div>
									<textarea
										id="message"
										name="message"
										required
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
										placeholder="Wiadomość *"
									/>
								</div>
								<Button type="submit" className="mt-8">
									Wyślij wiadomość
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
