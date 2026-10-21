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
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				jakarta: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				// Tokens de docs/DESIGN.md (home v2). `primary`/`secondary` se sobreescriben por CSS var dentro de .home-v2
				'surface': '#090A0F',
				'surface-dim': '#090A0F',
				'surface-bright': '#262B3A',
				'surface-variant': '#1E2230',
				'surface-tint': '#FB7185',
				'surface-container-lowest': '#06070B',
				'surface-container-low': '#11131A',
				'surface-container': '#181B24',
				'surface-container-high': '#1E2230',
				'surface-container-highest': '#272C3B',
				'on-surface': '#FFFFFF',
				'on-surface-variant': '#94A3B8',
				'on-background': '#FFFFFF',
				'inverse-surface': '#FFFFFF',
				'inverse-on-surface': '#090A0F',
				'outline': '#64748B',
				'outline-variant': '#2A2F3D',
				'inverse-primary': '#be0037',
				'on-primary': '#4C0519',
				'primary-container': '#e11d48',
				'on-primary-container': '#FFFFFF',
				'primary-fixed': '#ffdada',
				'primary-fixed-dim': '#ffb3b6',
				'on-primary-fixed': '#40000c',
				'on-primary-fixed-variant': '#920028',
				'on-secondary': '#670020',
				'secondary-container': '#9F1239',
				'on-secondary-container': '#FDA4AF',
				'secondary-fixed': '#ffd9dc',
				'secondary-fixed-dim': '#ffb2ba',
				'on-secondary-fixed': '#400010',
				'on-secondary-fixed-variant': '#910130',
				'tertiary': '#FB7185',
				'on-tertiary': '#67001f',
				'tertiary-container': '#c5485d',
				'on-tertiary-container': '#fffaf9',
				'tertiary-fixed': '#ffdadc',
				'tertiary-fixed-dim': '#ffb2b9',
				'on-tertiary-fixed': '#400010',
				'on-tertiary-fixed-variant': '#891933',
				'error': '#ffb4ab',
				'on-error': '#690005',
				'error-container': '#7F1D1D',
				'on-error-container': '#ffdad6',
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
				labora: {
					red: '#e94964',
					'red-hover': '#ff5a76',
					white: '#ffffff',
					dark: '#0a0b0d',
					neon: '#c1ff72',
					'neon-hover': '#d4ff96',
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
				}
			},
			fontSize: {
				'badge-caps': ['11px', { lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }],
				'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '600' }],
				'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
				'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
				'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
				'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
				'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '600' }],
				'headline-md': ['22px', { lineHeight: '30px', letterSpacing: '-0.015em', fontWeight: '600' }],
				'headline-lg': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '600' }],
				'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.025em', fontWeight: '700' }],
				'display-hero-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
				'display-hero': ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '700' }],
			},
			spacing: {
				'space-xs': '0.25rem',
				'space-sm': '0.5rem',
				'space-md': '1rem',
				'space-lg': '1.5rem',
				'space-xl': '2.5rem',
				'gutter': '1.5rem',
				'gutter-mobile': '1rem',
				'margin': '2rem',
				'margin-mobile': '1.25rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow-primary': '0 0 20px rgba(233, 73, 100, 0.3)',
				'glow-secondary': '0 0 20px rgba(193, 255, 114, 0.2)',
				'neon-glow': '0 0 20px rgba(193, 255, 114, 0.4)',
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
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
