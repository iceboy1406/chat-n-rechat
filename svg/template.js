const path = require("path")

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const formattedBaseName = (() => {
      if (filePath.includes("icon")) return `Svg${basename}Icon`
      if (filePath.includes("illustration")) return `Svg${basename}Illustration`
      if (filePath.includes("logo")) return `Svg${basename}Logo`
      return basename
    })()
    const exportName = formattedBaseName
    return `export { default as ${exportName} } from './${basename}'`
  })
  return exportEntries.join("\n")
}

module.exports = defaultIndexTemplate
