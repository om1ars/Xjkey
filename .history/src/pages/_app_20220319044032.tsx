import "@/css/fonts.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
//
import "@/css/main.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import DefaultLayout from "@/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider attribute="class" defaultTheme="system">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
