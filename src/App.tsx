import { Download } from "lucide-react";
import { Logo } from "./components/Logo";
import { PluginIcon } from "./components/plugins/PluginIcon";
import { PLUGINS, type PluginEntry } from "./data/plugins";
import { pluginZipUrl, SITE } from "./data/site";

export function App() {
  const bundled = PLUGINS.filter((p) => p.bundled);
  const others = PLUGINS.filter((p) => !p.bundled);
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-5xl flex-col gap-16 px-4 py-16 sm:px-6">
      <section className="flex flex-col items-center gap-6 text-center">
        <Logo className="size-28" />
        <h1 className="font-mono text-3xl font-bold tracking-[0.12em] text-fg">hoard</h1>
        <a
          href={SITE.releases}
          className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-gold px-6 font-semibold text-ink transition-[filter] outline-none hover:brightness-110 focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <Download className="size-5" aria-hidden />
          下載 hoard {SITE.appVersion}
        </a>
        <p className="font-mono text-xs text-muted">{SITE.platform}</p>
      </section>

      <PluginGroup title="預設插件" plugins={bundled} />
      <PluginGroup title="其他插件" plugins={others} />
    </main>
  );
}

function PluginGroup({ title, plugins }: { title: string; plugins: PluginEntry[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-fg">{title}</h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {plugins.map((p) => (
          <li key={p.id}>
            <PluginCard plugin={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PluginCard({ plugin }: { plugin: PluginEntry }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg border border-ink-600 bg-ink-800 p-4">
      <div className="flex items-start gap-3">
        <PluginIcon plugin={plugin} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-fg">{plugin.name}</h3>
          <p className="mt-0.5 truncate font-mono text-xs text-muted">
            {plugin.id} · {plugin.version}
          </p>
        </div>
        <a
          href={pluginZipUrl(plugin.id, plugin.version)}
          aria-label={`下載 ${plugin.name}`}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md text-dim transition-colors outline-none hover:bg-ink-700 hover:text-fg focus-visible:ring-2 focus-visible:ring-gold/70"
        >
          <Download className="size-5" aria-hidden />
        </a>
      </div>
      <p className="text-sm leading-relaxed text-pretty text-dim">{plugin.summary}</p>
    </div>
  );
}
