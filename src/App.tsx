import { useEffect } from "react";
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

/* eslint-disable react-hooks/exhaustive-deps */
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
/* eslint-enable react-hooks/exhaustive-deps */

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
	return (
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
	);
}

export default App;
