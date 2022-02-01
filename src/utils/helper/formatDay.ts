export const formatDate = (dataString: string): string => {
  const d = new Date(Date.parse(dataString)).toString();
  const date = d.toString().split(' ');

  const day = +date[2] <= 10 ? `${date[2][1]}th` : `${date[2]}th`;
  const month = date[1];
  const year = date[3];

  return `${day} ${month} ${year}`;
};

export const formatDate_ = (date_: string) => {
  const _date = new Date(date_);
  const day = `0${_date.getDate()}`.slice(-2);
  const month = `0${_date.getMonth() + 1}`.slice(-2);
  const date = `${_date.getFullYear()}-${month}-${day}`;
  return date;
};
