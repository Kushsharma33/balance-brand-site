
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
				// Warm, soft colors matching the reference
				warm: {
					50: 'hsl(45, 20%, 97%)',
					100: 'hsl(45, 18%, 94%)',
					200: 'hsl(45, 15%, 90%)',
					300: 'hsl(40, 18%, 85%)',
					400: 'hsl(35, 20%, 78%)',
					500: 'hsl(35, 25%, 70%)',
					600: 'hsl(30, 22%, 62%)',
					700: 'hsl(25, 20%, 54%)',
					800: 'hsl(25, 18%, 45%)',
					900: 'hsl(25, 15%, 35%)'
				},
				neutral: {
					50: 'hsl(40, 15%, 96%)',
					100: 'hsl(40, 12%, 92%)',
					200: 'hsl(35, 10%, 87%)',
					300: 'hsl(35, 12%, 82%)',
					400: 'hsl(30, 10%, 72%)',
					500: 'hsl(30, 8%, 62%)',
					600: 'hsl(25, 8%, 52%)',
					700: 'hsl(25, 6%, 42%)',
					800: 'hsl(25, 8%, 32%)',
					900: 'hsl(25, 10%, 25%)'
				},
				soft: {
					50: 'hsl(50, 25%, 97%)',
					100: 'hsl(50, 20%, 94%)',
					200: 'hsl(45, 18%, 89%)',
					300: 'hsl(45, 20%, 83%)',
					400: 'hsl(40, 18%, 76%)',
					500: 'hsl(35, 20%, 68%)',
					600: 'hsl(30, 18%, 60%)',
					700: 'hsl(25, 16%, 52%)',
					800: 'hsl(25, 12%, 42%)',
					900: 'hsl(25, 10%, 32%)'
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
