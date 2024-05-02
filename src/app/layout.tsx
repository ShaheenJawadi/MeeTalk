import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeComponent from "@/theme/ThemeComponent";
import { Provider } from 'react-redux'
import { store } from "@/store";
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
        <Provider store={store}>
          <AppRouterCacheProvider >
            <ThemeComponent>
              {children}
            </ThemeComponent>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
