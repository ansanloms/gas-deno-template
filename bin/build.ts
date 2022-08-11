import * as path from "std/path/mod.ts";
import { build, stop } from "esbuild/mod.js";
import GasPlugin from "esbuild-gas-plugin/mod.ts";
import httpFetch from "esbuild_plugin_http_fetch/index.js";

const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

await build({
  entryPoints: [path.join(__dirname, "../src/main.ts")],
  bundle: true,
  outfile: path.join(__dirname, "../dist/bundle.js"),
  plugins: [httpFetch, GasPlugin],
});
stop();
