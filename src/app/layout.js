import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Poppins} from "next/font/google"

export const metadata = {
  title: "Glancee",
  description: "A movie app",
};

const poppins = Poppins({ subsets:['latin'], weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
