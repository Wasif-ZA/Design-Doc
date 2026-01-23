import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFID Inventory Tracker | MVP",
  description: "Operational dashboard for RFID-enabled reusable cups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
