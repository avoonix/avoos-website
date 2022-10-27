import { useInView } from "react-intersection-observer";
const threshold = new Array(11).fill(null).map((_, idx) => idx / 10);

export const useIntersection = () => {
  const { ref, entry } = useInView({
    threshold,
  });

  const bottom = entry?.boundingClientRect?.bottom > entry?.boundingClientRect?.height;
  const intersecting = entry?.isIntersecting;

  return {
    ref,
    intersectingFromBottom: !bottom || intersecting,
  };
};
