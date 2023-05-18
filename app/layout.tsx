import "./globals.css";
import { Inter } from "next/font/google";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import ActiveStatus from "./components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger App",
  description: "A seamless messaging platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
