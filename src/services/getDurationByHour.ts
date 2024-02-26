const getDurationByHour = (duration: string) => {
  const number = Number(duration);
  return `${Math.floor(number / 60)}hr, ${number % 60}mins`;
};

export default getDurationByHour;
