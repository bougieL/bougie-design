interface IThis {
  setState: any,
  state: object
}

type Tcb = () => void

export class Binder {
  private that: IThis
  constructor(that: IThis) {
    this.that = that
  }
  public text(key: string, cb?: Tcb) {
    const {that} = this
    return {
      onChange: (v: any) => {
        that.setState({
          [key]: v
        }, cb)
      },
      value: that.state[key]
    }
  }
  public modal(key: string, cb?: Tcb) {
    const {that} = this
    return {
      onCancel: () => {
        that.setState({
          [key]: false
        }, cb)
      },
      visible: that.state[key]
    }
  }
  public checkBox(key: string, cb?: Tcb) {
    const {that} = this
    return {
      checked: that.state[key],
      onChange: () => {
        that.setState((prevState: any) => {
          return {
            [key]: !prevState[key]
          }
        }, cb)
      }
    }
  }
}