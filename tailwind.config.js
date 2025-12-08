/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fef7ee",
					100: "#fdecd6",
					200: "#fad5ad",
					300: "#f6b779",
					400: "#f19143",
					500: "#ed731e",
					600: "#de5914",
					700: "#b84213",
					800: "#933517",
					900: "#772e16",
				},
				dark: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#2a2a2a",
					900: "#1a1a1a",
					950: "#0a0a0a",
				},
			},
			fontFamily: {
				display: ["Poppins", "sans-serif"],
				body: ["Poppins", "sans-serif"],
				sans: ["Poppins", "sans-serif"],
			},
			animation: {
				"fade-in": "fadeIn 1s ease-out forwards",
				"fade-in-up": "fadeInUp 0.8s ease-out forwards",
				"fade-in-up-delay": "fadeInUp 0.8s ease-out 0.2s forwards",
				"fade-in-up-delay-2": "fadeInUp 0.8s ease-out 0.4s forwards",
				"scale-in": "scaleIn 0.6s ease-out forwards",
				float: "float 6s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite alternate",
				"blob-1": "blob1 25s ease-in-out infinite",
				"blob-2": "blob2 30s ease-in-out infinite",
				"blob-3": "blob3 35s ease-in-out infinite",
				"blob-4": "blob4 28s ease-in-out infinite",
				"grid-move": "gridMove 20s linear infinite",
				"prism-rotate": "prismRotate 30s linear infinite",
				"prism-pulse": "prismPulse 15s ease-in-out infinite",
				shimmer: "shimmer 8s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				scaleIn: {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
				glow: {
					"0%": { opacity: "0.5" },
					"100%": { opacity: "1" },
				},
				blob1: {
					"0%": {
						transform: "translate(0%, 0%) scale(1)",
					},
					"33%": {
						transform: "translate(30%, -50%) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20%, 20%) scale(0.9)",
					},
					"100%": {
						transform: "translate(0%, 0%) scale(1)",
					},
				},
				blob2: {
					"0%": {
						transform: "translate(100%, 100%) scale(1)",
					},
					"33%": {
						transform: "translate(-30%, -30%) scale(1.2)",
					},
					"66%": {
						transform: "translate(50%, 10%) scale(0.8)",
					},
					"100%": {
						transform: "translate(100%, 100%) scale(1)",
					},
				},
				blob3: {
					"0%": {
						transform: "translate(-50%, 50%) scale(1)",
					},
					"33%": {
						transform: "translate(40%, -40%) scale(1.15)",
					},
					"66%": {
						transform: "translate(20%, 60%) scale(0.85)",
					},
					"100%": {
						transform: "translate(-50%, 50%) scale(1)",
					},
				},
				blob4: {
					"0%": {
						transform: "translate(50%, -50%) scale(1)",
					},
					"33%": {
						transform: "translate(-40%, 40%) scale(1.1)",
					},
					"66%": {
						transform: "translate(30%, 30%) scale(0.95)",
					},
					"100%": {
						transform: "translate(50%, -50%) scale(1)",
					},
				},
				gridMove: {
					"0%": {
						transform: "translate(0, 0)",
					},
					"100%": {
						transform: "translate(50px, 50px)",
					},
				},
				prismRotate: {
					"0%": {
						transform: "rotate(0deg) scale(1)",
					},
					"50%": {
						transform: "rotate(180deg) scale(1.1)",
					},
					"100%": {
						transform: "rotate(360deg) scale(1)",
					},
				},
				prismPulse: {
					"0%, 100%": {
						opacity: "0.1",
						transform: "scale(1)",
					},
					"50%": {
						opacity: "0.15",
						transform: "scale(1.05)",
					},
				},
				shimmer: {
					"0%": {
						transform: "translateX(-100%)",
					},
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	},
	plugins: [],
};
