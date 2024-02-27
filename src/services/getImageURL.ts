import imagePlaceHolder from "..//images/no-image-placeholder-6f3882e0.webp";

const getImageURL = (path: string) => {
  if (!path) return imagePlaceHolder;
  return `https://image.tmdb.org/t/p/original${path}`;
};

export default getImageURL;
