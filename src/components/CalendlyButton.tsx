import { useEffect } from "react";

declare global {
	interface Window {
		Calendly?: {
			initBadgeWidget: (options: {
				url: string;
				text: string;
				color: string;
				textColor: string;
				branding: boolean;
			}) => void;
			initPopupWidget: (options: { url: string }) => void;
		};
	}
}

export function CalendlyButton() {
	useEffect(() => {
		// Initialize Calendly badge widget when component mounts
		const initCalendly = () => {
			if (window.Calendly) {
				window.Calendly.initBadgeWidget({
					url: "https://calendly.com/adfusegroup/30min",
					text: "Schedule time with me",
					color: "#f19143",
					textColor: "#fbfbfb",
					branding: true,
				});
			}
		};

		// Try to initialize immediately
		initCalendly();

		// Also try on window load (as per Calendly's recommendation)
		if (document.readyState === "complete") {
			initCalendly();
		} else {
			window.addEventListener("load", initCalendly);
		}

		// Fallback: check periodically if Calendly is not loaded yet
		const checkCalendly = setInterval(() => {
			if (window.Calendly) {
				initCalendly();
				clearInterval(checkCalendly);
			}
		}, 100);

		// Cleanup
		return () => {
			window.removeEventListener("load", initCalendly);
			clearInterval(checkCalendly);
		};
	}, []);

	return null;
}
