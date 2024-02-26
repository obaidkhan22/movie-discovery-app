import { useEffect } from "react";
import { useParams } from "react-router-dom";

const scrollToTop = (path: string) => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
};

export default scrollToTop;
