import Head from "next/head";
import WelcomePage from "./welcome/index.page";

/**
 *
 * @returns Welcome page
 */
export default function LandingPage() {
  return (
    <>
      <Head>
      <link rel="favicon"  href="favicon.ico"/>
        <title>Limbic - AI</title>
      </Head>
      <WelcomePage />
    </>
  );
}
