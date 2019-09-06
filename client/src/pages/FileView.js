import React, { Component } from 'react';

export class FileView extends Component {
  componentDidMount() {
    const { match } = this.props;
    console.log(match.params.id);
  }
  render() {
    return (
      <div>
        file view Component
      </div>
    );
  };
};

export default FileView;
