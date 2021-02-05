import "../styles/globals.css";
import { Windmill } from "@windmill/react-ui";
import myTheme from "../components/StyleChanges/myTheme";

function MyApp({ Component, pageProps }) {
  return (
    <Windmill usePreferences theme={myTheme}>
      <Component {...pageProps} />
    </Windmill>
  );
}

export default MyApp;
