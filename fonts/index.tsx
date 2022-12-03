import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: "Founders Grotesk";
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/FoundersGrotesk-Bold.otf") format("opentype")
      }

      @font-face {
        font-family: "Founders Grotesk";
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/FoundersGrotesk-Semibold.otf") format("opentype")
      }

      @font-face {
        font-family: "Founders Grotesk";
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/FoundersGrotesk-Medium.otf") format("opentype")
      }

      @font-face {
        font-family: "Founders Grotesk Bold";
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url("/fonts/FoundersGrotesk-Regular.otf") format("opentype")
      }
      `}
	/>
);

export { Fonts };
