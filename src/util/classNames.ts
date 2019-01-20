export function classNames(...items: any[]) : string {
  let str: string = '';
  (function iterator(arr: any[]) {
    arr.forEach(v => {
      if (Array.isArray(v)) {
        iterator(v)
      } else if (v instanceof Object) {
        Object.keys(v).forEach((key: string) => {
          const val = v[key]
          if ([undefined, '', null, false].indexOf(val) < 0) {
            str += ` ${key}`
          }
        })
      } else {
        str += ` ${v}`
      }
    })
  })(items)
  return str.trim()
}