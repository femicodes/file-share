import React, { Component } from 'react';
/* import _ from 'lodash'; */

class HomeForm extends Component {
    state = {
        form: {
            to: '',
            from: '',
            message: '',
            files: []
        },
        errors: {
            to: '',
            from: ''
        }
    };

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    onTextChange = event => {
        const validEmailRegex = RegExp(/(.+)@(.+){2,}\.(.+){2,}/);

        const { form } = this.state;
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        form[fieldName] = fieldValue;
        this.setState({ form });

        const { errors } = this.state;

        switch (fieldName) {
            case 'to':
                errors.to =
                    validEmailRegex.test(fieldValue)
                        ? ''
                        : 'Email is not valid!';
                break;

            case 'from':
                errors.from =
                    validEmailRegex.test(fieldValue)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [fieldName]: fieldValue });
    };

    addFiles = event => {
        event.preventDefault();
        const { files } = event.target;
        const main = Array.from(files);

        this.setState({
            form: {
                ...this.state.form,
                files: main
            }
        });
    };

    fileRemove = key => {
        const { files } = this.state.form;
        files.splice(key, 1);

        this.setState({
            form: {
                ...this.state.form,
                files
            }
        })
    }

    formSubmit = event => {
        event.preventDefault();
        console.log(this.state.form);
    };

    render() {
        const { form } = this.state;
        const { errors } = this.state;
        const { files } = form;
        const isEnabled = form.to.length > 0 && form.from.length > 0;
        console.log(this.state.form.files);
        return (
            <div className='app-card'>
                <form onSubmit={this.formSubmit} noValidate>
                    <div className="app-card-header">
                        <div className="app-card-header-inner">
                            {
                                files.length ? <div className="app-files-selected">{
                                    files.map((file, index) => {
                                        return (
                                            <div key={index} className="app-files-selected-item">
                                                <div className="filename">{file.name}</div>
                                                <div className="file-action">
                                                    <button onClick={() => this.fileRemove(index)} type='button' className="app-file-remove">x</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </div> : null
                            }

                            <div className="app-file-select-zone">
                                <label>
                                    <input onChange={this.addFiles} id='input-file' type='file' multiple />
                                    {
                                        files.length ? <span className="app-upload-description text-uppercase">Add more files</span> : <span>
                                            <span className='app-upload-icon' />
                                            <span className='app-upload-description'>Drag and drop your files here</span>
                                        </span>
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="app-card-content">
                        <div className="app-card-content-inner">
                            <div className="app-form-item">
                                <label>Send to</label>
                                <input onChange={this.onTextChange} value={form.to} name='to' placeholder='Email address' type='text' id='to' noValidate />
                                {errors.to.length > 0 &&
                                    <p className='form-error'>{errors.to}</p>}
                            </div>

                            <div className="app-form-item">
                                <label>From</label>
                                <input onChange={this.onTextChange} value={form.from} name='from' placeholder='Your email address' type='text' id='from' noValidate />
                                {errors.from.length > 0 &&
                                    <p className='form-error'>{errors.from}</p>}
                            </div>

                            <div className="app-form-item">
                                <label>Message</label>
                                <textarea onChange={this.onTextChange} value={form.message} name='message' placeholder='Add a message (optional)' type='text' id='message' />
                            </div>

                            <div className='app-form-actions'>
                                <button disabled={!isEnabled} type='submit' className='app-button primary'>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default HomeForm;