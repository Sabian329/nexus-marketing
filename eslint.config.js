import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
	// Ignore patterns
	{
		ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts'],
	},
	// Base config for all files
	js.configs.recommended,
	...tseslint.configs.recommended,
	// React files
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.vite.rules,
			'react-hooks/immutability': 'off', // Allow window.location modifications
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-arrow-callback': 'error',
			// Allow window.location modifications (common in React apps)
			'no-restricted-globals': 'off',
		},
	},
	// Prettier config (must be last)
	prettier,
)
