/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import resumeConfig from "./resume.json";
import DefaultStyle from "./DefaultStyles";
import Layout from "./components/Layout";
import UserBrand from "./components/UserBrand";
import Work from "./components/Work";
import { colors, fontFamilies, mediaQueries } from "./theme";

const Resume = () => (
  <>
    <DefaultStyle />
    <Layout>
      <div>
        <div css={{ marginBottom: 40 }}>
          <UserBrand userName={resumeConfig.basics.name} />
        </div>
        <section>
          <h1
            css={{
              marginBottom: 25,
              fontFamily: fontFamilies.geomanist,
              fontWeight: 800,
              fontSize: 40,
              lineHeight: "50px",
              [mediaQueries.desktop]: {
                fontSize: 50,
                lineHeight: "60px"
              }
            }}
          >
            {resumeConfig.basics.label}&nbsp;
            <span css={{ color: colors.colorHighlight }}>.</span>
          </h1>
          <p
            css={{
              fontFamily: fontFamilies.lora,
              fontStyle: "italic",
              lineHeight: "28px"
            }}
          >
            {resumeConfig.basics.summary}
          </p>
        </section>
      </div>
      <section css={{ marginTop: 50 }}>
        <h2
          css={{
            fontFamily: fontFamilies.geomanist,
            fontWeight: 800,
            fontSize: 30,
            lineHeight: "40px",
            marginBottom: 30
          }}
        >
          <span css={{ color: colors.colorHighlight }}>•</span> Expérience
        </h2>
        {resumeConfig.work.map(work => (
          <Work
            key={work.company}
            company={work.company}
            position={work.position}
            startDate={work.startDate}
            endDate={work.endDate}
            highlights={work.highlights}
          />
        ))}
      </section>
    </Layout>
    <Layout>
      <p css={{ fontStyle: "italic" }}>
        Mon profil vous intéresse ? Contactez moi{" "}
        <a href="mailto:brunot.morgan@gmail.com">brunot.morgan@gmail.com</a>.
      </p>
    </Layout>
  </>
);

export default Resume;
