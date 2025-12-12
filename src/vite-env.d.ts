/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_COMING_SOON?: string;
	readonly VITE_COMING_SOON_PIN?: string;
	readonly VITE_PROD_HIDDEN?: string;
	readonly VITE_PIN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
