import { Inter, Lusitana } from "next/font/google"
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-lusitana'
})

export const vazirmatnRegular = localFont({
  src: '../../public/fonts/vazir/Vazirmatn-Regular.woff2',
  display: 'swap',
  variable: '--font-Vazirmatn-Regular'
})

export const vazirmatnMedium = localFont({
  src: '../../public/fonts/vazir/Vazirmatn-Medium.woff2',
  display: 'swap',
  variable: '--font-Vazirmatn-Medium'
})

export const vazirmatnBold = localFont({
  src: '../../public/fonts/vazir/Vazirmatn-Bold.woff2',
  display: 'swap',
  variable: '--font-Vazirmatn-Bold'
})