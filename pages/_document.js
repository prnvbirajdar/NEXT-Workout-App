import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Lift Workout App</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="Lift Icon" type="image/ico" href="/db.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// <link rel="Lift Icon" type="image/png" href="/calender.png" />
