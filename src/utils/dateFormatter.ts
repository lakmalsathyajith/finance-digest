const formatUnixToReadableDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const day = date.getDate();
  const year = date.getFullYear();

  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();

  return `${day} ${month} ${year}`;
};

export default formatUnixToReadableDate;
