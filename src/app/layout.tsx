import type { Metadata } from "next";
import type { ReactNode } from "react";

// import styles for fonts
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

/**
 *  Styling for MUI components using theme
 */
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// nextjs optimization
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// vercel site performance and analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

import { auth } from "@/auth";
import LogoutBtn from "@/ui/components/LogoutBtn";

export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gokart_favicon/favicon.ico" sizes="any" />
      </head>
      <GoogleTagManager gtmId="GTM-aaaaa99" />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {session && <LogoutBtn />}
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
