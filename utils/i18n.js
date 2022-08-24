export const getImageTitle = ({ title, artist }) => {
  if (title) {
    return `${title} by ${artist}`;
  }
  throw new Error("no title");
};
