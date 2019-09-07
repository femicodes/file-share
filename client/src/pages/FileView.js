import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { getDownloadInfo } from '../helpers/download';
import { getSize } from '../helpers/getSize';

export class FileView extends Component {
  state = {
    post: '',
    files: []
  };

  componentDidMount() {
    const { match } = this.props;
    const postID = match.params.id;

    getDownloadInfo(postID)
      .then((response) => {
        this.setState({
          post: response.data.data,
          files: response.data.data.files
        });
      })
      .catch(err => { return `An error occured while fetching data; ${err}` });
  };

  getDownloadSize = () => {
    const { post } = this.state;
    let total = 0;
    const files = _.get(post, 'files', []);
    _.each(files, (file) => {
      total += _.get(file, 'size', 0);
    });

    return getSize(total);
  }

  render() {
    const apiUrl = `http://localhost:9000`;
    const { files, post } = this.state;
    const { history } = this.props;
    const totalSize = this.getDownloadSize();
    return (
      <div className="app-page-download">
        <div className="app-top-header">
          <h1 onClick={() => history.push('/')}>
            <i className={'icon-paper-plane'} /> SHARE</h1>
        </div>
        <div className="app-card app-card-upload-sent">
          <div className="app-card-content">
            <div className="app-card-content-inner">
              <div className="app-download-icon">
                <i style={{ border: 'none', }} className="icon-download" />
              </div>

              <div className="app-download-message app-text-center">
                <h2>Ready to download</h2>
                <ul>
                  <li>{files.length} files</li>
                  <li>{totalSize ? totalSize : 0}</li>
                  <li>Expires in 30days</li>
                </ul>
              </div>

              <div className="app-download-file-list">
                {files.map((file, index) => {
                  return (<div key={index} className="app-download-file-list-item">
                    <div className="filename">{_.get(file, 'originalName')}</div>
                    <div className="download-action"><a href={`${apiUrl}/download/${_.get(file, '_id')}`}>Download</a></div>
                  </div>)
                })}
              </div>

              <div className="app-download-actions app-form-actions">
                <a href={`${apiUrl}/post/${post._id}/download`} className="app-button primary" type="button">Download All</a>
                <button className="app-button" type="button">Share</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(FileView);
