import * as React from 'react';
import { classNames, getPrefixCls } from '../../utils';
import { Button } from '../Button';

const prefixCls = getPrefixCls('upload');

interface IUploadProps {
  className?: string;
  style?: React.CSSProperties;
  files?: object[];
  multiple?: boolean;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
}

interface IState {
  files: object[];
}

export class Upload extends React.Component<IUploadProps, IState> {
  public static defaultProps: Partial<IUploadProps> = {
    multiple: true,
  };
  public inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  public state = {
    files: [],
  };
  public handleButtonClick(): void {
    const current = this.inputRef.current;
    if (current) {
      current.click();
    }
  }
  public handleInputChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    evt.persist();
    if (evt.target.files) {
      const files = Array.from(evt.target.files);
      this.setState({files});
    }
  }
  public handleRemove(i: number): void {
    const files = [...this.state.files];
    files.splice(i, 1);
    this.setState({files});
  }
  public render(): React.ReactNode {
    const {files} = this.state;
    const {multiple, className, ...rest} = this.props;
    const uploadCls = classNames(prefixCls, className);

    return (
      <div className={uploadCls} {...rest}>
        <Button
          type="primary"
          onClick={this.handleButtonClick.bind(this)}
          icon="cloud-upload">
          Click to Upload
        </Button>
        <div className={`${prefixCls}-files`}>
          {
            files.map(({name}, i) =>
              <div className={`${prefixCls}-file`} key={i}>
                <span>{name}</span>
                <span className="remove" onClick={this.handleRemove.bind(this, i)}>&times;</span>
              </div>)
          }
        </div>
        <input ref={this.inputRef}
          type="file"
          className="hide"
          multiple={multiple}
          onChange={this.handleInputChange.bind(this)} />
      </div>
    );
  }
}
