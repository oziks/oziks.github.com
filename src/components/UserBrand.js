/** @jsx jsx */
import { jsx } from "@emotion/core";
import { colors, fontFamilies } from "../theme";

const Loader = ({ size = 80, userName = "Morgan Brunot" }) => {
  return (
    <div css={{ height: size, display: "flex", alignItems: "center" }}>
      <img
        alt={userName}
        src={require("../images/user.jpg")}
        css={{
          width: size,
          height: size,
          borderRadius: "50%",
          marginRight: 26
        }}
      />
      <div
        css={{ color: colors.colorGlobal, fontFamily: fontFamilies.geomanist }}
      >
        {userName}
      </div>
    </div>
  );
};

export default Loader;
