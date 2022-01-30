export const formatDate = (dataString: string): string => {
  const d = new Date(Date.parse(dataString)).toString();
  const date = d.toString().split(' ');

  const day = +date[2] <= 10 ? `${date[2][1]}th` : `${date[2]}th`;
  const month = date[1];
  const year = date[3];

  return `${day} ${month} ${year}`;
};
