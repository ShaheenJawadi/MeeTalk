"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeComponent from "@/theme/ThemeComponent";
import { Provider } from 'react-redux'
import { store } from "@/store";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AppRouterCacheProvider >
          <Provider store={store}>
            <ThemeComponent>
              {children}
            </ThemeComponent>
          </Provider>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
