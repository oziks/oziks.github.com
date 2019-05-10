/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mediaQueries } from "../theme";

const Layout = ({ ...props }) => {
  return (
    <div
      {...props}
      css={{
        maxWidth: 920,
        padding: "40px 30px",
        margin: "0 auto",
        [mediaQueries.desktop]: {
          padding: "58px 62px 30px"
        }
      }}
    />
  );
};

export default Layout;
