import tailwind from "bun-plugin-tailwind";
import { cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

await rm("dist", { recursive: true, force: true });

const result = await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "dist",
  minify: true,
  sourcemap: "linked",
  plugins: [tailwind],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}
for (const out of result.outputs) console.log(`${out.path}  ${(out.size / 1024).toFixed(1)} KB`);

// Files served as they are (public/plugins/: the plugin catalog and zips).
if (existsSync("public")) await cp("public", "dist", { recursive: true });
