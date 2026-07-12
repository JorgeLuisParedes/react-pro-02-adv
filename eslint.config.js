import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		ignores: ['dist', 'build', 'coverage', 'node_modules'],
	},

	js.configs.recommended,

	...tseslint.configs.recommended,

	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		rules: {
			'no-console': 'off',
			'no-debugger': 'error',
			'no-var': 'error',
			'prefer-const': 'off',
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],

			'@typescript-eslint/consistent-type-imports': 'error',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-explicit-any': 'off',
			'no-useless-assignment': 'off',
		},
	},

	eslintConfigPrettier,
]);
