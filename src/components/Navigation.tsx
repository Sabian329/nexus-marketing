import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import logoFull from "../assets/logo-full.svg";

const navItems = [
	{ id: "services", label: "Usługi" },
	{ id: "work", label: "Portfolio" },
	{ id: "about", label: "O nas" },
];

export function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		setMobileMenuOpen(false);
		if (location.pathname !== "/") {
			// If not on home page, navigate first
			window.location.href = `/#${id}`;
		} else {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5"
						: "bg-transparent"
				}`}
			>
				<div className="section-padding mx-auto max-w-7xl">
					<div className="flex items-center justify-between h-20">
						<Link
							to="/"
							className="flex items-center hover:opacity-80 transition-opacity"
						>
							<img
								src={logoFull}
								alt="AdFuse Marketing"
								className="h-8 md:h-10  w-auto"
							/>
						</Link>
						<div className="hidden md:flex items-center gap-8">
							{navItems.map((item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => scrollToSection(item.id)}
									className="text-sm hover:text-white/60 transition-colors"
								>
									{item.label}
								</button>
							))}
							<Button onClick={() => scrollToSection("contact")}>
								Kontakt
							</Button>
						</div>
						<button
							type="button"
							className="md:hidden text-white"
							onClick={() => setMobileMenuOpen(true)}
						>
							<Bars3Icon className="h-6 w-6" />
						</button>
					</div>
				</div>
			</nav>

			<Transition show={mobileMenuOpen}>
				<Dialog className="md:hidden" onClose={setMobileMenuOpen}>
					<Transition.Child
						enter="transition-opacity duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
					</Transition.Child>
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full bg-dark-950 border-l border-white/10 p-6">
						<div className="flex items-center justify-between mb-12">
							<Link
								to="/"
								onClick={() => setMobileMenuOpen(false)}
								className="flex items-center"
							>
								<img
									src={logoFull}
									alt="AdFuse Marketing"
									className="h-8 w-auto"
								/>
							</Link>

							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="text-white"
							>
								<XMarkIcon className="h-6 w-6" />
							</button>
						</div>
						<div className="flex flex-col gap-6">
							{navItems.map((item) => (
								<button
									key={item.id}
									type="button"
									onClick={() => scrollToSection(item.id)}
									className="text-left text-lg py-2 border-b border-white/10"
								>
									{item.label}
								</button>
							))}
							<Button
								onClick={() => scrollToSection("contact")}
								className="mt-4"
							>
								Kontakt
							</Button>
						</div>
					</Dialog.Panel>
				</Dialog>
			</Transition>
		</>
	);
}
