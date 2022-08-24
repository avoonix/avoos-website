import "../styles/global.css";
import "../utils/i18n";
import DefaultMeta from "../components/seo/DefaultMeta";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultMeta />
      <Component {...pageProps} />
    </>
  );
}
