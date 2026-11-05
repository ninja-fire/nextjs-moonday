import localFont from 'next/font/local'

// next/font renames the family, so CSS must use the variable, never "Clash Display Variable" by name.
export const fontclash = localFont({
    src: './ClashDisplay-Variable.woff2',
    display: 'swap',
    variable: '--font-clash',
  })
