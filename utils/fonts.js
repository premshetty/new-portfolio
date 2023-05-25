import { Raleway, Inter } from 'next/font/google';

const RalewayFont = Raleway({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-sans',
});
const inter = Inter({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-sans',
});

export const RalewayFontClass = RalewayFont.variable;
export const interFontClass = inter.variable;
