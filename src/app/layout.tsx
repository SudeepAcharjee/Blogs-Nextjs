import Navbar from '@/lib/components/NavigationBar';
import { darkTheme, lightTheme } from '../lib/themes/SiteThemes';
import './globals.css';
import * as gtag from './gtag';
import NavigationBar from '@/lib/components/NavigationBar';
import Footer from '@components/Footer';
import FullscreenContainer from '@components/FullscreenContainer';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Sudeep Acharjee's Software Development Blog",
  description:
    "Sudeep Acharjee's Software Development Blog. Here I cover software some tips and tricks.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <head>
        
      </head>
      <body>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <FullscreenContainer>
            <Container>
              {/* <Navbar /> */}
              {children}
              <Footer />
            </Container>
          </FullscreenContainer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
