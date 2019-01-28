import axios from 'axios';
import * as React from 'react';
import './ImageUpload.scss';

const iconDragDrop = require('../../../assets/img/icon-drag-drop.svg');

interface Props {
  // Container image link state(data) updater function
  updateImageLinks: (imgLinks: string[]) => any;
  // Container image link state
  imgLinks: string[];
}

/**
 * Don't wrap this component with <form> tag.
 * This component already uses <from> tag
 */
class ImageUpload extends React.PureComponent<Props, any> {
  public fileInputRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);

    this.fileInputRef = React.createRef();
  }

  private _onEditProductBtnClick = () => {
    if (this.props.imgLinks.length > 3) {
      alert('사진은 4개 까지만 등록하실 수 있습니다');
    } else {
      this.fileInputRef.current.click();
    }
  };

  private deleteImage = (e: any, imgLink: string) => {
    e.preventDefault();
    const newImgLinks = [...this.props.imgLinks];
    const index = newImgLinks.indexOf(imgLink);
    if (index > -1) newImgLinks.splice(index, 1);
    this.props.updateImageLinks(newImgLinks);
  };

  private _handleProductChange = (e: any) => {
    e.preventDefault();

    if (this.props.imgLinks.length + e.target.files.length > 4) {
      alert('사진은 4개 까지만 등록하실 수 있습니다');
      return;
    }

    if (e.target.files[0]) {
      // ------ Server Req & Response -------
      const data = new FormData();

      for (let i = 0; i < e.target.files.length; i += 1) {
        data.append('files', e.target.files[i]);
      }

      axios
        .post('https://your.upload.api', data)
        .then(({ data }: any) => {
          const newImageLinks = [...this.props.imgLinks];
          data.forEach((datum: any) => {
            newImageLinks.push(datum.path);
          });
          this.props.updateImageLinks(newImageLinks);
        })
        .catch(err => Error(err));
    }

    e.target.value = null;
  };

  public render() {
    return (
      <div className="img_wrap">
        <div className="info_tit">
          <h3>사진등록</h3>
        </div>
        <div className="img_area">
          <form className="adm-com-inp-up-wrapper" method="POST">
            {this.props.imgLinks.length > 0 ? (
              <>
                {this.props.imgLinks.map(imgLink => {
                  return (
                    <div className="up-file-name-wrap">
                      <img src={imgLink} />
                      <div
                        className="remove_btn"
                        onClick={(e: any) => this.deleteImage(e, imgLink)}
                      >
                        <p className="remove_btn_icon">
                          <span />
                          <span />
                        </p>
                      </div>
                    </div>
                  );
                })}
                {this.props.imgLinks.length < 4 ? (
                  <div
                    className="add_img_btn"
                    onClick={this._onEditProductBtnClick}
                  >
                    <p className="add_img_icon">
                      <span />
                      <span />
                    </p>
                    사진 추가하기
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                {' '}
                <div className="img_add">
                  <div className="img_add_btn_wrap">
                    <p className="add_img">
                      <img src={iconDragDrop} alt="iconDragDrop" />
                    </p>
                    <p
                      className="add_btn"
                      onClick={this._onEditProductBtnClick}
                    >
                      사진등록
                    </p>
                  </div>
                </div>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              ref={this.fileInputRef}
              className={`add-btn-hidden`}
              onChange={this._handleProductChange}
              multiple={true}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
