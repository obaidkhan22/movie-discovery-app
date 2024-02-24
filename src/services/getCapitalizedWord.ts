const getCapitalizedWord = (word?: string) => {
  if (word)
    return word
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  return "";
};

export default getCapitalizedWord;
