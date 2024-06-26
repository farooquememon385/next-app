import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Farooq</title>
      </head>
      <body className={inter.className}> 
        <div className = "container">
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
