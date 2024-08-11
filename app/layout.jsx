import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
const inter = Inter({ subsets: ["latin"] });
import {Toaster} from "react-hot-toast"
export const metadata = {
  title: "Rate My Uni",
  description: "A website to rate Ethiopian universities",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={inter.className}>
          <MantineProvider theme={theme}>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
