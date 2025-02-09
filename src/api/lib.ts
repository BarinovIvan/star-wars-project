export const extractResourceId = (resourcePath: string): string => {
  const normalizedPath = resourcePath.replace(/\/$/, "");
  const pathSeparatorPosition = normalizedPath.lastIndexOf("/");

  return normalizedPath.substring(pathSeparatorPosition + 1);
};
