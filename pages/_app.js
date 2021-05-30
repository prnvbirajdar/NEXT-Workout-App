import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";
import { AuthProvider } from "../components/data/authProvider";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <title>Lift Workout App</title>
        <meta name="Description" content="This is a home page of my website!" />
        <meta name="title" property="og:title" content="Lift Workout App" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51211255247_6d6db32267_k.jpg" />
        <meta name="description" property="og:description" content="Lift Workout App" />
        <meta name="author" content="Pranav Birajdar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="Lift Icon" type="image/ico" href="/dumbell.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthProvider>
        <Windmill usePreferences theme={myTheme}>
          <Component {...pageProps} />
        </Windmill>
      </AuthProvider>
    </React.Fragment>
  );
}

export default MyApp;
