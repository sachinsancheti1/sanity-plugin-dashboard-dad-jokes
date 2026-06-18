import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'package.config.ts', '**/*.js'],
  },
  ...compat.config({
    root: true,
    env: {
      node: true,
      browser: true,
    },
    extends: [
      'sanity',
      'sanity/typescript',
      'sanity/react',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:react/jsx-runtime',
    ],
  }),
]
