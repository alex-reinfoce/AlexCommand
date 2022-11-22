import path from "path";

export const resolveRepoUrl = (url: string) => {
  const basename = path.basename(url);
  const endIndex = basename.indexOf('.git');
  return basename.slice(0, endIndex);
}
