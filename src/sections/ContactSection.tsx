import { useState } from "react";
import { useForm } from "react-hook-form";

import ColorBends from "../components/ColorBends";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";

interface FormData {
	name: string;
	email: string;
	company: string;
	message: string;
	acceptPrivacy: boolean;
}

export function ContactSection() {
	const [result, setResult] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		setResult("");

		const accessKey = "553f14fe-0916-4593-8273-f25945333627";
		if (!accessKey) {
			setResult(
				"Błąd konfiguracji formularza. Skontaktuj się z administratorem.",
			);
			setIsSubmitting(false);
			return;
		}

		const formData = new FormData();
		formData.append("access_key", accessKey);
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("company", data.company || "");
		formData.append("message", data.message);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				setResult("Wiadomość wysłana pomyślnie!");
				reset();
			} else {
				setResult("Wystąpił błąd podczas wysyłania wiadomości.");
			}
		} catch {
			setResult("Wystąpił błąd podczas wysyłania wiadomości.");
		} finally {
			setIsSubmitting(false);
		}
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
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
								<div>
									<input
										type="text"
										id="name"
										{...register("name", {
											required: "Imię i nazwisko jest wymagane",
										})}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Imię i nazwisko *"
									/>
									{errors.name && (
										<p className="text-red-400 text-sm mt-1">
											{errors.name.message}
										</p>
									)}
								</div>
								<div>
									<input
										type="email"
										id="email"
										{...register("email", {
											required: "Email jest wymagany",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Nieprawidłowy adres email",
											},
										})}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Email *"
									/>
									{errors.email && (
										<p className="text-red-400 text-sm mt-1">
											{errors.email.message}
										</p>
									)}
								</div>
								<div>
									<input
										type="text"
										id="company"
										{...register("company")}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
										placeholder="Firma"
									/>
								</div>
								<div>
									<textarea
										id="message"
										rows={4}
										{...register("message", {
											required: "Wiadomość jest wymagana",
										})}
										className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 text-white text-base placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
										placeholder="Wiadomość *"
									/>
									{errors.message && (
										<p className="text-red-400 text-sm mt-1">
											{errors.message.message}
										</p>
									)}
								</div>
								<div className="flex items-start gap-3">
									<input
										type="checkbox"
										id="acceptPrivacy"
										{...register("acceptPrivacy", {
											required:
												"Musisz zaakceptować politykę prywatności, aby wysłać formularz.",
										})}
										className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent text-primary-500 focus:ring-primary-500"
									/>
									<label
										htmlFor="acceptPrivacy"
										className="text-sm text-white/70 leading-relaxed"
									>
										Akceptuję{" "}
										<a
											href="/privacy-policy"
											target="_blank"
											rel="noreferrer"
											className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
										>
											politykę prywatności
										</a>
										{" "}serwisu AdFuse.
									</label>
								</div>
								{errors.acceptPrivacy && (
									<p className="text-red-400 text-sm -mt-3">
										{errors.acceptPrivacy.message}
									</p>
								)}
								{result && (
									<div
										className={`p-3 rounded-lg text-sm ${
											result.includes("pomyślnie")
												? "bg-green-500/20 text-green-400 border border-green-500/30"
												: "bg-red-500/20 text-red-400 border border-red-500/30"
										}`}
									>
										{result}
									</div>
								)}
								<Button type="submit" className="mt-8" disabled={isSubmitting}>
									{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
