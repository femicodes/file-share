import React, { Component } from 'react'
import Header from '../components/Header';
import HomeForm from '../components/HomeForm';
/* import HomeUpload from '../components/HomeUpload'; */
import HomeUploadSent from '../components/HomeUploadSent';

export class Home extends Component {
  state = {
    data: null,
    uploadEvent: null,
    componentName: ''
  };

  renderComponent = () => {
    const { componentName, uploadEvent, data } = this.state;

    switch (componentName) {
      /* case 'HomeUploading':
        return <HomeUpload event={uploadEvent} data={data} /> */

      case 'HomeUploadSent':
        return <HomeUploadSent onSendAnotherFile={() => this.setState({ componentName: '' })} upload={uploadEvent} form={data} />

      default:
        return <HomeForm
          onUploadEvent={(event) => {
            this.setState({
              uploadEvent: event,
              componentName: 'HomeUploadSent'
            });
          }}
          onUploadBegin={(event) => {
            this.setState({
              data: event,

            });
          }} />
    }
  };

  render() {
    return (
      <div className="app-layout">
        <div className="app-container">
          <Header />
          <div className="app-content">
            {this.renderComponent()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
