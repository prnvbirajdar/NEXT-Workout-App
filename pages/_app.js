import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";
import { AuthProvider } from "../components/data/authProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Windmill usePreferences theme={myTheme}>
        <Component {...pageProps} />
      </Windmill>
    </AuthProvider>
  );
}

export default MyApp;
