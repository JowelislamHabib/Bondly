import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import FriendProvider from "@/context/FriendsContext";
import TimelineProvider from "@/context/TimelineContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bondly — Keep Your Network Alive",
  description:
    "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
  icons: {
    icon: "/assets/bondly.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased)`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <NavBar />
        </header>
        <FriendProvider>
          <TimelineProvider>{children}</TimelineProvider>
        </FriendProvider>
      </body>
    </html>
  );
}
