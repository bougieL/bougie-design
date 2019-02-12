type TCb = (evt: Event) => void;

type TEl = HTMLElement | Document | Window;

export function attachEvent(el: TEl, type: string, callback: TCb, useCapture: boolean = false): { remove(): void } {
  el.addEventListener(type, callback, useCapture);

  return {
    remove(): void {
      el.removeEventListener(type, callback);
    },
  };
}

export function removeEvent(el: TEl, type: string, callback: TCb): void {
  el.removeEventListener(type, callback);
}

export function clickOutSide(el: TEl, callback: TCb): { remove(): void } {
  function stopPropagation(evt: Event): void {
    evt.stopPropagation();
  }
  attachEvent(el, 'click', stopPropagation);
  attachEvent(document, 'click', callback);

  return {
    remove(): void {
      removeEvent(el, 'click', stopPropagation);
      removeEvent(document, 'click', callback);
    },
  };
}
