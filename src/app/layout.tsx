import type { Metadata } from "next";
import "@assets/styles/global.css";

export const metadata: Metadata = {
  title: "visual-tweak",
  description: "Make image operations through easy ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
