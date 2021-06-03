const getPath = (type) => (oldPath) => {
  const parts = oldPath.split(".");
  parts[parts.length - 1] = type;
  parts[parts.length - 2] += "_gen";
  return parts.join(".");
};

export const imgPathToAvif = getPath("avif");

export const imgPathToWebp = getPath("webp");
