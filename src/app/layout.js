import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navbar/Navbar";
import {Montserrat} from 'next/font/google'
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import BootstrapLoader from "../components/bootstrap/BootstrapLoader";
const bodyfont = Montserrat({ subsets: ["latin"],weight:['400','700','900'] });

export const metadata = {
  title: "MOHAMED RGUIG",
  description: "Generated by MedCoding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyfont.className}>
       <ThemeProvider>  
        <div className="container">       
           <Navbar/>
           <BootstrapLoader /> 
        {children}
           <Footer />
        </div>  
        </ThemeProvider>             
        </body>
        
    </html>
  );
}
