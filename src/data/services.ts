import type { Service } from "../types";

export const services: Service[] = [
	{
		id: "web-development",
		title: "Tworzenie nowoczesnych stron internetowych",
		description:
			"React + CMS headless. Szybkie, responsywne strony idealnie dopasowane do Twoich potrzeb.",
		subtitle:
			"Nowoczesna strona www, która wygląda świetnie i pracuje na wynik",
		intro: [
			"Strona internetowa to dziś nie wizytówka — to narzędzie sprzedaży.",
			"Projektujemy i wdrażamy strony firmowe, które są szybkie, czytelne na telefonie i prowadzą użytkownika prosto do celu: kontaktu, zapytania, zapisu lub zakupu.",
			"Stawiamy na design, który buduje zaufanie, i strukturę, która ułatwia podejmowanie decyzji.",
		],
		forWho: [
			"dla firm, które potrzebują nowej strony i chcą wyglądać profesjonalnie",
			'dla marek, które mają stronę, ale "nie dowozi" leadów/sprzedaży',
			"dla biznesów, które chcą uporządkować ofertę i komunikację",
		],
		whatWeDo: [
			"projekt UX/UI (układ, treści, nawigacja, CTA)",
			"wdrożenie strony (responsywność, szybkość, bezpieczeństwo)",
			"konfiguracja analityki (GA4/GTM) i SEO on-site",
			"przygotowanie sekcji sprzedażowych: oferta, case'y, FAQ, kontakt",
		],
		howWeWork: [
			"Krótka rozmowa o celu strony (leady / sprzedaż / wizerunek)",
			'Makieta i struktura treści (co ma być "na wierzchu", a co w szczegółach)',
			"Projekt graficzny + copy / układ nagłówków",
			"Wdrożenie + testy (mobile, szybkość, formularze)",
			"Publikacja + monitoring",
		],
		whatYouGet: [
			"kompletną stronę gotową do promowania",
			"jasne CTA i ścieżkę użytkownika",
			'podstawowy setup analityki + wskazówki "co dalej"',
		],
		images: [
			"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "landing-pages",
		title: "Projektowanie landing page'y",
		description:
			"Strony docelowe, które zwiększają skuteczność reklam: zapisy, zapytania, sprzedaż - wszystko z myślą o wyniku.",
		subtitle: "Landing page'e pod kampanie — więcej leadów i lepsza konwersja",
		intro: [
			"Landing page ma jedno zadanie: zamienić ruch z reklam w wynik.",
			"Projektujemy strony docelowe pod konkretne cele: zapytania ofertowe, rejestracje, pobrania, sprzedaż.",
			"Bez przeładowania treścią — z jasnym przekazem, argumentami i CTA, które realnie działa.",
		],
		forWho: [
			"dla firm odpalających kampanie Meta Ads / Google Ads",
			"dla usług i ofert premium, gdzie liczy się zaufanie i klarowność",
			"dla e-commerce (promocje, kolekcje, lead magnety)",
		],
		whatWeDo: [
			"struktura i copy pod intencję użytkownika",
			"sekcje sprzedażowe: problem → rozwiązanie → dowód → CTA",
			"formularze i lead-flow (krótsze ścieżki, mniej tarcia)",
			"przygotowanie pod testy i optymalizację (CRO)",
		],
		howWeWork: [
			"Cel i oferta (co sprzedajemy, komu, z jaką obietnicą)",
			"Draft treści i układu",
			"Projekt + wdrożenie",
			"Tracking i zdarzenia (np. wysłanie formularza)",
			"Interacje: poprawki po danych",
		],
		whatYouGet: [
			"landing gotowy pod kampanię",
			"treść i układ skoncentrowany na konwersji",
			"pomiar efektów i baza pod optymalizację",
		],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "ux-ui-audit",
		title: "Audyt UX/UI strony lub aplikacji",
		description:
			"Połączenie wiedzy frontendowej i marketingowej — kompleksowa analiza i rekomendacje.",
		subtitle:
			"Audyt UX/UI: znajdź blokady, popraw konwersję, uporządkuj doświadczenie",
		intro: [
			"Użytkownik nie powie Ci, dlaczego nie kupił — po prostu wyjdzie.",
			"W audycie UX/UI sprawdzamy, gdzie ludzie gubią się na stronie, co ich hamuje i co obniża konwersję.",
			"Dostajesz konkret: lista problemów + rekomendacje zmian + priorytety.",
		],
		forWho: [
			"dla stron, które mają ruch, ale słabe wyniki",
			"dla e-commerce z problemem porzuceń koszyka",
			'dla firm, które planują redesign i chcą wiedzieć "co poprawić"',
		],
		whatWeDo: [
			"nawigację i logikę treści (czy użytkownik rozumie ofertę)",
			"CTA, formularze i ścieżkę do kontaktu/zakupu",
			"mobile usability i czytelność",
			"błędy w komunikacji, zaufaniu, obiekcjach klienta",
		],
		howWeWork: [
			"Cel audytu i kluczowe podstrony",
			'Analiza + "ścieżki użytkownika"',
			"Lista problemów + quick wins",
			"Rekomendacje z priorytetami (co najpierw, co później)",
			"Omówienie na spotkaniu",
		],
		whatYouGet: [
			"raport z rekomendacjami",
			"listę zmian do wdrożenia (z priorytetem)",
			"wskazówki pod poprawę konwersji",
		],
		images: [
			"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "ecommerce",
		title: "Tworzenie sklepów e-commerce",
		description:
			"React + Shopify API / Headless e-commerce. Nowoczesne rozwiązania dla Twojego biznesu.",
		subtitle: "Sklep online, który sprzedaje: UX, szybkość i wygodne zakupy",
		intro: [
			"W e-commerce wygrywa prostota: szybkie ładowanie, klarowna oferta, łatwy koszyk i płatność.",
			'Budujemy sklepy, które są gotowe do reklamowania i skalowania — tak, żeby marketing nie "pchał" ruchu do dziurawego wiadra.',
		],
		forWho: [
			"dla marek startujących ze sprzedażą online",
			"dla sklepów, które chcą nowego designu i lepszej konwersji",
			"dla firm potrzebujących integracji i analityki",
		],
		whatWeDo: [
			"architektura sklepu i UX zakupowy",
			"strona produktu, koszyk, checkout (minimalizacja tarcia)",
			"integracje (płatności, dostawy, analityka)",
			"podstawy SEO technicznego i wydajność",
		],
		howWeWork: [
			"Cel biznesowy + asortyment + proces zakupu",
			"Makiety i projekt UI",
			"Wdrożenie + testy checkoutu",
			"Tracking (zakupy, add-to-cart, checkout)",
			"Publikacja + plan rozwoju",
		],
		whatYouGet: [
			"sklep gotowy do kampanii i mierzenia sprzedaży",
			"uporządkowany UX i logiczne kategorie",
			"podstawy pod wzrost (SEO + analityka)",
		],
		images: [
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "facebook-ads",
		title: "Obsługa kampanii Meta Ads",
		description:
			"Reklamy na Facebooku i Instagramie. Kreacje, testy i optymalizacja kampanii nastawionych na wyniki.",
		subtitle: "Meta Ads (Facebook/Instagram): kampanie pod leady i sprzedaż",
		intro: [
			"Reklamy w Meta mogą dowozić świetne wyniki, jeśli mają dobrą ofertę, kreacje i porządną optymalizację.",
			"Prowadzimy kampanie kompleksowo: od strategii i struktury, przez kreacje, po testy i raportowanie.",
			"Skupiamy się na tym, co da się mierzyć i poprawiać.",
		],
		forWho: [
			"dla firm usługowych (leady, zapytania)",
			"dla e-commerce (sprzedaż, remarketing)",
			"dla marek, które chcą rosnąć i testować komunikaty",
		],
		whatWeDo: [
			"ustawienie i prowadzenie kampanii (struktura, cele, budżety)",
			"testy kreacji i komunikatów (A/B)",
			"remarketing i segmenty odbiorców",
			"raport + wnioski i plan kolejnych kroków",
		],
		howWeWork: [
			"Cel i KPI (lead/sprzedaż/ROAS)",
			"Odbiorcy + komunikaty + kreacje",
			"Start kampanii i testy",
			"Optymalizacja (budżety, grupy, kreacje)",
			"Miesięczny raport + rekomendacje",
		],
		whatYouGet: [
			'kampanie prowadzone "na bieżąco", a nie raz na miesiąc',
			"jasne wnioski: co działa, co wyłączyć, co skalować",
			"stałą poprawę wyników na bazie danych",
		],
		images: [
			"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "google-ads",
		title: "Obsługa kampanii Google Ads",
		description:
			"Reklamy w wyszukiwarce, display, remarketing — kompleksowa obsługa kampanii Google.",
		subtitle: "Google Ads: wyszukiwarka, remarketing i kampanie pod intencję",
		intro: [
			"Google Ads łapie użytkownika w momencie, gdy realnie czegoś szuka.",
			"Dlatego kluczowe są: dobra struktura konta, właściwe słowa kluczowe, trafne reklamy i kontrola kosztów.",
			"Prowadzimy kampanie w modelu nastawionym na efektywność i jakość leadów.",
		],
		forWho: [
			'dla usług B2B i B2C, gdzie liczy się intencja "tu i teraz"',
			"dla e-commerce (sprzedaż i remarketing)",
			"dla firm, które mają kampanie, ale koszty rosną szybciej niż wynik",
		],
		whatWeDo: [
			"dobór słów kluczowych i struktura kampanii",
			"reklamy tekstowe + rozszerzenia + testy",
			"kontrola zapytań i wykluczenia (jakość ruchu)",
			"remarketing + analityka + raportowanie",
		],
		howWeWork: [
			"Audyt/start od zrozumienia oferty",
			"Struktura kampanii + ustawienia",
			"Start + kontrola jakości ruchu",
			"Optymalizacja stawek i treści reklam",
			"Raport + plan skalowania",
		],
		whatYouGet: [
			"kampanie, które nie przepalają budżetu na złe zapytania",
			"przejrzysty raport i priorytety działań",
			"uporządkowane konto gotowe do rozwoju",
		],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "social-media",
		title: "Tworzenie kontentu na social media",
		description:
			"Posty, wideo, grafiki i plan publikacji - od pomysłu po publikację i stałą opiekę profilu.",
		subtitle: "Content na social media, który jest spójny i regularny",
		intro: [
			"Content ma sens, jeśli jest konsekwentny i dopasowany do Twojej branży.",
			"Tworzymy plan publikacji i materiały, które budują wizerunek, edukują i prowadzą do zapytań.",
			"Bez chaosu — z formatami, które da się powtarzać.",
		],
		forWho: [
			"dla firm, które chcą wyglądać profesjonalnie w socialach",
			"dla marek, które nie mają czasu na regularne publikacje",
			"dla biznesów, które chcą wspierać kampanie reklamowe contentem",
		],
		whatWeDo: [
			"plan treści i tematy na miesiąc",
			"grafiki, copy, krótkie wideo (w zależności od pakietu)",
			"spójny styl i szablony",
			"rekomendacje co działa i co warto powielać",
		],
		howWeWork: [
			"Brief: branża, klient, ton komunikacji",
			"Plan treści i przykładowe formaty",
			"Produkcja materiałów",
			"Publikacja (lub przygotowanie do publikacji)",
			"Analiza i poprawki",
		],
		whatYouGet: [
			"regularny content i spójny wygląd profilu",
			"mniej chaosu, więcej planu",
			"materiały, które możesz wykorzystywać w reklamach",
		],
		images: [
			"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "email-marketing",
		title: "Email marketing i automatyzacje",
		description:
			"Mailerlite / Klaviyo / Brevo. Lejki sprzedażowe, onboarding, newslettery.",
		subtitle:
			"Email marketing, który pracuje 24/7 — automatyzacje i newslettery",
		intro: [
			"E-mail to jeden z najlepszych kanałów do budowania relacji i sprzedaży — szczególnie gdy działa automatycznie.",
			"Projektujemy newslettery i sekwencje (onboarding, follow-up, porzucony koszyk), które zwiększają sprzedaż i utrzymują klientów.",
		],
		forWho: [
			"dla e-commerce i marek z powtarzalną sprzedażą",
			'dla usług, które potrzebują "dogrzewać" leady',
			"dla firm, które chcą odzyskać ruch, który już raz był na stronie",
		],
		whatWeDo: [
			"segmentacja i scenariusze wysyłek",
			"copy + layout maili (spójność z marką)",
			"automatyzacje (trigger, warunki, tagowanie)",
			"testy i optymalizacja wyników",
		],
		howWeWork: [
			"Cel i baza (co wysyłamy i do kogo)",
			"Propozycja scenariuszy i treści",
			"Wdrożenie automatyzacji w narzędziu",
			"Testy i poprawki",
			"Raport i rozwój sekwencji",
		],
		whatYouGet: [
			"działające automatyzacje + gotowe maile",
			"uporządkowaną komunikację po zakupie / po leadzie",
			'kanał, który dowozi bez ciągłego "ręcznego wysyłania"',
		],
		images: [
			"https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "chatbots",
		title: "Projektowanie i wdrażanie chatbotów",
		description:
			"Interaktywne formularze i chatboty — front (React + API) z logiką sprzedażową.",
		subtitle: "Chatboty i formularze, które zbierają leady i odciążają zespół",
		intro: [
			"Chatbot ma sens, gdy ma dobrze zaprojektowaną logikę rozmowy i jasno prowadzi użytkownika do działania.",
			"Tworzymy scenariusze, pytania i ścieżki, które ułatwiają kontakt, kwalifikują leady i skracają czas odpowiedzi.",
		],
		forWho: [
			"dla firm z dużą liczbą zapytań",
			"dla ofert, które wymagają doprecyzowania potrzeb klienta",
			"dla marek, które chcą podnieść konwersję z ruchu na stronie",
		],
		whatWeDo: [
			"projekt rozmowy: pytania, warianty, język",
			"kwalifikacja leadów (np. budżet, termin, potrzeby)",
			"integracje (formularz, CRM, analityka)",
			"testy i dopracowanie flow",
		],
		howWeWork: [
			"Cel i typ leadów",
			"Projekt flow + copy rozmów",
			"Wdrożenie i integracje",
			"Testy + poprawki",
			"Monitoring i ulepszenia",
		],
		whatYouGet: [
			"gotowego chatbota / formularz krokowy",
			"lepszą obsługę użytkownika i więcej leadów",
			"automatyzację prostych pytań",
		],
		images: [
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "seo",
		title: "SEO — optymalizacja stron i tworzenie treści",
		description:
			"Techniczne SEO, optymalizacja pod frazy oraz content, który odpowiada na pytania klientów.",
		subtitle: "SEO, które buduje widoczność: technikalia + treści pod intencję",
		intro: [
			'SEO to nie "magia" — to system.',
			"Optymalizujemy stronę i tworzymy treści, które odpowiadają na pytania klientów i ściągają wartościowy ruch z Google.",
			"Skupiamy się na podstawach, które realnie robią różnicę: struktura, szybkość, treść, linkowanie wewnętrzne.",
		],
		forWho: [
			"dla firm, które chcą stabilnego ruchu bez ciągłych reklam",
			"dla marek, które mają stronę, ale słabo się pozycjonuje",
			"dla biznesów, które chcą wspierać sprzedaż contentem",
		],
		whatWeDo: [
			"audyt SEO on-site (title, nagłówki, struktura, błędy)",
			"plan tematów i content plan",
			"tworzenie/optimizacja treści",
			"monitoring i iteracje",
		],
		howWeWork: [
			"Audyt i szybkie poprawki",
			"Plan słów kluczowych i tematów",
			"Wdrożenia i publikacje",
			"Analiza wyników",
			"Rozwój kolejnych obszarów",
		],
		whatYouGet: [
			'plan działań SEO "krok po kroku"',
			"poprawki na stronie i treści",
			"fundament pod długoterminowy ruch",
		],
		images: [
			"https://images.unsplash.com/photo-1432888622747-4eb9a8f2d523?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "branding",
		title: "Branding i identyfikacja wizualna",
		description:
			"Logo, księga znaku, kolorystyka — kompleksowa tożsamość wizualna marki.",
		subtitle: "Branding, który buduje zaufanie i spójność marki",
		intro: [
			"Silna marka to spójność: w logo, kolorach, typografii, stylu grafik i komunikacji.",
			"Tworzymy identyfikację, która wygląda profesjonalnie i działa w praktyce — na stronie, w social mediach, w reklamach i materiałach firmowych.",
		],
		forWho: [
			"dla firm tworzących markę od zera",
			"dla marek po rebrandingu lub zmianie oferty",
			"dla biznesów, które chcą wyglądać najlepiej w swojej branży",
		],
		whatWeDo: [
			"logo + warianty (poziom/pion, sygnet)",
			"paleta kolorów, typografia, key visual",
			"zasady użycia i spójne materiały startowe",
			"przygotowanie do użycia w online (social, www, reklamy)",
		],
		howWeWork: [
			"Brief: charakter marki i grupa docelowa",
			"Kierunki kreatywne (propozycje stylu)",
			"Dopieszczanie wybranego kierunku",
			"Zestaw materiałów i księga znaku",
			"Przekazanie plików",
		],
		whatYouGet: [
			"kompletną identyfikację gotową do wdrożenia",
			"pliki i zasady, które utrzymają spójność",
			"startowy pakiet materiałów",
		],
		images: [
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop&q=80",
		],
	},
	{
		id: "technical-audit",
		title: "Prowadzenie audytów techniczno-marketingowych",
		description:
			"Szybkość, UX, SEO, konwersja i reklamy - dostajesz listę priorytetów oraz konkretne rekomendacje zmian.",
		subtitle:
			"Audyt strony i marketingu: szybkość, UX, SEO, tracking i reklamy",
		intro: [
			"Czasem problem nie jest w reklamach, tylko w stronie. Albo odwrotnie: strona jest okej, ale kampanie są źle ustawione.",
			"W audycie techniczno-marketingowym patrzymy całościowo: technikalia, konwersja, SEO i performance.",
			"Dostajesz plan działań z priorytetami.",
		],
		forWho: [
			'dla firm, które "robią marketing", ale wynik nie rośnie',
			"dla marek przed większym budżetem reklamowym",
			"dla biznesów po redesignie albo po spadku konwersji",
		],
		whatWeDo: [
			"wydajność i błędy techniczne",
			"UX i konwersję (formularze, CTA, mobile)",
			"tracking (GA4/GTM/piksele/zdarzenia)",
			"spójność komunikacji + SEO",
			"kampanie (jeśli są) i miejsca optymalizacji",
		],
		howWeWork: [
			"Ustalenie celu",
			"Analiza strony i ścieżek użytkownika",
			"Wnioski + priorytety (quick wins vs większe zmiany)",
			"Raport i omówienie",
			"Opcjonalnie: wdrożenia po audycie",
		],
		whatYouGet: [
			"raport z listą problemów i rekomendacji",
			"priorytety działań (co zrobić najpierw)",
			"jasny plan poprawy wyniku",
		],
		images: [
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
		],
	},
];
