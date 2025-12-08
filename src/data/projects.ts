import type { Project } from "../types";

export const projects: Project[] = [
	{
		id: "rebranding",
		title: "Rebranding globalnej marki",
		category: "Strategia + Branding",
		description:
			"Kompleksowa transformacja wizerunku marki z 20-letnią historią. Nowa tożsamość wizualna, strategia komunikacji i kampania launchowa.",
		results: "+150% engagement, +80% brand awareness",
		order: 0,
		image:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
	},
	{
		id: "ecommerce-campaign",
		title: "Kampania e-commerce",
		category: "Digital Marketing",
		description:
			"Wielokanałowa kampania dla sklepu online. Integracja social media, Google Ads i email marketingu z wynikami przekraczającymi cele.",
		results: "+200% konwersji, +120% ROI",
		order: 1,
		image:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
	},
	{
		id: "content-strategy",
		title: "Content strategy",
		category: "Kreatywność",
		description:
			"Roczna strategia contentowa z produkcją video, animacji i materiałów graficznych. Budowanie społeczności wokół marki.",
		results: "+300% followers, +250% reach",
		order: 2,
		image:
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
	},
];
