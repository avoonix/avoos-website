import Document, { Html, Head, Main, NextScript } from "next/document";
import bundleCss from "!raw-loader!../styles/critical.css";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={process.env.NEXT_PUBLIC_I18N_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
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
        // process.env.NODE_ENV === "production" ? (
        //   <style
        //     key="custom"
        //     dangerouslySetInnerHTML={{
        //       __html: bundleCss,
        //     }}
        //   />
        // ) : (
        //   <></>
        // ),
      ],
    };
  }
}
