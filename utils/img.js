const getPath = (type) => (oldPath) => {
  const parts = oldPath.split(".");
  parts[parts.length - 1] = type;
  return parts.join(".");
};

export const getSlug = ({ path, id }) => {
  const parts = path.split("/");
  const base = parts[parts.length - 1];
  const baseParts = base.split(".");
  const baseWithoutExt = baseParts[0];
  return `${id}-${baseWithoutExt}`;
};

export const imgPathToAvif = getPath("avif");

export const imgPathToWebp = getPath("webp");
