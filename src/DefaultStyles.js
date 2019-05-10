/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import React from "react";
import GeomanistBold from "./fonts/Geomanist/Geomanist-Bold.ttf";
import GeomanistRegular from "./fonts/Geomanist/Geomanist-Regular.ttf";
import LoraBold from "./fonts/Lora/Lora-Bold.ttf";
import LoraBoldItalic from "./fonts/Lora/Lora-BoldItalic.ttf";
import LoraItalic from "./fonts/Lora/Lora-Italic.ttf";
import LoraRegular from "./fonts/Lora/Lora-Regular.ttf";
import { colors, fontFamilies } from "./theme";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.geomanist,
              fontStyle: "normal",
              fontWeight: 800,
              src: `url(${GeomanistBold})`
            }
          }}
        />
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.geomanist,
              fontStyle: "normal",
              fontWeight: 400,
              src: `url(${GeomanistRegular})`
            }
          }}
        />
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.lora,
              fontStyle: "normal",
              fontWeight: 800,
              src: `url(${LoraBold})`
            }
          }}
        />
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.lora,
              fontStyle: "italic",
              fontWeight: 800,
              src: `url(${LoraBoldItalic})`
            }
          }}
        />
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.lora,
              fontStyle: "italic",
              fontWeight: 400,
              src: `url(${LoraItalic})`
            }
          }}
        />
        <Global
          styles={{
            "@font-face": {
              fontFamily: fontFamilies.lora,
              fontStyle: "normal",
              fontWeight: 400,
              src: `url(${LoraRegular})`
            }
          }}
        />
        <Global
          styles={{
            "html, body": {
              padding: 0,
              margin: 0,
              minHeight: "100%",
              height: "100%",
              width: "100%",
              fontFamily: fontFamilies.lora,
              fontWeight: 400,
              color: colors.colorGlobal,
              backgroundColor: colors.backgroundGlobal
            },
            "#root": {
              minHeight: "100%",
              height: "100%"
            },
            "*, *:before, *:after": {
              boxSizing: "border-box",
              margin: 0,
              padding: 0
            },
            a: {
              textDecoration: "none",
              opacity: 0.8,
              color: colors.colorHighlight,
              transition: "opacity 300ms ease-in",
              "&:hover": {
                opacity: 1
              }
            }
          }}
        />
      </>
    );
  }
}
