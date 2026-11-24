/** Facts and links used across the site. Change them here. */
export const SITE = {
  appVersion: "0.1.0",
  platform: "Windows 10 / 11",
  /** Public repository whose GitHub Releases hold the installer. */
  releases: "https://github.com/VoidSalamander/hoard-releases/releases/latest",
};

/**
 * A plugin zip on this site: `public/plugins/` holds what `bun run pack:plugins
 * --out ../hoard-site/public/plugins` writes in the hoard repo (zips, .sig,
 * index.json). The App's 「取得插件」 reads that index.json at
 * https://hoard.voidsalamander.com/plugins/index.json (hoard's catalog.rs).
 */
export function pluginZipUrl(id: string, version: string): string {
  return `plugins/${id}-${version}.zip`;
}
