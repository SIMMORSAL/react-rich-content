export const cacheImage = (path: string) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => reject();

    img.src = path;
  });

export const isColor = (strColor: string) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== "";
};
