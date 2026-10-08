import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => {
    const hidden = new Set(["latest posts", "tags"]) // lowercase names
    return !hidden.has(node.displayName.toLowerCase())
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
