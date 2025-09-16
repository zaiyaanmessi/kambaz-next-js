// src/app/layout.tsx
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Labs App",
  description: "Next.js Labs project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
