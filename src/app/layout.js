
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Surhires | Better Hires. Brighter Futures.",
    template: "%s | Surhires",
  },
  description:
    "Discover career opportunities and connect with exceptional talent on Surhires.",
  openGraph: {
    title: "Surhires | Better Hires. Brighter Futures.",
    description:
      "Find your next opportunity or hire your next great teammate.",
    siteName: "Surhires",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
