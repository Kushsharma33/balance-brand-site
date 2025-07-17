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
				// Muted versions of VEDYO colors for subtle luxury
				sage: {
					50: 'hsl(120, 15%, 96%)',
					100: 'hsl(120, 12%, 92%)',
					200: 'hsl(120, 10%, 85%)',
					300: 'hsl(120, 12%, 78%)',
					400: 'hsl(120, 20%, 65%)', // Muted A3DC9A
					500: 'hsl(120, 18%, 58%)',
					600: 'hsl(120, 16%, 48%)',
					700: 'hsl(120, 14%, 38%)',
					800: 'hsl(120, 10%, 28%)',
					900: 'hsl(120, 8%, 20%)'
				},
				lime: {
					50: 'hsl(65, 20%, 95%)',
					100: 'hsl(65, 18%, 90%)',
					200: 'hsl(65, 16%, 85%)',
					300: 'hsl(65, 18%, 72%)', // Muted DEE791
					400: 'hsl(65, 16%, 68%)',
					500: 'hsl(65, 14%, 58%)',
					600: 'hsl(65, 12%, 48%)',
					700: 'hsl(65, 10%, 38%)',
					800: 'hsl(65, 8%, 28%)',
					900: 'hsl(65, 6%, 20%)'
				},
				cream: {
					50: 'hsl(48, 25%, 97%)',
					100: 'hsl(48, 20%, 94%)',
					200: 'hsl(48, 18%, 90%)',
					300: 'hsl(48, 20%, 85%)', // Muted FFF9BD
					400: 'hsl(48, 16%, 80%)',
					500: 'hsl(48, 14%, 72%)',
					600: 'hsl(48, 12%, 62%)',
					700: 'hsl(48, 10%, 52%)',
					800: 'hsl(48, 8%, 42%)',
					900: 'hsl(48, 6%, 32%)'
				},
				peach: {
					50: 'hsl(25, 30%, 96%)',
					100: 'hsl(25, 25%, 92%)',
					200: 'hsl(25, 22%, 87%)',
					300: 'hsl(25, 25%, 75%)', // Muted FFD6BA
					400: 'hsl(25, 20%, 70%)',
					500: 'hsl(25, 18%, 62%)',
					600: 'hsl(25, 16%, 52%)',
					700: 'hsl(25, 14%, 42%)',
					800: 'hsl(25, 12%, 32%)',
					900: 'hsl(25, 10%, 25%)'
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
