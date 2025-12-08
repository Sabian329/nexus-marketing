import { CompanyDescription } from "./sections/CompanyDescription";
import { ServicesSection } from "./sections/ServicesSection";
import { WorkSection } from "./sections/WorkSection";
import { BentoSection } from "./sections/BentoSection";
import { ContactSection } from "./sections/ContactSection";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-dark-950 text-white">
			<Navigation />
			<Hero />
			<CompanyDescription />
			<ServicesSection />
			<WorkSection />
			<BentoSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
