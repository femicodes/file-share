import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class HomeUpload extends Component {
  state = {
    data: null,
    percentage: 90
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      data
    });
  }

  static getDerivedStateFromProps(props, state) {
    const { data, event } = props;
    return {
      data,
      event
    };
  };

  render() {
    const { percentage, data } = this.state;
    const totalFiles = data.files.length;
    return (
      <div className='app-card app-card-uploading'>
        <div className='app-card-content'>
          <div className='app-card-content-inner'>
            <div className="app-home-uploading">
              <div className='app-home-uploading-icon'>
                <i style={{ border: 'none', }} className='icon-upload' />
                <h2>Sending</h2>
              </div>
              <div className='app-upload-files-total'>Uploading {totalFiles} {totalFiles === 1 ? 'file' : 'files'}</div>

              <div className='app-progress'>
                <span style={{ width: `${percentage}%` }} className='app-progress-bar' />
              </div>

              <div className='app-upload-stats'>
                <div className='app-upload-stats-left'>2.3M/5M</div>
                <div className='app-upload-stats-right'>456K/s</div>
              </div>

              <div className='app-form-actions'>
                <button className='app-upload-cancel-button app-button' type='button'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

HomeUpload.propTypes = {
  data: PropTypes.object,
  event: PropTypes.object
};

export default HomeUpload;
