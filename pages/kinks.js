import Layout from "../components/Layout";
import IconLink from "../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import { useTranslation } from "react-i18next";
import KinkList, { getColor } from "../components/KinkList";
import { kinks } from "../lib/kinks";
import Head from "next/head";

// todo: translations

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      meta={{
        title: t("kinks"),
      }}
    >
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text={t("home")} />
      </div>
      <div>
        <h1>{t("kinks")}</h1>
      </div>

      <table>
        <tbody>
          <tr>
            <td>-</td>
            <td>No answer/don't care/don't know</td>
          </tr>
          <tr>
            <td style={{ color: getColor(false) }}>{t("kinks.hard-limit")}</td>
            <td>Will not do</td>
          </tr>
          <tr>
            <td style={{ color: getColor(0) }}>{t("kinks.soft-limit")}</td>
            <td>Will maybe do, depending on the circumstances</td>
          </tr>
          <tr>
            <td>{t("kinks.numbered.1")}</td>
            <td>Not interested but will oblige if requested</td>
          </tr>
          <tr>
            <td>{t("kinks.numbered.2")}</td>
            <td>Okay, but don't enjoy</td>
          </tr>
          <tr>
            <td>{t("kinks.numbered.3")}</td>
            <td>Neither like nor dislike</td>
          </tr>
          <tr>
            <td style={{ color: getColor(4) }}>{t("kinks.numbered.4")}</td>
            <td>Enjoy and want to do often</td>
          </tr>
          <tr>
            <td style={{ color: getColor(5) }}>{t("kinks.numbered.5")}</td>
            <td>Really want to do as much as possible</td>
          </tr>
        </tbody>
      </table>

      <KinkList kinks={kinks} />
    </Layout>
  );
}
