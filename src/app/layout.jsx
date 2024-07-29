import "@/styles/base.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import { PopupsProvider } from "@/context/PopupsContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Spectrum Consults",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <PopupsProvider>
              <Preloader />
              <Header />
              <main>{children}</main>
              <Footer />
            </PopupsProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
