import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import bundleCss from "!raw-loader!../styles/critical.css";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={process.env.NEXT_PUBLIC_I18N_LOCALE}>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...page,
      ...initialProps,
      styles: [
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: bundleCss,
          }}
        />,
        ...initialProps.styles,
      ],
      styleTags,
    };
  }
}
