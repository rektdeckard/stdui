import type { Preview } from "@storybook/web-components";
import "../src/theme/dynamic.css";
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
