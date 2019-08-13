import axios from 'axios';
import _ from 'lodash';

const upload = (form, callback = () => { }) => {
  const url = `http://localhost:9000/upload`;

  const files = _.get(form, 'files', []);

  const data = new FormData();
  _.each(files, (file) => {
    data.append('files', file);
  });

  data.append('to', _.get(form, 'to'));
  data.append('from', _.get(form, 'from'));
  data.append('message', _.get(form, 'message'));

  const config = {
    uploadProgress: (event) => {
      console.log('event', event);
      return callback({
        type: 'onUploadProgress',
        payload: event
      });
    }
  }

  axios.post(url, data, config)
    .then(response => {
      return callback({
        type: 'success',
        payload: response.data
      })
    })
    .catch(err => {
      return callback({
        type: 'error',
        payload: err
      })
    })
}

export default upload;