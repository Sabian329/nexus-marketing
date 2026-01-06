import type { Project } from "../types";

export const projects: Project[] = [
	{
		id: "global-brand",
		title: "Obsługa globalnej marki",
		category: "Strategia + kampanie + content w jednym procesie",
		description:
			"Prowadzenie działań marketingowych dla marki z ponad 100 letnim doświadczeniem: plan, kreacje, kampanie płatne, analiza wyników i stała optymalizacja.",
		results: "strategia * reklamy * content * analityka",
		order: 0,
		image:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
	},
	{
		id: "go-to-market",
		title: "Go-to-market dla nowej marki",
		category: "Od zera do pierwszych leadów i sprzedazy",
		description:
			"Zbudowanie komunikacji, oferty i kanałów pozyskiwania klientów dla nowopowstającej lokalnej marki.",
		results: "pozycjonowanie * messaging * kampanie * lejki sprzedazowe",
		order: 1,
		image:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
	},
	{
		id: "conversion-website",
		title: "Strona internetowa pod ruch i sprzedaz",
		category: "Nowa strona www nastawiona na konwersje",
		description:
			"Projekt i wdrozenie strony, która lepiej prezentuje ofertę, ładuje się szybciej i prowadzi uzytkownika do działania.",
		results: "UX/UI * wdrozenie * SEO * analityka",
		order: 2,
		image:
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
	},
];
