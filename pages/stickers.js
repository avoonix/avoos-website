import { mdiArrowLeft } from "@mdi/js";
import MaskedDiv from "../components/common/MaskedDiv";
import NarrowSection from "../components/common/NarrowSection";
import WideHeader from "../components/common/WideHeader";
import IconLink from "../components/IconLink";
import Layout from "../components/Layout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { Contact } from "../components/stickers/Contact";
import FlexSection from "../components/stickers/FlexSection";
import { Flex, MaskContainer, SectionHeading, Spacer } from "../components/stickers/misc";
import { getFileBySlug } from "../lib/blog";
import { callLeftSvg, callRightSvg, createSvgUrl, footerSvg, pawsSvg, tabletSvg } from "../svg";

export default function Stickers({ terms, faq }) {
  const title = "Furry Telegram Sticker Set";
  const description = `Hello, I'm Avoonix. I'm a software engineer, and I also like to draw from time to time. While one of my goals is to get better at drawing, I also want to make Telegram stickers accessable to more people.`;
  return (
    <Layout fullWidth meta={{ title, description }}>
      <WideHeader title={title} description={description} />

      <Spacer />

      <FlexSection
        right={
          <MaskContainer>
            <MaskedDiv
              style={{
                width: "100%",
                height: "150px",
              }}
              maskImage={createSvgUrl(pawsSvg)}
            />
          </MaskContainer>
        }
        padded
        center={
          <>
            <SectionHeading>FAQ</SectionHeading>
            <MarkdownRenderer source={faq.mdxSource} />
          </>
        }
      />

      <Spacer />

      <FlexSection
        left={
          <MaskedDiv
            style={{
              width: "min(200px, 100%)",
              height: "100%",
              right: 0,
              position: "absolute",
            }}
            maskImage={createSvgUrl(callLeftSvg)}
          />
        }
        right={
          <MaskedDiv
            style={{
              width: "min(200px, 100%)",
              height: "100%",
              left: 0,
              position: "absolute",
            }}
            maskImage={createSvgUrl(callRightSvg)}
          />
        }
        center={
          <div
            className="invert-background"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 8,
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                margin: "8px 0",
              }}
            >
              Questions or concerns? Contact me on Telegram or Twitter.
            </div>
            <Contact />
          </div>
        }
      />

      <Spacer />

      <FlexSection
        left={
          <MaskContainer>
            <MaskedDiv
              style={{
                width: "100%",
                height: "150px",
              }}
              maskImage={createSvgUrl(tabletSvg)}
            />
          </MaskContainer>
        }
        padded
        center={
          <>
            <SectionHeading>Terms</SectionHeading>
            <MarkdownRenderer source={terms.mdxSource} />
          </>
        }
      />

      <Flex>
        <div className="no-select">
          <MaskedDiv
            style={{
              width: "100%",
              height: "200px",
            }}
            maskImage={createSvgUrl(footerSvg)}
          />
        </div>
        <div className="invert-background">
          <NarrowSection>
            <Contact />
            <IconLink href="/" iconPath={mdiArrowLeft} text="Home" inverted dense />
          </NarrowSection>
        </div>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const terms = await getFileBySlug("misc", "terms");
  const faq = await getFileBySlug("misc", "faq");

  return { props: { terms, faq } };
}
