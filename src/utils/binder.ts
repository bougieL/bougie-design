interface IThis {
  state: object;
  setState(v: object, cb?: Tcb): void;
}

type Tcb = () => void;

export class Binder {
  private that: IThis;
  public constructor(that: IThis) {
    this.that = that;
  }
  public checkBox(key: string, cb?: Tcb): object {
    const that: IThis = this.that;
    function setState(prevState: object): object {
      return { [key]: !prevState[key] };
    }

    return {
      checked: that.state[key],
      onChange(): void {
        that.setState(setState , cb);
      },
    };
  }
  public modal(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    return {
      onCancel(): void {
        that.setState({ [key]: false }, cb);
      },
      visible: that.state[key],
    };
  }
  public text(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    return {
      onChange(evt: React.ChangeEvent<HTMLInputElement>): void {
        that.setState({ [key]: evt.target.value }, cb);
      },
      value: that.state[key],
    };
  }
  public switch(key: string, cb?: Tcb): object {
    const that: IThis = this.that;

    function setState(prevState: object): object {
      return { [key]: !prevState[key] };
    }

    return {
      onChange(v: boolean): void {
        that.setState(setState, cb);
      },
      checked: that.state[key],
    };
  }
}
