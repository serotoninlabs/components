import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: ["src/index.ts", "src/cards/index.ts"],
  output: [
    {
      dir: "dist/module",
      format: "es",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
    {
      dir: "dist/node",
      format: "cjs",
      sourcemap: true,
      globals: {
        react: "React",
      },
    },
  ],
  external: ["react", "styled-components"],
  plugins: [nodeResolve(), commonjs(), typescript(), image()],
};