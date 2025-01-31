import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      babelHelpers: "bundled",
    }),
  ],
  external: ["react", "react-native"],
};
