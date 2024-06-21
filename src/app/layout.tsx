import type { Metadata } from "next";
import "@styles/global.css"

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
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
