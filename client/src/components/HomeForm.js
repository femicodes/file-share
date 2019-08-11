import React, { Component } from 'react'

class HomeForm extends Component {
    state = {

    }

    render() {
        return (
            <div className='app-card'>
                <form>
                    <div className="app-card-header">
                        <div className="app-card-header-inner">
                            <div className="app-file-select-zone">
                                <label>
                                    <input id='input-file' type='file' multiple={true} />
                                    <span className='app-upload-icon' />
                                    <span className='app-upload-description'>Drag and drop your files here</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="app-card-content">
                        <div className="app-card-content-inner">
                            <div className="app-form-item">
                                <label>Send to</label>
                                <input name='to' placeholder='Email address' type='text' id='to' />
                            </div>

                            <div className="app-form-item">
                                <label>From</label>
                                <input name='from' placeholder='Your email address' type='text' id='from' />
                            </div>

                            <div className="app-form-item">
                                <label>Message</label>
                                <textarea name='message' placeholder='Add a message (optional)' type='text' id='message' />
                            </div>

                            <div className='app-form-actions'>
                                <button type='submit' className='app-button primary'>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default HomeForm;