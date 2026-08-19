import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

// Flat-config port of the former .eslintrc.js. ESLint 9 no longer reads
// .eslintrc.* by default, so `pnpm lint` failed to start at all.
//
// Formatting is NOT an ESLint rule here: running Prettier through
// eslint-plugin-prettier reported 15k+ violations on a codebase that was never
// formatted with this config, which made `lint` useless as a gate. ESLint now
// only reports code defects; `format:check` owns formatting.
export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'documentation/**', '*.js', '*.mjs'],
  },
  ...tsPlugin.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Underscore marks a binding that only exists to satisfy a signature
      // (PipeTransform, CommandRunner, not-yet-implemented service stubs).
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];
