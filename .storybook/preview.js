import { SerotoninProvider } from "../src/provider/SerotoninProvider";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <SerotoninProvider>
      <Story />
    </SerotoninProvider>
  ),
];
