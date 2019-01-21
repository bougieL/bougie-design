/**
 * convert style string to style object
 *
 * @export
 * @param {string} cssText
 * @returns {object}
 */
export function styleToObject(cssText: string): object {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g
  let match: any = true
  const properties = {}
  while (!!match) {
    match = regex.exec(cssText)
    if (match) {
      properties[match[1]] = match[2].trim()
    }
  }
  return properties
}

/**
 * convert style object to style string
 *
 * @export
 * @param {object} properties
 * @returns {string}
 */
export function objectToStyle(properties: object): string {
  let cssText: string = ''
  Object.keys(properties).forEach(key => {
    cssText += key.replace(/([A-Z])/g, '-$1').toLowerCase() + `:${properties[key]};`
  })
  return cssText
}


/**
 * append global style to style tag
 *
 * @export
 * @param {string} selector
 * @param {(object | string)} style
 */
export function appendStyle(selector:string, style: object | string): void {
  let tag = document.querySelector('style')
  if (!tag) {
    tag = document.createElement('style')
    document.head.appendChild(tag)
  }
  if (style instanceof Object) {
    style = objectToStyle(style)
  }
  tag.innerHTML = tag.innerHTML + `${selector}{${style}}`
}
