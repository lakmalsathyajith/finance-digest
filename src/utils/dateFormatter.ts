/**
 * Taking a unix timestamp and covert it into readable format
 *
 * @param   {EpochTimeStamp}  unixTimestamp
 *
 * @return  {string}                         Returned a human readable date representation
 */
const formatUnixToReadableDate = (unixTimestamp: EpochTimeStamp) => {
  const date = new Date(unixTimestamp * 1000);

  const day = date.getDate();
  const year = date.getFullYear();

  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();

  return `${day} ${month} ${year}`;
};

export default formatUnixToReadableDate;
