// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt(
  // Your custom configs here
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      // Disable ESLint formatting rules that conflict with Prettier
      '@stylistic/semi': 'off',
      '@stylistic/quotes': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/comma-dangle': 'off',

      // Essential TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Essential Vue rules
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'error',

      // Essential code quality rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  prettierConfig
)
