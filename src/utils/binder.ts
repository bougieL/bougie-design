interface IThis {
  state: object;
  setState(v: object, cb?: Tcb): void;
}

type Tcb = () => void;

export class Binder {
  private that: IThis;
  private constructor(that: IThis) {
    this.that = that;
  }
  public checkBox(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    return {
      checked: that.state[key],
      onChange: (): void => {
        that.setState((prevState: object) => { [key]: !prevState[key] }, cb);
      },
    };
  }
  public modal(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    return {
      onCancel: (): void => {
        that.setState({ [key]: false }, cb);
      },
      visible: that.state[key],
    };
  }
  public text(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    return {
      onChange: (v: string | number): void => {
        that.setState({ [key]: v }, cb);
      },
      value: that.state[key],
    };
  }
}
