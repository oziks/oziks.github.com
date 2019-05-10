/** @jsx jsx */
import { jsx } from "@emotion/core";
import { fontFamilies } from "../theme";
import { formatDate } from "../helpers/date";

const Work = ({ company, position, startDate, endDate, highlights }) => {
  return (
    <div
      css={{
        marginBottom: 36,
        "&:last-child": {
          marginBottom: 0
        }
      }}
    >
      <div
        css={{
          fontFamily: fontFamilies.geomanist,
          fontWeight: 800,
          lineHeight: "40px",
          fontSize: 20
        }}
      >
        <span
          css={{
            color: "rgba(0, 0, 0, 0.8)"
          }}
        >
          {company} / {position}
        </span>
        <span
          css={{
            color: "rgba(0, 0, 0, 0.4)"
          }}
        >
          &nbsp;/&nbsp;
          {`${formatDate(new Date(startDate))} à ${formatDate(
            new Date(endDate)
          )}`}
        </span>
      </div>
      <div
        css={{
          fontStyle: "italic",
          lineHeight: "28px",
          makrginBottom: 6
        }}
        dangerouslySetInnerHTML={{ __html: highlights.join(" ") }}
      />
    </div>
  );
};

export default Work;
