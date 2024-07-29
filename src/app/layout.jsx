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
  title: {
    default: "Welcome to Spectrum Consults | Expert Consulting Services",
    template: "%s | Spectrum Consults",
  },
  description:
    "Discover Spectrum Consults, your trusted business and marketing consulting services partner. Let us help you achieve your business goals with tailored solutions.",
  openGraph: {
    title: {
      default: "Welcome to Spectrum Consults | Expert Consulting Services",
      template: "%s | Spectrum Consults",
    },
    description:
      "Discover Spectrum Consults, your trusted business and marketing consulting services partner. Let us help you achieve your business goals with tailored solutions.",
    images: "https://spectrumconsults.io/images/meta.png",
  },
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
