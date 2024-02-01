import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'React fudamentals',
  description: 'learn to create a react app using a next framework',
  keywords: 'HTML,CSS,JavaScript'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-[90vh]'>

          <h1>fundamentals of React JS</h1>
        {children}
        </div>

        <Footer />
        </body>
    </html>
  );
}
