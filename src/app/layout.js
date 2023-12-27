import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Media Holding",
  description: "Media Holding Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
