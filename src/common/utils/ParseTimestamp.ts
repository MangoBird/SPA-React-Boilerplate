const addZeroIfOneDigit = (num: number): string => {
  if (num < 10) {
    return '0' + num;
  }
  return '' + num;
};

export const parseTimestamp = (timestamp: string) => {
  const time = new Date(parseInt(timestamp, 10));
  const year = time.getFullYear();
  const month = addZeroIfOneDigit(time.getMonth() + 1);
  const date = addZeroIfOneDigit(time.getDate());
  const hour = addZeroIfOneDigit(time.getHours());
  const minutes = addZeroIfOneDigit(time.getMinutes());
  const seconds = addZeroIfOneDigit(time.getSeconds());

  return (
    year + '.' + month + '.' + date + ' ' + hour + ':' + minutes + ':' + seconds
  );
};
