import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vishnu-prasad-korada.vercel.app"),
  title: "Vishnu Prasad Korada | Portfolio",
  description: "Portfolio for a developer cum designer, generated through typing and love",
  keywords: ["portfolio", "nextjs", "developer", "student", "designer"],
  openGraph: {
    title:"Vishnu Prasad Korada | Portfolio",
    type: "website",
    url:"portfolio-vishnu-prasad-korada.vercel.app",
    siteName:"Vishnu Prasad Korada | Portfolio",
    images: [{
      url: "/Vishnu Prasad Korada DP.jpg"
    }]
  },
  twitter:{
    card:"summary_large_image",
    title:"Vishnu Prasad Korada | Portfolio",
    description:"Portfolio for a developer cum designer, generated through typing and love",
    site:"portfolio-vishnu-prasad-korada.vercel.app",
    images:"/Vishnu Prasad Korada DP.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg overflow-x-hidden"}>{children}</body>
    </html>
  );
}
