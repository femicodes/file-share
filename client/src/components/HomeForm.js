import React, { Component } from 'react'

class HomeForm extends Component {
    state = {
        form: {
            to: '',
            from: '',
            message: ''
        }
    };


    onTextChange = event => {
        const { form } = this.state;
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        form[fieldName] = fieldValue;
        this.setState({ form })
    };

    formSubmit = event => {
        event.preventDefault();
        console.log(this.state.form);
    };

    render() {
        const { form } = this.state;
        return (
            <div className='app-card'>
                <form onSubmit={this.formSubmit}>
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
                                <input onChange={this.onTextChange} value={form.to} name='to' placeholder='Email address' type='text' id='to' />
                            </div>

                            <div className="app-form-item">
                                <label>From</label>
                                <input onChange={this.onTextChange} value={form.from} name='from' placeholder='Your email address' type='text' id='from' />
                            </div>

                            <div className="app-form-item">
                                <label>Message</label>
                                <textarea onChange={this.onTextChange} value={form.message} name='message' placeholder='Add a message (optional)' type='text' id='message' />
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