import type { Preview } from "@storybook/web-components";
import "../src/index.css";
import "../src/main";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
