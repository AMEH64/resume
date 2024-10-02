/** @type {import("prettier").Config} */
export default {
  arrowParens: 'avoid',
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
