import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Explorer overrides.
// This install loads its plugins from npm (node_modules/@quartz-community/*), so there is
// no generated "./.quartz/plugins" folder to import from: overrides are registered directly.
// The function below is copied as text and run in the browser, so it must stay
// self-contained (no variables or helper functions from outside it).
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  // Hide the tags folder (the default behaviour) and every Obsidian Base (".base" pages)
  filterFn: (node: { slugSegment?: string }) => {
    const segment = node.slugSegment || ""
    return segment !== "tags" && !segment.endsWith(".base")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
