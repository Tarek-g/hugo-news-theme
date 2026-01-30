/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./hugo_stats.json", "./layouts/**/*.html", "./content/**/*.md", "./themes/**/layouts/**/*.html"],
    safelist: [
        'animate-marquee',
        'animate-fade-up',
        'animate-fade-in',
        'animate-scale-in',
        'animate-float',
        'animate-shimmer',
        'stagger-container',
        'glass',
        'glass-card',
        'glass-elevated',
        'neon-text',
        'neon-box',
        'neon-border',
        'hover-glow',
        'hover-lift',
        'spring-hover',
        'tech-grid',
        'glow-pulse',
        'skeleton',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Glass colors
                glass: {
                    bg: "var(--glass-bg)",
                    border: "var(--glass-border)",
                    hover: "var(--glass-hover)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
                display: ["'Playfair Display'", "serif"],
                mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'scale-in': {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px var(--accent-alpha-40)' },
                    '50%': { boxShadow: '0 0 40px var(--accent-alpha-40), 0 0 60px var(--accent-alpha-20)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'scale-in': 'scale-in 0.4s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                float: 'float 3s ease-in-out infinite',
                shimmer: 'shimmer 2s infinite',
            },
            boxShadow: {
                'glow': '0 0 20px var(--accent-alpha-40)',
                'glow-lg': '0 0 40px var(--accent-alpha-40), 0 0 60px var(--accent-alpha-20)',
                'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
}
