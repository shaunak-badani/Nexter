import type { Metadata } from "next";
import "./globals.scss";
import { Josefin_Sans, Nunito } from 'next/font/google';

export const josefin = Josefin_Sans({
  variable: '--font-josefin',
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  // subsets: ['latin'],
  // display: 'swap',
});

export const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['300'],
  style: ['normal', 'italic'],
  // subsets: ['latin'],
  // display: 'swap',
});



export const metadata: Metadata = {
  title: `nexter \u2014 your home, your freedom`,
  description: "Nexter in Next JS \u2014 a template from the course Advanced CSS and Sass by Jonas Schmedtmann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i" rel="stylesheet" />
        
      </head>
      <body className={[nunito.variable, josefin.variable].join(' ')}>{children}</body>
    </html>
  );
}
