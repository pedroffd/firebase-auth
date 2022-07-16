
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import "@/styles/firebaseui-styling.global.css";
import { AuthProvider } from "@/providers/auth";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...SEO} />
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          {!router.route.includes("/admin") &&
            !router.route.includes("/login")}
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
