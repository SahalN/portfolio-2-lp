/** @format */

import Footer from "../components/Footer";
import Header from "../components/Header";
import { inter } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='flex flex-col min-h-screen px-48 py-10 font-inter'>
        <header>
          <Header />
        </header>
        <main className='grow'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
