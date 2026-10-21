import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Los tamaños de texto del design system (docs/DESIGN.md) deben tratarse como font-size, no como color
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{
        text: [
          'badge-caps', 'label-sm', 'label-md', 'body-sm', 'body-md', 'body-lg',
          'headline-sm', 'headline-md', 'headline-lg', 'headline-xl',
          'display-hero-mobile', 'display-hero',
        ],
      }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
