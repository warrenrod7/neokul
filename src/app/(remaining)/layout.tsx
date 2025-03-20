import SideNavBar from '../../components/SideNavbar';
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
      <body className="flex h-screen">
        {/* Sidebar on the left with a fixed width */}
        <aside className="w-64 h-full  text-white fixed">
          <SideNavBar />
        </aside>

        {/* Main content area, with margin-left equal to sidebar width */}
        <main className="flex-1 p-4 ml-64 bg-white h-full overflow-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
