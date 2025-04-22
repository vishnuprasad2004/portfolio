import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vishnu-prasad-korada.vercel.app"),
  title: "Vishnu Prasad Korada | Portfolio",
  description: "Portfolio for a developer cum designer, generated through typing and love",
  keywords: ["portfolio", "nextjs", "developer", "student", "designer", "Vishnu Prasad Korada"],
  openGraph: {
    title:"Vishnu Prasad Korada | Portfolio",
    type: "website",
    url:"vishnu-prasad-korada.vercel.app",
    siteName:"Vishnu Prasad Korada | Portfolio",
    images: [{
      url: "/Vishnu Prasad Korada DP.jpg"
    }]
  },
  twitter:{
    card:"summary_large_image",
    title:"Vishnu Prasad Korada | Portfolio",
    description:"Portfolio for a developer cum designer, generated through typing and love",
    site:"vishnu-prasad-korada.vercel.app",
    images:"/Vishnu Prasad Korada DP.jpg"
  },
  verification:{
    google: "Hs6JVVes_9Zh2mwbaAx7bKKDAB5bqNnyx7fhU5KvZ7E"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " text-white bg overflow-x-hidden"}>{children}</body>
    </html>
  );
}
