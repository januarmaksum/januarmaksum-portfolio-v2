import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'neo-theme inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-neo text-sm font-neo-base ring-offset-neo-secondary transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-neo-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border-2 border-neo-border bg-neo-main text-neo-main-foreground shadow-neo hover:translate-x-neo-shadow-x hover:translate-y-neo-shadow-y hover:shadow-none',
        noShadow:
          'border-2 border-neo-border bg-neo-main text-neo-main-foreground',
        neutral:
          'border-2 border-neo-border bg-neo-secondary text-neo-foreground shadow-neo hover:translate-x-neo-shadow-x hover:translate-y-neo-shadow-y hover:shadow-none',
        reverse:
          'border-2 border-neo-border bg-neo-main text-neo-main-foreground hover:-translate-x-neo-shadow-x hover:-translate-y-neo-shadow-y hover:shadow-neo',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
export type ButtonVariants = VariantProps<typeof buttonVariants>
