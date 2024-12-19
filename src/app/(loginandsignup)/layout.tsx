import '../globals.css';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Neokul",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        
        <main className="flex-1 p-4 h-screen w-screen bg-gray-300">
          {children}
        </main>
      </body>
    </html>
  );
}
