type TItem = string | {[key: string]: boolean | null | '' | undefined} | [string] | undefined | null;

export function classNames(...items: TItem[]): string {
  let str = '';
  (function iterator(arr: TItem[]): void {
    arr.forEach((v: TItem) => {
      if (Array.isArray(v)) {
        iterator(v);
      } else if (v instanceof Object) {
        Object.keys(v)
        .forEach((key: string) => {
          const val = v[key];
          if (val) {
            str += ` ${key}`;
          }
        });
      } else if (v) {
        str += ` ${v}`;
      }
    });
  })(items);

  return str.trim();
}
