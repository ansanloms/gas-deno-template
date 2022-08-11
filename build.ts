import { build, stop } from "esbuild/mod.js";
import GasPlugin from "esbuild-gas-plugin/mod.ts";
import httpFetch from "esbuild_plugin_http_fetch/index.js";

await build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: "dist/bundle.js",
  plugins: [httpFetch, GasPlugin],
});
stop();
