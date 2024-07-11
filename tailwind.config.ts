import type { Config } from "tailwindcss";

const createPxMap = (size: number): Record<string, string> => {
  return Array.from({ length: size + 1 }, (_, i) => `${i}px`).reduce(
    (acc, val, i) => {
      acc[i] = val;
      return acc;
    },
    {} as Record<string, string>
  );
};

const px0_10 = createPxMap(10);
const px0_100 = createPxMap(100);
const px0_500 = createPxMap(500);

const config: Config = {
  darkMode: "class",
  safelist: [
    {
      pattern: /^custom-/,
    },
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_100,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_500,
      minHeight: px0_500,
      spacing: px0_500,
      keyframes: {
        buttonHover: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-10px)",
          },
        },
        floatingEmoji: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-60px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        buttonHover: "buttonHover 0.3s ease forwards",
        emojiFloating: "floatingEmoji 3s ease-in-out infinite;",
      },
      colors: {
        // white: "#ffffff",
        // "panda-blue": "#3692ff",
        // "panda-blue-hover": "#1967D6",
        // "panda-blue-active": "#1251AA",
        // red: "#f74747",
        // "gray-50": "#f7f7f8",
        // "gray-100": "#e8ebed",
        // "gray-200": "#e5e7eb",
        // "gray-400": "#9ea4a8",
        // "gray-500": "#72787f",
        // "gray-600": "#454c53",
        // "gray-800": "#26282b",
        // "gray-900": "#1b1d1f",
        // "cool-gray-50": "#F9FAFB",
        // "cool-gray-100": "#f3f4f6",
        // "cool-gray-200": "#E5E7EB",
        // "cool-gray-400": "#9ca3af",
        // "cool-gray-500": "#6b7280",
        // "cool-gray-600": "#4b5563",
        // "cool-gray-800": "#1f2937",
        // disable: "#9CA3AF",
        // error: "#f74747",
        white: "var(--color-white)",
        "panda-blue": "var(--color-panda-blue)",
        "panda-blue-hover": "var(--color-panda-blue-hover)",
        "panda-blue-active": "var(--color-panda-blue-active)",
        red: "var(--color-red)",
        "gray-50": "var(--color-gray-50)",
        "gray-100": "var(--color-gray-100)",
        "gray-200": "var(--color-gray-200)",
        "gray-400": "var(--color-gray-400)",
        "gray-500": "var(--color-gray-500)",
        "gray-600": "var(--color-gray-600)",
        "gray-800": "var(--color-gray-800)",
        "gray-900": "var(--color-gray-900)",
        "cool-gray-50": "var(--color-cool-gray-50)",
        "cool-gray-100": "var(--color-cool-gray-100)",
        "cool-gray-200": "var(--color-cool-gray-200)",
        "cool-gray-400": "var(--color-cool-gray-400)",
        "cool-gray-500": "var(--color-cool-gray-500)",
        "cool-gray-600": "var(--color-cool-gray-600)",
        "cool-gray-800": "var(--color-cool-gray-800)",
        disable: "var(--color-disable)",
        error: "var(--color-error)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      gridTemplateAreas: {
        footer: ["menus socials", "copyright copyright"],
        postInfo: ["writer favorites createdAt"],
        itemsHeader: [
          "title addButton addButton",
          "searchBar searchBar sortOption",
        ],
      },
      gridTemplateColumns: {
        postInfo: "auto auto 1fr",
        itemsHeader: "1fr 82px 42px",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;
