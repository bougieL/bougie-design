type TCb = (evt: Event) => void;

type TEl = HTMLElement | Document;

export function attachEvent(el: TEl, type: string, callback: TCb): void {
  el.addEventListener(type, callback);
}
