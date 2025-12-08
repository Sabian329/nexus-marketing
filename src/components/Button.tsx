import type {
	ReactNode,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from "react";

interface ButtonProps {
	children: ReactNode;
	variant?: "primary" | "ghost" | "outline";
	className?: string;
	onClick?: () => void;
	href?: string;
}

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
	children,
	variant = "primary",
	className = "",
	onClick,
	href,
	...props
}: ButtonProps & (ButtonElementProps | AnchorElementProps)) {
	const baseClasses =
		"inline-flex items-center justify-center px-7 py-3.5 font-medium rounded-full transition-all duration-300 text-sm";

	const variants = {
		primary: "bg-white text-dark-950 hover:bg-dark-100",
		ghost: "text-white border border-white/20 hover:bg-white/10",
		outline:
			"text-white border-2 border-white hover:bg-white hover:text-dark-950",
	};

	const classes = `${baseClasses} ${variants[variant]} ${className}`;

	if (href) {
		return (
			<a href={href} className={classes} {...(props as AnchorElementProps)}>
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={classes}
			{...(props as ButtonElementProps)}
		>
			{children}
		</button>
	);
}
