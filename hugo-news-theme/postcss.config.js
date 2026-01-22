const path = require("path");

module.exports = {
    plugins: {
        // Explicitly point to the theme-local Tailwind config so Hugo/PostCSS
        // pick it up regardless of the working directory.
        tailwindcss: { config: path.join(__dirname, "tailwind.config.cjs") },
        autoprefixer: {},
    },
}
