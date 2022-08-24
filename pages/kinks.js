import Layout from "../components/Layout";
import IconLink from "../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import KinkList, { getColor, getName } from "../components/KinkList";
import { kinks } from "../lib/kinks";
import Head from "next/head";

export default function Home() {
  const title = "Kink List"
  return (
    <Layout
      meta={{
        title,
      }}
    >
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text="Home" />
      </div>
      <div>
        <h1>{title}</h1>
      </div>

      <table>
        <tbody>
          <tr>
            <td>-</td>
            <td>No answer/don't care/don't know</td>
          </tr>
          <tr>
            <td style={{ color: getColor(false) }}>{getName(false)}</td>
            <td>Will not do</td>
          </tr>
          <tr>
            <td style={{ color: getColor(0) }}>{getName(0)}</td>
            <td>Will maybe do, depending on the circumstances</td>
          </tr>
          <tr>
            <td>{getName(1)}</td>
            <td>Not interested but will oblige if requested</td>
          </tr>
          <tr>
            <td>{getName(2)}</td>
            <td>Okay, but don't enjoy</td>
          </tr>
          <tr>
            <td>{getName(3)}</td>
            <td>Neither like nor dislike</td>
          </tr>
          <tr>
            <td style={{ color: getColor(4) }}>{getName(4)}</td>
            <td>Enjoy and want to do often</td>
          </tr>
          <tr>
            <td style={{ color: getColor(5) }}>{getName(5)}</td>
            <td>Really want to do as much as possible</td>
          </tr>
        </tbody>
      </table>

      <KinkList kinks={kinks} />
    </Layout>
  );
}
