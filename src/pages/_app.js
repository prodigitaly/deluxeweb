import AuthGuard from "src/@core/components/auth/AuthGuard";
import GuestGuard from "src/@core/components/auth/GuestGuard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/@core/context/settingContext";
import { AuthProvider } from "src/context/AuthContext";
import { ServicesContextProvider } from "src/context/ServicesContext";
import "styles/globals.css";
import Layout from "../components/Layout";
import UserLayout from "../layouts/UserLayout";
import LoadingSpinner from "../components/LoadingSpinner";
import TagManager from "react-gtm-module/dist/TagManager";
import Head from "next/head";

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<>Loading.....</>}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return (
      <AuthGuard
        fallback={
          <div className="flex h-screen items-center justify-center">
            <LoadingSpinner />
          </div>
        }>
        {children}
      </AuthGuard>
    );
  }
};

function MyApp({ Component, pageProps }) {
  // Variables
  const document = typeof window !== "undefined" ? window.document : null;
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>);
  const router = useRouter();
  const setConfig = Component.setConfig ?? undefined;
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  // const aclAbilities = Component.acl ?? defaultACLObj

  const tagManagerArgs = {
    gtmId: "GTM-PTVXNHJ7",
  };
  if (document) {
    TagManager.initialize(tagManagerArgs);
  }
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: "page_view",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href="sparkleup.us, www.sparkleup.us/" /> */}
      </Head>
      <AuthProvider>
        <ServicesContextProvider>
          <SettingsProvider
            {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <Layout>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      {getLayout(<Component {...pageProps} />)}
                    </Guard>
                  </Layout>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </ServicesContextProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
