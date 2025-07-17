
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
				// Custom VEDYO colors
				beige: {
					50: 'hsl(44, 40%, 98%)',
					100: 'hsl(44, 30%, 96%)',
					200: 'hsl(44, 25%, 94%)',
					300: 'hsl(44, 20%, 88%)',
					400: 'hsl(44, 18%, 82%)',
					500: 'hsl(44, 16%, 76%)',
					600: 'hsl(44, 14%, 65%)',
					700: 'hsl(44, 12%, 55%)',
					800: 'hsl(44, 10%, 45%)',
					900: 'hsl(44, 8%, 35%)'
				},
				green: {
					50: 'hsl(79, 60%, 95%)',
					100: 'hsl(79, 55%, 90%)',
					200: 'hsl(79, 50%, 80%)',
					300: 'hsl(79, 45%, 74%)',
					400: 'hsl(79, 42%, 68%)',
					500: 'hsl(79, 38%, 64%)',
					600: 'hsl(79, 35%, 58%)',
					700: 'hsl(79, 32%, 52%)',
					800: 'hsl(79, 28%, 46%)',
					900: 'hsl(79, 24%, 40%)'
				},
				saffron: {
					50: 'hsl(41, 95%, 95%)',
					100: 'hsl(41, 90%, 88%)',
					200: 'hsl(41, 88%, 82%)',
					300: 'hsl(41, 86%, 76%)',
					400: 'hsl(41, 86%, 70%)',
					500: 'hsl(41, 84%, 64%)',
					600: 'hsl(41, 80%, 58%)',
					700: 'hsl(41, 76%, 52%)',
					800: 'hsl(41, 72%, 46%)',
					900: 'hsl(41, 68%, 40%)'
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
