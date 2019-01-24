type TItems = Array<string | {[key: string]: boolean | null | ''} | [string]>;

export function classNames(...items: TItems): string {
  let str = '';
  (function iterator(arr: any[]): void {
    arr.forEach((v: any) => {
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
      } else {
        str += ` ${v}`;
      }
    });
  })(items);

  return str.trim();
}
