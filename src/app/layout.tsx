import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'; 
import ThemeComponent from "@/theme/ThemeComponent";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeeTalk",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeComponent>
            {children}
          </ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
