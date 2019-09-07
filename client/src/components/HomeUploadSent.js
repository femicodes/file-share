import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export class HomeUploadSent extends Component {
  render() {
    const { upload, onSendAnotherFile, form, history } = this.props;
    const data = upload.payload;
    return (
      <div className='app-card app-card-uploading'>
        <div className='app-card-content'>
          <div className='app-card-content-inner'>
            <div className="app-home-uploading">
              <div className='app-home-upload-sent-icon'>
                <i style={{ border: 'none', }} className='icon-paperplane' />
              </div>
              {upload.type === 'success' ? <Fragment>
                <div className="app-upload-sent-message app-text-center">
                  <h2>Files sent</h2>
                  <p>We've sent an email to {form.to} with a download link. The link will expire in 30 days</p>
                </div>

                <div className="app-upload-sent-actions app-form-actions">
                  <button onClick={() => history.push(`share/${data.data._id}`)} className="app-button primary" type="button">View file</button>
                  <button onClick={() => onSendAnotherFile(true)} className="app-button" type="button">Send another file</button>
                </div>
              </Fragment> : <div className="app-upload-sent-message app-text-center">
                  <h2>Oh snap!</h2>
                  <p>An error occured</p>
                  <div className="app-upload-sent-actions app-form-actions">
                    <button onClick={() => onSendAnotherFile(true)} className="app-button primary" type="button">Send another file</button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

HomeUploadSent.propTypes = {
  data: PropTypes.object,
  onSendAnotherFile: PropTypes.func,
  form: PropTypes.object
}

export default withRouter(HomeUploadSent);
