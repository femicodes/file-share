import _ from 'lodash';

const KB = 1024;
const MB = KB * KB;

export const getSize = (input, round = true) => {
  if (input > MB) return round ? `${_.round(input / MB)} MB` : `${(input / MB)} MB`;

  if (input > KB) return round ? `${_.round(input / KB)} KB` : `${(input / KB)} KB`;
};