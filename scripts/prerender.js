const path = require('path')
const {
  createSPAServer,
  renderUrlsToString,
  getRelativePathFromUrl,
  getUrlsFromSite,
  writeFile
} = require('@bougiel/puppeteer-prerenderer')

const dist = path.resolve(__dirname, '../.docz/bougie-design')
const port = 3003
const base = '/bougie-design'

const server = createSPAServer({
  dist,
  port,
  base,
  onCreated: render
})

function render() {
  getUrlsFromSite(`http://localhost:${port}/bougie-design`, urls => {
    renderUrlsToString({
      urls,
      onItemRendered(content, url) {
        const rp = getRelativePathFromUrl(url).replace(base, '')
        const p = path.join(dist, rp)
        writeFile(p, content)
      },
      onFinished() {
        server.close()
        process.exit(0)
      }
    })
  })
}
