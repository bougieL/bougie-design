import * as React from 'react';
import { classNames } from '../../utils';
import { Button } from '../Button';

interface IUploadProps {
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
  public handleButtonClick = () => {
    const current = this.inputRef.current;
    if (current) {
      current.click();
    }
  }
  public handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.persist();
    if (evt.target.files) {
      const files = Array.from(evt.target.files);
      this.setState({files});
    }
  }
  public handleRemove = (i: number) => {
    const files = [...this.state.files];
    files.splice(i, 1);
    this.setState({files});
  }
  public render(): React.ReactNode {
    const {files} = this.state;
    const {multiple} = this.props;

    return <div className={classNames('bd-upload')}>
      <Button type="primary" onClick={this.handleButtonClick} icon="cloud-upload">Click to Upload</Button>
      <div className="bd-upload-files">
        {
          files.map(({name}, i) => {
            return <div className="bd-upload-file" key={i}>
              <span>{name}</span>
              <span className="remove" onClick={this.handleRemove.bind(this, i)}>&times;</span>
            </div>;
          })
        }
      </div>
      <input ref={this.inputRef} type="file" className="hide" multiple={multiple} onChange={this.handleInputChange} />
    </div>;
  }
}
