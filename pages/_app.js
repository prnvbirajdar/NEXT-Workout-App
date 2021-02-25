import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";
import { AuthProvider } from "../components/data/authProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
      
        <link rel="Lift Icon" type="image/png" href="/calender.png" />
        <title>Lift Workout Tracker</title>
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
