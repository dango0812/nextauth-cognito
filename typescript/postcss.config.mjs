/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {},
    "postcss-normalize": {
      allowDuplicates: false,
    },
    "@fullhuman/postcss-purgecss": {
      content: [
        "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./app/**/*.{html,js,ts,jsx,tsx,mdx}"
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    autoprefixer: {},
  },
};

export default config;
