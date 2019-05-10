/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";
import { colors } from "../theme";

const spin = keyframes`
    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
`;

const Loader = ({ size = 100, larger = 8, loopDuration = 700 }) => {
  return (
    <div
      css={{
        animation: `${spin} ${loopDuration}ms linear infinite`,
        border: `${larger}px solid rgba(255, 255, 255, 0.1)`,
        borderTop: `${larger}px solid ${colors.colorGlobal}`,
        borderRadius: "50%",
        height: size,
        width: size
      }}
    />
  );
};

export default Loader;
