import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ClaudMD — Patient Portal",
  description: "ClaudMD Unified Healthcare Patient Portal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      style={{ margin: 0, padding: 0, height: "100%" }}
    >
      <body
        className="font-sans antialiased"
        style={{ margin: 0, padding: 0, minHeight: "100dvh" }}
      >
        {children}
      </body>
    </html>
  );
}
