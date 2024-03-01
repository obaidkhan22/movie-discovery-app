const getURLSlug = (url: string) => {
  return url.split(" ").join("_");
};

export default getURLSlug;
