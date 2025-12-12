import { useState, useEffect } from "react";

interface ComingSoonProps {
	pin: string;
	onUnlock: () => void;
}

export function ComingSoon({ pin, onUnlock }: ComingSoonProps) {
	const [enteredPin, setEnteredPin] = useState("");
	const [error, setError] = useState("");
	const [isUnlocked, setIsUnlocked] = useState(false);

	useEffect(() => {
		// Check if user already unlocked (stored in sessionStorage)
		const unlocked = sessionStorage.getItem("site_unlocked");
		if (unlocked === "true") {
			setIsUnlocked(true);
			onUnlock();
		}
	}, [onUnlock]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (enteredPin.length !== 4) {
			setError("PIN musi składać się z 4 cyfr");
			return;
		}

		if (enteredPin === pin) {
			setIsUnlocked(true);
			sessionStorage.setItem("site_unlocked", "true");
			onUnlock();
		} else {
			setError("Nieprawidłowy PIN");
			setEnteredPin("");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, ""); // Only numbers
		if (value.length <= 4) {
			setEnteredPin(value);
			setError("");
		}
	};

	if (isUnlocked) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-[9999] bg-dark-950 flex items-center justify-center p-6">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<p className="text-xl text-white/70">Coming Soon</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl p-8">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<input
								id="pin"
								type="text"
								inputMode="numeric"
								pattern="[0-9]*"
								value={enteredPin}
								onChange={handleChange}
								placeholder="0000"
								maxLength={4}
								className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-center text-2xl font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
								autoFocus
							/>
							{error && (
								<p className="mt-2 text-sm text-red-400 text-center">{error}</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
						>
							Unlock
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
