import { ThemeProvider } from "styled-components";
import { SerotoninProvider } from "../src/provider/SerotoninProvider";
import { defaultTheme } from "../src/themes/default";
import { darkTheme } from "../src/themes/dark";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: defaultTheme,
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: defaultTheme, title: "Default" },
        { value: darkTheme, title: "Dark" },
        { value: cobainTheme, title: "Cobain" },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => (
    <SerotoninProvider
      requiredChainId={4}
      magicApiKey="pk_test_EA065FCFB2F28E01"
    >
      {/* Override theme using regular styled-components ThemeProvider instead of using SerotoninProvider `themes` paradigm with theme-switching functionality that is hard to wire up here. */}
      <ThemeProvider theme={context.globals.theme}>
        <div
          style={{
            background: context.globals.theme.backgroundColor,
            padding: "1rem",
            minHeight: "90vh",
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    </SerotoninProvider>
  ),
];
