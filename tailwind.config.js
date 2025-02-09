/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via a CSS class
  theme: {
    extend: {
      colors: {
        "sky-blue": "#3B82F6",
        "ocean-blue": "#2563EB",
        "sunset-orange": "#F97316",
        "golden-yellow": "#FACC15",
        "earth-green": "#10B981",
        "sand-beige": "#EAB308",
        "mountain-gray": "#64748B",
        "forest-green": "#065F46",
        black: "#000",
        white: "#FFFFFF",
        "Mint-gray": "#D3D3D3",
        yellow: "#FFFF00",
      },
      screens: {
        sm: "640px", // small devices (landscape phones)
        md: "768px", // tablets (portrait and landscape)
        lg: "1024px", // larger tablets and desktops
        xl: "1280px", // large screens (laptops, high-res monitors)
        xxl: "1536px", // extra large screens
        mobile: "687px", // custom breakpoint for mobile 687px
      },
    },
  },
  plugins: [],
};
