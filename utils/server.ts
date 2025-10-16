import { headers } from "next/headers";

export const getPathName = async () => {
  const fullPath = (await headers()).get("referer") as string;
  const pathName = new URL(fullPath).pathname;
  return pathName;
};
