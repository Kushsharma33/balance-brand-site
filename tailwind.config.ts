
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom VEDYO colors matching the ColorHunt palette
				sage: {
					50: 'hsl(120, 45%, 96%)',
					100: 'hsl(120, 40%, 92%)',
					200: 'hsl(120, 38%, 85%)',
					300: 'hsl(120, 35%, 78%)',
					400: 'hsl(120, 35%, 75%)', // A3DC9A
					500: 'hsl(120, 32%, 68%)',
					600: 'hsl(120, 28%, 58%)',
					700: 'hsl(120, 25%, 48%)',
					800: 'hsl(120, 20%, 38%)',
					900: 'hsl(120, 15%, 25%)'
				},
				lime: {
					50: 'hsl(65, 70%, 95%)',
					100: 'hsl(65, 65%, 90%)',
					200: 'hsl(65, 60%, 85%)',
					300: 'hsl(65, 55%, 80%)', // DEE791
					400: 'hsl(65, 50%, 75%)',
					500: 'hsl(65, 45%, 68%)',
					600: 'hsl(65, 40%, 58%)',
					700: 'hsl(65, 35%, 48%)',
					800: 'hsl(65, 30%, 38%)',
					900: 'hsl(65, 25%, 28%)'
				},
				cream: {
					50: 'hsl(60, 60%, 99%)',
					100: 'hsl(60, 55%, 96%)',
					200: 'hsl(60, 50%, 92%)',
					300: 'hsl(60, 50%, 87%)', // FFF9BD
					400: 'hsl(60, 45%, 82%)',
					500: 'hsl(60, 40%, 75%)',
					600: 'hsl(60, 35%, 65%)',
					700: 'hsl(60, 30%, 55%)',
					800: 'hsl(60, 25%, 45%)',
					900: 'hsl(60, 20%, 35%)'
				},
				peach: {
					50: 'hsl(25, 70%, 96%)',
					100: 'hsl(25, 65%, 92%)',
					200: 'hsl(25, 60%, 87%)',
					300: 'hsl(25, 60%, 82%)', // FFD6BA
					400: 'hsl(25, 55%, 75%)',
					500: 'hsl(25, 50%, 68%)',
					600: 'hsl(25, 45%, 58%)',
					700: 'hsl(25, 40%, 48%)',
					800: 'hsl(25, 35%, 38%)',
					900: 'hsl(25, 30%, 28%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'gentle-bounce': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'gentle-bounce': 'gentle-bounce 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
