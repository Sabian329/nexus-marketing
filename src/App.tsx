import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CompanyDescription } from "./sections/CompanyDescription";
import { ServicesSection } from "./sections/ServicesSection";
import { WorkSection } from "./sections/WorkSection";
//import { BentoSection } from "./sections/BentoSection";
import { PackagesSection } from "./sections/PackagesSection";
import { ContactSection } from "./sections/ContactSection";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ServiceDetail } from "./pages/ServiceDetail";
import { SitemapPage } from "./pages/SitemapPage";
import { CalendlyButton } from "./components/CalendlyButton";
import { ComingSoon } from "./components/ComingSoon";

function ScrollToTop() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return null;
}

function HomePage() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
			}, 100);
		}
	}, [location.hash]);

	return (
		<>
			<Hero />
			<CompanyDescription />
			<ServicesSection />
			<WorkSection />
			<PackagesSection />
			<ContactSection />
		</>
	);
}

function App() {
	const [isUnlocked, setIsUnlocked] = useState(false);

	// Check environment variables for coming soon mode
	// Support both old (PROD_HIDDEN, PIN) and new (VITE_COMING_SOON, VITE_COMING_SOON_PIN) variable names
	const isComingSoon =
		import.meta.env.VITE_COMING_SOON === "true" ||
		import.meta.env.VITE_PROD_HIDDEN === "true";

	const comingSoonPin =
		import.meta.env.VITE_COMING_SOON_PIN || import.meta.env.VITE_PIN || "";

	// Debug: log environment variables (remove in production)
	useEffect(() => {
		console.log("Coming Soon Debug:", {
			VITE_COMING_SOON: import.meta.env.VITE_COMING_SOON,
			VITE_PROD_HIDDEN: import.meta.env.VITE_PROD_HIDDEN,
			isComingSoon,
			VITE_COMING_SOON_PIN: import.meta.env.VITE_COMING_SOON_PIN,
			VITE_PIN: import.meta.env.VITE_PIN,
			comingSoonPin,
		});
	}, []);

	useEffect(() => {
		// Check URL parameter for testing (e.g., ?test-coming-soon=true)
		const urlParams = new URLSearchParams(window.location.search);
		const testComingSoon = urlParams.get("test-coming-soon") === "true";

		if (testComingSoon) {
			sessionStorage.removeItem("site_unlocked");
		}

		// Check if already unlocked in this session
		if (isComingSoon && comingSoonPin) {
			const unlocked = sessionStorage.getItem("site_unlocked");
			if (unlocked === "true" && !testComingSoon) {
				setIsUnlocked(true);
			}
		} else {
			// If coming soon is disabled, always unlock
			setIsUnlocked(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isComingSoon, comingSoonPin]);

	const handleUnlock = () => {
		setIsUnlocked(true);
	};

	// Show coming soon overlay if enabled and not unlocked
	const showComingSoon = isComingSoon && !isUnlocked && comingSoonPin;

	return (
		<>
			{showComingSoon && (
				<ComingSoon pin={comingSoonPin} onUnlock={handleUnlock} />
			)}
			{isUnlocked && (
				<>
					<ScrollToTop />
					<CalendlyButton />
					<Routes>
						<Route
							path="/"
							element={
								<div className="min-h-screen bg-dark-950 text-white">
									<Navigation />
									<HomePage />
									<Footer />
								</div>
							}
						/>
						<Route path="/services/:serviceName" element={<ServiceDetail />} />
						<Route path="/sitemap" element={<SitemapPage />} />
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
